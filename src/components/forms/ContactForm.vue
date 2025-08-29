<script setup>
import { ref, reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'  
import emailjs from '@emailjs/browser'

// Configurações do EmailJS usando variáveis de ambiente
const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
}

// i18n
const { t } = useI18n()   // pega a função de tradução

// Estado do formulário
const form = reactive({
  name: '',
  email: '',
  message: ''
})

// Estado de controle
const isLoading = ref(false)
const statusMessage = ref('')
const errors = reactive({})

// Classes CSS para mensagens de status
const statusClass = computed(() => {
  if (statusMessage.value.includes('sucesso') || statusMessage.value.includes('sent')) {
    return 'bg-green-500/20 border border-green-500/40 text-green-400'
  }
  return 'bg-red-500/20 border border-red-500/40 text-red-400'
})

// Validação do formulário
const validateForm = () => {
  Object.keys(errors).forEach(key => delete errors[key])
  
  if (!form.name.trim()) {
    errors.name = t('contact.form.name') + ' é obrigatório'
  }
  
  if (!form.email.trim()) {
    errors.email = t('contact.form.email') + ' é obrigatório'
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = 'Email inválido'
  }
  
  if (!form.message.trim()) {
    errors.message = t('contact.form.message') + ' é obrigatória'
  }
  
  return Object.keys(errors).length === 0
}

// Método usando EmailJS
const sendEmailWithEmailJS = async () => {
  if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY) {
    throw new Error('Configurações do EmailJS não encontradas!')
  }

  const templateParams = {
    from_name: form.name,
    from_email: form.email,
    message: form.message,
    to_email: 'anaiaraloayza11@gmail.com',
    reply_to: form.email
  }
  
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
    
    console.log('EmailJS Success:', response)
    return true
  } catch (error) {
    console.error('EmailJS Error:', error)
    throw error
  }
}

// Handler principal do formulário
const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }
  
  isLoading.value = true
  statusMessage.value = ''
  
  try {
    await sendEmailWithEmailJS()
    
    statusMessage.value = t('contact.form.success')  
    // Limpar formulário
    form.name = ''
    form.email = ''
    form.message = ''
    
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    
    if (error.message.includes('Configurações do EmailJS')) {
      statusMessage.value = '⚠️ EmailJS não configurado. Verifique as configurações.'
    } else if (error.text) {
      statusMessage.value = `❌ Erro EmailJS: ${error.text}`
    } else {
      statusMessage.value = t('contact.form.error') 
    }
  } finally {
    isLoading.value = false
    setTimeout(() => {
      statusMessage.value = ''
    }, 8000)
  }
}
</script>


<template>
  <div class="relative">
    <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl blur opacity-30"></div>
    <form @submit.prevent="handleSubmit" class="relative bg-black/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-purple-500/20 space-y-4 sm:space-y-6">
      
      <!-- Mensagem de Status -->
      <div v-if="statusMessage" :class="statusClass" class="p-4 rounded-xl text-center font-medium">
        {{ statusMessage }}
      </div>

      <div class="form-group">
        <label class="form-label">{{ $t('contact.form.name') }}</label>
        <input 
          type="text" 
          v-model="form.name"
          class="form-input"
          :class="{ 'border-red-500': errors.name }"
          required
        >
        <span v-if="errors.name" class="text-red-400 text-sm">{{ errors.name }}</span>
      </div>

      <div class="form-group">
        <label class="form-label">{{ $t('contact.form.email') }}</label>
        <input 
          type="email" 
          v-model="form.email"
          class="form-input"
          :class="{ 'border-red-500': errors.email }"
          required
        >
        <span v-if="errors.email" class="text-red-400 text-sm">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label class="form-label">{{ $t('contact.form.message') }}</label>
        <textarea 
          rows="4" 
          v-model="form.message"
          class="form-input resize-none"
          :class="{ 'border-red-500': errors.message }"
          required
        ></textarea>
        <span v-if="errors.message" class="text-red-400 text-sm">{{ errors.message }}</span>
      </div>

      <button
        type="submit"
        :disabled="isLoading"
        class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center"
      >
        <span v-if="!isLoading">{{ $t('contact.form.send') }}</span>
          <span v-else class="flex items-center">
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {{ $t('contact.form.sending') }}
        </span>
      </button>
    </form>
  </div>
</template>

<style scoped>
/* Form Styles */
.form-group {
  @apply space-y-2;
}

.form-label {
  @apply block text-white font-bold text-base sm:text-lg;
}

.form-input {
  @apply w-full bg-purple-900/20 border border-purple-500/30 rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-sm sm:text-base;
}

.form-input:focus {
  transform: scale(1.02);
}
</style>
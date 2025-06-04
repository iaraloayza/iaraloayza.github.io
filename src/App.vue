<template>
  <div id="app" class="min-h-screen bg-black text-white overflow-x-hidden">
    <!-- Animated Background -->
    <div class="fixed inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
      <div class="absolute top-0 left-0 w-full h-full">
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
          <div class="shape shape-4"></div>
        </div>
      </div>
    </div>

    <!-- Header/Navigation -->
    <header class="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-purple-500/20">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            Ana Iara
          </div>
          <div class="hidden md:flex space-x-8">
            <a href="#home" class="nav-link">Início</a>
            <a href="#about" class="nav-link">Sobre</a>
            <a href="#projects" class="nav-link">Projetos</a>
            <a href="#skills" class="nav-link">Habilidades</a>
            <a href="#contact" class="nav-link">Contato</a>
          </div>
          <!-- Mobile menu button -->
          <button class="md:hidden text-white hover:text-purple-400 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="relative pt-20 min-h-screen flex items-center justify-center z-10">
      <div class="text-center px-6">
        <div class="mb-8 animate-float">
          <div class="w-40 h-40 relative mx-auto mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-full animate-pulse-glow"></div>
            <div class="absolute inset-2 bg-black rounded-full flex items-center justify-center">
              <span class="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI</span>
            </div>
          </div>
        </div>
        
        <div class="space-y-6 animate-fade-in-up">
          <h1 class="text-6xl md:text-8xl font-black leading-tight">
            <span class="block text-white">Olá, eu sou</span>
            <span class="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
              Ana Iara
            </span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Desenvolvedora Full Stack apaixonada por criar 
            <span class="text-purple-400 font-semibold">experiências digitais</span> 
            extraordinárias que transformam ideias em realidade.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <button class="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
              <span class="relative z-10">Ver Projetos</span>
              <div class="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            
            <button class="group relative overflow-hidden border-2 border-purple-500 hover:border-purple-400 text-purple-400 hover:text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
              <span class="relative z-10">Baixar CV</span>
              <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="relative py-32 px-6 z-10">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Sobre Mim
        </h2>
        
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            <div class="relative w-full h-96 bg-gradient-to-br from-purple-900/50 to-black rounded-3xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
              <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div class="absolute bottom-6 left-6 text-2xl font-bold">
                Criatividade & Código
              </div>
            </div>
          </div>
          
          <div class="space-y-8">
            <div class="space-y-6 text-lg leading-relaxed text-gray-300">
              <p class="transform hover:scale-105 transition-transform duration-300 p-6 bg-purple-900/10 rounded-2xl border border-purple-500/20">
                Sou uma desenvolvedora apaixonada por tecnologia, especializada em criar 
                <span class="text-purple-400 font-semibold">soluções web modernas</span> 
                que combinam funcionalidade excepcional com design impactante.
              </p>
              
              <p class="transform hover:scale-105 transition-transform duration-300 p-6 bg-purple-900/10 rounded-2xl border border-purple-500/20">
                Trabalho com as mais recentes tecnologias como Vue.js, React, Node.js e Python, 
                sempre em busca de <span class="text-pink-400 font-semibold">inovação</span> 
                e excelência em cada projeto.
              </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div class="tech-category">
                <h3 class="text-xl font-bold mb-4 text-purple-400">Frontend</h3>
                <div class="space-y-2">
                  <div class="tech-item">Vue.js / React</div>
                  <div class="tech-item">JavaScript / TypeScript</div>
                  <div class="tech-item">HTML5 / CSS3</div>
                  <div class="tech-item">TailwindCSS</div>
                </div>
              </div>
              
              <div class="tech-category">
                <h3 class="text-xl font-bold mb-4 text-pink-400">Backend</h3>
                <div class="space-y-2">
                  <div class="tech-item">Node.js / Python</div>
                  <div class="tech-item">Express / FastAPI</div>
                  <div class="tech-item">PostgreSQL / MongoDB</div>
                  <div class="tech-item">Docker</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="relative py-32 px-6 z-10">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Projetos
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project Card 1 -->
          <div class="project-card group">
            <div class="project-image bg-gradient-to-br from-purple-600 to-purple-800">
              <div class="project-overlay">
                <div class="text-white text-xl font-bold">Ver Detalhes</div>
              </div>
            </div>
            <div class="project-content">
              <h3 class="text-2xl font-bold text-white mb-3">Projeto Inovador</h3>
              <p class="text-gray-400 mb-6 leading-relaxed">
                Uma aplicação web moderna que demonstra o poder da tecnologia aplicada à solução de problemas reais.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="tech-tag bg-purple-600">Vue.js</span>
                <span class="tech-tag bg-green-600">Node.js</span>
                <span class="tech-tag bg-blue-600">PostgreSQL</span>
              </div>
              <div class="flex gap-4">
                <a href="#" class="project-link">Ver Projeto</a>
                <a href="#" class="project-link">GitHub</a>
              </div>
            </div>
          </div>

          <!-- Project Card 2 -->
          <div class="project-card group">
            <div class="project-image bg-gradient-to-br from-pink-600 to-purple-800">
              <div class="project-overlay">
                <div class="text-white text-xl font-bold">Ver Detalhes</div>
              </div>
            </div>
            <div class="project-content">
              <h3 class="text-2xl font-bold text-white mb-3">App Revolucionário</h3>
              <p class="text-gray-400 mb-6 leading-relaxed">
                Interface intuitiva e experiência do usuário excepcional em uma aplicação que redefiniu padrões.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="tech-tag bg-cyan-600">React</span>
                <span class="tech-tag bg-yellow-600">Python</span>
                <span class="tech-tag bg-red-600">Docker</span>
              </div>
              <div class="flex gap-4">
                <a href="#" class="project-link">Ver Projeto</a>
                <a href="#" class="project-link">GitHub</a>
              </div>
            </div>
          </div>

          <!-- Project Card 3 -->
          <div class="project-card group">
            <div class="project-image bg-gradient-to-br from-purple-500 to-pink-600">
              <div class="project-overlay">
                <div class="text-white text-xl font-bold">Ver Detalhes</div>
              </div>
            </div>
            <div class="project-content">
              <h3 class="text-2xl font-bold text-white mb-3">Sistema Inteligente</h3>
              <p class="text-gray-400 mb-6 leading-relaxed">
                Solução completa que integra múltiplas tecnologias para entregar resultados extraordinários.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="tech-tag bg-purple-600">Vue.js</span>
                <span class="tech-tag bg-blue-600">TypeScript</span>
                <span class="tech-tag bg-green-600">MongoDB</span>
              </div>
              <div class="flex gap-4">
                <a href="#" class="project-link">Ver Projeto</a>
                <a href="#" class="project-link">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="relative py-32 px-6 z-10">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Habilidades
        </h2>
        
        <div class="grid md:grid-cols-2 gap-12">
          <div class="space-y-8">
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">JavaScript</span>
                <span class="skill-percent">90%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 90%; background: linear-gradient(90deg, #8b5cf6, #a855f7)"></div>
              </div>
            </div>
            
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Vue.js</span>
                <span class="skill-percent">85%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 85%; background: linear-gradient(90deg, #ec4899, #f97316)"></div>
              </div>
            </div>
            
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Node.js</span>
                <span class="skill-percent">80%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 80%; background: linear-gradient(90deg, #10b981, #059669)"></div>
              </div>
            </div>
          </div>
          
          <div class="space-y-8">
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Python</span>
                <span class="skill-percent">75%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 75%; background: linear-gradient(90deg, #3b82f6, #1d4ed8)"></div>
              </div>
            </div>
            
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">React</span>
                <span class="skill-percent">70%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 70%; background: linear-gradient(90deg, #06b6d4, #0891b2)"></div>
              </div>
            </div>
            
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Docker</span>
                <span class="skill-percent">65%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 65%; background: linear-gradient(90deg, #ef4444, #dc2626)"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="relative py-32 px-6 z-10">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Contato
        </h2>
        
        <div class="grid lg:grid-cols-2 gap-16">
          <div class="space-y-8">
            <div class="text-3xl font-bold text-white mb-8">
              Vamos criar algo <span class="text-purple-400">incrível</span> juntos!
            </div>
            
            <div class="space-y-6">
              <div class="contact-item group">
                <div class="contact-icon bg-gradient-to-r from-purple-600 to-pink-600">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-white font-bold text-lg">Email</p>
                  <p class="text-purple-400 text-lg">anaiaraloayza11@gmail.com</p>
                </div>
              </div>
              
              <div class="contact-item group">
                <div class="contact-icon bg-gradient-to-r from-green-600 to-emerald-600">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-white font-bold text-lg">Telefone</p>
                  <p class="text-purple-400 text-lg">(98) 99217-9097</p>
                </div>
              </div>
              
              <div class="contact-item group">
                <div class="contact-icon bg-gradient-to-r from-gray-700 to-gray-900">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-white font-bold text-lg">GitHub</p>
                  <p class="text-purple-400 text-lg">github.com/iaraloayza</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-30"></div>
            <form class="relative bg-black/80 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/20 space-y-6">
              <div class="form-group">
                <label class="form-label">Nome</label>
                <input type="text" class="form-input">
              </div>
              
              <div class="form-group">
                <label class="form-label">Email</label>
                <input type="email" class="form-input">
              </div>
              
              <div class="form-group">
                <label class="form-label">Mensagem</label>
                <textarea rows="4" class="form-input resize-none"></textarea>
              </div>
              
              <button type="submit" class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="relative bg-black/90 py-12 px-6 border-t border-purple-500/20 z-10">
      <div class="container mx-auto text-center">
        <div class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
          Ana Iara
        </div>
        <p class="text-gray-400 mb-6">&copy; 2024 Ana Iara. Todos os direitos reservados.</p>
        <div class="flex justify-center space-x-8">
          <a href="#" class="social-link">LinkedIn</a>
          <a href="#" class="social-link">GitHub</a>
          <a href="#" class="social-link">Twitter</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Floating Background Shapes */
.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.shape {
  position: absolute;
  background: linear-gradient(45deg, #8b5cf6, #ec4899);
  border-radius: 50%;
  opacity: 0.1;
  animation: float 20s infinite linear;
}

.shape-1 { width: 100px; height: 100px; top: 20%; left: 10%; animation-delay: 0s; }
.shape-2 { width: 150px; height: 150px; top: 60%; right: 20%; animation-delay: -5s; }
.shape-3 { width: 80px; height: 80px; bottom: 30%; left: 30%; animation-delay: -10s; }
.shape-4 { width: 120px; height: 120px; top: 40%; right: 40%; animation-delay: -15s; }

@keyframes float {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
  100% { transform: translateY(0px) rotate(360deg); }
}

/* Navigation */
.nav-link {
  @apply text-gray-300 hover:text-purple-400 transition-all duration-300 relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #8b5cf6, #ec4899);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse-glow {
  0%, 100% { 
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3);
  }
  50% { 
    box-shadow: 0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.5);
  }
}

@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

.animate-gradient {
  background-size: 400% 400%;
  animation: gradient 3s ease infinite;
}

/* Tech Categories */
.tech-category {
  @apply bg-purple-900/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105;
}

.tech-item {
  @apply text-gray-300 py-2 px-4 bg-black/30 rounded-lg mb-2 hover:bg-purple-900/20 hover:text-purple-300 transition-all duration-300 cursor-default;
}

/* Project Cards */
.project-card {
  @apply bg-black/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20;
}

.project-image {
  @apply h-64 relative overflow-hidden;
}

.project-overlay {
  @apply absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm;
}

.project-content {
  @apply p-8;
}

.tech-tag {
  @apply text-white px-3 py-1 rounded-full text-sm font-semibold;
}

.project-link {
  @apply text-purple-400 hover:text-pink-400 font-semibold transition-colors duration-300 relative;
}

.project-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #8b5cf6, #ec4899);
  transition: width 0.3s ease;
}

.project-link:hover::after {
  width: 100%;
}

/* Skills */
.skill-item {
  @apply bg-purple-900/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300;
}

.skill-header {
  @apply flex justify-between items-center mb-4;
}

.skill-name {
  @apply text-white font-bold text-lg;
}

.skill-percent {
  @apply text-purple-400 font-semibold;
}

.skill-bar {
  @apply w-full bg-gray-800/50 rounded-full h-3 overflow-hidden;
}

.skill-progress {
  @apply h-full rounded-full transition-all duration-1000 ease-out;
  animation: skill-fill 2s ease-out;
}

@keyframes skill-fill {
  from { width: 0; }
}

/* Contact */
.contact-item {
  @apply flex items-center space-x-6 p-6 bg-purple-900/10 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105;
}

.contact-icon {
  @apply w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110;
}

/* Form Styles */
.form-group {
  @apply space-y-2;
}

.form-label {
  @apply block text-white font-bold text-lg;
}

.form-input {
  @apply w-full bg-purple-900/20 border border-purple-500/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300;
}

.form-input:focus {
  transform: scale(1.02);
}

/* Social Links */
.social-link {
  @apply text-gray-400 hover:text-purple-400 font-semibold transition-all duration-300 transform hover:scale-110 relative;
}

.social-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #8b5cf6, #ec4899);
  transition: width 0.3s ease;
}

.social-link:hover::after {
  width: 100%;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #000;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #8b5cf6, #ec4899);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, #7c3aed, #db2777);
}

/* Responsive Design */
@media (max-width: 768px) {
  .floating-shapes {
    display: none;
  }
  
  .shape {
    display: none;
  }
}

/* Additional Effects */
.glass-effect {
  @apply bg-white/5 backdrop-blur-lg border border-white/10;
}

.glow-effect {
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
}

.text-glow {
  text-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
}

/* Hover Animations */
.hover-lift {
  @apply transition-transform duration-300 hover:transform hover:-translate-y-2;
}

.hover-glow {
  @apply transition-all duration-300;
}

.hover-glow:hover {
  box-shadow: 0 10px 40px rgba(139, 92, 246, 0.3);
}

/* Loading Animation */
@keyframes shimmer {
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
}

.shimmer {
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  background-size: 200px 100%;
  animation: shimmer 2s infinite;
}

/* Button Animations */
.btn-primary {
  @apply relative overflow-hidden;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.btn-primary:hover::before {
  left: 100%;
}
</style>
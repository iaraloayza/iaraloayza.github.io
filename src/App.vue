<template>
  <div id="app" class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <!-- Header/Navigation -->
    <header class="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-700">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="text-2xl font-bold text-white">
            Ana Iara
          </div>
          <div class="hidden md:flex space-x-8">
            <a href="#home" class="text-gray-300 hover:text-white transition-colors">Início</a>
            <a href="#about" class="text-gray-300 hover:text-white transition-colors">Sobre</a>
            <a href="#projects" class="text-gray-300 hover:text-white transition-colors">Projetos</a>
            <a href="#skills" class="text-gray-300 hover:text-white transition-colors">Habilidades</a>
            <a href="#contact" class="text-gray-300 hover:text-white transition-colors">Contato</a>
          </div>
          <!-- Mobile menu button -->
          <button class="md:hidden text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="pt-20 min-h-screen flex items-center justify-center">
      <div class="text-center px-6">
        <div class="mb-8">
          <div class="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span class="text-4xl font-bold text-white">AL</span>
          </div>
        </div>
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
          Olá, eu sou
          <span class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Ana Iara
          </span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Ver Projetos
          </button>
          <button class="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Baixar CV
          </button>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 px-6">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-4xl font-bold text-white text-center mb-16">Sobre Mim</h2>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div class="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
          </div>
          <div class="text-gray-300 space-y-6">
            <p class="text-lg leading-relaxed">
              Sou um desenvolvedor apaixonado por tecnologia com experiência em criar soluções web modernas e eficientes.
            </p>
            <p class="text-lg leading-relaxed">
              Trabalho com tecnologias como Vue.js, React, Node.js e Python, sempre buscando aprender novas ferramentas e metodologias.
            </p>
            <div class="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h3 class="text-white font-semibold mb-2">Frontend</h3>
                <ul class="space-y-1 text-sm">
                  <li>Vue.js / React</li>
                  <li>JavaScript / TypeScript</li>
                  <li>HTML5 / CSS3</li>
                  <li>TailwindCSS</li>
                </ul>
              </div>
              <div>
                <h3 class="text-white font-semibold mb-2">Backend</h3>
                <ul class="space-y-1 text-sm">
                  <li>Node.js / Python</li>
                  <li>Express / FastAPI</li>
                  <li>PostgreSQL / MongoDB</li>
                  <li>Docker</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 px-6 bg-gray-800/50">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl font-bold text-white text-center mb-16">Projetos</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project Card 1 -->
          <div class="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors">
            <div class="h-48 bg-gradient-to-br from-blue-500 to-blue-700"></div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-white mb-2">Projeto 1</h3>
              <p class="text-gray-400 mb-4">Descrição do projeto e tecnologias utilizadas.</p>
              <div class="flex gap-2 mb-4">
                <span class="bg-blue-600 text-white px-2 py-1 rounded text-xs">Vue.js</span>
                <span class="bg-green-600 text-white px-2 py-1 rounded text-xs">Node.js</span>
              </div>
              <div class="flex gap-4">
                <a href="#" class="text-blue-400 hover:text-blue-300 text-sm">Ver Projeto</a>
                <a href="#" class="text-blue-400 hover:text-blue-300 text-sm">GitHub</a>
              </div>
            </div>
          </div>

          <!-- Project Card 2 -->
          <div class="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors">
            <div class="h-48 bg-gradient-to-br from-purple-500 to-purple-700"></div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-white mb-2">Projeto 2</h3>
              <p class="text-gray-400 mb-4">Descrição do projeto e tecnologias utilizadas.</p>
              <div class="flex gap-2 mb-4">
                <span class="bg-purple-600 text-white px-2 py-1 rounded text-xs">React</span>
                <span class="bg-yellow-600 text-white px-2 py-1 rounded text-xs">Python</span>
              </div>
              <div class="flex gap-4">
                <a href="#" class="text-blue-400 hover:text-blue-300 text-sm">Ver Projeto</a>
                <a href="#" class="text-blue-400 hover:text-blue-300 text-sm">GitHub</a>
              </div>
            </div>
          </div>

          <!-- Project Card 3 -->
          <div class="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors">
            <div class="h-48 bg-gradient-to-br from-green-500 to-green-700"></div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-white mb-2">Projeto 3</h3>
              <p class="text-gray-400 mb-4">Descrição do projeto e tecnologias utilizadas.</p>
              <div class="flex gap-2 mb-4">
                <span class="bg-green-600 text-white px-2 py-1 rounded text-xs">Vue.js</span>
                <span class="bg-blue-600 text-white px-2 py-1 rounded text-xs">TypeScript</span>
              </div>
              <div class="flex gap-4">
                <a href="#" class="text-blue-400 hover:text-blue-300 text-sm">Ver Projeto</a>
                <a href="#" class="text-blue-400 hover:text-blue-300 text-sm">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 px-6">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-4xl font-bold text-white text-center mb-16">Habilidades</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <div>
              <div class="flex justify-between mb-2">
                <span class="text-white font-semibold">JavaScript</span>
                <span class="text-gray-400">90%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-blue-600 h-2 rounded-full" style="width: 90%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-2">
                <span class="text-white font-semibold">Vue.js</span>
                <span class="text-gray-400">85%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-green-600 h-2 rounded-full" style="width: 85%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-2">
                <span class="text-white font-semibold">Node.js</span>
                <span class="text-gray-400">80%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-yellow-600 h-2 rounded-full" style="width: 80%"></div>
              </div>
            </div>
          </div>
          <div class="space-y-6">
            <div>
              <div class="flex justify-between mb-2">
                <span class="text-white font-semibold">Python</span>
                <span class="text-gray-400">75%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-purple-600 h-2 rounded-full" style="width: 75%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-2">
                <span class="text-white font-semibold">React</span>
                <span class="text-gray-400">70%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-cyan-600 h-2 rounded-full" style="width: 70%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-2">
                <span class="text-white font-semibold">Docker</span>
                <span class="text-gray-400">65%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-red-600 h-2 rounded-full" style="width: 65%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-6 bg-gray-800/50">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-4xl font-bold text-white text-center mb-16">Contato</h2>
        <div class="grid md:grid-cols-2 gap-12">
          <div class="space-y-8">
            <h3 class="text-2xl font-semibold text-white mb-6">Vamos conversar!</h3>
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-white font-semibold">Email</p>
                  <p class="text-gray-400">seu.email@exemplo.com</p>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-white font-semibold">Telefone</p>
                  <p class="text-gray-400">(00) 00000-0000</p>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-white font-semibold">GitHub</p>
                  <p class="text-gray-400">github.com/seuusuario</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form class="space-y-6">
              <div>
                <label class="block text-white font-semibold mb-2">Nome</label>
                <input type="text" class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-white font-semibold mb-2">Email</label>
                <input type="email" class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-white font-semibold mb-2">Mensagem</label>
                <textarea rows="4" class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"></textarea>
              </div>
              <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 py-8 px-6">
      <div class="container mx-auto text-center">
        <p class="text-gray-400">&copy; 2024 Seu Nome. Todos os direitos reservados.</p>
        <div class="flex justify-center space-x-6 mt-4">
          <a href="#" class="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">GitHub</a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">Twitter</a>
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
</style>
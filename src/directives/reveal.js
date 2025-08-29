// Diretiva para animações de revelação
export default {
  mounted(el, binding) {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = binding.value?.delay || 0
          
          setTimeout(() => {
            el.classList.add('animate-fade-in-up')
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, delay)
          
          observer.unobserve(el)
        }
      })
    }, options)

    // Estado inicial
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
    
    observer.observe(el)
  }
}
<template>
  <div class="relative z-10">
    <Header />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import HeroSection from '../sections/HeroSection.vue'
import AboutSection from '../sections/AboutSection.vue'
import ProjectsSection from '../sections/ProjectsSection.vue'
import SkillsSection from '../sections/SkillsSection.vue'
import ContactSection from '../sections/ContactSection.vue'
import Footer from './Footer.vue'

export default {
  name: 'MainContent',
  components: {
    Header,
    HeroSection,
    AboutSection,
    ProjectsSection,
    SkillsSection,
    ContactSection,
    Footer
  }
}
</script>
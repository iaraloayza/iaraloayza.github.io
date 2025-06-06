<template>
  <div class="relative z-10">
    <HeaderLayout />
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <EducationSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from './Header.vue'
import HeroSection from '../sections/HeroSection.vue'
import AboutSection from '../sections/AboutSection.vue'
import ExperienceSection from '../sections/ExperienceSection.vue'
import EducationSection from '../sections/EducationSection.vue'
import ProjectsSection from '../sections/ProjectsSection.vue'
import SkillsSection from '../sections/SkillsSection.vue'
import ContactSection from '../sections/ContactSection.vue'
import FooterLayout from './FooterLayout.vue'

export default {
  name: 'MainContent',
  components: {
    HeaderLayout,
    HeroSection,
    AboutSection,
    ExperienceSection,
    EducationSection,
    ProjectsSection,
    SkillsSection,
    ContactSection,
    FooterLayout
  }
}
</script>
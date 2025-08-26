<template>
  <div class="relative z-10">
    <HeaderLayout />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <EducationSection />
    <ContactSection />
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from './Header.vue'
import HeroSection from '../sections/HeroSection.vue'
import AboutSection from '../sections/AboutSection.vue'
import SkillsSection from '../sections/SkillsSection.vue'
import ProjectsSection from '../sections/ProjectsSection.vue'
import ExperienceSection from '../sections/ExperienceSection.vue'
import EducationSection from '../sections/EducationSection.vue'
import ContactSection from '../sections/ContactSection.vue'
import FooterLayout from './FooterLayout.vue'

export default {
  name: 'MainContent',
  components: {
    HeaderLayout,
    HeroSection,
    AboutSection,
    SkillsSection,
    ProjectsSection,
    ExperienceSection,
    EducationSection,
    ContactSection,
    FooterLayout
  }
}
</script>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Background from './components/Background.vue';
import Intro from './components/Intro.vue';
import Contact from './components/Contact.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import { getJSON } from './utils/helpers';

const data = ref<{ skills: SkillCategory[]; projects: Project[] }>({
    skills: [],
    projects: [],
});

onMounted(async () => {
    data.value = await getJSON('/data.json');
});
</script>

<template>
    <Background class="fixed inset-0" src="/background.svg" />

    <main class="relative flex flex-col">
        <Intro />

        <Skills :categories="data.skills" />

        <Projects :items="data.projects" />

        <Contact />
    </main>
</template>

<style lang="scss">
.fade {
    &-enter-active,
    &-leave-active {
        transition: opacity 0.15s;
    }
    &-enter-from,
    &-leave-to {
        opacity: 0;
    }
}

.slide-top {
    &-enter-active,
    &-leave-active {
        transition: transform 0.3s;
    }
    &-enter-from,
    &-leave-to {
        transform: translateY(-100%);
    }
}
</style>

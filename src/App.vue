<script setup lang="ts">
import { ref } from 'vue';
import Background from './components/Background.vue';
import Intro from './components/Intro.vue';
import Contact from './components/Contact.vue';
import Skillset from './components/Skillset.vue';

const cv = ref<{ wrapper: HTMLDivElement }>();
const contact = ref<{ wrapper: HTMLDivElement }>();

const scrollToSection = (id: string) => {
    switch (id) {
        case 'cv':
            cv.value?.wrapper.scrollIntoView({ behavior: 'smooth' });
            break;

        case 'contact':
            contact.value?.wrapper.scrollIntoView({ behavior: 'smooth' });
            break;
    }
};
</script>

<template>
    <Background class="fixed inset-0" src="/background.svg" />

    <main class="relative flex flex-col">
        <Intro @navigate="scrollToSection" />

        <Skillset ref="cv" />

        <Contact ref="contact" />
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

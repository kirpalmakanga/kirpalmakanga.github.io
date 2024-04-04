<script setup lang="ts">
import { ref } from 'vue';
import Background from './components/Background.vue';
import Intro from './components/Intro.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';

const portfolio = ref<{ wrapper: HTMLDivElement }>();

const showContacts = ref(false);

const goToPortfolio = () => {
    console.log(portfolio.value);
    portfolio.value?.wrapper.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
    <Background class="fixed inset-0" src="/images/background.svg" />

    <main class="relative flex flex-col">
        <Intro
            @go-to-portfolio="goToPortfolio"
            @open-contacts="showContacts = true"
        />

        <Portfolio ref="portfolio" />

        <Contact :is-visible="showContacts" @close="showContacts = false" />
    </main>
</template>

<style lang="scss">
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

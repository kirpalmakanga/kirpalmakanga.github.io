<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Icon from './Icon.vue';

const emit = defineEmits<{
    openContacts: [e: void];
    goToPortfolio: [e: void];
}>();

const isReady = ref(false);

onMounted(() => {
    isReady.value = true;
});
</script>

<template>
    <section
        ref="intro"
        id="intro"
        class="min-h-[100vh] flex flex-col items-center justify-center text-center uppercase transition-opacity duration-500 ease-out"
        :class="{
            'opacity-0': !isReady,
            'opacity-100': isReady,
        }"
    >
        <h1 class="text-[16rem]/[14rem] font-secondary">MK</h1>

        <p class="text-2xl">Développeur Web Front-End</p>

        <ul class="mt-8 flex justify-center gap-4">
            <li>
                <a
                    class="block h-8 w-8 transition opacity-60 hover:opacity-100 active:scale-110"
                    href="https://fr.linkedin.com/in/kirpal-makanga-8a4291108"
                    target="_blank"
                    rel="noopener"
                >
                    <Icon class="h-8 w-8" name="linkedin" />
                </a>
            </li>

            <li>
                <a
                    class="block h-8 w-8 transition opacity-60 hover:opacity-100 active:scale-110"
                    href="https://github.com/kirpalmakanga"
                    target="_blank"
                    rel="noopener"
                >
                    <Icon class="h-8 w-8" name="github" />
                </a>
            </li>
        </ul>

        <ul class="mt-8 flex gap-4">
            <button
                id="open-portfolio"
                class="border-2 border-gray-100 px-4 py-1 rounded uppercase tracking-wide transition hover:bg-gray-100 hover:text-gray-900 active:scale-110"
                @click="emit('goToPortfolio')"
            >
                Portfolio
            </button>

            <button
                id="open-contact"
                class="border-2 border-gray-100 px-4 py-1 rounded uppercase tracking-wide transition hover:bg-gray-100 hover:text-gray-900 active:scale-110"
                @click="emit('openContacts')"
            >
                Contact
            </button>
        </ul>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Icon from './Icon.vue';

const wrapper = ref<HTMLDivElement>();

defineExpose({ wrapper });
</script>

<template>
    <section
        id="contact"
        ref="wrapper"
        class="min-h-[100vh] flex flex-col justify-center items-center"
    >
        <h1 class="text-5xl mb-8">Contact</h1>

        <p class="flex items-center gap-2 mb-4 text-3xl">
            <Icon class="h-8 w-8" name="mail" />

            <span class="">makanga.kirpal@gmail.com</span>
        </p>
    </section>
</template>

<script setup lang="ts">
import Icon from './base/Icon.vue';
</script>

<template>
    <section
        id="contact"
        class="min-h-[100vh] flex flex-col justify-center items-center"
    >
        <h2 class="text-5xl mb-8">Contact</h2>

        <p class="flex gap-2 items-center mb-4 text-3xl">
            <Icon class="h-8 w-8" name="mail" />

            makanga.kirpal@gmail.com
        </p>

        <p class="flex gap-2 items-center text-3xl">
            <Icon class="h-8 w-8" name="linkedin" />

            <a
                class="hover:underline"
                href="https://fr.linkedin.com/in/kirpal-makanga-8a4291108"
                target="_blank"
                rel="noopener"
            >
                LinkedIn
            </a>
        </p>
    </section>
</template>

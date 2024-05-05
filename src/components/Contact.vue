<script setup lang="ts">
import Page from './base/Page.vue';
import Icon from './base/Icon.vue';
</script>

<template>
    <Page
        id="contact"
        class="flex flex-col justify-center items-center"
        title="Contact"
    >
        <p class="flex gap-2 items-center mb-4 text-2xl sm:text-3xl">
            <Icon class="h-6 w-6 sm:h-8 sm:w-8" name="mail" />

            makanga.kirpal@gmail.com
        </p>

        <p class="flex gap-2 items-center text-2xl sm:text-3xl">
            <Icon class="h-6 w-6 sm:h-8 sm:w-8" name="linkedin" />

            <a
                class="hover:underline"
                href="https://fr.linkedin.com/in/kirpal-makanga-8a4291108"
                target="_blank"
                rel="noopener"
            >
                LinkedIn
            </a>
        </p>
    </Page>
</template>

<script setup lang="ts">
import Icon from './base/Icon.vue';
import Button from './base/Button.vue';
import IconLink from './base/IconLink.vue';

const emit = defineEmits<{
    navigate: [e: string];
}>();
</script>

<template>
    <section
        ref="intro"
        id="intro"
        class="min-h-[100vh] flex flex-col items-center justify-center text-center uppercase transition-opacity duration-500 ease-out"
    >
        <h1 class="text-[16rem]/[14rem] font-secondary">MK</h1>

        <p class="text-2xl">Front-End web developer</p>

        <ul class="mt-8 flex justify-center gap-4">
            <li>
                <IconLink
                    icon="linkedin"
                    href="https://fr.linkedin.com/in/kirpal-makanga-8a4291108"
                    target="_blank"
                    rel="noopener"
                />
            </li>

            <li>
                <IconLink
                    icon="github"
                    href="https://github.com/kirpalmakanga"
                    target="_blank"
                    rel="noopener"
                />
            </li>
        </ul>

        <nav class="mt-8 flex gap-4">
            <Button @click="emit('navigate', 'cv')">CV</Button>

            <Button @click="emit('navigate', 'projects')">Projects</Button>

            <Button @click="emit('navigate', 'contact')">Contact</Button>
        </nav>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Skill from './Skill.vue';

const wrapper = ref<HTMLDivElement>();

defineExpose({ wrapper });

// TODO: mettre le level en pourcentage ?
const domains = [
    {
        name: 'Front-end',
        items: [
            {
                name: 'Vue',
                level: 4,
            },
            {
                name: 'React',
                level: 3,
            },
            {
                name: 'React Native',
                level: 3,
            },
            {
                name: 'Solid JS',
                level: 4,
            },
            {
                name: 'Tailwind',
                level: 4,
            },
            {
                name: 'SASS',
                level: 5,
            },
            {
                name: 'Vite',
                level: 5,
            },
        ],
    },
    {
        name: 'Back-end',
        items: [
            {
                name: 'Express',
            },
            {
                name: 'Hapi',
            },
            {
                name: 'AWS SDK',
            },
            {
                name: 'Supabase',
            },
            {
                name: 'Firebase',
            },
        ],
    },
    {
        name: 'Outils',
        items: [
            { name: 'VS Code' },
            { name: 'Git' },
            { name: 'Docker' },
            { name: 'Rancher' },
            { name: 'Sentry' },
            { name: 'Jest' },
            { name: 'Mocha' },
            { name: 'Puppeteer' },
            { name: 'Cypress' },
            { name: 'TypeScript' },
            { name: 'Jira' },
            { name: 'Twilio' },
            { name: 'Electron' },
        ],
    },
    {
        name: 'Other',
        items: [
            { name: 'Agile' },
            {
                name: 'Functional programming',
            },
        ],
    },
    {
        name: 'Languages',
        items: [{ name: 'French' }, { name: 'English' }],
    },
    {
        name: 'Hobbies',
        items: [
            { name: 'Music' },
            { name: 'Cooking' },
            { name: 'Video games' },
        ],
    },
];
</script>

<template>
    <section id="cv" ref="wrapper" class="min-h-[100vh] p-4">
        <h1 class="text-5xl text-center">CV</h1>

        <article v-for="{ name, items } of domains" class="mt-8">
            <h2 class="text-2xl mb-4">{{ name }}</h2>

            <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <li v-for="skill of items">
                    <Skill v-bind="skill" />
                </li>
            </ul>
        </article>
    </section>
</template>

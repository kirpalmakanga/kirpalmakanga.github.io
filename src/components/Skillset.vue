<script setup lang="ts">
import Skill from './Skill.vue';
import VisibilitySensor from './base/VisibilitySensor.vue';

const domains: { name: string; items: { name: string; level?: number }[] }[] = [
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
            { name: 'Express' },
            { name: 'Hapi' },
            { name: 'Supabase' },
            { name: 'Firebase' },
        ],
    },
    {
        name: 'Tools',
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
            { name: 'AWS SDK' },
        ],
    },
    {
        name: 'Other',
        items: [{ name: 'Agile' }, { name: 'Functional programming' }],
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
    <section id="cv" class="min-h-[100vh] p-4">
        <div class="container mx-auto">
            <h2 class="text-5xl text-center mb-8">CV</h2>

            <ul>
                <li v-for="{ name, items } of domains" class="mb-16">
                    <article>
                        <h3 class="text-2xl mb-4">{{ name }}</h3>

                        <ul
                            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-max gap-8"
                        >
                            <li v-for="{ name, level } of items">
                                <VisibilitySensor>
                                    <article
                                        class="bg-primary-900 p-4 rounded shadow"
                                    >
                                        <p class="text-xl">{{ name }}</p>
                                        <p v-if="level">Level: {{ level }}</p>
                                    </article>
                                </VisibilitySensor>
                            </li>
                        </ul>
                    </article>
                </li>
            </ul>
        </div>
    </section>
</template>

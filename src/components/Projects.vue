<script setup lang="ts">
import ButtonLink from './base/ButtonLink.vue';
import VisibilitySensor from './base/VisibilitySensor.vue';

const items = [
    {
        title: 'MicroTube',
        desc: 'Lightweight YouTube app',
        technologies:
            'Solid JS, Vite, Windi CSS, TypeScript, Youtube Data API, Youtube Player API',
        url: 'https://microtube.netlify.app/',
    },
    {
        title: 'MicroSpot',
        desc: 'Lightweight Spotify app',
        technologies: 'Express, Nuxt 3, Windi CSS, Spotify API, TypeScript',
    },
    {
        title: 'Alexandrie',
        desc: 'Media database',
        technologies: 'Solid JS, Vite, SASS, TypeScript, Firebase',
        url: 'https://alexandrie.netlify.app/',
    },
    {
        title: 'Discograph',
        desc: 'Music database',
        technologies: 'Nuxt3, Tailwind, TypeScript, Supabase',
    },
    {
        title: 'Neptune',
        desc: 'Desktop music player',
        technologies: 'Solid JS, Windi CSS, TypeScript, Electron',
    },
];
</script>

<template>
    <section id="projects" class="min-h-[100vh] p-4">
        <div class="container mx-auto">
            <h2 class="text-5xl text-center mb-8">Projects</h2>

            <ul
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-max gap-8"
            >
                <li
                    class="flex"
                    v-for="{ title, desc, technologies, url } of items"
                >
                    <VisibilitySensor>
                        <article
                            class="flex flex-col flex-grow bg-primary-900 p-4 gap-4 rounded"
                        >
                            <div class="flex-grow">
                                <h3 class="text-2xl">{{ title }}</h3>

                                <p class="opacity-50">{{ desc }}</p>

                                <p class="mt-4">{{ technologies }}</p>
                            </div>

                            <ButtonLink class="self-end" v-if="url" :href="url">
                                Demo
                            </ButtonLink>
                        </article>
                    </VisibilitySensor>
                </li>
            </ul>
        </div>
    </section>
</template>

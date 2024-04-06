<script setup lang="ts">
import { ref } from 'vue';
import Background from './Background.vue';

const wrapper = ref<HTMLDivElement>();

defineExpose({ wrapper });

const items = [
    {
        title: 'Microtube',
        subtitle: 'Vite, Solid JS, WindiCSS',
        image: '/images/project/youtube.jpg',
        url: 'https://microtube.netlify.com/',
    },
    {
        title: 'MBSR Paris',
        subtitle: 'Gulp, Sass, Wordpress',
        image: '/images/project/mbsr.jpg',
        url: 'https://www.mbsr-paris.fr/',
    },
    {
        title: 'CS Innov',
        subtitle: 'Gulp, Sass, Wordpress',
        image: '/images/project/csinnov.jpg',
        url: 'https://csinnov.fr/',
    },
];
</script>

<template>
    <section ref="wrapper" id="portfolio" class="min-h-[100vh]">
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <li v-for="{ title, subtitle, image, url } of items">
                <figure
                    class="group relative h-[calc(100vh/3-1rem)] md:h-[calc(50vh-1.5rem)]"
                >
                    <Background
                        class="absolute inset-0 after:content[''] after:bg-primary-950 after:bg-opacity-50 after:w-full after:h-full after:block"
                        :src="image"
                    />

                    <figcaption
                        class="absolute flex flex-col items-center justify-center inset-8 border-2 border-primary-100 transition opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
                    >
                        <h2 class="uppercase">{{ title }}</h2>
                        <p>{{ subtitle }}</p>
                    </figcaption>

                    <a
                        class="absolute inset-0"
                        :href="url"
                        target="_blank"
                        rel="noopener"
                    ></a>
                </figure>
            </li>
        </ul>
    </section>
</template>

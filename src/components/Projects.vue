<script setup lang="ts">
import Page from './base/Page.vue';
import ButtonLink from './base/ButtonLink.vue';
import VisibilitySensor from './base/VisibilitySensor.vue';

defineProps<{ items: Project[] }>();
</script>

<template>
    <Page id="projects">
        <div class="container mx-auto">
            <h2 class="text-5xl text-center mb-8">Projects</h2>

            <ul
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-max gap-8"
            >
                <li
                    class="flex"
                    v-for="{ title, desc, technologies, url } of items"
                >
                    <VisibilitySensor
                        class="flex flex-col flex-grow bg-primary-900 rounded"
                    >
                        <article class="flex flex-grow flex-col p-4">
                            <div class="flex-grow">
                                <h3 class="text-2xl">{{ title }}</h3>

                                <p class="opacity-50">{{ desc }}</p>

                                <p class="mt-4">{{ technologies }}</p>
                            </div>

                            <ButtonLink
                                class="self-end mt-4"
                                v-if="url"
                                :href="url"
                                target="_blank"
                                rel="noopener"
                            >
                                Demo
                            </ButtonLink>
                        </article>
                    </VisibilitySensor>
                </li>
            </ul>
        </div>
    </Page>
</template>

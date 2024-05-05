<script setup lang="ts">
import Page from './base/Page.vue';
import Icon from './base/Icon.vue';
import Markdown from './base/Markdown.vue';
import Reveal from './base/Reveal.vue';

defineProps<{ items: Job[] }>();
</script>

<template>
    <Page id="work" title="Work">
        <div class="md:w-2/3 lg:w-1/2 mx-auto">
            <ul class="flex flex-col gap-8">
                <li
                    v-for="{ name, duration, location, description } of items"
                    class="flex"
                >
                    <Reveal class="flex-grow bg-primary-900 p-8 rounded shadow">
                        <article>
                            <h3 class="text-2xl mb-4">{{ name }}</h3>

                            <p class="flex items-center">
                                <Icon class="h-6 w-6 mr-2" name="clock" />
                                {{ duration }}
                            </p>

                            <p class="flex items-center font-bold mt-4">
                                <Icon class="h-6 w-6 mr-2" name="location" />
                                {{ location }}
                            </p>

                            <Markdown
                                class="block prose-h4:text-xl prose-h4:mb-4 prose-h4:mt-8 prose-h4:opacity-80 prose-h5:mt-8 prose-h5:text-lg prose-h5:opacity-70 prose-ul:list-disc prose-ul:pl-5 prose-ul:mt-4 prose-ul:mb-8 prose-li:mt-2 prose-p:my-1 md:w-2/3"
                                :url="description"
                            />
                        </article>
                    </Reveal>
                </li>
            </ul>
        </div>
    </Page>
</template>

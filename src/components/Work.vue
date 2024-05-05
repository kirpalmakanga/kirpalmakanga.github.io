<script setup lang="ts">
import Page from './base/Page.vue';
import Icon from './base/Icon.vue';
import VisibilitySensor from './base/VisibilitySensor.vue';

defineProps<{ categories: SkillCategory[] }>();
</script>

<template>
    <Page id="work" title="Work">
        <div class="container mx-auto">
            <!-- <ul>
                <li v-for="{ name, items } of categories" class="mb-16">
                    <article>
                        <h3 class="text-2xl mb-4">{{ name }}</h3>

                        <ul
                            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-max gap-8"
                        >
                            <li v-for="{ name, level } of items" class="flex">
                                <VisibilitySensor
                                    class="flex-grow bg-primary-900 p-4 rounded shadow"
                                >
                                    <article>
                                        <p class="text-xl">{{ name }}</p>

                                        <ul
                                            v-if="!isNaN(level)"
                                            class="flex h-5 mt-4 whitespace-nowrap"
                                        >
                                            <li v-for="_ in level">
                                                <Icon
                                                    class="h-5 w-5"
                                                    name="circle-plus"
                                                />
                                            </li>
                                            <li v-for="_ in 10 - level">
                                                <Icon
                                                    class="h-5 w-5"
                                                    name="circle"
                                                />
                                            </li>
                                        </ul>
                                    </article>
                                </VisibilitySensor>
                            </li>
                        </ul>
                    </article>
                </li>
            </ul> -->
        </div>
    </Page>
</template>

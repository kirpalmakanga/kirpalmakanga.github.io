<script setup lang="ts">
import Page from './base/Page.vue';
import Button from './base/Button.vue';
import IconLink from './base/IconLink.vue';
import { scrollToId } from '../utils/helpers';

const tabs = [
    {
        id: 'skills',
        title: 'Skills',
    },
    {
        id: 'work',
        title: 'Work',
    },
    {
        id: 'projects',
        title: 'Projects',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];
</script>

<template>
    <Page
        id="intro"
        class="flex flex-col items-center justify-center uppercase"
    >
        <h1 class="text-[12rem]/[10rem] sm:text-[16rem]/[14rem] font-secondary">
            MK
        </h1>

        <p class="text-xl sm:text-2xl">Front-End web developer</p>

        <ul class="mt-8 flex justify-center gap-4">
            <li>
                <IconLink
                    icon="github"
                    href="https://github.com/kirpalmakanga"
                    target="_blank"
                    rel="noopener"
                />
            </li>
        </ul>

        <nav class="mt-8">
            <ul class="flex flex-wrap justify-center gap-4">
                <li v-for="{ id, title } of tabs">
                    <Button class="text-sm sm:text-md" @click="scrollToId(id)">
                        {{ title }}
                    </Button>
                </li>
            </ul>
        </nav>
    </Page>
</template>

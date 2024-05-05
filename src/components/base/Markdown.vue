<script setup lang="ts">
import { ref, watch } from 'vue';
import markdownIt from 'markdown-it';
import { getText } from '../../utils/helpers';

const md = markdownIt();
const props = defineProps<{ url?: string; text?: string }>();

const result = ref<string>('');

watch(
    () => props.text,
    (text) => {
        if (text) {
            result.value = md.render(text);
        }
    },
    { immediate: true }
);

watch(
    () => props.url,
    async (url) => {
        if (url) {
            result.value = md.render(await getText(url));
        }
    },
    { immediate: true }
);
</script>

<template>
    <span v-html="result" />
</template>

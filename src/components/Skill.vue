<script setup lang="ts">
import { ref } from 'vue';
import { useElementVisibility } from '@vueuse/core';

defineProps<{ name: string; level?: number }>();

const wrapper = ref(null);
const isVisible = useElementVisibility(wrapper);
</script>

<template>
    <div
        ref="wrapper"
        class="bg-primary-900 p-4 rounded shadow transition-opacity duration-500"
        :class="{
            'opacity-0': !isVisible,
            'opacity-100': isVisible,
        }"
    >
        <p class="text-xl">{{ name }}</p>
        <p v-if="level">Level: {{ level }}</p>
    </div>
</template>

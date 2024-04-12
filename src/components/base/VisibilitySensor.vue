<script setup lang="ts">
import { ref } from 'vue';
import { useElementVisibility } from '@vueuse/core';

const wrapper = ref(null);
const isVisible = useElementVisibility(wrapper);
</script>

<template>
    <div
        ref="wrapper"
        class="transition-opacity duration-500"
        :class="{
            'opacity-0': !isVisible,
            'opacity-100': isVisible,
        }"
    >
        <slot />
    </div>
</template>

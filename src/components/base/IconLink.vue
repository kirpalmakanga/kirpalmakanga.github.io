<script setup lang="ts">
import Icon from './Icon.vue';

defineProps<{ icon: string }>();
</script>

<template>
    <a class="block h-8 w-8 transition hover:opacity-60 active:scale-110">
        <Icon class="h-8 w-8" :name="icon" />
    </a>
</template>

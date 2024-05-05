<script setup lang="ts">
defineProps<{ title?: string }>();
</script>

<template>
    <section class="min-h-[100vh] p-4">
        <h2 v-if="title" class="text-5xl text-center mb-8">{{ title }}</h2>

        <slot />
    </section>
</template>

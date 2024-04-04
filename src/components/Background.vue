<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { loadImage } from '../utils/helpers';

const props = defineProps<{ src: string }>();

const isLoaded = ref<boolean>(false);

onMounted(async () => {
    await loadImage(props.src);

    isLoaded.value = true;
});
</script>

<template>
    <div
        class="bg-center bg-no-repeat bg-cover transition-opacity"
        :class="{
            'opacity-0': !isLoaded,
            'opacity-1': isLoaded,
        }"
        :style="{
            backgroundImage: `url(${src})`,
        }"
    ></div>
</template>

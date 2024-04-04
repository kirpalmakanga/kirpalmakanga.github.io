<script setup lang="ts">
import Icon from './Icon.vue';

const props = defineProps<{ isVisible: boolean }>();

const emit = defineEmits<{ close: [e: void] }>();
</script>

<template>
    <Transition name="slide-top">
        <section
            v-if="props.isVisible"
            id="contact"
            class="fixed inset-0 flex flex-col justify-center items-center bg-gray-900 transition"
        >
            <button
                id="close-contact"
                class="absolute right-0 top-0 p-2 text-gray-100 transition opacity-60 hover:opacity-100 active:scale-110"
                @click="emit('close')"
            >
                <Icon class="h-8 w-8" name="close" />
            </button>

            <p class="flex items-center gap-2 mb-4 text-3xl">
                <Icon class="h-8 w-8" name="mail" />

                <span class="">makanga.kirpal@gmail.com</span>
            </p>

            <p class="flex items-center gap-2 text-3xl">
                <Icon class="h-8 w-8" name="location" />

                <span>
                    <span>Limoges</span>
                    ,
                    <span>France</span>
                </span>
            </p>
        </section>
    </Transition>
</template>

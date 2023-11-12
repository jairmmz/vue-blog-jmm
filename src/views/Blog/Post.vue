<template>
    <div class="container mx-auto">
        <div class="flex flex-col lg:flex-row pt-2 lg:mt-8">
            <div class="lg:w-[80%]">
                <div class="border-b border-grey-lighter pb-8 md:pb-12">
                    <span
                        class="mb-5 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green sm:mb-8 dark:text-white">{{ post.category }}</span>
                    <h2
                        class="block font-body text-3xl font-semibold leading-tight dark:text-white sm:text-4xl lg:text-5xl">
                        {{ post.title }}
                    </h2>
                    <div class="flex items-center pt-5 sm:pt-8">
                        <p class="pr-2 font-body font-light dark:text-white">
                            {{ post.date }}
                        </p>
                        <span class="vdark:text-white font-body text-grey">//</span>
                        <p class="pl-2 font-body font-light dark:text-white">
                            {{ post.time_read }}
                        </p>
                    </div>
                </div>
                <div class="prose prose max-w-none border-b border-grey-lighter py-8 dark:prose-dark sm:py-12">
                    <p class="mb-5 font-body font-light dark:text-white">
                        {{ post.description }}
                    </p>
                    <img :src="post.image" class="pb-2" alt="Image" />

                    <p class="font-body font-light dark:text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Condimentum id venenatis a condimentum vitae sapien pellentesque
                        habitant morbi. Semper feugiat nibh sed pulvinar.
                    </p>
                </div>

                <div class="flex items-center py-5">
                    <span class="pr-5 font-body font-medium dark:text-white">Share</span>
                    <a href="/">
                        <i
                            class="bx bxl-facebook text-2xl transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"></i></a>
                    <a href="/">
                        <i
                            class="bx bxl-twitter pl-2 text-2xl transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"></i>
                    </a>
                    <a href="/">
                        <i
                            class="bx bxl-linkedin pl-2 text-2xl transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"></i></a>
                    <a href="/">
                        <i
                            class="bx bxl-reddit pl-2 text-2xl transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"></i></a>
                </div>
            </div>
            
            <!-- List Post -->
            <div class="container mx-10 lg:w-[20%] lg:mt-10">
                <h1 class="text-xl  mb-3 font-medium dark:text-white">Lista de post</h1>
                <div v-for="post in postsList" :key="post.id" class="py-2 px-2 rounded-md bg-slate-50 hover:bg-slate-100 my-2">
                    <router-link :to="{ name: 'blog.post', params: { slug: post.slug }}" class="text-sm hover:text-sky-800 font-medium">{{ post.title }}</router-link>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { IPost } from '../../interfaces/post';
import { postsList } from '../../db_fake/posts'

const route = useRoute()

const post: IPost = ref({
    category: '',
    title: '',
    slug: '',
    description: '',
    image: '',
    date: '',
    time_read: ''
})


const loadPost = (slug: string | string[]) => {
    post.value = postsList.find((post) => post.slug === slug)
}

onMounted(() => {
    loadPost(route.params.slug)
})

watchEffect(() => {
    loadPost(route.params.slug)
})


</script>

<style scoped></style>

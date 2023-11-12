<template>
    <div class="container mx-auto">
        <div class="flex items-center justify-between py-6 lg:py-10">
            <router-link :to="{ name: 'home' }" class="flex items-center">
                <span class="mr-2">
                    <img src="../assets/images/logo.svg" alt="logo" />
                </span>
                <p class="hidden font-body text-2xl font-bold dark:text-white lg:block">
                    Blog Jairmmz
                </p>
            </router-link>
            <div class="flex items-center lg:hidden">
                <i class="bx mr-8 cursor-pointer text-3xl dark:text-white" @click="toggleDark()"
                    :class="isDark ? 'bxs-sun' : 'bxs-moon'"></i>

                <svg width="24" height="15" xmlns="http://www.w3.org/2000/svg" @click="isMobileMenuOpen = true"
                    class="cursor-pointer fill-current dark:text-white">
                    <g fill-rule="evenodd">
                        <rect width="24" height="3" rx="1.5" />
                        <rect x="8" y="6" width="16" height="3" rx="1.5" />
                        <rect x="4" y="12" width="20" height="3" rx="1.5" />
                    </g>
                </svg>
            </div>
            <div class="hidden lg:block">
                <ul class="flex items-center">

                    <li class="group relative mr-6 mb-1">
                        <div
                            class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow-500">
                        </div>
                        <router-link  :to="{ name: 'home' }"
                            class="relative z-30 block px-2 font-body text-lg font-bold transition-colors group-hover:text-green dark:text-white">Intro</router-link>
                    </li>

                    <li class="group relative mr-6 mb-1">
                        <div
                            class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow-500">
                        </div>
                        <router-link  :to="{ name: 'blog' }"
                            class="relative z-30 block px-2 font-body text-lg font-bold transition-colors group-hover:text-green dark:text-white">Blog</router-link>
                    </li>

                    <li class="group relative mr-6 mb-1">
                        <div
                            class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow-500">
                        </div>
                        <router-link  :to="{ name: 'uses' }"
                            class="relative z-30 block px-2 font-body text-lg font-bold transition-colors group-hover:text-green dark:text-white">Uses</router-link>
                    </li>

                    <li class="group relative mr-6 mb-1">
                        <div
                            class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow-500">
                        </div>
                        <router-link  :to="{ name: 'contact' }"
                            class="relative z-30 block px-2 font-body text-lg font-bold transition-colors group-hover:text-green dark:text-white">Contact</router-link>
                    </li>

                    <li>
                        <button @click="toggleDark()" class="relative z-30 block px-2 transition-colors group-hover:text-green dark:text-white">
                            <HeroSun v-if="isDark" />
                            <HeroMoon v-else />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="pointer-events-none fixed inset-0 z-50 flex bg-black bg-opacity-80 opacity-0 transition-opacity lg:hidden"
        :class="isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : ''">
        <div class="ml-auto w-full text-center bg-green p-4">
            <div class="flex flex-col items-end">
                <button @click="handleCloseMenu" class="px-6 py-2 text-2xl font-bold bg-slate-700 text-white hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600">X</button>
            </div>
            <ul class="mt-8 py-4 flex flex-col justify-center items-center">

                <li class="w-full hover:bg-blue-950">
                    <router-link :to="{ name: 'home' }" class="mb-3 block px-2 font-body text-lg font-medium text-white" @click="handleCloseMenu">Intro</router-link>
                </li>

                <li class="w-full hover:bg-blue-950">
                    <router-link :to="{ name: 'blog' }" class="mb-3 block px-2 font-body text-lg font-medium text-white" @click="handleCloseMenu">Blog</router-link>
                </li>

                <li class="w-full hover:bg-blue-950">
                    <router-link :to="{ name: 'uses' }" class="mb-3 block px-2 font-body text-lg font-medium text-white" @click="handleCloseMenu">Uses</router-link>
                </li>

                <li class="w-full hover:bg-blue-950">
                    <router-link :to="{ name: 'contact' }" class="mb-3 block px-2 font-body text-lg font-medium text-white" @click="handleCloseMenu">Contact</router-link>
                </li>

            </ul>
        </div>
    </div>
</template>


<script setup lang="ts">
import { Ref, ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import HeroSun from '../components/HeroSun.vue';
import HeroMoon from '../components/HeroMoon.vue';

const isDark = useDark()
const toggleDark = useToggle(isDark)

const isMobileMenuOpen: Ref<boolean> = ref(false)

const handleCloseMenu = () => {
    isMobileMenuOpen.value = false
}


</script>


<style scoped></style>
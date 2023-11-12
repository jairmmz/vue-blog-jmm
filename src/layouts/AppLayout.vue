<template>
    <div>
        
        <!-- Header -->
        <Header />

        <!-- Content -->
        <router-view />

        <!-- Footer -->
        <Footer />

    </div>

</template>


<script setup lang="ts">
import Header from './Header.vue'
import Footer from './Footer.vue';

</script>


<style scoped></style>
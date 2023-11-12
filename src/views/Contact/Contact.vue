<template>
    <div>
        <div class="container mx-auto">
            <div class="py-16 lg:py-20">
                <div>
                    <img src="../../assets/images/icon-contact.png" alt="icon envelope" />
                </div>
                <h1 class="pt-5 font-body text-4xl font-semibold dark:text-white md:text-5xl lg:text-6xl">
                    Contact
                </h1>
                <div class="pr-2 pt-3 sm:pt-0">
                    <p class="font-body text-xl font-light dark:text-white">
                        Got a question or proposal, or just want to say hello? Go ahead. You know what to do.
                    </p>
                </div>
                <form class="pt-16">
                    <div class="flex flex-col sm:flex-row">
                        <div class="w-full sm:mr-3 sm:w-1/2">
                            <label class="block pb-3 font-body font-medium dark:text-white">Your Name</label>
                            <input type="text" id="name" placeholder="What should I call you?"
                                class="w-full border px-5 py-4 font-body font-light transition-colors focus:outline-none focus:ring-2" />
                        </div>
                        <div class="w-full pt-6 sm:ml-3 sm:w-1/2 sm:pt-0">
                            <label class="block pb-3 font-body font-medium dark:text-white">Email
                                Address</label>
                            <input type="email" id="email" placeholder="Drop that email here…"
                                class="w-full border px-5 py-4 font-body font-light transition-colors focus:outline-none focus:ring-2" />
                        </div>
                    </div>
                    <div class="w-full pt-6 sm:pt-10">
                        <label class="block pb-3 font-body font-medium dark:text-white">Email Address</label>
                        <textarea id="message" cols="30" rows="9"
                            placeholder="Tell me all the things that you think I need to hear…"
                            class="w-full border px-5 py-4 font-body font-light transition-colors focus:outline-none focus:ring-2"></textarea>
                    </div>
                    <button
                        class="mt-10 mb-12 block px-10 py-4 text-center font-body text-xl font-semibold bg-slate-200 transition-colors hover:bg-slate-300 sm:inline-block sm:text-left sm:text-2xl">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
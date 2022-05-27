<template>
  <div class="main">
    <h1 class="text-3xl font-bold mb-6">{{page.title}}</h1>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
    async asyncData({ $content }) {
        const page = await $content("sitemaps").fetch();
        return {
            page
        };
    },
}
</script>

<style lang="sass">
  .main
    @apply p-4 ml-[300px]
</style>

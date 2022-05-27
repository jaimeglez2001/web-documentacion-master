<template>
    <div class="container">
        <GlobalNav/>
        <router-view />
    </div>
</template>

<script>
import GlobalNav from '../components/GlobalNav.vue'
export default {
    name: 'DefaultLayout',
    components: { GlobalNav }
}
</script>

<style lang="sass" scoped>
    .container
        @apply flex
</style>
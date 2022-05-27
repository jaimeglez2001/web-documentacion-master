<template>
    <nav class="navigator flex flex-col justify-between items-center">
        <div class="nav_holder pt-4">
            <div class="nav_item" v-for="(navItem, i) in menu" :key="i">
                <nuxt-link :to="navItem.route">{{navItem.title}}</nuxt-link>
        </div>
        </div>
        <img src="logoxl.png" class="w-[175px] flex justify-center items-center opacity-20">
    </nav>
</template>

<script>
import menu from "@/content/components/menu"
    export default{
        data(){
            return {
                menu: menu
            }
        }
    }
</script>

<style lang="sass" scoped>
    .navigator
        @apply bg-slate-300  p-4 h-[100vh] fixed w-[275px] bg-[#252525] 
        .nav_holder
            .nav_item
                @apply p-2
                a
                    @apply  text-[#EDF7ED] text-opacity-50
                .nuxt-link-exact-active
                    @apply font-bold text-opacity-80
            
</style>
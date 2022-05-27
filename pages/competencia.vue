<template>
<div class="main">
  <h1 class="text-3xl font-bold mb-6">Análisis de la Competencia</h1>
  <NotionRenderer :blockMap="blockMap" />
</div>
</template>

<script>
import { notionRouterId } from "./../content/notion-router";
const routeName = "competencia";

export default {
  async asyncData({ $notion }) {
    const blockMap = await $notion.getPageBlocks(notionRouterId(routeName));
    return { blockMap };
  },
};
</script>


<style lang="sass">
  @import "vue-notion/src/styles.css"
  .main
    @apply p-4 ml-[300px]
        
</style>

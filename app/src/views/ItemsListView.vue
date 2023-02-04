<template>
    <ItemsList/>
  </template>
  
  <script>
  // @ is an alias to /src
  import ItemsList from '@/components/ItemsList/ItemsList.vue'
  
  export default {
    name: 'ItemsListView',
    components: {
      ItemsList
    }
  }
  </script>
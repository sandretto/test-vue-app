<template>
  <ItemsList />
</template>

<script>
import ItemsList from "./components/ItemsList/ItemsList.vue";

export default {
  name: "App",
  components: {
    ItemsList,
  },
};
</script>

<style>
#app {
  width: 100%;
  font-family: "Montserrat", sans-serif;
  position: relative;
  background-color: white;
  text-align: justify;
  margin: 0;
  color: #2c3e50;
}
</style>
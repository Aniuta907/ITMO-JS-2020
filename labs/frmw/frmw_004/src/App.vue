<template>
  <div id="app">
    <input placeholder="base" v-model="base" />
    <input placeholder="power" v-model="power" />

    <list-item
      v-for="index in Number(power)"
      :key="index"
      :power="Number(index)"
      :base="Number(base)"
    />
  </div>
</template>

<script>
import ListItem from "./components/ListItem.vue";

export default {
  name: "App",
  components: {
    ListItem
  },
  data: () => ({
    power: 0,
    base: 0
  })
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

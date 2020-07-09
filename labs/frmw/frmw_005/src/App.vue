<template>
  <div id="app" :style="`background-color: rgb(${red}, ${green}, ${blue})`">
    <div class="input-wrapper">
      <input v-model="red" />
      <input v-model="green" />
      <input v-model="blue" />
    </div>
    <div class="input-wrapper">
      <input type="range" v-model="red" />
      <input type="range" v-model="green" />
      <input type="range" v-model="blue" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    red: 255,
    green: 255,
    blue: 255
  })
};
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 10%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 5vw;
}
</style>

<template>
  <div id="app">
    <input v-model="text"/>
    <input v-model="text"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function() {
    return {
      text: ""
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  width: 15%;
  min-width: 100px;
}
</style>

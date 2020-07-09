<template>
  <div id="app">    
    <div class="container">  
      <input v-model="text" class="textStyle" />
      <button @click="addItem" class="addButton">Add new task</button>
      <the-list ref="list" class="itemStyle"/>
    </div>
  </div>
</template>

<script>
import TheList from "./components/TheList.vue";

export default {
  name: "App",
  components: {
    TheList
  },
  data: function() {
    return {
      text: ""
    };
  },
  methods : {
    addItem() {
      this.$refs.list.addItem(this.text);
      this.text = "";
    }
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url("assets/space.jpg");
  background-size: cover;
  position: fixed; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%;
}
.container {
  text-align: center;
  color: white;
  margin-top: 100px;
  width: 50%;
  margin: auto;
  padding-top: 5%;
}
.addButton {
  color: white;
  padding: 5px;
  height: 2.5rem;
  font-size: 1.5rem;
  margin-left: 30px;
  color: #4b0082;
  background-color: white;
}
.textStyle {
  font-size: 25px;
  font-family: "Poppins", sans-serif;
  text-align: center;
}
.itemStyle {
  font-size: 25px;
  font-family: "Poppins", sans-serif;
}
</style>

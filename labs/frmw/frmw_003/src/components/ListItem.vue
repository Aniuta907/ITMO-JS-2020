<template>
  <div>
    <div class="item">
      {{ item.name }}
      <input type="checkbox" :checked="item.done" @change="done(item.name)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    item: Object
  },
  methods: {
    done(name) {
      this.$emit("done", name);
    }
  }
};
</script>

<style scoped>
.item {
  font-size: 1.5rem;
}
.item > input {
  width: 20px;
  height: 20px;
}
</style>

<template>
  <div>
    <list-item
      v-for="item in items"
      :key="item.name"
      :item="item"
      @done="removeItem"
    />
  </div>
</template>

<script>
import ListItem from "./ListItem";
export default {
  name: "TheList",
  components: { ListItem },
  data: function() {
    return {
      items: []
    };
  },
  async created() {
    const response = await fetch("http://kodaktor.ru/j/tasklist");
    const { list: items } = await response.json();
    this.items = items.map(i => ({ done: false, name: i }));
  },
  methods: {
    addItem(name) {
      this.items.push({ name, done: false });
    },
    removeItem(itemName) {
      this.items = this.items.filter(({ name }) => name !== itemName);
    }
  }
};
</script>

<style scoped></style>

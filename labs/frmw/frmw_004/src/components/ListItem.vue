<template>
  <div class="hello">
    {{ Math.pow(base, power) }}
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    base: Number,
    power: Number
  }
};
</script>

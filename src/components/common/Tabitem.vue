<template>
  <div @click="ontap">
    <div v-if="!isactive">
      <slot name="icon"></slot>
    </div>
    <div v-else>
      <slot name="iconselect"></slot>
    </div>
    <div :class="{active:isactive}">
      <slot name="text">123</slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    path: String,
  },
  computed: {
    isactive() {
      return this.$route.path == this.path;
    },
  },
  methods: {
    ontap() {
      this.$router.push(this.path);
       console.log(this.$route)
    },
  },
  data() {
    return {};
  },
};
</script>
<style>
.active{
  color: red;
}
</style>

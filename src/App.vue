<template>
  <div id="app">
    <router-view/>
    <maintab/>
  </div>
</template>

<script>
import Maintab from './components/content/Maintab.vue';
export default {
  components: { Maintab },

};
</script>

<style>
</style>

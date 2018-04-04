<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/header/header';

  export default {
    name: 'App',
    methods: {},
    data () {
      return {};
    },
    components: {
      Header
    }
  };
</script>

<style scoped lang="stylus">
</style>

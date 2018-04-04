<template>
  <div id="v-app">
    <Header></Header>
    <div class="v-tab">
      <div class="v-tab-item">
        <router-link to="/goods">Goods</router-link>
      </div>
      <div class="v-tab-item">
        <router-link to="/ratings">Ratings</router-link>
      </div>
      <div class="v-tab-item">
        <router-link to="/seller">Seller</router-link>
      </div>
    </div>
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

<style scoped lang="stylus" rel="stylesheet/stylus">
  #v-app
    .v-tab
      display: flex;
      width: 100%
      height: 40px
      line-height: 40px
      .v-tab-item
        flex: 1
        text-align: center
        display: inline-block
</style>

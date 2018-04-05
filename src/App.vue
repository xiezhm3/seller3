<template>
  <div id="v-app">
    <Header :seller="seller"></Header>
    <div class="v-tab border-1px">
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

<script type="text/ecmascript-6">
  import Header from 'components/header/header';

  export default {
    name: 'App',
    methods: {},
    data () {
      return {
        seller: {}
      };
    },
    created() {
      this.$http.get('/api/seller').then((res) => {
        this.seller = res.data.data;
      });
    },
    components: {
      Header
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
  #v-app
    .v-tab
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-1px(rgba(7, 17, 27, 0.1));
      .v-tab-item
        flex: 1;
        text-align: center;
        & > a
          text-decoration: none;
          color: rgb(77, 95, 93);
          font-size: 14px;
          &.active
            color: #f01414
</style>

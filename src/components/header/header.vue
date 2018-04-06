<template>
  <div class="v-header">
    <div class="v-content-wrapper">
      <div class="v-avatar">
        <img width="64" height="64" :src="seller.avatar"/>
      </div>
      <div class="v-content">
        <div class="v-title">
          <span class="v-brand"></span>
          <span class="v-name">{{seller.name}}</span>
        </div>
        <div class="v-description">
          {{seller.description}}/{{seller.deliveryTime}} minutes arrived
        </div>
        <div v-if="seller.supports" class="v-support">
          <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class="v-bulletin-wrapper"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Header',
    props: {
      seller: {
        type: Object,
        required: true
      }
    },
    created() {
    },
    methods: {}
  };
</script>

<style scoped lang="stylus">
@import "../../common/stylus/mixin.styl";
  .v-header
    color #fff
    background black
    .v-content-wrapper
      padding 24px 12px 18px 24px
      font-size: 0
      .v-avatar, .v-content
        display inline-block
        font-size 14px
        .v-content
        margin-left 16px
        .v-title
          margin 2px 0 8px 0
          .v-brand
            width 30px
            height 18px
            display inline-block
            bg-image("./resource/brand")
            background-size 30px 18px
            background-repeat no-repeat
</style>

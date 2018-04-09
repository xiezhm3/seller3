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
          <span class="v-icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="v-text">{{seller.supports[1].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="v-support-count">
        <span class="v-count">{{ seller.supports.length }}</span>
        <i class="icon-keyboard_arrow_right"></i>
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
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    methods: {}
  };
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixin.styl";

  .v-header
    color #fff
    background #999999
    .v-content-wrapper
      padding 24px 12px 18px 24px
      position relative
      font-size 0
      .v-avatar, .v-content
        display inline-block
        font-size 14px
        vertical-align top
        img
          border-radius 2px
      .v-content
        margin-left 16px
        .v-title
          margin 2px 0 8px 0
          .v-brand
            width 30px
            height 18px
            display inline-block
            vertical-align top
            bg-image("./resource/brand")
            background-size 30px 18px
            background-repeat no-repeat
          .v-name
            margin-left 6px
            font-size 16px
            line-height 18px
            font-weight bold
        .v-description
          margin-bottom 10px
          line-height 12px
          font-size 12px
        .v-support
          .v-icon
            display inline-block
            vertical-align middle
            width 12px
            height 12px
            margin-left 4px
            background-size 12px 12px
            background-repeat no-repeat
            &.decrease //TODO
              bg-image("./resource/decrease_1")
            &.discount
              bg-image("./resource/discount_1")
            &.guarantee
              bg-image("./resource/guarantee_1")
            &.invoice
              bg-image("./resource/invoice_1")
            &.special
              bg-image("./resource/special_1")
          .v-text
            line-height 12px
            font-size 10px
      .v-support-count
        position absolute
        right 12px
        bottom 14px
        padding 0 8px
        height 24px
        line-height 24px
        border-radius 14px
        background-color rgba(0, 0, 0, 0.2)
        text-align center
        .v-count
          vertical-align top
          font-size 10px
        .icon-keyboard_arrow_right
          margin-left 2px
          font-size 10px
          line-height 24px

</style>

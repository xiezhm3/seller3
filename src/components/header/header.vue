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
      <div v-if="seller.supports" class="v-support-count" @click="showDatail">
        <span class="v-count">{{ seller.supports.length }}</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="v-bulletin-wrapper" @click="showDatail">
      <span class="v-bulletin-title"></span><span class="v-bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="v-background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <div v-show="detailShow" class="v-detail">
      <div class="v-detail-wrapper clearfix">
        <div class="v-detail-main">
          <h1 class="v-name">{{seller.name}}</h1>
        </div>
      </div>
      <div class="v-detail-close">
        <i class="icon-close"></i>
      </div>
    </div>
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
    data() {
      return {
        detailShow: false
      };
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    methods: {
      showDatail() {
        this.detailShow = true;
      }
    },
    components: {
      // Detail
    }
  };
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixin.styl";

  .v-header
    color #fff
    overflow hidden
    position relative
    background rgba(7, 17, 27, 0.5)
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
    .v-bulletin-wrapper
      position relative
      height 28px
      line-height 28px
      // font-size 0
      padding: 0 22px 0 12px
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      background rgba(7, 17, 27, 0.2)
      .v-bulletin-title
        display inline-block
        vertical-align top
        margin-top 8px
        width 22px
        height 12px
        bg-image("./resource/bulletin")
        background-size 22px 12px
        background-repeat no-repeat
      .v-bulletin-text
        vertical-align top
        font-size 10px
        font-weight 200
        margin 0 4px
      .icon-keyboard_arrow_right
        position absolute
        top 8px
        right 12px
        font-size 10px
    .v-background
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      z-index -1
      filter blur(10px)
    .v-detail
      position fixed
      z-index 100
      top 0
      left 0
      width 100%
      height 100%
      overflow auto
      background rgba(7, 17, 27, 0.8)
      .v-detail-wrapper
        width 100%
        min-height 100%
        .v-detail-main
          margin-top 64px
          padding-bottom 64px
          .v-name
            line-height 16px
            text-align center
            font-size 16px
            font-weight 700
      .v-detail-close
        position relative
        width 32px
        height 32px
        margin -64px auto 0 auto
        clear both
        font-size 32px
</style>

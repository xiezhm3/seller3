## CSS Sticky Footer

> one way

<code>
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

    <style />
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
      
.clearfix
  display inline-block
  &::after
    display block
    content ""
    height 0
    line-height 0
    clear both
    visibility hidden
</code>
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
          <div class="v-star-wrapper">
            <Star :size='48' :score='seller.score'></Star>
          </div>
          <div class="v-title">
            <div class="v-line"></div>
            <div class="v-text">优惠信息</div>
            <div class="v-line"></div>
          </div>
          <ul v-if="seller.supports"  class="v-supports">
            <li class="support-item" v-for="(item, index) in seller.supports" :key="index">
              <span class="icon" :class="classMap[seller.supports[index].type]"></span>
              <span class="text">{{seller.supports[index].description}}</span>
            </li>
          </ul>
          <div class="v-title">
            <div class="v-line"></div>
            <div class="v-text">商家公告</div>
            <div class="v-line"></div>
          </div>
        <div class="v-bulletin">
          <p class="v-content">{{seller.bulletin}}</p>
        </div>
        </div>
      </div>
      <div class="v-detail-close" @click="hiddenDetail">
        <i class="icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Star from "../star/star";

export default {
  name: "Header",
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
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
  },
  methods: {
    showDatail() {
      this.detailShow = true;
    },
    hiddenDetail() {
      this.detailShow = false;
    }
  },
  components: {
    // Detail
    Star
  }
};
</script>

<style scoped lang="stylus" type="stylesheet/stylus">
@import '../../common/stylus/mixin.styl';

.v-header {
  color: #fff;
  overflow: hidden;
  position: relative;
  background: rgba(7, 17, 27, 0.5);

  .v-content-wrapper {
    padding: 24px 12px 18px 24px;
    position: relative;
    font-size: 0;

    .v-avatar, .v-content {
      display: inline-block;
      font-size: 14px;
      vertical-align: top;

      img {
        border-radius: 2px;
      }
    }

    .v-content {
      margin-left: 16px;

      .v-title {
        margin: 2px 0 8px 0;

        .v-brand {
          width: 30px;
          height: 18px;
          display: inline-block;
          vertical-align: top;
          bg-image('./resource/brand');
          background-size: 30px 18px;
          background-repeat: no-repeat;
        }

        .v-name {
          margin-left: 6px;
          font-size: 16px;
          line-height: 18px;
          font-weight: bold;
        }
      }

      .v-description {
        margin-bottom: 10px;
        line-height: 12px;
        font-size: 12px;
      }

      .v-support {
        .v-icon {
          display: inline-block;
          vertical-align: middle;
          width: 12px;
          height: 12px;
          margin-left: 4px;
          background-size: 12px 12px;
          background-repeat: no-repeat;

          &.decrease { // TODO
            bg-image('./resource/decrease_1');
          }

          &.discount {
            bg-image('./resource/discount_1');
          }

          &.guarantee {
            bg-image('./resource/guarantee_1');
          }

          &.invoice {
            bg-image('./resource/invoice_1');
          }

          &.special {
            bg-image('./resource/special_1');
          }
        }

        .v-text {
          line-height: 12px;
          font-size: 10px;
        }
      }
    }

    .v-support-count {
      position: absolute;
      right: 12px;
      bottom: 14px;
      padding: 0 8px;
      height: 24px;
      line-height: 24px;
      border-radius: 14px;
      background-color: rgba(0, 0, 0, 0.2);
      text-align: center;

      .v-count {
        vertical-align: top;
        font-size: 10px;
      }

      .icon-keyboard_arrow_right {
        margin-left: 2px;
        font-size: 10px;
        line-height: 24px;
      }
    }
  }

  .v-bulletin-wrapper {
    position: relative;
    height: 28px;
    line-height: 28px;
    // font-size 0
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: rgba(7, 17, 27, 0.2);

    .v-bulletin-title {
      display: inline-block;
      vertical-align: top;
      margin-top: 8px;
      width: 22px;
      height: 12px;
      bg-image('./resource/bulletin');
      background-size: 22px 12px;
      background-repeat: no-repeat;
    }

    .v-bulletin-text {
      vertical-align: top;
      font-size: 10px;
      font-weight: 200;
      margin: 0 4px;
    }

    .icon-keyboard_arrow_right {
      position: absolute;
      top: 8px;
      right: 12px;
      font-size: 10px;
    }
  }

  .v-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);
  }

  .v-detail {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(7, 17, 27, 0.8);
    backdrop-filter: blur(10px); // only for ios user

    // &.fade-transition {
    // opacity: 1;
    // background: rgba(7, 17, 27, 0.8);
    // }

    // &.fade-enter, &.fade-leave {
    // opacity: 0;
    // background: rgba(7, 17, 27, 0);
    // }
    .v-detail-wrapper {
      width: 100%;
      min-height: 100%;

      .v-detail-main {
        margin-top: 64px;
        padding-bottom: 64px;

        .v-name {
          line-height: 16px;
          text-align: center;
          font-size: 16px;
          font-weight: 700;
        }

        .v-star-wrapper {
          margin-top: 18px;
          padding: 2px 0;
          text-align: center;
        }

        .v-title {
          display: flex;
          width: 80%;
          margin: 28px auto 24px auto;

          .v-line {
            flex: 1;
            position: relative;
            top: -6px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }

          .v-text {
            padding: 0 12px;
            font-weight: 700;
            font-size: 14px;
          }
        }

        .v-supports {
          width: 80%;
          margin: 0 auto;

          .support-item {
            padding: 0 12px;
            margin-bottom: 12px;
            font-size: 0;

            &:last-child {
              margin-bottom: 0;
            }

            .icon {
              display: inline-block;
              width: 16px;
              height: 16px;
              vertical-align: top;
              margin-right: 6px;
              background-size: 16px 16px;
              background-repeat: no-repeat;

              &.decrease { // TODO
                bg-image('./resource/decrease_2');
              }

              &.discount {
                bg-image('./resource/discount_2');
              }

              &.guarantee {
                bg-image('./resource/guarantee_2');
              }

              &.invoice {
                bg-image('./resource/invoice_2');
              }

              &.special {
                bg-image('./resource/special_2');
              }
            }

            .text {
              line-height: 16px;
              font-size: 12px;
            }
          }
        }

        .v-bulletin {
          width: 80%;
          margin: 0 auto;

          .v-content {
            padding: 0 12px;
            line-height: 24px;
            font-size: 12px;
          }
        }
      }
    }

    .v-detail-close {
      position: relative;
      width: 32px;
      height: 32px;
      margin: -64px auto 0 auto;
      clear: both;
      font-size: 32px;
    }
  }
}
</style>

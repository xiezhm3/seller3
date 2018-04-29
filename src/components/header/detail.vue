<template>
  <div v-show="detailShow" class="v-detail"></div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      detailShow: true
    };
  }
};
</script>

<style lang="stylus" scoped>
.v-detail {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(7, 17, 27, 0.8);
}
</style>

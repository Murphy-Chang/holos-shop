<template>
  <div class="app-wrapper">
    <div class="drawer-bg" />

    <div class="main-container">
      <div class="fixed-header">
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import Navbar from '@/layout/components/Navbar'
import AppMain from '@/layout/components/AppMain'

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain
  }
}
</script>

<style scoped lang="scss">
  @import "~@/styles/mixin.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }

  .drawer-bg {
    background: #A9A9A9;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 1;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: 100vw;
    transition: width 0.28s;
  }

</style>

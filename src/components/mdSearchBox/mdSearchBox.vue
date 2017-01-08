<template>
  <div class="md-search-box" :class="[themeClass]">
    <div class="search-marker" @mouseover="mouseOverIcon(true)" @mouseleave="mouseOverIcon(false)">
      <i class="material-icons">search</i>
    </div>
    <form action="#">
      <input :class="{'md-search-hover': hoverClass}" type="text" placeholder="Search" size="1">
    </form>
    <md-menu class="setting-marker" @mouseover.native="mouseOverIcon(true)" @mouseleave.native="mouseOverIcon(false)">
      <i class="material-icons" md-menu-trigger>gavel</i>
      <md-menu-content>
        <md-menu-item>My Item 1</md-menu-item>
        <md-menu-item>My Item 2</md-menu-item>
        <md-menu-item>My Item 3</md-menu-item>
      </md-menu-content>
    </md-menu>
    <!--i class="material-icons setting-marker">gavel</i-->
  </div>
</template>

<style lang="scss" src="./mdSearchBox.scss"></style>

<script>
  import themeMixin from '../../utils/thememixin';
  export default {
    mixins: [themeMixin],
    data: () => ({
      hoverClass: false
    }),
    methods: {
      mouseOverIcon(flag) {
        this.hoverClass = flag;
        console.log('==-=-==');
      }
    }
  };
</script>

<template>
  <div class="md-search-box" :class="[themeClass]">
    <div class="search-marker" @mouseover="mouseOverIcon(true)" @mouseleave="mouseOverIcon(false)">
      <i class="material-icons">search</i>
    </div>
    <form action="#">
      <input :class="{'md-search-hover': hoverClass}" type="text" placeholder="Search" size="1">
    </form>
    <md-menu class="setting-marker" 
      @mouseover.native="mouseOverIcon(true)" 
      @mouseleave.native="mouseOverIcon(false)" 
      md-align-trigger 
      md-direction="bottom left"
      :md-offset-x="15" :md-offset-y="5">
      <i class="material-icons" md-menu-trigger>gavel</i>
      <md-menu-content class="md-auto-width">
        <div class="md-search-setting">
          <md-checkbox name="my-test1" v-model="checkbox">Workgroup</md-checkbox>
          <md-checkbox name="my-test2" v-model="checkbox" class="md-primary">Document</md-checkbox>
          <md-checkbox name="my-test3" v-model="checkbox" class="md-warn">Topic</md-checkbox>
          <md-checkbox name="my-test3" v-model="checkbox" class="md-warn">Knowledge</md-checkbox>
        </div>
      </md-menu-content>
    </md-menu>
  </div>
</template>

<style lang="scss" src="./mdSearchBox.scss"></style>

<script>
  import themeMixin from '../../utils/ThemeMixin';
  export default {
    mixins: [themeMixin],
    data: () => ({
      hoverClass: false,
      checkbox: false
    }),
    methods: {
      mouseOverIcon(flag) {
        this.hoverClass = flag;
      }
    }
  };
</script>

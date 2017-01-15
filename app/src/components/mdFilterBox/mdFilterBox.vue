<template>
  <div class="md-filter-box" :class="[themeClass]">
    <md-button class="md-icon-button md-dense md-m-r">
      <md-icon>more_vert</md-icon>
    </md-button>
    <form action="#">
      <input :class="{'md-filter-hover': hoverClass}" type="text" placeholder="Filter" size="1">
    </form>
    <md-button class="md-icon-button md-dense md-m-r">
      <md-icon>search</md-icon>
    </md-button>
  </div>
</template>

<style lang="scss" src="./mdFilterBox.scss"></style>

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
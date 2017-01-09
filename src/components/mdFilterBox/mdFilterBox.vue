<template>
  <div class="md-filter-box" :class="[themeClass]">
    <form action="#">
      <input :class="{'md-filter-hover': hoverClass}" type="text" placeholder="Filter" size="1">
    </form>
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
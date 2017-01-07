<template>
  <div class="md-search-box" :class="[themeClass]">
    <i class="material-icons">search</i>
    <form action="#">
      <input type="text" placeholder="Search" size="1">
    </form>
  </div>
</template>

<style lang="scss" src="./mdSearchBox.scss"></style>

<script>
  import themeMixin from '../../utils/thememixin';
  export default {
    mixins: [themeMixin]
  };
</script>

<template>
  <div class="page-box">
    <md-card class="page-box-card">
      <md-toolbar class="md-dense bottom-line md-transparent">
         <md-button class="md-icon-button md-dense">
          <md-icon>more_vert</md-icon>
        </md-button>
        <md-filter-box></md-filter-box>
        <div class="md-spacer"></div>
        <md-menu>
          <md-button md-menu-trigger>
            Bottom <md-icon class="md-primary">keyboard_arrow_down</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>
      </md-toolbar>

      <md-card-area>
        <slot></slot>
      </md-card-area>
    </md-card>
  </div>
</template>

<style lang="scss">
  @import '../assets/styles/mdl-variables.scss';
  
  .md-title {
    position: relative;
    z-index: 3;
  }

  .page-box{
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
  }

  .page-box-card {
    position: relative;
    overflow: hidden;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    > .md-card-area{
      padding: $gap-size;
      display: flex;
    }
  }
</style>

<script>
  export default {
    props: {
      cardTitle: String
    },
    data: () => ({
      codeBlocks: [],
      codeString: ''
    }),
    methods: {

    }
  };
</script>

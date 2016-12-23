<template>
  <div class="page-content">
    <md-whiteframe md-elevation="1" class="main-header">
      <md-toolbar>
        <md-button class="md-icon-button " @click="toggleSidenav">
          <md-icon>menu</md-icon>
        </md-button>

        <div class="md-title">{{ pageTitle }}</div>
        <div class="gp-notif-container">
          <md-icon >email</md-icon>
          <md-icon >message</md-icon>
          <md-avatar>
            <img src="assets/images/avatar.png" alt="Avatar">
          </md-avatar>
          <md-icon>more_vert</md-icon>
        </div>

      </md-toolbar>
    </md-whiteframe>

    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/styles/mdl-variables.scss';

  .page-content {
    min-height: 100%;
    max-height: 100%;
    flex: 1;
    display: flex;
    flex-flow: column
  }

  .main-header {
    position: relative;
    z-index: 2;

    .md-toolbar {
      color: #fff !important;
    }
  }

  .nav-trigger {
    @media (min-width: $embed-sidenav-width) {
      display: none;
    }
  }

  .md-title {
    flex: 1;
 
    @media (min-width: $embed-sidenav-width) {
      margin-left: 8px;
    }
  }

  .md-toolbar {
    .md-select {
      &:after {
        color: rgba(#fff, .87);
      }
    }
  }

 .gp-notif-container{
   margin-right:5px;
   
   .md-icon{
     margin-right:5px;
   }
 }

</style>

<script>
  export default {
    props: {
      pageTitle: String
    },
    data: () => ({
      latest: null,
      currentDocs: null,
      availableDocs: []
    }),
    methods: {
      toggleSidenav() {
        this.$root.toggleSidenav();
      }
    },
    mounted() {

      document.title = this.pageTitle + ' - Vue Material';
    }
  };
</script>

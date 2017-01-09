<template>

</template>

<style lang="scss" scoped>
  @import '../assets/styles/mdl-variables.scss';


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
      },
      logon() {
        this.$root.$refs.loginBox.showLogon();
      }
    },
    mounted() {

      document.title = this.pageTitle + ' - Vue Material';
      this.$root.closeSidenav();
    }
  };
</script>

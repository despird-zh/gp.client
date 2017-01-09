<template>
  <div class="container" :class="{ 'hide-sidenav': embedSidenav }" >
    <md-sidenav class="main-sidebar md-left md-fixed" ref="main-sidebar">
      <md-toolbar class="vue-material-logo" md-theme="white">
        <router-link exact to="/">
          <img :src="logo" alt="Vue">
          <span>Vue Material</span>
        </router-link>
      </md-toolbar>

      <div class="main-sidebar-links">
        <md-list class="md-dense">
          <md-list-item>
            <router-link exact to="/">Introduction</router-link>
          </md-list-item>

          <md-list-item>
            <router-link exact to="/getting-started">Getting Started</router-link>
          </md-list-item>

          <md-list-item>
            <span>Demo Pages</span>
            <md-list-expand>
              <md-list>
                <md-list-item class="md-inset">
                  <router-link exact to="/demo">demo</router-link>
                </md-list-item>
                <md-list-item class="md-inset">
                  <router-link exact to="/demo1">Demo1 page</router-link>
                </md-list-item>
                <md-list-item class="md-inset">
                  <router-link exact to="/demo2">Demo2 page</router-link>
                </md-list-item>
                <md-list-item class="md-inset">
                  <router-link exact to="/demo3">Demo3 page</router-link>
                </md-list-item>
                <md-list-item class="md-inset">
                  <router-link exact to="/demo4">Demo4 page</router-link>
                </md-list-item>
              </md-list>
            </md-list-expand>
          </md-list-item>
          <md-list-item>
            <span>Components</span>
            <md-list-expand>
              <md-list>
                <md-list-item class="md-inset">
                  <router-link exact to="/components/avatar">Avatar</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/bottom-bar">Bottom Bar</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/button">Button</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/button-toggle">Button Toggle</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/card">Card</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/checkbox">Checkbox</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/dialog">Dialog</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/icon">Icon</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/input">Input</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/list">List</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/menu">Menu</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/radio">Radio</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/ink-ripple">Ink Ripple</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/select">Select</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/sidenav">Sidenav</router-link>
                </md-list-item>

                <!-- <md-list-item class="md-inset">
                  <router-link exact to="/components/snackbar">Snackbar</router-link>
                </md-list-item> -->

                <md-list-item class="md-inset">
                  <router-link exact to="/components/spinner">Spinner</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/subheader">Subheader</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/switch">Switch</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/tabs">Tabs</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/table">Table</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/toolbar">Toolbar</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/tooltip">Tooltip</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/whiteframe">Whiteframe</router-link>
                </md-list-item>
              </md-list>
            </md-list-expand>
          </md-list-item>
        </md-list>
      </div>
      <div class="main-sidebar-bottom">
        <md-list class="md-dense">
          <md-list-item>
            <router-link exact to="/changelog">Changelog</router-link>
          </md-list-item>

          <md-list-item>
            <router-link exact to="/about">About</router-link>
          </md-list-item>
        </md-list>
      </div>
    </md-sidenav>

    <div class="page-content">
      <md-whiteframe md-elevation="1" class="main-header">
        <md-toolbar>
          <md-button class="md-icon-button" @click="toggleSidenav">
            <md-icon>menu</md-icon>
          </md-button>
          <div class="md-title">{{ pageTitle }}</div>
          <md-search-box></md-search-box>
          <div class="gp-notif-container">
            <md-button class="md-icon-button md-dense" @click="logon">
              <md-icon >email</md-icon>
            </md-button>
            <md-button class="md-icon-button md-dense">
              <md-icon >message</md-icon>
            </md-button>
            <md-avatar class="md-dense">
              <img src="assets/images/avatar.png" alt="Avatar">
            </md-avatar>
            <md-button class="md-icon-button md-dense">
              <md-icon>more_vert</md-icon>
            </md-button>
          </div>
        </md-toolbar>
      </md-whiteframe>
      
      <transition name="md-router" appear>
        <router-view></router-view>
      </transition>
    </div>
    
    <login-box ref="logon-box"></login-box>
  </div>
</template>

<style lang="scss" src="./App.scss"></style>

<script>
  import Vue from 'vue';

  export default {
    data() {
      return {
        toolbar: true,
        theme: 'default',
        pageTitle: '',
        embedSidenav: false
      };
    },
    computed: {
      logo() {
        return 'assets/images/logo-vue-material-' + Vue.material.currentTheme + '.png';
      }
    },
    methods: {
      logon() {
        this.$refs['logon-box'].showLogon();
      },
      toggleSidenav() {
        let mediaWidth = window.innerWidth;

        // media width > 1281, apply the [hide-sidenav] to hide sidenav
        if (mediaWidth > 1281) {
          this.embedSidenav = !this.embedSidenav;
          return;
        }

        this.embedSidenav = false;

        this.$refs['main-sidebar'].toggle();
      },
      closeSidenav() {
        this.$refs['main-sidebar'].close();
      }
    }
  };
</script>

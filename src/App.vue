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

    <transition name="md-router" appear>
      <router-view></router-view>
    </transition>
    <login-box ref="loginBox"></login-box>
  </div>
</template>

<style lang="scss">
  @import './assets/styles/mdl-variables.scss';

  [v-cloak] {
    display: none;
  }

  html,
  body {
    height: 100%;
    overflow: hidden;
  }

  body {
    display: flex;
  }

  .container {
    min-height: 100%;
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    transition: $swift-ease-out;

    @media (min-width: $embed-sidenav-width){
      padding-left: $sizebar-width;
    }

    &.hide-sidenav{
      padding-left: 0;
    }
  }

  .main-sidebar.md-sidenav {
    .md-sidenav-content {
      width: $sizebar-width;
      display: flex;
      flex-flow: column;

      @media (min-width: $embed-sidenav-width) {
        top: 0;
        pointer-events: auto;
        transform: translate3d(0, 0, 0);
        box-shadow: $material-shadow-2dp;
      }
      /* reset the transform when apply .hide-sidenav on .container */
      @at-root .hide-sidenav &{
        transform: translate3D(-100%, 0, 0);
      }
    }

    .md-backdrop {
      @media (min-width: $embed-sidenav-width) {
        opacity: 0;
        pointer-events: none;
      }
    }

    .md-toolbar {
      min-height: 172px;
      border-bottom: 1px solid rgba(#000, .12);
    }

    .vue-material-logo {
      font-size: 24px;

      a {
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        color: inherit;
        text-decoration: none;

        &:hover {
          color: inherit;
          text-decoration: none;
        }
      }

      img {
        width: 160px;
        margin-bottom: 16px;
      }
    }

    .main-sidebar-links {
      overflow: auto;
      flex: 1;
      .md-inset .md-list-item-container {
        padding-left: 36px;
      }

      .md-list-item-container {
        font-size: 14px;
        font-weight: 500;
      }
    }

    .main-sidebar-bottom{
      border-top: 1px solid rgba(0, 0, 0, 0.12);

      .md-list-item-container {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }

  .main-content {
    padding: 12px;
    flex: 1;
    overflow: auto;
    background-color: #fff;
    transform: translate3D(0, 0, 0);
    transition: $swift-ease-out;
    transition-delay: .2s;
  }

  .md-router-enter-active,
  .md-router-leave-active {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;

    @media (min-width: $embed-sidenav-width) {
      left: $sizebar-width;
    }

    .main-content {
      opacity: 0;
      overflow: hidden;
    }
  }

  .md-router-leave-active {
    z-index: 1;
    transition: $swift-ease-in;
    transition-duration: .25s;
  }

  .md-router-enter-active {
    z-index: 2;
    transition: $swift-ease-out;

    .main-content {
      transform: translate3D(0, 7%, 0);
    }
  }

</style>

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

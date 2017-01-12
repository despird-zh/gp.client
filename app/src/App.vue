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
            <router-link exact to="/home">Introduction</router-link>
          </md-list-item>
          <md-list-item>
            <router-link exact to="/getting-started">Getting Started</router-link>
          </md-list-item>
          <md-list-item v-for="module in modules">
            <span>{{ module.name }}</span>
            <md-list-expand>
              <md-list>
                <md-list-item class="md-inset" v-for="route in module.routes">
                  <router-link exact :to=route.path > {{ route.name }}</router-link>
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
            <md-avatar class="md-xdense">
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
      <md-whiteframe md-elevation="2" class="page-footer">
        <span>© 2017</span> <span> Blalala</span>
      </md-whiteframe>
    </div>
    
    <login-box ref="logon-box"></login-box>
  </div>
</template>

<style lang="scss" src="./App.scss"></style>

<script>
  import Vue from 'vue';
  import { modules } from './pages/routes.js';

  export default {
    data() {
      return {
        pageTitle: '',
        embedSidenav: false
      };
    },
    computed: {
      logo() {
        return 'assets/images/logo-vue-material-' + Vue.material.currentTheme + '.png';
      },
      modules() {
        return modules;
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
    },
    mounted: function() {
      console.log(modules);
    }
  };
</script>

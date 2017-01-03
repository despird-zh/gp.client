<template>
    <md-dialog md-open-from="#fab" :md-click-outside-to-close=false md-close-to="#fab" ref="loginBox">
        <md-dialog-title>Please logon the system</md-dialog-title>

        <md-dialog-content>
            <form>
                <md-input-container>
                    <label>Login Account</label>
                    <md-input v-model="account" placeholder="enter the account"></md-input>
                </md-input-container>
                <md-input-container>
                    <label>Login Password</label>
                    <md-input v-model="password" type="password" placeholder="enter the password"></md-input>
                </md-input-container>
            </form>
        </md-dialog-content>

        <md-dialog-actions>
            <md-button class="md-primary" @click="closeLogon()">Cancel</md-button>
            <md-button class="md-primary" @click="submitLogon()">Logon</md-button>
        </md-dialog-actions>
    </md-dialog>
</template>

<style lang="scss">
  @import '../assets/styles/mdl-variables.scss';
  
</style>

<script>
import httpOptions from '../utils/jwttoken';
import {mapState, mapGetters, mapActions} from 'Vuex';

export default {
  //mixins: [httpOptions],
  data: () => ({
    account: '',
    password: ''
  }),
  computed: {
    ...mapGetters(['jwtToken'])
  },
  methods: {
    closeLogon() {
      this.$refs.loginBox.close();
    },
    submitLogon() {
      //let options = this.$httpOptions({
      //  account: this.account,
      //  credential: this.passowrd
      //});
      console.log(this.$store);
      console.log(this.jwtToken);
      //this.$http.get(this.$httpUrl('authenticate.do'), options).then(function(response) {
      //  console.log(response);
      //}, function(response) {
      //  console.log(response);
      //});
    },
    showLogon() {
      this.$refs.loginBox.open();
    }
  }
};
</script>

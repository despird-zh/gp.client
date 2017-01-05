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
import {mapState, mapGetters, mapActions} from 'vuex';

export default {
  mixins: [httpOptions],
  data: () => ({
    account: 'dev1',
    password: '1'
  }),
  computed: {
    ...mapGetters(['jwttoken', 'subject', 'audience', 'baseUrl'])
  },
  methods: {
    ...mapActions(['saveJwtToken']),
    closeLogon() {
      this.$refs.loginBox.close();
    },
    submitLogon() {
      let options = this.$httpOptions();

      let body = {
        principal: this.account,
        credential: this.password,
        audience: this.audience
      };

      this.$http.post(this.$httpUrl('authenticate.do'), body, options).then(function(response) {
        let data = response.body;

        if (data.meta.state === 'success') {
          this.saveJwtToken({subject: this.account, jwttoken: data.data});
          this.closeLogon();
        }
      }, function(response) {
        console.log(response);
      });
    },
    showLogon() {
      this.$refs.loginBox.open();
    }
  }
};
</script>

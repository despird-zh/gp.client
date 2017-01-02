import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'jwttoken',
      'subject',
      'baseUrl'
    ])
  },
  methods: {
    $httpOptions(options) {

      options['headers'] = {
        AuthJwtToken: this.jwttoken
      };

      return options;
    },
    $httpUrl(url) {

      return this.baseUrl + url;
    }
  }
};

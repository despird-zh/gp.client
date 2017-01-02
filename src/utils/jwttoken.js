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

      if (this.jwttoken) {
        options['headers'] = {
          AuthJwtToken: this.jwttoken
        };
      }
      return options;
    },
    $httpUrl(url) {

      return this.baseUrl + url;
    }
  }
};

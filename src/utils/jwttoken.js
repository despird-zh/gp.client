

export default {

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

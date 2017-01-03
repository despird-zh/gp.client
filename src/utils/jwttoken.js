

export default {

  methods: {
    $httpOptions(options) {
      let httpOpts = { params: options};

      if (this.jwttoken) {
        httpOpts['headers'] = {
          AuthJwtToken: this.jwttoken
        };
      }
      return httpOpts;
    },
    $httpUrl(url) {

      return this.baseUrl + url;
    }
  }
};

const SAVE_JWT_TOKEN = 'SAVE_JWT_TOKEN';
const RESET_JWT_TOKEN = 'RESET_JWT_TOKEN';

export const types = {
  SAVE_JWT_TOKEN,
  RESET_JWT_TOKEN
};

export const state = {
  authenticated: false,
  token: {
    account: '',
    jwttoken: ''
  }
};

export const mutations = {
  [SAVE_JWT_TOKEN](state, {account, jwttoken }) {
    state.token.account = account;
    state.token.jwttoken = jwttoken;
  }
};

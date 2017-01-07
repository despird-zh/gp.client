// define all the components used across pages.
import Vue from 'vue';

import SearchBox from './mdSearchBox';
import PageContent from './PageContent';
import PageBox from './PageBox';
import LoginBox from './LoginBox';

Vue.use(SearchBox);
Vue.component('page-content', PageContent);
Vue.component('page-box', PageBox);
Vue.component('login-box', LoginBox);


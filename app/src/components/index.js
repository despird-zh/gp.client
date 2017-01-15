// define all the components used across pages.
import Vue from 'vue';

import SearchBox from './mdSearchBox';
import FilterBox from './mdFilterBox';
import FilterList from './mdFilterList/mdFilterList';
import PageBox from './PageBox';
import PageTab2Box from './PageTab2Box';
import LoginBox from './LoginBox';
// custom theme
import MdExtTheme from '../assets/styles/mdl-ext.theme';
Vue.material.styles.push(MdExtTheme);

Vue.use(SearchBox);
Vue.use(FilterBox);
Vue.component('filter-list', FilterList);
Vue.component('page-box', PageBox);
Vue.component('page-tab2-box', PageTab2Box);
Vue.component('login-box', LoginBox);


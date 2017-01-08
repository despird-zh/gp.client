import MdSearchBox from './mdSearchBox.vue';
import MdSearchBoxTheme from './mdSearchBox.theme';

export default function install(Vue) {
  Vue.component('md-search-box', Vue.extend(MdSearchBox));

  Vue.material.styles.push(MdSearchBoxTheme);
}

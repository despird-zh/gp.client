import MdFilterBox from './mdFilterBox.vue';
import MdFilterBoxTheme from './mdFilterBox.theme';

export default function install(Vue) {
  Vue.component('md-filter-box', Vue.extend(MdFilterBox));

  Vue.material.styles.push(MdFilterBoxTheme);
}

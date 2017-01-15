<template>
  <md-menu
    md-align-trigger 
    md-direction="bottom left"
    :md-offset-x="10" :md-offset-y="0">
    <button md-menu-trigger class="md-button" 
    :class="[themeClass]" 
    :disabled="disabled" >
      <md-ink-ripple :md-disabled="disabled"></md-ink-ripple>
      {{ name }} <md-icon>keyboard_arrow_down</md-icon>
    </button>
    <md-menu-content>
      <md-menu-item v-for="item in items" v-on:click="itemClick(item.name)">
        <md-checkbox ref="checkBoxes" v-on:change="itemChange(item.name)" :name="item.name">{{ item.name }}</md-checkbox>
      </md-menu-item>
    </md-menu-content>
  </md-menu>
</template>

<script>
import themeMixin from '../../utils/ThemeMixin';
export default {
  mixins: [themeMixin],

  props: {
    disabled: Boolean,
    multiple: false,
    setting: {
      type: Object,
      default: {}
    }
  },
  data: function() {
    return {
      items: this.setting.items,
      name: this.setting.name
    };
  },
  methods: {
    itemChange(itemName) {
      this.changeItem(itemName);
    },
    itemClick(itemName) {
      this.changeItem(itemName);
    },
    changeItem(itemName) {
      let chectboxItems = this.$refs['checkBoxes'];

      let checkboxItem = chectboxItems.find((item) => {
        return itemName === item.name;
      });

      console.log(checkboxItem );
    }
  }
};
</script>
<template>
  <md-menu ref="menu-el"
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
      <md-list-item v-for="item in items" v-on:click="itemClick(item.name, 'menuitem')">
        <md-checkbox ref="checkBoxes" 
          v-on:change="itemClick(item.name,'checkbox')" 
          :value="item.value"
          :name="item.name">{{ item.name }}</md-checkbox>
      </md-list-item>
    </md-menu-content>
  </md-menu>
</template>

<script>
import themeMixin from '../../utils/ThemeMixin';

export default {
  mixins: [themeMixin],

  props: {
    disabled: Boolean,
    multiple: {type: Boolean, default: false},
    name: String,
    items: {
      type: Array,
      default: function() {
        return [{
          name: 'Default Name',
          value: false
        }];
      }
    }
  },
  data: function() {
    return {
      value: this.multiple ? [] : ''
    };
  },
  methods: {
    itemClick(itemName, source) {
      // here item is the component
      let checkboxItem = this.$refs['checkBoxes'].find((item) => {
        return itemName === item.name;
      });

      // menu item manually change state
      if (source === 'menuitem') {
        checkboxItem.checked = !checkboxItem.checked;
      }

      if (checkboxItem.checked && !this.multiple) {
        for (let cItem of this.$refs['checkBoxes']) {
          if (cItem.name !== checkboxItem.name && cItem.checked) {
            cItem.checked = false;
          }
        }
      }
      this.refreshValue();
    },
    refreshValue() {
      let chectboxItems = this.$refs['checkBoxes'];

      this.value = this.multiple ? [] : '';
      // iterate checkbox components
      for (let checkboxItem of chectboxItems) {
        // accumulate the multiple item state and values
        if (this.multiple) {
          if (checkboxItem.checked) {
            this.value.push(checkboxItem.name);
          }
        } else if (checkboxItem.checked) {
          this.value = checkboxItem.name;
          break;
        }
      }

      this.$emit('change', this.value);
    }
  }
};
</script>
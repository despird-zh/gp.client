<template>
  <page-content page-title="Demo">
    <div class="main-content">
      <md-tabs :md-dynamic-height="false" class="md-transparent" v-if="slotNames.length > 1 || !$slots.default">
        <md-tab class="api-tab" md-label="Properties">
          <div>slslslsl</div>
        </md-tab>

        <md-tab class="api-tab" md-label="Classes">
          <div>tttttt</div>
        </md-tab>

        <md-tab class="api-tab" md-label="Events" >
          <div>hjkghjk</div>
        </md-tab>

        <md-tab class="api-tab" md-label="Methods" >
          <div>asdfsadf</div>
        </md-tab>
      </md-tabs>
    </div>
  </page-content>
</template>

<style lang="scss" scoped>
  .api-table + .api-table {
    margin-top: 42px;
  }

  .api-tab {
    padding: 0;
  }

  .md-title {
    margin-bottom: 12px;
  }
</style>

<script>
  export default {
    props: {
      name: String
    },
    computed: {
      slotNames() {
        return Object.keys(this.$slots);
      }
    }
  };
</script>
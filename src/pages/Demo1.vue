<template>
  <page-content page-title="Demo">
    <div class="main-content page-layout">
      <div class="page-content">
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
      <div class="page-rightnav">
        <span>slldflf</span>
      </div>
    </div>
  </page-content>
</template>

<style lang="scss" scoped>
  .page-layout{
    display: flex;

    .page-content{
      flex-grow: 1;
    }

    .page-rightnav{
      flex: 0 0 20%;
    }
  }
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
<template>
  <div>
    <md-card class="page-box-card">
      <md-toolbar md-theme="white" class="md-dense">
        <h3 class="md-title">{{ cardTitle }}</h3>
      </md-toolbar>

      <md-card-area>
        <md-tabs md-right :md-dynamic-height="false" class="md-transparent page-tabs">
          <md-tab md-label="n" md-active>
            <slot name="demo"></slot>
          </md-tab>

          <md-tab md-label="Code">
            <slot name="code"></slot>
          </md-tab>
        </md-tabs>
      </md-card-area>
    </md-card>
  </div>
</template>

<style lang="scss">

  .md-title {
    position: relative;
    z-index: 3;
  }

  .page-tabs {
    margin-top: -48px;

    @media (max-width: 480px) {
      margin-top: -1px;
      background-color: #fff;
    }
  }

  .page-box-card {
    position: relative;
    overflow: hidden;
    flex: 1;
  }

  

</style>

<script>
  export default {
    props: {
      cardTitle: String
    },
    data: () => ({
      codeBlocks: [],
      codeString: ''
    }),
    methods: {

    }
  };
</script>

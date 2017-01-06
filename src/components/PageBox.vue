<template>
  <div class="page-box">
    <md-card class="page-box-card">
      <md-toolbar md-theme="white" class="md-dense">
        <h3 class="md-title">{{ cardTitle }}</h3>
      </md-toolbar>

      <md-card-area>
        <md-tabs md-right :md-dynamic-height="false" class="md-transparent page-tabs">
          <md-tab md-label="Sample" md-active>
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
  @import '../assets/styles/mdl-variables.scss';
  
  .md-title {
    position: relative;
    z-index: 3;
  }

  .page-box{
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
  }

  .page-tabs {
    margin-top: -$tabs-nav-height;

    .md-tab{
      padding: $gap-size;
    }
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

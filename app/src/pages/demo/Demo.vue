<template>
    <div class="main-content">
      <md-card class="example-box-card">
        <md-toolbar md-theme="white" class="md-dense">
            <h3 class="md-title">this a demo page name</h3>
        </md-toolbar>

        <md-card-area>
            <md-tabs md-right :md-dynamic-height="true" class="md-transparent example-tabs">
            <md-tab class="example-content" md-label="Demo">
                <div >
                    <p>Tabs11111 enable content organization at a high level, such as switching between views, data sets, or functional aspects of an app.</p>
                    <p>The following classes can be applied to change the color palette:</p>
                    <ul class="md-body-2">
                    <li><code>md-accent</code></li>
                    <li><code>md-warn</code></li>
                    <li><code>md-transparent</code></li>
                    </ul>
                </div>
            </md-tab>

            <md-tab class="code-content" md-label="Code">
                <div >
                    <p>Tabs23453245 enable content organization at a high level, such as switching between views, data sets, or functional aspects of an app.</p>
                    <p>The following classes can be applied to change the color palette:</p>
                    <ul class="md-body-2">
                    <li><code>md-accent</code></li>
                    <li><code>md-warn</code></li>
                    <li><code>md-transparent</code></li>
                    </ul>
                </div>
            </md-tab>
            </md-tabs>
        </md-card-area>

      </md-card>
    </div>
</template>

<style lang="scss" scoped>
  .md-title {
    position: relative;
    z-index: 3;
  }
  .example-tabs {
    margin-top: -48px;

    @media (max-width: 480px) {
      margin-top: -1px;
      background-color: #fff;
    }
  }
</style>

<script>
  import routePage from '../common/RoutePage';
  export default {
    mixins: [routePage],
    data: function() {
      return {
        initialValue: 'Demo2 Value'
      };
    },
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

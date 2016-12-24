<template>
  <page-content page-title="Demo">
    <div class="main-content page-layout">
      <div class="page-content">
      <md-tabs :md-dynamic-height="false" class="md-transparent" ref="page_tabs" v-if="slotNames.length > 1 || !$slots.default">
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
        <md-card class="md-m-b">
          <md-card-header>
            <md-avatar>
              <img src="assets/images/avatar.png" alt="People">
            </md-avatar>

            <div class="md-title">Title goes here</div>
            <div class="md-subhead">Subtitle here</div>
          </md-card-header>

          <md-card-media>
            <img src="assets/images/card-image-1.jpg" alt="People">
          </md-card-media>

          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
          </md-card-content>

          <md-card-actions>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </md-card-actions>
        </md-card>
        <md-whiteframe md-elevation="2" class="md-m-b">
        <md-tabs >
          <md-tab id="movies" md-label="Movies">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
          </md-tab>

          <md-tab id="music" md-label="Music">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
          </md-tab>

          <md-tab id="books" md-label="Books">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
          </md-tab>

        </md-tabs>
        </md-whiteframe>
      </div>
    </div>
  </page-content>
</template>

<style lang="scss" scoped>
  @import '../assets/styles/mdl-variables';
  
  .page-layout{
    position: relative;
    z-index: 1;
    display: flex;

    .page-content{
      flex-grow: 1;
      padding-right: $gap-size;
    }

    .page-rightnav{
      flex: 0 0 320px;
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
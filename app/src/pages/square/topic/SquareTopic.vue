<template>
    <div class="main-content page-layout">
      <page-box card-title="Flat">
        <div class="tab-page-body">
            <md-list class="custom-list md-triple-line md-dense">
              <md-list-item>
                <md-avatar class="md-xdense">
                  <img src="assets/images/avatar-2.jpg" alt="People">
                </md-avatar>

                <div class="md-list-text-container">
                  <span>Ali Connors</span>
                  <span>Brunch this weekend?</span>
                  <p>I'll be in your neighborhood doing errands...</p>
                </div>

                <md-button class="md-icon-button md-list-action">
                  <md-icon class="md-primary">star</md-icon>
                </md-button>

                <md-divider class="md-inset"></md-divider>
              </md-list-item>

            </md-list>
          </div>
          <div class="tab-page-toolbar">
            <md-button class="md-fab md-xmini md-primary">
              <md-icon>save</md-icon>
            </md-button>
            <md-button class="md-fab md-xmini md-clean">
              <md-icon>dialpad</md-icon>
            </md-button>
          </div>
      </page-box>
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
            <md-button class="md-icon-button md-dense md-primary">
              <md-icon>save</md-icon>
            </md-button>
            <md-button class="md-icon-button md-primary">
              <md-icon>more_vert</md-icon>
            </md-button>

            <md-button class="md-icon-button md-accent">
              <md-icon>more_vert</md-icon>
            </md-button>

            <md-button class="md-icon-button md-warn">
              <md-icon>more_vert</md-icon>
            </md-button>
            <md-button class="md-fab md-clean md-xmini">
              <md-icon>dialpad</md-icon>
            </md-button>
            <md-button>Action</md-button>
          </md-card-actions>
        </md-card>
        <md-whiteframe md-elevation="2" class="md-m-b">
        <md-tabs class="md-transparent">
          <md-tab id="movies" md-label="Groups">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
          </md-tab>

          <md-tab id="music" md-label="Folders">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
          </md-tab>

          <md-tab id="books" md-label="Chats">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
          </md-tab>

        </md-tabs>
        </md-whiteframe>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  @import '../../../assets/styles/mdl-variables';
  
  .md-card-area{
    display: flex;

    .tab-page-body{
      flex-grow: 1;
      flex-shrink: 1;

      .custom-list{
        padding: 0;
      }
    }

    .tab-page-toolbar{
      flex: 0 0 50px;
      display: flex;
      flex-direction: column;
    }
  }
  .page-layout{

    display: flex;

    .page-box{
      padding-right: $gap-size;
    }

    .page-rightnav{
      flex: 0 0 $page-rightnav-width;
    }
  }

  .md-title {
    margin-bottom: 12px;
  }
</style>

<script>
  import routePage from '../../common/RoutePage';
  export default {
    mixins: [ routePage ],
    data: function() {
      return {
        initialValue: 'Demo2 Value'
      };
    },
    props: {
      name: String
    },
    beforeDestroy: function() {
      console.log('before destroy');
    }
  };
</script>
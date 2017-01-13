<template>
    <div class="main-content page-layout">
      <div class="page-box">
        <md-card class="page-box-card">
          <md-toolbar class="md-dense bottom-line md-transparent">
            <md-button class="md-icon-button md-dense">
              <md-icon>more_vert</md-icon>
            </md-button>
            <md-filter-box></md-filter-box>
            <div class="md-spacer"></div>
            <md-menu>
              <md-button md-menu-trigger>
                Bottom <md-icon class="md-primary">keyboard_arrow_down</md-icon>
              </md-button>

              <md-menu-content>
                <md-menu-item>My Item 1</md-menu-item>
                <md-menu-item>My Item 2</md-menu-item>
                <md-menu-item>My Item 3</md-menu-item>
              </md-menu-content>
            </md-menu>
          </md-toolbar>

          <md-card-area>
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
          </md-card-area>
        </md-card>
      </div>
      <div class="page-rightnav">
        <md-card class="md-m-b">
          <md-card-header class="md-p-tb">
            <md-avatar>
              <img src="assets/images/avatar.png" alt="People">
            </md-avatar>

            <div class="md-title">Title goes here</div>
            <div class="md-subhead">Subtitle here</div>
          </md-card-header>

          <md-card-content class="md-p-b-none">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
          </md-card-content>

          <md-card-actions>
            <md-button class="md-fab md-xmini md-primary md-m-r">
              <md-icon>save</md-icon>
            </md-button>
            <md-button class="md-fab md-primary md-xmini md-m-r">
              <md-icon>more_vert</md-icon>
            </md-button>
            <md-button class="md-fab md-warn md-xmini md-m-r">
              <md-icon>more_vert</md-icon>
            </md-button>
            <md-button class="md-fab md-clean md-xmini md-m-r">
              <md-icon>dialpad</md-icon>
            </md-button>
          </md-card-actions>
          
        </md-card>
        <md-whiteframe md-elevation="2" class="md-spacer">
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

  .page-layout{
    display: flex;

    .page-box{
      flex-grow: 1;
      flex-shrink: 1;
      display: flex;
      padding-right: $gap-size;

      > .page-box-card {

        position: relative;
        overflow: hidden;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0;

        > .md-card-area{
          padding: $gap-size;
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
      }
    }

    .page-rightnav{
      flex: 0 0 $page-rightnav-width;
      display: flex;
      flex-direction: column;
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
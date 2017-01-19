<template>
    <div class="main-content page-layout">
      <div class="page-box">
        <md-card class="page-box-card">
          <md-toolbar class="md-dense bottom-line md-transparent">
            
            <md-filter-box></md-filter-box>
            <div class="md-spacer"></div>
            <filter-list :name="classFilterSetting.name" :items="classFilterSetting.items" v-on:change="onClassFilterChange"></filter-list>
            <md-menu
              md-align-trigger 
              md-direction="bottom left"
              :md-offset-x="10" :md-offset-y="0">
              <md-button md-menu-trigger>
                Origin <md-icon>keyboard_arrow_down</md-icon>
              </md-button>
              <md-menu-content>
                <md-menu-item>Internal</md-menu-item>
                <md-menu-item>External</md-menu-item>
              </md-menu-content>
            </md-menu>
            <md-menu
              md-align-trigger 
              md-direction="bottom left"
              :md-offset-x="10" :md-offset-y="0">
              <md-button md-menu-trigger>
                STATE <md-icon>keyboard_arrow_down</md-icon>
              </md-button>
              <md-menu-content>
                <md-menu-item>Close</md-menu-item>
                <md-menu-item>Open</md-menu-item>
              </md-menu-content>
            </md-menu>
            <md-menu 
              md-align-trigger 
              md-direction="bottom left"
              :md-offset-x="10" :md-offset-y="0">
              <md-button md-menu-trigger>
                Create <md-icon>keyboard_arrow_down</md-icon>
              </md-button>
              <md-menu-content>
                <md-menu-item>1 Month</md-menu-item>
                <md-menu-item>3 Months</md-menu-item>
                <md-menu-item>6 Months</md-menu-item>
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
                    <span>Asian China Sina Cooperation Group</span>
                    <span>This is group aims at co-work between local and remote people</span>
                    <p>this is latest news I'll be in your neighborhood doing errands...</p>
                  </div>

                  <md-button class="md-icon-button md-xmini md-list-action">
                    <md-icon class="md-primary">merge_type</md-icon>
                  </md-button>
                  <md-button class="md-icon-button md-xmini md-list-action">
                    <md-icon class="md-primary">star</md-icon>
                  </md-button>
                  <md-divider class="md-inset"></md-divider>
                </md-list-item>

              </md-list>
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
          <md-card-content class="md-p-b-none md-flex-row">
            <div class="sum-item md-p-rb">
                <md-icon class="md-m-r">ac_unit</md-icon>
                <span>234</span>
            </div>
            <div class="sum-item md-p-rb">
              <md-icon class="md-m-r">group</md-icon>
              <span>1,234</span>
            </div>
            <div class="sum-item md-p-rb">
              <md-icon class="md-m-r">insert_drive_file</md-icon>
              <span>1,234</span>
            </div>
            <div class="sum-item md-p-rb">
              <md-icon class="md-m-r">announcement</md-icon>
              <span>1,234</span>
            </div>
          </md-card-content>
          <md-card-content class="md-p-tb">
            display the group search result
          </md-card-content>

          <md-card-actions>
           
            <md-button class="md-fab md-clean md-xmini md-m-r">
              <md-icon>swap_horiz</md-icon>
            </md-button>
          </md-card-actions>
          
        </md-card>
        <md-whiteframe md-elevation="2" class="md-spacer">
          <md-tabs class="md-transparent">
            <md-tab id="movies" md-label="Labels" class="md-p">
              <md-chip class="md-m-rb">Marcos</md-chip><md-chip class="md-m-rb">Moura</md-chip>
              <md-chip class="md-m-rb">Marcos</md-chip><md-chip class="md-m-rb">Moura</md-chip><md-chip>Mourab</md-chip>
            </md-tab>
            <md-tab id="music" md-label="Classification" class="md-p">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
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

      .sum-item{
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 33%;
      }
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
        classFilterSetting: {
          name: 'CLS. LV',
          items: [
            {name: 'Top Secret', value: false},
            {name: 'Secret', value: false},
            {name: 'Credential', value: false},
            {name: 'Not Classified', value: true}
          ]
        }
      };
    },
    props: {
      name: String
    },
    methods: {
      onClassFilterChange(value) {
        console.log('-- val' + value);
      }
    },
    mounted: function() {
      this.classFilterSetting = {
        name: 'CLS. LV',
        items: [
          {name: 'Top Secret', value: false},
          {name: 'Secret', value: false},
          {name: 'Credential', value: false},
          {name: 'Not Classified', value: true}
        ]
      };
    },
    beforeDestroy: function() {
      console.log('before destroy');
    }
  };
</script>
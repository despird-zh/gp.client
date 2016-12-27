<template>
  <page-content page-title="Demo1">
    <div class="main-content page-layout">
      <div class="page-content">
      <md-toolbar class="page-toolbar md-transparent">
        <md-button class="md-icon-button md-raised md-dense">
          <md-icon>add</md-icon>
        </md-button>
        <md-button class="md-icon-button md-raised md-dense">
          <md-icon>add</md-icon>
        </md-button>
        <md-button class="md-icon-button md-raised md-dense">
          <md-icon>add</md-icon>
        </md-button>
      </md-toolbar>
      <md-tabs :md-dynamic-height="false" class="md-transparent" ref="pageTabs" v-if="slotNames.length > 1 || !$slots.default">
        <md-tab class="api-tab" md-label="Properties">
          <div class="md-p">
            <form novalidate @submit.stop.prevent="submit">
              <md-input-container>
                <label>Initial value</label>
                <md-input v-model="initialValue"></md-input>
              </md-input-container>

              <md-input-container>
                <label>With label</label>
                <md-input placeholder="My nice placeholder"></md-input>
              </md-input-container>

              <md-input-container md-inline>
                <label>Inline field</label>
                <md-input></md-input>
              </md-input-container>

              <md-input-container>
                <label>Number</label>
                <md-input type="number"></md-input>
              </md-input-container>

              <md-input-container>
                <label>Textarea</label>
                <md-textarea></md-textarea>
              </md-input-container>

              <md-input-container>
                <label>Disabled</label>
                <md-input disabled></md-input>
              </md-input-container>
            </form>
          </div>
        </md-tab>

        <md-tab class="api-tab" md-label="Classes">
<div class="phone-viewport">
  <md-list class="custom-list md-triple-line">
    <md-list-item>
      <md-avatar>
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

    <md-list-item>
      <md-avatar>
        <img src="assets/images/avatar-2.jpg" alt="People">
      </md-avatar>

      <div class="md-list-text-container">
        <span>me, Scott, Jennifer</span>
        <span>Summer BBQ</span>
        <p>Wish I could come, but I'm out of town ...</p>
      </div>

      <md-button class="md-icon-button md-list-action">
        <md-icon>star_border</md-icon>
      </md-button>

      <md-divider class="md-inset"></md-divider>
    </md-list-item>

    <md-list-item>
      <md-avatar>
        <img src="assets/images/avatar-2.jpg" alt="People">
      </md-avatar>

      <div class="md-list-text-container">
        <span>Sandra Adams</span>
        <span>Oui oui</span>
        <p>Do you have Paris recommendations ...</p>
      </div>

      <md-button class="md-icon-button md-list-action">
        <md-icon>star_border</md-icon>
      </md-button>

      <md-divider class="md-inset"></md-divider>
    </md-list-item>

    <md-list-item>
      <md-avatar>
        <img src="assets/images/avatar-2.jpg" alt="People">
      </md-avatar>

      <div class="md-list-text-container">
        <span>Trevor Hansen</span>
        <span>Order confirmation</span>
        <p>Thank you for your recent order from ...</p>
      </div>

      <md-button class="md-icon-button md-list-action">
        <md-icon>star_border</md-icon>
      </md-button>

      <md-divider class="md-inset"></md-divider>
    </md-list-item>
  </md-list>
</div>
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
      flex-shrink: 1;
      padding-right: $gap-size;
      
      .page-toolbar{
        display: flex;
        justify-content: flex-end;
        height: $tabs-nav-height;
        min-height: $tabs-nav-height;
        margin-bottom: -$tabs-nav-height;
      }
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
    },
    methods: {

    }
  };
</script>
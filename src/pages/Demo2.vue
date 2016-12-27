<template>
  <page-content page-title="Demo2">
    <div class="main-content page-layout">
      <page-box class="page-content" card-title="Flat">
        <div slot="demo">
            <md-button>Default</md-button>
            <md-button class="md-primary">Primary</md-button>
            <md-button class="md-accent">Accent</md-button>
            <md-button class="md-warn">Warn</md-button>
            <md-button class="md-primary" disabled>Disabled</md-button>
            <md-button class="md-dense">Dense</md-button>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-button&gt;Default&lt;/md-button&gt;
              &lt;md-button class=&quot;md-primary&quot;&gt;Primary&lt;/md-button&gt;
              &lt;md-button class=&quot;md-accent&quot;&gt;Accent&lt;/md-button&gt;
              &lt;md-button class=&quot;md-warn&quot;&gt;Warn&lt;/md-button&gt;
              &lt;md-button class=&quot;md-primary&quot; disabled&gt;Disabled&lt;/md-button&gt;
              &lt;md-button class=&quot;md-dense&quot;&gt;Dense&lt;/md-button&gt;
            </code-block>
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
            <md-button>Action</md-button>
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
      display: flex;
      padding-right: $gap-size;
    }

    .page-rightnav{
      flex: 0 0 320px;
    }
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
    }
  };
</script>
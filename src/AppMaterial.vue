<template>
  
 <div class="app-viewport" id="app">
  <md-sidenav class="md-left md-fixed" ref="sidebar">
    <md-list>
      <md-list-item @click="$refs.sidebar.toggle()" class="md-primary" href="#/">
        <md-icon>insert_drive_file</md-icon> <span>Home</span>
      </md-list-item>
  
      <md-list-item @click="$refs.sidebar.toggle()" href="#/hello">
        <md-icon>people</md-icon> <span>Hello</span>
      </md-list-item>

      <md-list-item @click="$refs.sidebar.toggle()" href="#/material-persons">
        <md-icon>people</md-icon> <span>Persons</span>
      </md-list-item>
      

    </md-list>
  </md-sidenav>
  
  <md-whiteframe md-elevation="3" class="main-toolbar">
    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <md-button class="md-icon-button" @click="$refs.sidebar.toggle()">
          <md-icon>menu</md-icon>
        </md-button>
  
        <span style="flex: 1"></span>
  
        <md-button class="md-icon-button">
          <md-icon>search</md-icon>
        </md-button>
  
        <md-button class="md-icon-button">
          <md-icon>view_module</md-icon>
        </md-button>
      </div>
  
      <div class="md-toolbar-container">
        <h2 class="md-title">My gov.fr</h2>
  <!--
        <md-button class="md-fab md-mini">
          <md-icon>add</md-icon>
        </md-button> -->
      </div>
    </md-toolbar>
  </md-whiteframe>
  
  <main class="main-content">
    <router-view></router-view>
  </main>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
html,
body,
.app-viewport 
{
  height: 100%;
  overflow: hidden;
}

.app-viewport {
  display: flex;
  flex-flow: column;
}

.main-toolbar {
  position: relative;
  z-index: 10;
}

.md-fab {
  margin: 0;
  position: absolute;
  bottom: -20px;
  left: 16px;
  z-index: 10;
  
  .md-icon {
    color: #fff;
  }
}

.md-title {
  padding-left: 8px;
  color: #fff;
}

.main-content {
  position: relative;
  z-index: 1;
  overflow: auto;
}

.md-list-action .md-icon {
  color: rgba(#000, .26);
}

.md-avatar-icon .md-icon {
  color: #fff !important;
}

.md-sidenav .md-list-text-container > :nth-child(2) {
  color: rgba(#fff, .54);
}

.md-account-header {
  .md-list-item:hover .md-button:hover {
    background-color: inherit;
  }

  .md-avatar-list .md-list-item-container:hover {
    background: none !important;
  }
}
</style>

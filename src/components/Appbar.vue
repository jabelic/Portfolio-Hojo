<template>
<header>
    <v-app-bar
      app
      color="white"
      height="70"
      shrink-on-scroll
    >
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    
      <v-avatar
        class="mr-3"
        color="grey lighten-5"
        size="70"
      >
        <v-img
          contain
          max-height="90%"
          src="../assets/icon.png"
        ></v-img>
      </v-avatar>

      <v-toolbar-title style="font-weight:bold;">
          絵画工房 空蝉
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
      >

    <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :href="item.scroll"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list>

          
      </v-navigation-drawer>

      </header>
</template>

<script>
export default {
    data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-view-dashboard' , scroll: '/#hero'},
          { title: 'About me', icon: 'mdi-image', scroll: '#about-me'},
          { title: 'Menu', icon: 'mdi-cash-usd-outline', scroll: '#menu'},
          { title: 'Caution', icon: 'mdi-alert-circle', scroll: '#description'},
          { title: 'Order flow', icon: 'mdi-human-greeting-proximity', scroll: '#procedure'},
          { title: 'Order', icon: 'mdi-cart', scroll: '#contact'},
        ],
        right: null,
        drawer: false,
      }
    },
    methods: {
      scroll() {
        cancelScroll = this.$scrollTo(element, duration, options)
      }
    }
  }
</script>

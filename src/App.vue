<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  mounted() {
            document.title = `絵画工房 空蝉`;
            document.querySelector('meta[name="description"]').setAttribute('content', '絵画工房 空蝉');
            this.$ga.page('/');
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Noto+Serif+JP");

* :not(.v-icon) {
  font-family: "Noto Serif JP"!important;
}

</style>

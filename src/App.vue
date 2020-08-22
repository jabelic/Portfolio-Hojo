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
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Noto+Serif+JP");

.jp {
  font-family: "Noto Serif JP";
}

* :not(.v-icon) {
  font-family: "Noto Serif JP"!important;
}

</style>
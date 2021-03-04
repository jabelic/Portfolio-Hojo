<template>
  <v-app id="app">
    <v-main>
      <vdialog :isDialogOpened="isDialogOpened" persistent />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import vdialog from "./components/Vdialog.vue";

export default {
  components: { vdialog },
  name: "App",
  head: {
    link() {
      return [
        {
          href:
            "https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css",
        },
        { href: "https://fonts.googleapis.com/css?family=Material+Icons" },
      ];
    },
  },
  data: () => ({
    isDialogOpened: true,
  }),
  mounted() {
    document.title = `絵画工房 空蝉`;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", "絵画工房 空蝉");
    this.$ga.page("/");
    this.isDialogOpened = true;
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Noto+Serif+JP");

* :not(.v-icon) {
  font-family: "Noto Serif JP" !important;
}
</style>

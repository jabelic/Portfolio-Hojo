<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialogStatus"
      persistent
      width="100%"
      class="justify-center"
    >
      <v-card height="100%" width="100%" class="justify-center pink lighten-5">
        <v-col>
          <!-- スマホ表示 -->
          <v-card-title
            class="text-subtitle-1 headline justify-center d-flex d-sm-none"
            v-text="item.title"
          ></v-card-title>
          <!-- スマホ以外表示 -->
          <v-card-title
            class="text-h5 headline justify-center d-none d-sm-flex"
            v-text="item.title"
          ></v-card-title>
        </v-col>
        <v-spacer />
        <v-col>
          <!-- スマホ表示 -->
          <v-card-text
            class="text-body-2 text-center card-subtitle-centering d-flex d-sm-none"
            v-text="item.description"
          >
          </v-card-text>
          <!-- スマホ以外表示 -->
          <v-card-text
            class="text-h6 text-center card-subtitle-centering d-none d-sm-flex"
            v-text="item.description"
          >
          </v-card-text>
          南條なぎ
        </v-col>
        <v-spacer />
        <v-img width="100%" src="../assets/hero.png"></v-img>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    isDialogOpened: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      dialogStatus: this.isDialogOpened,
      item: {
        title: "【廃業のお知らせ】",
        description: `
          私事ではございますが、持病の悪化のため、しばらく病気療養をさせていただくことになりました。
          つきましては、一度こちらの絵師事業の方を廃業いたすことになりました。
          誠に遺憾ではございますが、ご理解をいただきますと幸いでございます。`,
      },
    };
  },
  mounted() {
    console.debug(this.isDialogOpened);
  },
  methods: {},
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 220;
        case "sm":
          return 400;
        case "md":
          return 500;
        case "lg":
          return 600;
        case "xl":
          return 800;
      }
    },
  },
};
</script>

<style scoped>
.card-title-centering {
  text-align: center;
  width: 50%;
}
</style>

<template>
    <section id="about-me">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-1 font-weight-bold mb-3">ABOUT ME</h2>

          <v-responsive
            class="mx-auto mb-8"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-responsive
            class="mx-auto subtitle font-weight-light mb-8"
            max-width="720"
          >
          女の子のイラストを中心に描いています。
          </v-responsive>

          <v-avatar
            class="elevation-12 mb-12"
            size="128"
          >
            <v-img src="../assets/icon.png"></v-img>
          </v-avatar>

          <v-responsive
          style="font-size: 30px;"
          class="mx-auto font-weight-light mb-6"
          max-width="360">南條　なぎ</v-responsive>

          <v-btn
            color="grey"
            href="https://www.pixiv.net/en/users/57734105"
            outlined
            large
            target="_blank"
          >
            <span class="grey--text text--darken-1 font-weight-bold">
              Pixiv
            </span>
          </v-btn>
          <p></p>
          <v-btn
            color="grey"
            href="https://twitter.com/ohanatm_bba"
            outlined
            large
            target="_blank"
          >
            <span class="grey--text text--darken-1 font-weight-bold">
              Twitter
            </span>
          </v-btn>
          <p></p>
          <v-btn
            color="grey"
            href="https://skima.jp/profile?id=143434"
            outlined
            large
            target="_blank"
          >
            <span class="grey--text text--darken-1 font-weight-bold">
              skima
            </span>
          </v-btn>

          <br><br>
          <v-btn
            class="align-self-end"
            fab
            outlined
            @click="$vuetify.goTo('#menu')"
          >
            <v-icon>mdi-chevron-double-down</v-icon>
          </v-btn>
        </v-container>

        <div class="py-12"></div>
      </section>
</template>

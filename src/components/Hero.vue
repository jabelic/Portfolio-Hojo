<template>
    <section id="hero">
        <v-row no-gutters>
          <v-img
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            src="../assets/hero.png"
          >
            <v-theme-provider dark>
              <v-container fill-height>
                <v-row
                  align="center"
                  class="gray--text mx-auto"
                  justify="center"
                >
                  <v-col
                    class="red--text text-center text--lighten-5"
                    cols="12"
                    tag="h1"
                  >
                    <p class="haikei">
                    <span
                      style="font-weight:bold;"
                      class=""
                    >
                    女の子のイラスト承ります。
                    </span>
                    <br>

                    <span
                      class=""
                      style="font-weight:bold; font-size:70px;"
                    >
                      絵画工房 空蝉
                    </span>
                    </p>
                  </v-col>

                  <v-btn
                    class="align-self-end"
                    fab
                    outlined
                    @click="$vuetify.goTo('#about-me')"
                  >
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn>
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-img>
        </v-row>
      </section>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Noto+Serif+JP");
#app {
/* Google fontsで導入したいfontsからfont-familyを取ってくる */
  font-family: 'Noto Serif JP', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.haikei{
  background: rgba(14, 02, 55, 0.456);
}
</style>

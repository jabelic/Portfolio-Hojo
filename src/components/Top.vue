<template>
    <div id="app">
    <v-app-bar
      app
      color="white"
      height="70"
      shrink-on-scroll
    >
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

      <v-toolbar-title class="font-weight-black headline" >
          Bonita Arts.
      </v-toolbar-title>
    </v-app-bar>

    <v-content class="py-0">
      <section id="hero">
        <v-row no-gutters>
          <v-img
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            src="../assets/Top.png"
          ><!--:min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"-->
            <v-theme-provider dark>
              <v-container fill-height>
                <v-row
                  align="center"
                  class="white--text mx-auto"
                  justify="center"
                >
                  <v-col
                    class="white--text text-center"
                    cols="12"
                    tag="h1"
                  >
                    <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'subtitle-1' : 'subtitle-1']"
                      class="font-weight-light"
                    >
                    女の子のイラスト承ります。
                    </span>

                    <br>

                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                      class="font-weight-black"
                    >
                      Bonita Arts.
                    </span>

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
            class="mx-auto title font-weight-light mb-8"
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

          <div></div>
          <v-btn
            color="grey"
            href="https://www.pixiv.net/en/users/57734105"
            outlined
            large
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


<section
        id="menu"
        class="grey lighten-3"
      >
        <div class="py-5"></div>

        <v-container class="text-center">
          <h2 class="display-1 font-weight-bold mb-3">MENU</h2>

          <v-responsive
            class="mx-auto mb-12"
            width="46"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <v-card
                class="py-12 px-4"
                color="grey lighten-5"
                flat
              >
                <v-theme-provider dark>
                  <div>
                    <v-avatar
                      color="primary"
                      size="88"
                    >
                      <v-icon
                        large
                        v-text="'mdi-account-box-outline'"
                      ></v-icon>
                    </v-avatar>
                  </div>
                </v-theme-provider>

                <v-card-title
                  class="justify-center font-weight-black text-uppercase"
                  v-text="'SNS icon'"
                ></v-card-title>

                <v-card-text
                  class="subtitle-1"
                  v-text="'使用許諾：3000円〜\n著作権譲渡：10000円〜'"
                  style="white-space: pre-wrap;"
                >
                </v-card-text>
                <v-data-table
            :headers="headersSns"
            :items="dessertsSns"
            hide-default-header
            hide-default-footer
            class="elevation-1"
                ></v-data-table>
              </v-card>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-card
                class="py-12 px-4"
                color="grey lighten-5"
                flat
              >
                <v-theme-provider dark>
                  <div>
                    <v-avatar
                      color="primary"
                      size="88"
                    >
                      <v-icon
                        large
                        v-text="'mdi-picture-in-picture-bottom-right'"
                      ></v-icon>
                    </v-avatar>
                  </div>
                </v-theme-provider>

                <v-card-title
                  class="justify-center font-weight-black text-uppercase"
                  v-text="'一枚絵'"
                ></v-card-title>

                <v-card-text
                  class="subtitle-1"
                  v-text="'使用許諾：5000円〜\n著作権譲渡：15000円〜'"
                  style="white-space: pre-wrap;"
                >
                </v-card-text>
                <v-data-table
            :headers="headersPic"
            :items="dessertsPic"
            hide-default-header
            hide-default-footer
            class="elevation-1"
                ></v-data-table>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <div class="py-5"></div>
      </section>



<!-- Menu gray barはここまで -->
      <section
        id="description"
        class="black white--text text--lighten-3"
      >
        <div class="py-5"></div>

        <v-container class="text-center">
          <h2 class="display-1 font-weight-bold mb-3">ご注文に際して</h2>

          <v-responsive
            class="mx-auto mb-12"
            width="46"
          >
            <v-divider class="mb-1"></v-divider>
            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col>人物追加、複雑な服装や小物・背景など、ご依頼の内容によっては別途お見積もりさせてただく可能性があります。予め御了承下さい。</v-col>
          </v-row>
          <v-card>
    </v-card>
        </v-container>

        <div class="py-5"></div>
      </section>


      <section id="stats">
        <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 700 : 300"
          src="../assets/alleyGirl.jpeg"
        >
          <v-container fill-height>
            <v-row class="mx-auto">
              <v-col
                v-for="[value, title] of stats"
                :key="title"
                cols="12"
                md="3"
              >
                <div class="text-center">
                  <div
                    class="title font-weight-regular text-uppercase"
                    v-text="title"
                  ></div>
                  <div
                    class="display-2 font-weight-black mb-2"
                    v-text="value"
                  ></div>
                  
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>

      <v-sheet
        id="contact"
        color="#333333"
        dark
        tag="section"
        tile
      >
        <div class="py-12"></div>

        <v-container>
          <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Order Form</h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-theme-provider light>
          </v-theme-provider>
          <v-col
              cols="12"
              md="6"
              align="center"
              class="white--text mx-auto"
              justify="center"
            >
          <v-btn
            color="grey"
            href="https://forms.gle/z9mYDn11mS1zo6HE9"
            outlined
            large
            class="blue"
          >
            <span class="title white--text text--darken-9 font-weight-bold">
              ご注文はこちらから。
            </span>
          </v-btn>
          </v-col>
        </v-container>

        <div class="py-12"></div>
      </v-sheet>
    </v-content>

    <v-footer
      class="justify-center"
      color="#292929"
      height="100"
    >
      <div class="subtitle-2 font-weight-light grey--text text--lighten-1 text-center">
        &copy; {{ (new Date()).getFullYear() }} - jabelic
      </div>
    </v-footer>
 </div>
</template>

<script>
export default{
    data () {
      return {
        /*articles: [
          {
            src: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            title: 'Mobile first & Responsive',
            text: 'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
          },
          {
            src: 'https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            title: 'Think outside the box',
            text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
          },
          {
            src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
            title: 'Small changes, big difference',
            text: 'Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.',
          },
        ],*/
        features: [
          {
            icon: 'mdi-account-box-outline',
            title: 'SNS icon',
            text: '複雑な服装・小物の描写など、ご依頼によっては別料金を頂く場合がございます。ご購入前にメッセージから要相談でお願いいたします。',
          },
          {
            icon: 'mdi-picture-in-picture-bottom-right',
            title: '一枚絵',
            text: '人物は1人で',
          },
          {
            icon: 'mdi-shield-outline',
            title: 'その他ポスターキャラクターなど',
            text: '云々カンヌん',
          },
        ],
        stats: [
          ['7日待ち', '受付状況'],
          ['10日+', 'ラフ完成まで'],
          ['20日+', '納品まで'],
          ['5m', 'Total Downloads'],
        ],
        headersSns:[
            {
            text: '',
            align: 'start',
            value: 'name',
          },
          { text: 'Data', value: 'data' },
        ],
        dessertsSns:[
            {
            name: 'サイズ',
            data: '2500x2500px(指定がなければ)',
          },{
            name: '形式',
            data: 'png, jpg'
          },
          {
            name: '人物',
            data: '1人(胸上まで)'
          },{
            name: '背景',
            data: '単色/簡易な柄/透過'
          },{
            name: 'オプション',
            data: '別途料金'
          }
        ],
        headersPic:[
            {
            text: '',
            align: 'start',
            value: 'name',
          },
          { text: 'Data', value: 'data' },
        ],
        dessertsPic:[
        {
            name: 'サイズ',
            data: '指定必須',
          },{
            name: '形式',
            data: 'png, jpg'
          },
          {
            name: '活用例',
            data: '動画用サムネイル, CDジャケット等'
            },
          {
            name: '内容',
            data: '人物1人と背景'
          },
          {
            name: 'オプション',
            data: '別途料金'
          }
        ]
      }
    }
  }
</script>

<style>
* { 
    margin: 0px; 
    padding: 0px; 
}
</style>
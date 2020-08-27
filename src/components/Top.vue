<template>
    <div id="app">

    <appbar></appbar>

    <v-content class="py-0">
      <hero></hero>
      <aboutme></aboutme>

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
                  v-text="'使用許諾：5000円〜\n著作権譲渡：12000円〜'"
                  style="white-space: pre-wrap; font-size: 17px;"
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
                  v-text="'使用許諾：7000円〜\n著作権譲渡：17000円〜'"
                  style="white-space: pre-wrap; font-size: 17px;"
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
          <h2 class="font-weight-bold mb-3" style="font-size: 30px;">ご注文に際して</h2>

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

      <stats></stats>
      <orderform></orderform>
    </v-content>
    <v-footer
      class="justify-center"
      color="#292929"
      height="50"
    >
      <div class="subtitle-2 font-weight-light grey--text text--lighten-1 text-center">
        &copy; {{ (new Date()).getFullYear() }} - jabelic
      </div>
    </v-footer>
 </div>
</template>

<script>
import appbar from './Appbar'
import hero from './Hero'
import aboutme from './Aboutme'
import stats from './Stats'
import orderform from './OrderForm'

export default{
    components: {
      'appbar': appbar,
      'hero': hero,
      'aboutme': aboutme,
      'stats': stats,
      'orderform': orderform,
    },
    data () {
      return {
        /*features: [
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
        ],*/
        
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

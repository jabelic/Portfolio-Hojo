<template>
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
</template>


<script>
export default {
    data(){
        return {
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
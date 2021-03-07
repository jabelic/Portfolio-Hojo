<template>
  <div>
    <appbar></appbar>
    <hero></hero>
    <aboutme></aboutme>
    <section id="menu" class="grey lighten-3">
      <div class="py-5"></div>

      <v-container class="text-center">
        <h2 class="display-1 font-weight-bold mb-3">MENU</h2>

        <v-responsive class="mx-auto mb-12" width="46">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-row>
          <v-col cols="12" md="6">
            <v-card class="py-12 px-4" color="grey lighten-5" flat>
              <v-theme-provider dark>
                <div>
                  <v-avatar color="primary" size="88">
                    <v-icon large v-text="'mdi-account-box-outline'"></v-icon>
                  </v-avatar>
                </div>
              </v-theme-provider>

              <v-card-title
                class="justify-center font-weight-black text-uppercase"
                v-text="'SNS icon'"
              ></v-card-title>
              <div class="haikei">
                <v-card-text
                  v-text="'使用許諾：5000円〜\n著作権譲渡：12000円〜'"
                  style="white-space: pre-wrap; font-size: 17px; font-weight: 600;"
                >
                </v-card-text>
              </div>
              <v-data-table
                :headers="headersSns"
                :items="dessertsSns"
                hide-default-header
                hide-default-footer
                class="elevation-1"
              ></v-data-table>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="py-12 px-4" color="grey lighten-5" flat>
              <v-theme-provider dark>
                <div>
                  <v-avatar color="primary" size="88">
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
              <div class="haikei">
                <v-card-text
                  v-text="'使用許諾：7000円〜\n著作権譲渡：17000円〜'"
                  style="white-space: pre-wrap; font-size: 17px; font-weight: 600;"
                >
                </v-card-text>
              </div>
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
    <section id="description" class="black white--text text--lighten-3">
      <div class="py-5"></div>

      <v-container class="text-center">
        <h2 class="font-weight-bold mb-3" style="font-size: 30px;">
          ご注文に際して
        </h2>

        <v-responsive class="mx-auto mb-12" width="46">
          <v-divider class="mb-1"></v-divider>
          <v-divider></v-divider>
        </v-responsive>

        <v-row>
          <v-col
            >人物追加、複雑な服装や小物・背景など、ご依頼の内容によっては別途お見積もりさせてただく可能性があります。予め御了承下さい。</v-col
          >
        </v-row>
        <v-card> </v-card>
      </v-container>
      <div class="py-5"></div>
    </section>

    <section id="procedure" class="gray black--text text--lighten-3">
      <div class="py-5"></div>

      <v-container class="text-center">
        <h2 class="font-weight-bold mb-3" style="font-size: 30px;">
          ご注文の流れ
        </h2>

        <v-responsive class="mx-auto mb-12" width="46">
          <v-divider class="mb-1"></v-divider>
          <v-divider></v-divider>
        </v-responsive>
        <v-card class="mx-auto" max-width="500" tile>
          <v-row style="margin:5px;">
            <v-col>
              <v-list flat>
                <v-list-item-group>
                  <v-list-item-content>
                    1. 下記注文フォームにて絵の詳細の情報入力 </v-list-item-content
                  ><v-list-item-content>
                    2. メールにてお見積もり </v-list-item-content
                  ><v-list-item-content> 3. ラフ制作開始 </v-list-item-content
                  ><v-list-item-content>
                    4. ラフご確認後、ご要望等のご相談（メール等） </v-list-item-content
                  ><v-list-item-content>
                    5. ご入金（PayPay等） </v-list-item-content
                  ><v-list-item-content> 6. 本制作 </v-list-item-content
                  ><v-list-item-content>
                    7. 納品
                  </v-list-item-content>
                </v-list-item-group>
              </v-list>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
      <div class="py-5"></div>
    </section>

    <stats></stats>
    <orderform></orderform>
    <v-footer class="justify-center" color="#292929" height="50">
      <div
        class="subtitle-2 font-weight-light grey--text text--lighten-1 text-center"
      >
        &copy; {{ new Date().getFullYear() }} - jabelic
      </div>
    </v-footer>
  </div>
</template>

<script>
import appbar from "../components/Appbar";
import hero from "../components/Hero";
import aboutme from "../components/Aboutme";
import stats from "../components/Stats";
import orderform from "../components/OrderForm";
import vdialog from "../components/Vdialog";

export default {
  components: {
    appbar: appbar,
    hero: hero,
    aboutme: aboutme,
    stats: stats,
    orderform: orderform,
    vdialog,
  },
  data() {
    return {
      headersSns: [
        {
          text: "",
          align: "start",
          value: "name",
        },
        { text: "Data", value: "data" },
      ],
      dessertsSns: [
        {
          name: "サイズ",
          data: "2500x2500px(指定がなければ)",
        },
        {
          name: "形式",
          data: "png, jpg",
        },
        {
          name: "人物",
          data: "1人(胸上まで)",
        },
        {
          name: "背景",
          data: "単色/簡易な柄/透過",
        },
        {
          name: "オプション",
          data: "別途料金",
        },
      ],
      headersPic: [
        {
          text: "",
          align: "start",
          value: "name",
        },
        { text: "Data", value: "data" },
      ],
      dessertsPic: [
        {
          name: "サイズ",
          data: "指定必須",
        },
        {
          name: "形式",
          data: "png, jpg",
        },
        {
          name: "活用例",
          data: "動画用サムネイル, CDジャケット等",
        },
        {
          name: "内容",
          data: "人物1人と背景",
        },
        {
          name: "オプション",
          data: "別途料金",
        },
      ],
      isDialogOpened: true,
    };
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
.haikei {
  background: rgba(240, 192, 5, 0.25);
}
.top-haikei {
  background: rgba(100, 100, 230, 0.5);
}
</style>

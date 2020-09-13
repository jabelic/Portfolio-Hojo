<template>
    <section id="stats">
        <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 700 : 300"
          src="../assets/seaGirl.jpeg"
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
                    class=""
                    style="font-size:20px;"
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
</template>

<script>
export default {
    data(){
        return{
            stats: [
          ['5日待ち', '受付状況'],
          ['55日+', 'ラフ完成まで'],
          ['20日+', '納品まで'],
          ['80日+', 'トータル期間'],
        ],
        }
    }
}
</script>

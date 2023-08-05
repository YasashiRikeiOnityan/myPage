<template>
  <!--<a href="./2023_tokyo.pdf" target="_blank">resume</a>
  <v-btn @click="openPage()" target="_blank">PDFはこちら</v-btn>-->
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-hover v-slot="{ hover }">
          <v-card :class="{ 'on-hover': hover }" :elevation="hover ? 10 : 5">
            <v-card-title>2023年 東京大学</v-card-title>
            <v-card-text>
            <v-list dense @click="selectedItem=true">
              <v-list-item-group
                v-model="selectedItem"
                color="primary"
              >
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  @click="openDialog12(i)"
                >
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            </v-card-text>
            <v-card-actions>
              <v-btn text to="my-activation">戻る</v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog1" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          2023年 東京大学 解説PDF
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog1 = false">閉じる<v-icon>mdi-close-box-outline</v-icon></v-btn>
          <v-btn color="primary" text >ダウンロード<v-icon>mdi-file-download-outline</v-icon></v-btn>
          <v-btn color="primary" text >ブラウザで開く<v-icon>mdi-open-in-app</v-icon></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        selectedItem: false,
        dialog1: false,
        dialog2: false,
        items: [
          { text: '解説PDF', icon: 'mdi-file-pdf-box' },
          { text: '解説動画', icon: 'mdi-movie' },
        ],
      }
    },
    methods: {
      openPage () {
        window.open('./2023_tokyo.pdf');
      },
      openDialog12 (i) {
        if (i == 0) {
          this.dialog1 = true;
        } else {
          this.dialog2 = true;
        }
      }
    }
  }
</script>
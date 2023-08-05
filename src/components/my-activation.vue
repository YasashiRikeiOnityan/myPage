<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-hover v-slot="{ hover }">
          <v-card :class="{ 'on-hover': hover }" :elevation="hover ? 10 : 5" min-height="200">
            <v-card-title>入試数学を研究しよう</v-card-title>
            <v-card-text height="200">
              難関大学の入試問題の解説と深掘りを行い、一問から多くの学びを吸収することができます。
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text absolute bottom right to="study-entrance-exam">詳細</v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="3">
        <v-hover v-slot="{ hover }">
          <v-card :class="{ 'on-hover': hover }" :elevation="hover ? 10 : 5" min-height="200">
            <v-card-title>解答速報（難関大数学）</v-card-title>
            <v-card-text height="200">
              「数学を愛する会」にて、難関大学の入試解答速報を行なっています。参加もお待ちしております。
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text absolute bottom right>詳細</v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="3">
        <v-hover v-slot="{ hover }">
          <v-card :class="{ 'on-hover': hover }" :elevation="hover ? 10 : 5" min-height="200">
            <v-card-title>OMC解説</v-card-title>
            <v-card-text>
              「Online Math Contest」の問題解説を丁寧に行っています。
            </v-card-text>
            <v-card-actions class="mt-auto">
              <v-spacer></v-spacer>
              <v-btn text absolute bottom right>詳細</v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

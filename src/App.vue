<template>
    <v-app>

        <v-navigation-drawer app v-model="drawer">
            <v-list nav dense>
                <v-list-item-group>
                    <v-list-item>
                        <v-list-item-icon><v-icon>mdi-home-outline</v-icon></v-list-item-icon>
                        <v-list-item-title @click="onHome">HOME</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-icon><v-icon>mdi-apps</v-icon></v-list-item-icon>
                        <v-list-item-title @click="onActivation">ACTIVATION</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-icon><v-icon>mdi-account-outline</v-icon></v-list-item-icon>
                        <v-list-item-title @click="onIntro">INTRO</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>
                Sample Vue Application
            </v-toolbar-title> 
        </v-app-bar>

        <v-content>
          <router-view></router-view>
        </v-content>

        <v-footer app>
            <v-card-title>
                <v-btn fab small class="mx-2" color="white" href="https://twitter.com/deringer____" target="_blank">
                    <v-icon>mdi-twitter</v-icon>
                </v-btn>
                <v-btn fab small class="mx-2" color="white" href="https://www.instagram.com/rikkunnnn_3150" target="_blank">
                    <v-icon>mdi-instagram</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <p>Copyright © Sample Vue Project</p>
            </v-card-text>
        </v-footer>

    </v-app>
</template>

<script>
    export default {
        name: 'App',
        components: {
        },
        data: () => ({
            drawer: true,
        }),
        methods: {
            onHome () {
                if(this.$route.path != '/'){
                    this.$router.push({ path: '/' });
                }
            }, 
            onActivation () {
                if(this.$route.path != '/my-activation'){
                    this.$router.push({ path: '/my-activation' });
                }
            }, 
            onIntro () {
                if(this.$route.path != '/intro-test'){
                    this.$router.push({ path: '/intro-test' });
                }
            }
        }
    };
</script>

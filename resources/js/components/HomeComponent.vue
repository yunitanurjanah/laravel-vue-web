<template>
  <v-app>
    <v-main>
    
      <v-parallax
            height="625"
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
          >
            <v-row
              align="center"
              justify="center"
            >
              <v-col
                class="text-center"
                cols="12"
              >
                <h1 class="display-1 font-weight-thin mb-4">
                  Vuetify
                </h1>
                <h4 class="subheading">
                  Build your application today!
                </h4>
              </v-col>
            </v-row>
          </v-parallax>
      <v-row>
        <v-col lg="12">
          <v-container
                >
                <v-data-table
                  :headers="headers"
                  :items="desserts"
                  class="elevation-1 pa-4"
                >
                  <template v-slot:item.calories="{ item }">
                    <v-chip
                      :color="getColor(item.calories)"
                      dark
                    >
                      {{ item.calories }}
                    </v-chip>
                  </template>
                </v-data-table>
              </v-container>
          </v-col>
          <v-col lg="12">
            <v-card
              height="200"
              color="#1f1d5a"
              tile>
              
            </v-card>
          </v-col>
        </v-row>
      <v-container>
        <v-row>
         <v-col
          v-for="n in 9"
          :key="n"
          class="d-flex child-flex"
          cols="4"
        >
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-col lg="12">
        <v-card height="150">
          <v-footer
            absolute
            class="font-weight-medium"
          >
            <v-col
              class="text-center"
              cols="12"
            >
              {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </v-col>
          </v-footer>
        </v-card>
      </v-col>
    </v-row>

    
        
      
    </v-main>
    </v-app>
</template>
<script>
    export default {
        name: "HomeComponent",
        data () {
      return {
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
        components: {
        },
        mounted: function() {
        },
        methods: {
          getColor (calories) {
            if (calories > 400) return 'red'
            else if (calories > 200) return 'orange'
            else return 'green'
          },    
        }        
    }
</script>

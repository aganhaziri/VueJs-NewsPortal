<template>
    <div> 
        <button @click="drawMarkers">The Main Headquater</button>
        <button @click="drawDirection">Pick Your Direction</button>
        <button @click="clearMap">Clear</button>
        <GmapMap
         :center="center"
         :zoom="17"
         map-type-id="terrain"
         style="width: 1100px; height:500px"
         >  
       
        <GmapMarker
         :key="index"
         v-for="(m, index) in markers"
         :position="m.position"
         :clickable="true"
         :draggable="true"
         @click="center=m.position"
         />   

         <gmap-polygon :path="paths"> </gmap-polygon>
          </GmapMap>
    </div>
</template>

<script>
const home = {lat:42.559123,  lng: 21.135374};
const work = {lat: 42.647905, lng:21.158360}; 

export default {
    name: "GoogleMap",
    data(){
        return{
            markers: [],
            center: "home",
            paths: [],
        };
    },
    methods: {
        drawMarkers() {
        this.markers = [
            {
                position: home,
            },
            {
                position:work,
            },
        ];
        },
        drawDirection() {
            this.paths = [home, work];
        },
        clearMap() {
            this.paths = [];
            this.markers = [];
        },
    },
};
</script>

<style>

</style>
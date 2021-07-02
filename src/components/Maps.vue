<template>
<div class="app">
  <img
      class="maps-cover"
      :src="require('../assets/c.jpg')"
    />    
        <div class="col-1">
          <h1 class="categoryTitle">Maps</h1>
        </div>
  
<div class="row">
  <div class="column">
    <h4>Innovation Campus - UBT</h4>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.8637262654197!2d21.132520014557752!3d42.55818643056064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549d2cc6e13dd5%3A0xf9155209d4ad0657!2sInnovation%20Campus%20-%20UBT!5e0!3m2!1sen!2s!4v1621119648023!5m2!1sen!2s" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </div>
  <div class="column">
    <h4>UBT - Prishtina</h4>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.6698333572235!2d21.150935314561575!3d42.64715892491634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549e8d5d607f25%3A0xa31dd05b21bd09de!2sUniversiteti%20p%C3%ABr%20Biznes%20dhe%20Teknologji!5e0!3m2!1sen!2s!4v1621119479953!5m2!1sen!2s" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </div>
  <div class="column" > 
    <h4>UBT - Gjilan</h4>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11776.769913978205!2d21.4603334!3d42.4449206!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6adab5fae9352528!2sUBT%20-%20Universiteti%20p%C3%ABr%20Biznes%20dhe%20Teknologji!5e0!3m2!1sen!2s!4v1621119314292!5m2!1sen!2s" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </div>
</div>
      <div class="pre-map">
        <h2>Click here to see your journey from headquarter to another headquarter</h2>
      </div>
 <GoogleMap />
</div>
</template>

<script>

import GoogleMap from "@/components/GoogleMap.vue";

export default {
  name: "Maps",
  components: {
    GoogleMap,
  },
};
</script>


<style scoped>

.maps-cover{
  width:1150px;
  height:480px;
  margin-bottom: 30px;
}

.col-1{
  padding-left: 500px;
  margin-bottom: 30px;
}

.row{
  column-gap: 20px;
   margin-bottom: 50px;
}

.pre-map{
  margin-bottom: 50px;
}


</style>

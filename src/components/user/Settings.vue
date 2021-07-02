<template>
<div>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold d-inline text-primary">Settings</h6>
        </div>
        <div class="card-body">
            <label for="">Select panel skin</label>
          <ul class="demo-choose-skin" style="overflow: hidden; width: auto; height: 613px;">
            <li class="active" @click="theme('#f44336')">
              <div class="red"></div>
              <span>Red</span>
            </li>
            <li @click="theme('#e91e63')">
              <div class="pink"></div>
              <span>Pink</span>
            </li>
            <li @click="theme('#9c27b0')">
              <div class="purple"></div>
              <span>Purple</span>
            </li>
            <li @click="theme('#673ab7')">
              <div class="deep-purple"></div>
              <span>Deep Purple</span>
            </li>
            <li @click="theme('#3f51b5')">
              <div class="indigo"></div>
              <span>Indigo</span>
            </li>
            <li @click="theme('#2196f3')">
              <div class="blue"></div>
              <span>Blue</span>
            </li>
            <li @click="theme('#03a9f4')">
              <div class="light-blue"></div>
              <span>Light Blue</span>
            </li>
            <li @click="theme('#00bcd4')">
              <div class="cyan"></div>
              <span>Cyan</span>
            </li>
            <li @click="theme('#009688')">
              <div class="teal"></div>
              <span>Teal</span>
            </li>
            <li @click="theme('#4caf50')">
              <div class="green"></div>
              <span>Green</span>
            </li>
            <li @click="theme('#8bc34a')">
              <div class="light-green"></div>
              <span>Light Green</span>
            </li>
            <li @click="theme('#cddc39')">
              <div class="lime"></div>
              <span>Lime</span>
            </li>
            <li @click="theme('#ffe821')">
              <div class="yellow"></div>
              <span>Yellow</span>
            </li>
            <li @click="theme('#ffc107')">
              <div class="amber"></div>
              <span>Amber</span>
            </li>
            <li @click="theme('#ff9800')">
              <div class="orange"></div>
              <span>Orange</span>
            </li>
            <li @click="theme('#ff5722')">
              <div class="deep-orange"></div>
              <span>Deep Orange</span>
            </li>
            <li @click="theme('#795548')">
              <div class="brown"></div>
              <span>Brown</span>
            </li>
            <li @click="theme('#9e9e9e')">
              <div class="grey"></div>
              <span>Grey</span>
            </li>
            <li @click="theme('#607d8b')">
              <div class="blue-grey"></div>
              <span>Blue Grey</span>
            </li>
            <li @click="theme('#000000')">
              <div class="black"></div>
              <span>Black</span>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "Settings",
 
  methods: {
    theme(color) {
        console.log($(this).children())
     
    }
  }
};
</script>
<style scoped>
.demo-choose-skin {
  list-style: none;
  padding-left: 0;
}
.red {
  background-color: #f44336;
}
.purple {
  background-color: #9c27b0;
}
.deep-purple {
  background-color: #673ab7;
}
.indigo {
  background-color: #3f51b5;
}
.blue {
  background-color: #2196f3;
}
.light-blue {
  background-color: #03a9f4;
}
.cyan {
  background-color: #00bcd4;
}
.teal {
  background-color: #009688;
}
.green {
  background-color: #4caf50;
}
.light-green {
  background-color: #8bc34a;
}
.lime {
  background-color: #cddc39;
}
.yellow {
  background-color: #ffe821;
}
.amber {
  background-color: #ffc107;
}
.orange {
  background-color: #ff9800;
}
.deep-orange {
  background-color: #ff5722;
}
.brown {
  background-color: #795548;
}
.grey {
  background-color: #9e9e9e;
}
.blue-grey {
  background-color: #607d8b;
}
.black {
  background-color: #000000;
}
.pink {
  background-color: #e91e63;
}
.demo-choose-skin li div {
  width: 24px;
  height: 24px;
  display: inline-block;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  border-radius: 3px;
}
.demo-choose-skin li span {
  position: relative;
  bottom: 7px;
  left: 5px;
}
.demo-choose-skin li{
    margin: 20px;
    cursor: pointer;
    display: block;
}
</style>

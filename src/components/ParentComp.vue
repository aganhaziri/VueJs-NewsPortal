<template>
<div>
    <h3 class="card-title" v-text="thecardtitle"></h3>
    <button @click="sendMessage">Kliko</button>
    <Child-Comp :parentmessage="parentmessage" @finished="finished"></Child-Comp>
</div>
</template>
<script>
import ChildComp from './ChildComp.vue'
export default {
    components:{
        ChildComp
    },
    data(){
        return{
            thecardtitle:'Parent Component!',
            parentmessage:''
        }
    },
    methods:{
        sendMessage(){
            this.parentmessage='<b>Message from Parent</b>Work in your tasks!'
        },finished(){
            this.parentmessage=''
        }
    }
}
</script>
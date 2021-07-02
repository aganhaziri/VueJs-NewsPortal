<template>
<div>
    <h5 class="card-title" v-text="thecardtitle"></h5>
    <p class="card-text" v-html="thecardbody"></p>
    <div v-if="parentmessage" v-html="parentmessage"></div>
    <button v-if="parentmessage" @click="ok">OK</button>
</div>

</template>
<script>
export default {
    props:['parentmessage'],
    data(){
        return{
        thecardtitle:'Child Component',
        thecardbody:'I am a child'
        }
        
        },
        //communicating back to the parent component with events
        methods:{
            ok(){
                this.$emit('finished')
            }
}
}

</script>
<template>
    <p :style="{color:activecolor,fontSize:fontSizes+'px'}">Style绑定1</p>
    <p :style="StyleObject">Sytle绑定2</p>
    <p :style="[StyleObject,{color:'pink'}]">Style绑定3</p>
</template>

<script>
export default {
    data(){
        return {
            activecolor:'red',
            fontSizes:30,
            StyleObject:{
                color:'green',
                fontSize:'30px',
            }
        }
    }
}
</script>
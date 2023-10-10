<template>
    <p :class="{'active':isactive,'font-sizes':isfonts}">Class样式绑定1</p>
    <p :class="classObject">Class样式绑定2</p>
    <p :class="[arrActive,arrFont]">Class样式绑定3</p>
    <p :class="[isactive ?'active font-sizes':'']">Class样式绑定4</p>
    <p :class="[arrFont,{'active':isactive}]">Class样式绑定5</p>
</template>

<script>
export default {
    data(){
        return {
            isactive: true,
            isfonts: true,
            classObject: {
                'active':true,
                'font-sizes':true,
            },
            arrActive:'active',
            arrFont:'font-sizes',
        }
    }
}
</script>

<style>
.active {
    color:red;
}
.font-sizes {
    font-size: 30px;
}
</style>
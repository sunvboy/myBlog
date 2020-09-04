<template>
    <div>
     <CSLIDE></CSLIDE>
     <router-view></router-view>
    </div>
</template>

<script>
import CSLIDE from '../components/c-slide'; 

export default {
    name: 'home-page',
    components:{
        CSLIDE
    },
    data() {
        return {};
    },
}
</script>

<style>

</style>
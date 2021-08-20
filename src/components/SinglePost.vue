<template>
   <h2>{{post.title}}</h2>
   <p>{{cutpostbody}}</p>
</template>

<script>
import { computed } from '@vue/reactivity';
export default {
    props:['post'],
    setup(props){
        let cutpostbody=computed(()=>{
            return props.post.body.substring(0,10)+'...';
        });
        return {cutpostbody};
    }

}
</script>

<style>

</style>
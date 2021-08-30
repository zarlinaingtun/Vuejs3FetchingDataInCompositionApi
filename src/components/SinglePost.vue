<template>
<div class="post">
    <router-link :to="{name:'Detail',params:{id:post.id}}">
       <h2>{{post.title}}</h2>
   </router-link>
   <p>{{cutpostbody}}</p>
   <div v-for="tag in post.tags" :key="tag" class="pill">
      <router-link :to="{name:'Tag',params:{tag}}">{{tag}}</router-link>
   </div>
 </div>
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
.post{
    width:400px;
    margin:40px;
    padding: 10px;
    box-shadow: 0px 0px 5px violet;
}
.post h2{
    display: inline-block;
    background: yellow;
    padding: 5px;
    border-radius: 4px;
}
.post .pill{
    display: inline-block;
    background: gainsboro;
    border-radius: 50%;
    padding: 10px;
    margin-right: 5px;
}
</style>
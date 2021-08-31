<template>
<div class="tag-cloud">
<h3>Tag Cloud</h3>
<div v-for="tag in uniquetags" :key="tag">
    <router-link :to="{name:'Tag',params:{tag}}">{{tag}}</router-link>
</div>
</div>
</template>

<script>
import { ref } from 'vue';

export default {
   props:["posts"],
   setup(props){
       let tags=ref([]);
       props.posts.forEach(post => {
           post.tags.forEach(tag=>{
               tags.value.push(tag);
           })
       });
       let uniquetags=tags.value.filter((tag,index,array)=>{
           return array.indexOf(tag)===index;
       });
       return {uniquetags};
   }
}
</script>

<style>
.tag-cloud h3{
    border-bottom: 1px solid rgb(141, 136, 136,0.4);
    padding: 5px 0;
    text-align: left;
}
.tag-cloud a{
    text-decoration: none;
    color:#999;
    font-weight: bold;
    font-size: 16px;
    float: left;
    padding: 5px;
}
.tag-cloud .router-link-active{
    color:orange;
}
</style>
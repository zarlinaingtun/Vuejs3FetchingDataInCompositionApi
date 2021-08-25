<template>
 <div class="post">
    <div v-if="post">
    <h1>Detail {{id}}</h1>
  <h2>{{post.title}}</h2>
  <p>{{post.body}}</p>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
 </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from '../composables/getPost'
import {useRoute} from 'vue-router'
export default {
  components: { Spinner },
    
props:['id'],//id from dynamic route
setup(props){
      let router=useRoute();
      console.log(router);//object
      console.log(router.params.id);//1,2,3
     // this.$route.params.id;

   let {post,error,load}=getPost(router.params.id);
  //  let {post,error,load}=getPost(props.id);
   load();
   return {post,error};
}
}
</script>

<style>
.post{
    width:800px;
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
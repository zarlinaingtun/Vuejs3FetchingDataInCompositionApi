<template>
  <h1>Detail {{id}}</h1>
  <h2>{{post.title}}</h2>
  <p>{{post.body}}</p>
</template>

<script>
import getPost from '../composables/getPost'
export default {
    
props:['id'],//id from dynamic route
setup(props){
   let {post,error,load}=getPost(props.id);
   load();
   return {post,error};
}
}
</script>

<style>

</style>
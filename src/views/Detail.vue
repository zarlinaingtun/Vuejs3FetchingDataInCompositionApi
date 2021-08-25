<template>
  <div v-if="post">
    <h1>Detail {{id}}</h1>
  <h2>{{post.title}}</h2>
  <p>{{post.body}}</p>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from '../composables/getPost'
export default {
  components: { Spinner },
    
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
<template>
 <div class="post">
    <div v-if="post">
    <h1>Detail {{id}}</h1>
  <h2>{{post.title}}</h2>
  <p>{{post.body}}</p>
  <button class="del" @click="deletePost">Delete</button>
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
import {useRouter} from 'vue-router'
import {db} from '../firebase/config'

export default {
  components: { Spinner },
    
props:['id'],//id from dynamic route
setup(props){
      let route=useRoute();
      let router=useRouter();
      console.log(route);//object
      console.log(route.params.id);//1,2,3
     // this.$route.params.id;

   let {post,error,load}=getPost(route.params.id);
  //  let {post,error,load}=getPost(props.id);
   load();

   let deletePost=async()=>{
      let id=props.id;
      await db.collection('posts').doc(id).delete();
      router.push('/');

      
   }
   return {post,error,deletePost};
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
.post .del{
  display: block;
  padding:10px;
  font-size: 20px;
  background-color:rgb(255, 255, 45);
  border-radius: 5px;
  margin:20px auto;

  cursor:pointer;

}
</style>
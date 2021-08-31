<template>

   <h1>Home</h1>
   <div v-if="error">
     <p>{{error}}</p>
   </div>

   <div v-if="posts.length>0" class="layout">
      <!-- Posts -->
     <div><PostList :posts="posts"></PostList></div>
      <!-- Tag Cloud -->
     <div><TagCloud></TagCloud></div>
   </div>
   <div v-else>
     <Spinner></Spinner>
   </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import Spinner from '../components/Spinner'
import PostList from '../components/PostList'
//composable function
import getPosts from '../composables/getPosts'


export default {
  components: {
    TagCloud,
    Spinner,
    PostList,   
  },
  setup(){
    //Regular Function
    // async function load(){
    // try{
    //   let response=await fetch('http://localhost:3000/posts');
    //   console.log(response);

    //   if(response.status===404){
    //     throw new Error("URL Not Found!");
    //   }
      
    //   let datas=await response.json();
    //   console.log(datas);
    //   posts.value=datas;
    // }
    // catch(err){
    //   error.value=err.message;
    // }
   
    // };
   
    //Call Composable Function
    //Destructuring
    let {posts,error,load}=getPosts();

    //Function Invoke
    load();

    //return with js obj style
    return {error,posts};
  }
}
</script>
<style>
h1{text-align: center;}
.layout{
  display:grid;
  grid-template-columns:3fr 1fr;
  gap:20px;

}

</style>

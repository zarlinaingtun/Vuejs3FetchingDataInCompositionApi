<template>
   <h1>Home</h1>
   <div v-if="error">
     <p>{{error}}</p>
   </div>


   <div v-if="posts.length>0">
     <PostList :posts="posts"></PostList>
   </div>
   <div v-else>
     Loading...
   </div>
</template>

<script>
import PostList from '../components/PostList'
import { ref } from '@vue/reactivity';



export default {
 
  components: {
    PostList,
    
  },
  setup(){
    let posts=ref([]);
    let error=ref('');

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
   
    //Arrow Function
    let load=async()=>{
    try{
      let response=await fetch('http://localhost:3000/posts');
      console.log(response);

      if(response.status===404){
        throw new Error("URL Not Found!");
      }
      
      let datas=await response.json();
      console.log(datas);
      posts.value=datas;
    }
    catch(err){
      error.value=err.message;
    }
   
    };

    //Function Invoke
    load();

    //return with js obj style
    return {error,posts};
  }
}
</script>

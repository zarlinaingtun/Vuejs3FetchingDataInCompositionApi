import { ref } from "vue";

let myPosts=()=>{
    let posts=ref([]);
    let error=ref('');
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
        // load();
        return {posts,error,load};
}
export default myPosts ;
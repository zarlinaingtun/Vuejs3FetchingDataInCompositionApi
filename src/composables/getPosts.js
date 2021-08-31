import { ref } from "vue";
import {db} from "../firebase/config";
let myPosts=()=>{
    let posts=ref([]);
    let error=ref('');
    let load=async()=>{
        try{
          // time kyar aung loke tar
          // await new Promise((resolve,reject)=>{
          //     setTimeout(resolve,2000);
          // })

          // Fetch Api
          // let response=await fetch('http://localhost:3000/posts');
          // // console.log(response);
    
          // if(response.status===404){
          //   throw new Error("URL Not Found!");
          // }
          
          // let datas=await response.json();
          // // console.log(datas);
          // posts.value=datas;


          // Firebase
          let res=await db.collection('posts').get();
          console.log(res.docs);//[n,n]

          //map return [{},{}]
          posts.value=res.docs.map((doc)=>{
            console.log(doc);
            // console.log(doc.data());
            // console.log(doc.id);
            // console.log({id:doc.id,...doc.data()});
            return {id:doc.id,...doc.data()};
          })

        }
        catch(err){
          error.value=err.message;
        }
       
        };
        // load();
        return {posts,error,load};
}
export default myPosts ;
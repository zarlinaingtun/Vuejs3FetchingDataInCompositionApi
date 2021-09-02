import { ref } from "vue"
import {db} from '../firebase/config';
let getPost=(id)=>{
    let post=ref(null);
    let error=ref('');
    let load=async ()=>{
        try{
            //JSON SERVER
            // await new Promise((resolve,reject)=>{
            //     setTimeout(resolve,2000);
            // })
            // let response=await fetch('http://localhost:3000/posts/'+id);
            // if(response.status===404){
            //     throw new Error('URL not found');
            // }
            // let data=await response.json();
            // post.value=data;

            // Firebase
            let doc=await db.collection('posts').doc(id).get();
            console.log(doc.data());
            console.log(doc.id);
            post.value={id:doc.id,...doc.data()};
        }
        catch(err){
            error.value=err.message;
        }
    }
    return {post,error,load};
}
export default getPost;
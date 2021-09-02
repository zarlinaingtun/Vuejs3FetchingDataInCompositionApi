<template>
<h1>Create Post Form</h1>
<form @submit.prevent="addPost">
    <div class="form-control">
        <label>Title</label>
        <input type="text" v-model="title"/>    
    </div>

    <div class="form-control">
        <label>Body</label>
        <textarea v-model="body"></textarea>
    </div>

    <div class="form-control">
        <label>Tag(hint key enter to add tag )</label>
        <input type="text" @keydown.enter.prevent="handleKeydown" v-model="tag"/>
    </div>

    <div v-for="tag in tags" :key="tag"  class="pill" >
       <span>{{tag}}</span>
    </div>

    <button>Add Post</button>
</form>

</template>

<script>
import { ref } from '@vue/reactivity';
import {useRouter} from 'vue-router';
import {db} from '../firebase/config';
export default{
    setup(){
        let router=useRouter();
        // console.log(router);//object
        let title=ref('');
        let body=ref('');
        let tag=ref('');
        let tags=ref([]);
        let handleKeydown=()=>{
            if(!tags.value.includes(tag.value)){
                tags.value.push(tag.value);
            }

            //clear value from input tag
            tag.value='';
        }
        let addPost=async()=>{
            console.log("Add ...")
            // Json server(POST)
        //    await fetch('http://localhost:3000/posts',{
        //        method:"POST",
        //        headers:{"Content-type":"application/json"},
        //        body:JSON.stringify({
        //            title:title.value,//''
        //            body:body.value,//''
        //            tags:tags.value//[]
        //        })
        //    });

        //Firebase
        let addPost={title:title.value,//''
                   body:body.value,//''
                   tags:tags.value//[]
        }
        let res=await db.collection('posts').add(addPost);
        // console.log(res.id);//

           //redirect to Home Page
        //    this.$router.push('/');
        router.push('/');
        }
        return {title,body,tag,tags,handleKeydown,addPost};
    }
}
</script>


<style scoped>
h1{
    margin: 0;
    text-align: center;
}
form{
    width:500px;
    margin:60px auto;
    text-align: left;
    
}
.form-control{
    margin:30px 0;
}
input{
    display: block;
    width:100%;
    font-size: 20px;
    padding: 10px;
    margin-top: 30px;

}
label{
    /* display: block; */
    color:#fff;
    font-size: 20px;
    padding: 10px 3px 10px 50px;
    

    position: relative;
}
label::before{
    content:'';
    width:100%;
    height: 100%;
    background: darkorchid;

    position: absolute;
    top:0;
    left: 0;

    z-index:-1;

    transform: rotate(-3deg);

}
textarea{
    width:100%;
    height: 150px;
    padding:10px;
    margin-top: 30px;
}
button{
    display: block;
    padding:10px 20px;
    background: darkorchid;
    color:#fff;
    border:0;
    font-size: 16px;  
}
.pill{
    display: inline-block;
    color:#fff;
    background: gray;
    border-radius: 50%;
    margin-bottom:10px;
    margin-left: 10px;
    padding: 10px;

 
}

</style>
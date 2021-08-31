let tags=[
    "web dev",//0
    "vuejs",//1
    "vuejs",//2
    "laravel",//3
    "news"//4
];
console.log(tags.indexOf("web dev"));
console.log(tags.indexOf("vuejs"));
console.log(tags.lastIndexOf("vuejs"));
console.log(tags.lastIndexOf("news"));

let filteredtags=tags.filter((tag,index,array)=>{
    return  array.indexOf(tag)===index;
})
console.log(filteredtags);//["web dev,vuejs,laravel,news"]
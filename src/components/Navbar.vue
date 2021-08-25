<template>
<header>
      <h1>Bloggy Vue</h1>
      <nav>
        <router-link :to="{name:'Home'}">Home</router-link> 
        <router-link :to="{name:'Create'}">Create Post</router-link>
      </nav>
</header>
</template>

<script>
export default {

}
</script>

<style scoped>
header{
    padding:0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
header h1{
    opacity: 0.5;
}
a{
    text-decoration: none;
    margin-right: 10px;
    font-weight: bold;
    color:#000;
}
</style>

<template>
  <div class="spine">
  </div>
</template>

<script>
export default {

}
</script>

<style>
.spine{
    width:40px;
    height: 40px;
    border:2px solid transparent;
    border-top-color: gray;
    margin:40px auto;
    border-radius: 50%;
    animation: myani 2s linear infinite;
}
@keyframes myani{
    to{
        transform: rotate(360deg);
    }
}
</style>
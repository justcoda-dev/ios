<template>
<div class="wrapper">
 <div class="p-w"  v-for="(point, index) of points" :key="index">
   <div class="point">
     <div class="bg"></div>
     <img class="icon" :src="point.icon" alt="#">
     <h3 class="text">{{point.name}}</h3>

   </div>

 </div>


</div>
</template>

<script>
export default {
  name: "SettingsPoints",
  props: {
    points: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  .p-w {
    border-bottom: 1px solid gray;
    border-radius: 4px;
  }
  .point {
    display: flex;
    align-items: center;
    padding: 0px 5px;
    background: #171717;
    color: white;

    //.bg {
    //  padding: 0px;
    //  margin: 0px;
    //  position: absolute;
    //  z-index: 0;
    //  content: '';
    //  width: 370px;
    //  height: 47px;
    //  background: #171717;
    //}
    h3 {
      z-index: 1;
      padding: 0px;
      margin: 8px;
    }
    .icon {
      z-index: 1;
      padding: 5px;
      width: 30px;
      height: 30px;
    };
  .text {
    padding: 5px;
  }
  }


}

</style>
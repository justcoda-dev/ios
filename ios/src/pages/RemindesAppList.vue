<template>
  <div class="wrapper">
    <DesktopBar/>
    <div class="todolist">
   <TodoList/>
    </div>

  </div>
</template>

<script>

import DesktopBar from "../components/desktopBar/DesktopBar";
import TodoList from "../components/todo/TodoList";
export default {
  name: "RemindesApp",
  components: {TodoList, DesktopBar},
  data() {
    return {
    }
  }

}
</script>

<style lang="scss" scoped>
.wrapper {

  margin: 0px;
  padding: 0px;
  background: black;
  width: 375px;
  height: 812px;
  background-position: center;
  background-size: cover;
  color: white;

}
</style>
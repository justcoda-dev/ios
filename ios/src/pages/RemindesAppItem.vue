<template>
  <div class="wrapper">
    <DesktopBar/>
    <div class="todolist">
 <TodoItem/>
    </div>

  </div>
</template>

<script>
import DesktopBar from "../components/desktopBar/DesktopBar";


import TodoItem from "../components/todo/TodoItem";
export default {
  name: "RemindesApp",
  components: {TodoItem, DesktopBar},
  data() {
    return {
    }
  },
  methods: {

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
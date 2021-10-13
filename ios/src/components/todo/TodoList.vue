<template>
  <div @click.self="exitAnyWay" class="wrapper">
    <div class="todo-list-wrapper" v-for="(todo, index) in todoList" :key="todo.id">
      <div v-if="!todo.todoShow" class="todo-list-inner">

        <div @click="openTodo()" class="todo-element">{{ index + 1 }}) {{
            todo.text
          }}
        </div>
        <button @click="deleteList(todo)" class="delete-list">X</button>
      </div>
      <div v-if="todo.todoShow">
        <input v-model="todo.text" type="text">
        <div class="attention-text">{{ errorText(todo.text, ERROR_RULES) }}</div>
      </div>
    </div>
    <button @click="showInput" v-if="!show" :disabled="disable" class="create-wrapper">create</button>
    <div v-if="show" class="create-inner">
      <input v-model="text" type="text">
      <div class="attention-text">{{ errorText(text, ERROR_RULES) }}</div>
      <button @click="addTodo">add</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import {uniqueId} from '../../myFunctions/myFns'
import {errorText} from '../../myFunctions/myFns'

export default {
  name: "TodoList",
  data() {
    return {
      text: '',
      show: false,
      disable: false,
      // todoList: [],
      id: '',
      errorText: errorText,
      // в константі
      ERROR_RULES: [
        {name: 'MORE_THAN', text: 'you should past mor than 3 symbols', rule: (text) => text.length < 3},
        {name: 'NOT_EMPTY', text: 'you should past something', rule: (text) => !text.length}
      ]
    }
  },

  methods: {
    ...mapActions(['getObj']),
    addTodo() {
      if (!this.errorText(this.text, this.ERROR_RULES)) {
        this.id = uniqueId()
        this.getObj({text: this.text, todoShow: false, id: this.id, done: false})
        this.show = false
        this.text = ''
      }
    },
    showInput() {
      this.show = true
    },
    openTodo() {
      //go to this todo list
      this.$router.push({name: 'remindesList', params:{id:this.id}})
    },
    doneTodo(todo) {
      todo.done = !todo.done
    },
    deleteList(todo) {
      this.todoList.map((v, i, arr) => {
        if (v.id === todo.id) {
          arr.splice(i, 1)
        }
      })
    },
    exitAnyWay() {
      this.text = ''
      this.show = false
      this.disable = false
    }
  },

  computed: {
    ...mapGetters(['todoList'])
  }
}


</script>

<style lang="scss" scoped>
$border: #171717;
$text-color: #fff;
$text-size: 30px;

.wrapper {
  //elements styles *************
  input {
    padding: 0px;
    margin: 0px;
    height: 40px;
    max-width: 100%;
    border: none;
    background-color: #171717;
    color: $text-color;
    font-size: $text-size;
  }

  button {
    background-color: orange;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-size: $text-size;
    opacity: 0.8;
    transition: 0.7s;

    &:hover {
      opacity: 1;
    }
  }

  .attention-text {
    font-size: 20px;
    color: white;
    opacity: .7;
    //position: absolute;
  }

  //elements styles -------------

  //todo list styles ************
  .todo-list-wrapper {
    border-bottom: $border;
    font-size: $text-size;

    .todo-list-inner {
      display: flex;
    }

    .todo-element {
    }

    .todo-done {
      opacity: 0.7;
    }

  }

  //todo list styles -------------

  //create todo styles ***********
  .create-wrapper {
    display: flex;
    border-bottom: $border;
    font-size: $text-size;

    .create-inner {
      display: flex;

    }
  }

  //create todo styles -------------

}

</style>
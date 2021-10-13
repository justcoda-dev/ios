<template>
  <div @click.self="exitAnyWay" class="wrapper">
    <h1>{{listName}}</h1>
    <div class="todo-list-wrapper" v-for="(todo, index) in todoList" :key="todo.id">
      <div class="todo-list-inner">
        <input @change="doneTodo(todo, index)" class="checkbox"  type="checkbox">
        <div v-if="!todo.todoShow" @click="showEdit(todo)" class="todo-element" :class="{ 'todo-done': todo.done}"> {{
            todo.text
          }}
          <hr>
        </div>
      </div>

      <div v-if="todo.todoShow">
        <input v-model="todo.text" type="text">
        <hr>
        <div class="attention-text">{{ errorText(todo.text, ERROR_RULES) }}</div>
        <button @click="saveEdit(todo, index)">edit</button>
      </div>

    </div>

    <div v-if="!show" class="create-wrapper">
      <button @click="showInput" :disabled="disable" class="add-todo-button"><div>+</div></button>
      create todo
    </div>
    <div v-if="show" class="create-inner">
      <input v-model="text" type="text">
      <div class="attention-text">{{ errorText(text, ERROR_RULES) }}</div>
      <button @click="addTodo">add</button>
    </div>
  </div>
</template>

<script>
import {uniqueId} from '../../myFunctions/myFns'
import {errorText} from '../../myFunctions/myFns'

export default {
  name: "TodoItem",
  data() {
    return {
      listName:'My list',
      text: '',
      show: false,
      disable: false,
      todoList: [],
      id: '',
      errorText: errorText,
      ERROR_RULES: [
        {name: 'MORE_THAN', text: 'you should past mor than 3 symbols', rule: (text) => text.length < 3},
        {name: 'NOT_EMPTY', text: 'you should past something', rule: (text) => !text.length}
      ]
    }
  },
  methods: {
    addTodo() {
      if (!this.errorText(this.text, this.ERROR_RULES)) {
        this.id = uniqueId()
        this.todoList.push({text: this.text, todoShow: false, id: this.id, done: false})
        this.show = false
        this.text = ''
      }
    },
    showInput() {
      this.show = true
    },
    showEdit(todo) {
      if (this.todoList.find((v) => v.todoShow)) {
        return
      } else {
        todo.todoShow = true
        this.disable = true
      }
    },
    saveEdit(todo, index) {
      if (!todo.text.length) {
        this.todoList.splice(index, 1)
      } else if (errorText(todo.text, this.ERROR_RULES)) {
        return
      } else if (todo.text.length) {
        todo.todoShow = false
        this.disable = false
      }
    },
    doneTodo(todo, index) {
      todo.done = !todo.done
      let timeoutId ;
      const todolist = this.todoList
        timeoutId = setTimeout(function () {
          if(todo.done) {
            todolist.splice(index, 1)
          }
          clearTimeout(timeoutId)
        }, 3000)

    },
    exitAnyWay() {
      this.text = ''
      this.show = false
      this.disable = false
      this.todoList.map((v, index) => {
        if (!v.text) {
          this.todoList.splice(index, 1)
        }
        if (v.todoShow) {
          v.todoShow = false
        }
      })
    },
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
    background-color: black;
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
  hr {
    padding: 0px;
    margin: 3px 0px;
    color: #171717;
    width: 100%;
    opacity: 0.3;
  }
  //elements styles -------------

  //todo list styles ************
  .todo-list-wrapper {
    display: flex;
    border-bottom: $border;
    font-size: $text-size;
    input {
      max-width: 342px;
      font-weight: bold;
      max-height: 37px;
      padding: 0px;
      margin: 0px;
    }

    .todo-list-inner {
      display: flex;
        padding: 2px 0px;
      .checkbox {
        align-self: start;
      }
    }

    .checkbox {
      margin: 5px;
      align-self: center;
      width: 0.7em;
      height: 0.7em;
      border-radius: 50%;
      background-size: 30px;
      vertical-align: middle;
      border: 1px solid gray;
      -webkit-appearance: none;
      cursor: pointer;
      transition: 0.7s;
    }

    .checkbox:checked {
      border: 2px solid #ffffff;
      background-color: orange;
    }

    .todo-element {
      font-weight: bold;
      hr {
        width: 342px;
      }
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
    color: orange;
    font-size: $text-size;
    cursor: pointer;
    opacity: .7;
    &:hover {
      opacity: 1;
    }
    .add-todo-button {
      display: flex;
      align-items: center;
      justify-content: center;
       opacity: 1;
      border-radius: 100%;
      width: 31px;
      height: 31px;
      border: 1px solid gray;
      -webkit-appearance: none;
      cursor: pointer;
      color: #171717;
      font-weight: bold;
      text-align: center;
      font-size: 0px;

      div {
        font-size: 30px;
        transform: translateY(-1px);
      }
    }
    .create-inner {
      display: flex;

    }
  }


  //create todo styles -------------

}

</style>
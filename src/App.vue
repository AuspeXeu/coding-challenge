<template>
  <div class="text-white bg-gray-600 w-2/4 max-w-2xl m-auto mt-12">
    <div class="text-center border-b-2 border-black py-4">
      <h1 class="text-3xl py-4">Your Todos</h1>

      <p class="text-xl p-2" v-if="openTodos.length > 0">
        Open Todos: {{ openTodos.length }}
      </p>
      <p class="text-xl p-2" v-else>Congrats: No Todos!</p>
      <div class="flex space-around">
        <input
          type="text"
          v-model="newTodo"
          class="py-2 px-2 text-black inline-block w-2/3"
        />
        <btn
                type="w-1/3 border-black border-2 bg-yellow-500"
                :disabled="addNewTodoCheck"
                @click="addTodo"
        >
          Add Todo
        </btn>
      </div>
    </div>
    <div v-for="(todo, index) in todos" :key="todo.todo">
      <Todo
        :todoprop="todo"
        :todoindex="index"
        @toggledone-index="setDone"
        @delete-index="deleteTodo"

      />
    </div>
  </div>
</template>

<script>
import api from './api';
import Todo from './components/Todo';
import btn from './components/btn';

export default {
  name: 'App',
  components: {
    Todo,
    btn,
  },
  data() {
    return {
      newTodo: '',
      todos: [],
    };
  },
  async mounted() {
    const todos = await api.loadTodos()
    this.todos = todos.map((text) => ({todo: text, done: false}))
  },
  methods: {
    addTodo() {
      this.todos.push({ todo: this.newTodo, done: false });
      api.putTodos({ todo: this.newTodo })
      this.newTodo = '';
    },
    setDone(index) {
      this.todos[index].done = !this.todos[index].done;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
      api.deleteTodos(index)
    },
  },
  computed: {
    openTodos() {
      const openTodos = this.todos.filter((todo) => {
        return !todo.done;
      });
      return openTodos;
    },
    addNewTodoCheck() {
      return (this.newTodo.trim().length) ? false : true
    }
  },
};
</script>

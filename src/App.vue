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
        <button
          class="w-1/3 border-black border-2 bg-yellow-500"
          @click="addTodo">
          Add Todo
        </button>
      </div>
    </div>
    <div v-for="(todo, index) in todos" :key="todo.todo">
      <Todo
        :todoprop="todo"
        :todoindex="index"
        @toggledone-index="setDone"
        @delete="setDelete"
        />
    </div>
  </div>
</template>

<script>
import api from './api';
import Todo from './components/Todo';

export default {
  name: 'App',
  components: {
    Todo,
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
    async addTodo() {
      if(this.newTodo === '') {
        alert('todo should not be empty')
        return
      }
      this.todos.push({ todo: this.newTodo, done: false }),
      await api.addTodo({
        data: this.newTodo
      })
      this.newTodo = '';
    },
    setDone(index) {
      this.todos[index].done = !this.todos[index].done;
    },
    async setDelete(index) {
      const res = await api.deleteTodo({
        index
      })
      res && this.todos.splice(index, 1)
    }
  },
  computed: {
    openTodos() {
      const openTodos = this.todos.filter((todo) => {
        return !todo.done;
      });
      return openTodos;
    },
  },
};
</script>

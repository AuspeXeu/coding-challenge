<template>
  <div
    class="flex justify-between items-center py-4 px-2 border-t-2 border-black"
    :class="{ 'bg-green-600': this.todo.done, 'bg-red-500': !this.todo.done }">
    <p class="cursor-pointer" @click="toggleTodo"
       :class="{ 'text-decoration: line-through': this.todo.done }">
      {{ todo.todo }}
    </p>
    <div>
      <btn
              type="py-2 px-4 bg-black rounded"
              @click="deleteTodo"
      >
        Delete Todo
      </btn>
      <input
              class="m-2"
              type="checkbox" id="checkbox" v-model="this.todo.done">
    </div>

  </div>
</template>

<script>
import btn from './btn';

export default {
  name: 'Todo',
  props: ['todoprop', 'todoindex'],
  components: {
    btn,
  },
  data() {
    return {
      todo: this.todoprop,
    };
  },
  methods: {
    toggleTodo() {
      this.$emit('toggledone-index', this.todoindex);
    },
    deleteTodo() {
      this.$emit('delete-index', this.todoindex);
    }
  }
};
</script>

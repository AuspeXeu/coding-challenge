<template>
  <div
    class="flex justify-between items-center py-4 px-2 border-t-2 border-black"
    :class="{ 'bg-green-600': this.todo.done, 'bg-red-500': !this.todo.done }">
    <p class="cursor-pointer" :class="this.todo.done?'line-through':''" @click="toggleTodo">
      {{ todo.todo }}
    </p>
    <div class="flex justify-center">
      <input type="checkbox" class="h-10 w-10 mx-4" :checked="this.todo.done" @click="toggleTodo">
      <Btn 
        btnStyle="py-2 px-4 bg-black rounded"
        @click="deleteTodo"
        btnText="Delete Todo"
      />
      <!-- <button class="py-2 px-4 bg-black rounded" @click="deleteTodo">
        Delete Todo
      </button> -->
    </div>
  </div>
</template>

<script>
import Btn from './Btn.vue'
export default {
  name: 'Todo',
  props: ['todoprop', 'todoindex'],
  components: {
    Btn
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
      this.$emit('delete-todo-index', this.todoindex)
    }
  }
};
</script>

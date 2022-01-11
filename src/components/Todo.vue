<template>
  <div
    class="flex justify-between items-center py-4 px-2 border-t-2 border-black"
    :class="{ 'bg-green-600': this.todo.done, 'bg-red-500': !this.todo.done }">
    <input type="checkbox" @click="toggleTodo" name="done" id="done">
    <p class="cursor-pointer" :class="{ 'line-through': this.todo.done }" @click="toggleTodo">
      {{ todo.todo }}
    </p>
    <Btn :class="'py-2 px-4 bg-black rounded'" :value="'Delete Todo'" @click="deleteTodo" />
  </div>
</template>

<script>
import Btn from './Btn/Btn'

export default {
  name: 'Todo',
  components: {
    Btn,
  },
  props: ['todoprop', 'todoindex'],
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
      this.$emit('delete', this.todoindex);
    }
  }
};
</script>

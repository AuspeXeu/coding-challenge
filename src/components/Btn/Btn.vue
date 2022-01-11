<template>
    <button :class='this.btnClass'>
      {{ btnVal }}
    </button>
</template>

<script>
export default {
  name: 'Btn',
  props: ['value', 'class'],
  data() {
    return {
      btnVal: this.value,
      btnClass: this.class,
    };
  }
};
</script>

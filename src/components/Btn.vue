<template>
  <button :class="btnStyle">{{btnText}}</button>
</template>

<script>
export default {
  name:'btn',
  props: {
      btnStyle: String,
      btnText: String
  }
}
</script>
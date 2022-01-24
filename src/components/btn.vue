<template>
    <button class="normal"
            :class="type"
            :disabled="disabled"
            @click="callback($event)"
    >
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "btn",
        props: {
            type: String,
            disabled: Boolean
        },
        methods: {
            callback: function() {
                // this.$emit('click', e);
            }
        }
    }
</script>

<style scoped>

</style>
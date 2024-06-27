<!-- Spinner.vue -->
<template>
    <div class="sk-spinner sk-spinner-cube-grid" v-show="loading">
        <div class="sk-cube"></div>
        <div class="sk-cube"></div>
        <div class="sk-cube"></div>
        <div class="sk-cube"></div>
        <div class="sk-cube"></div>
        <div class="sk-cube"></div>
        <div class="sk-cube"></div>
        <div class="sk-cube"></div>
        <div class="sk-cube"></div>
    </div>
</template>

<script>
export default {
    name: 'Spinner',
    props: {
        loading: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style>
</style>
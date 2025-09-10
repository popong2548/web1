<template>
  <div class="greeting">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      message: 'สวัสดี Vue.js'
    };
  }
};
</script>

<style scoped>
.greeting {
  color: #42b983; /* สีเขียวของ Vue */
  font-size: 24px;
  font-weight: bold;
}
</style>
<template>
  <v-container>
    <v-card>
      <v-card-title>Admin Dashboard</v-card-title>
      <v-card-text v-if="$store.state.auth.user">
        <p>ยินดีต้อนรับ, {{ $store.state.auth.user.email }}</p>
        <p>สิทธิ์ของคุณ: {{ $store.state.auth.user.role }}</p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'admin-auth'
}
</script>
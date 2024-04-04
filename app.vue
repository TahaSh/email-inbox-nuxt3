<script>
import '~/assets/css/main.css'
</script>

<template>
  <div class="app">
    <div class="app-sidebar-container">
      <AppSidebar />
    </div>
    <div class="main">
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
}

.app-sidebar-container {
  --width: 260px;
  width: var(--width);
  height: 100vh;
  position: relative;
}

.app-sidebar {
  width: var(--width);
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}

.main {
  flex: 1;
}
</style>

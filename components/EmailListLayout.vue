<template>
  <div class="email-list-layout">
    <div class="email-list-layout__header">
      <h1 class="email-list-layout__title">
        <slot name="title" />
      </h1>
    </div>
    <div class="email-list-layout__main">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.email-list-layout__header {
  padding: 24px 24px 0;
}

.email-list-layout__title {
  padding: 0;
  margin: 0;
  font-size: 32px;
  font-weight: 600;
  color: #121829;
}

.email-list-layout__main {
  margin-top: 32px;
}
</style>

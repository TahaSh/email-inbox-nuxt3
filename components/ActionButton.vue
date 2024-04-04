<script setup lang="ts"></script>

<template>
  <button class="action-button">
    <div class="action-button__icon">
      <slot name="icon" />
    </div>
    <span>
      <slot name="title" />
    </span>
  </button>
</template>

<style scoped>
.action-button {
  font-family: 'Plus Jakarta Sans', sans-serif;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 0 8px;
  font-size: 14px;
  font-weight: 500;
  color: #4b5563;
  cursor: pointer;
  padding: 4px;
}

.action-button:hover {
  color: #121829;
}

.action-button__icon {
  display: flex;
  width: 16px;
}
</style>

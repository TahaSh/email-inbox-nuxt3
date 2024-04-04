<template>
  <Transition name="fade">
    <slot name="fade" />
  </Transition>
  <Transition name="slide-right">
    <slot name="slide" />
  </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-right-enter-active {
  transition: all 0.5s ease;
}

.slide-right-leave-active {
  transition: all 0.5s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>

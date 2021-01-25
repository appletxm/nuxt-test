<template>
  <div class="app">
    <nav class="navigator">
      <NuxtLink to="/about">About Page</NuxtLink>
      <NuxtLink to="/999">动态单层请求</NuxtLink>
      <NuxtLink to="/999/888">动态多层请求</NuxtLink>
    </nav>
    <div class="body">
        <Nuxt />
    </div>
  </div>
</template>
<template>
  <div>
    <h1>Slug: {{ slug }}</h1>
    <p>Path: {{ $route.path }}</p>
    <NuxtLink to="/">Back to Mountains</NuxtLink>
  </div>
</template>
<script>
export default {
  async asyncData({ params, redirect }) {
    // const mountains = await fetch(
    //   'https://api.nuxtjs.dev/mountains'
    // ).then((res) => res.json())

    // const filteredMountain = mountains.find(
    //   (el) =>
    //     el.continent.toLowerCase() === params.continent &&
    //     el.slug === params.mountain
    // )
    // if (filteredMountain) {
    //   return {
    //     continent: filteredMountain.continent,
    //     mountain: filteredMountain.title
    //   }
    // } else {
    //   redirect('/')
    // }
    console.info(params, redirect)
  }
}
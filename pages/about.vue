<template>
  <div class="container">
    <h1>data from : {{rendering}}</h1>
    <div class="render-data">
      <a-table :columns="columns" :data-source="list">
        <a slot="name" slot-scope="text">{{ text }}</a>
      </a-table>
    </div>
  </div>
</template>

<script>
import {columns} from '../models/common'

export default {
  layout: 'about',
  data() {
    return {
      columns,
      list: [],
      list2: []
    }
  },
  async asyncData({$axios, ...args}) {
    console.info('===========about page==========', args)
    const res = await $axios.get('/api/user-info?', {
      params: {
        id: '9999'
      }
    })
    // console.info('===res===', res.data.data)

    const resPost = await $axios.post('/api/post-info', {
      name: '123',
      title: '7777'
    })

    return {
      rendering: process.server ? 'server' : 'client',
      list: res.data.data,
      list2: resPost.data.data
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 20px;
  color: #35495e;
  letter-spacing: 1px;
  display: block;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

<template>
  <div class="page-index">
    <h1> {{$store.state.testServerData}} Hello Nuxters! 👋 {{$store.state.counter}}</h1>
    <p>
      This page is rendered on the <strong>{{ rendering }}</strong>
    </p>
    <p v-if="rendering === 'server'">
      First load or hard refresh is done on server side.
    </p>
    <p v-if="rendering === 'client'">Navigation is done on client side.</p>
    <ul>
      <li>Refresh the page for server side rendering.</li>
      <li>Click the links to see client side rendering.</li>
    </ul>

    <div>
      <button>999999999999999</button>
      <a-button type="danger">
        Danger
      </a-button>
    </div>

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
  // middleware: 'api/get-data',

  data(){
    return {
      list: [],
      columns,
    }
  },

  async asyncData({$axios, ...args}) {
    // console.info('=====================', args)
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
  },

  mounted() {
    console.info('*********mounted*********')
  }
}
</script>

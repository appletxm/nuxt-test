<template>
  <div class="page-index">
    <h1>Hello Nuxters! 👋</h1>
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
      <my-button type="danger">
        Danger
      </my-button>
    </div>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue';
// import axios from 'axios'

// console.info('******', Button)

export default {
  components: {
    'my-button': Button
  },
  data(){
    return {
      list: []
    }
  },
  async asyncData({$axios, ...args}) {
    console.info('=====================', args)
    const res = await $axios.get('/api/get-data?id=9999')
    console.info('===res===', res)

    return {
      rendering: process.server ? 'server' : 'client',
      list: res.data
    }
  },

  mounted() {
    console.info('*********mounted*********')
  }
}
</script>

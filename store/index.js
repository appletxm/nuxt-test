export const state = () => ({
  counter: 0,
  testData: [],
  testServerData: 'server data 11223344',
  authenticated: true
})

export const actions = {
  nuxtServerInit({ commit }, { app}) {
    console.info('=========nuxtServerInit=========')
    // console.log('我在服务端执行了', store)
    commit('increment', 88)
  }
}

export const mutations = {
  testServerData(state) {
    state.testServerData
  },

  increment(state, value) {
    console.info('i will run again')
    state.counter = value ? value : state.counter++
  },

  testData(state, value) {
    state['testData'] = value
  }
}
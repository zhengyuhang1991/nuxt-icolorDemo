export const state = () => ({
  name: '',
  code: ''
})

export const mutations = {
  setCityName(state, name) {
    state.name = name
  },
  setCityCode(state, code) {
    state.code = Number.parseInt(code)
  }
}

export const actions = {
  refreshCityInfo(state, {name, code}) {
    state.commit('setCityName', name)
    state.commit('setCityCode', code)
  }
}

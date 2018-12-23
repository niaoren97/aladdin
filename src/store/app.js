export default {
  namespaced: true,
  state: {
    tab: 0
  },
  mutations: {
    switchTab(state, tab) {
      state.tab = tab;
    }
  }
};

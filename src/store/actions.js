export default {
  asyncChangeName(context) {
    setTimeout(() => {
        context.commit('asyncChangeName','不问');
    }, 1000);
  }
}

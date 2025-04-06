const app = Vue.createApp({
  data() {
    return {
      showName: true,
      name: "Able Josh",
      message: "Welcome to Vue.js!",
      age: 21,
    };
  },
  methods: {
    toggleShowBook() {
      this.showName = !this.showName;
    },
  },
});
app.mount("#app");

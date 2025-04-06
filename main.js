const app = Vue.createApp({
  data() {
    return {
      movies: [
        {
          title: "Inception",
          year: 2010,
          Image: "assets/images (1).jpeg",
          id: 1,
          isFav: true,
        },
        {
          title: "The Shawshank Redemption",
          year: 1994,
          Image: "assets/images (2).jpeg",
          id: 2,
          isFav: false,
        },
        {
          title: "Forrest Gump",
          year: 1994,
          Image: "assets/images (3).jpeg",
          id: 3,
          isFav: true,
        },
        {
          title: "The Avengers",
          year: 2012,
          Image: "assets/images.jpeg",
          id: 4,
          isFav: false,
        },
      ],
    };
  },
  methods: {
    toggleIsFav(movie) {
      movie.isFav = !movie.isFav;
    },
  },
});
app.mount("#app");

const API_KEY = process.env.API_KEY;


export default {
    fetchTrending: {
        title: " Trending",
        url: `http://www.themoviedb.org/movie/425909-ghostbusters-afterlife =${API_KEY} `
    },
    fetchTopRated: {
        title: " Top Rated",
        url: `http://www.themoviedb.org/movie/634649-spider-man-no-way-home =${API_KEY}&langauge=en-us `
    },
    fetchActionMoives: {
        title: " Action",
        url: `http://www.themoviedb.org/movie/899082-harry-potter-20th-anniversary-return-to-hogwarts =${API_KEY}&with_genres=28 `
    },
    fetchComedyMovies: {
        title: " Comedy",
        url: `http://www.themoviedb.org/movie/646380-don-t-look-up =${API_KEY}&with_genres=35 `
    },
    fetchHorrorMovies: {
        title: " Horror",
        url: `http://www.themoviedb.org/tv/1413-american-horror-story =${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies: {
        title: " Romance",
        url: `http://www.themoviedb.org/movie/13994-romance-cigarettes =${API_KEY}&with_genres=10749 `
    },
    fetchMystery : {
        title: " Mystery",
        url: `http://www.themoviedb.org/movie/514999-murder-mystery =${API_KEY}&with_genres=9648`
    }

}
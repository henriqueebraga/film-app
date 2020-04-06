<template>
    <div>
        <div class="list_movies" v-for="movie in allMovies" :key="movie.watched">
            <div class="list_movies-box">
                <img class="list_movies-img" :src="movie.image">
                <!-- <button @click="setFilmStatus(movie)" v-if="movie.watched">Watched</button>
                <button @click="setFilmStatus(movie)" v-else>Not Watched</button> -->
                <button @click="changeStatus(movie)" v-if="movie.watched">Watched</button>
                <button @click="changeStatus(movie)" v-else>Not Watched</button>
            </div>
            <div class="list_movies-description">
                <h4>{{ movie.name }}</h4>
                <p>{{ movie.description }}</p>
                <span> {{ movie.date }}</span>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'SingleMovie',
    data() {
        return {
            buttonLabel: '',
            param: this.$route.params.movie_slug,
            all: this.$store.state.movies,
        }
    },
    mounted() {
        if(localStorage.getItem('allMovies')) {
            try {
                this.all = JSON.parse(localStorage.getItem('allMovies'));
            } catch(e) {
                console.log(e + 'this is an error');
            }
        }
    },
    computed: {
        allMovies() {
            return this.all.filter((movie) => {
                return movie.slug === this.param
            })
        }
    },
    methods: {
        // setFilmStatus(status) {
        //     console.log(status.watched);
        //     status.watched = !status.watched;
        //     localStorage.setItem('all', JSON.stringify(this.all));
        //     return this.all;
        // },
        changeStatus(movie) {
            movie.watched = !movie.watched
            const parsedMovies = JSON.stringify(this.all);
            localStorage.setItem('allMovies', parsedMovies);
        }
    }
}
</script>
<style lang="scss">
.list_movies {
    display: flex;
    width: 90%;
    margin: 40px auto;
    &-box{
        display: flex;
        width: 200px;
        flex: 0 0 200px;
        flex-wrap: wrap;
        position: relative;
        button {
            position: absolute;
            border-radius: 2px;
            border: none;
            top: 2px;
            left: 4px;
            padding: 2px;
            font-size: 6px;
        }
    }
    &-img {
        width: 200px;
        border-radius: 5px;
    }
    &-description {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        flex: 0 0 80%;
        width: 80%;
        padding: 0px 30px 10px;
        margin-top: 12px;
        position: relative;
        span {
            font-size: 10px;
            position: absolute;
            bottom: 0;
        }
        a {
            text-decoration: none;
            font-size: 12px;
            position: absolute;
            color: #107996c9;
            bottom: 0px;
            right: 150px;
        }
    }
}
</style>

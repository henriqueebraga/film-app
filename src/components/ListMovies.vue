<template>
    <div class="list">
        <!-- <ul class="movies-status">
            <li @click.prevent="filterSwitch($event)" id="watched">Watched movies</li>
            <li @click.prevent="filterSwitch($event)" id="active">Unwatched movies</li>
        </ul> -->
        <select class="list_select" v-model="selectStatus">
            <option value="All">All</option>
            <option value="watched">Watched</option>
            <option value="unwatched">Unwatched</option>
        </select>
        <div v-for="movie in filterededByStatus" :key="movie.id" class="list_movies">
            <div class="list_movies-box">
                <router-link :to="{ name: 'SingleMovie', params: { movie_slug: movie.slug }}">
                    <img class="list_movies-img" :src="movie.image">
                </router-link>
            </div>
            <div class="list_movies-description">
                <h4>{{ movie.name }}</h4>
                <p>{{ movie.description }}</p>
                <span> {{ movie.date }}</span>
                <router-link :to="{name: 'SingleMovie', params: { movie_slug: movie.slug }}">Check full description</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListMovies',
    data() {
        return {
            movies: this.$store.state.movies,
            filter: 'active',
            feedback: null,
            selectStatus: 'All',
        }
    },
    mounted() {
        if(localStorage.getItem('allMovies')) {
            try {
                this.movies = JSON.parse(localStorage.getItem('allMovies'));
            } catch(e) {
                console.log(e + 'this is an error');
            }
        }
    },
    computed: {
        moviesFiltered() {
            if (this.filter == 'active'){
                return this.$store.state.movies.filter(movie => !movie.watched)
            } else if (this.filter == 'watched') {
                return this.$store.state.movies.filter(movie => movie.watched)
            }
            return this.$store.state.movies
        },
        filterededByStatus() {
            let allMovies = this.movies;
            let status = this.selectStatus;

            if( status === 'unwatched') {
                return allMovies.filter((movie) => {
                    return !movie.watched
                })
            } else if (status === 'watched') {
                return allMovies.filter((movie) => {
                    return movie.watched
                })
            } else {
                return allMovies;
            }
        }
    },
    methods: {
        filterSwitch(event) {
            let target = event.currentTarget.id;
            if (target === 'active') {
                this.filter = 'active'
            } else {
                this.filter = 'watched'
            }
            console.log(event.currentTarget.id);
        }
    }
}
</script>
<style lang="scss">
.list {
    margin-top: 50px;
}
.list_select {
    margin: 10px 0;
}

.movies-status {
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
    margin-bottom: 50px;
    li {
        cursor: pointer;
        text-transform: uppercase;
        color: #107896;
        &:hover {
            color: #10799673;
        }
        &:active{
            color: orange;
        }
    }
}
.list_movies {
    display: flex;
    width: 80%;
    margin-bottom: 40px;
    &-box{
        display: flex;
        width: 200px;
        flex: 0 0 200px;
        flex-wrap: wrap;
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
            right: 10px;
        }
    }
}
</style>

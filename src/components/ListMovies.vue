<template>
    <div class="list">
        <ul class="movies-status">
            <li @click="filter = 'watched'">Watched movies</li>
            <li @click="filter = 'active'">Unwatched movies</li>
        </ul>
        <div v-for="movie in moviesFiltered" :key="movie.id" class="list_movies">
            <div class="list_movies-box">
                <input type="checkbox" v-model="movie.watched">
                <img class="list_movies-img" :src="movie.image">
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
            filter: 'active',  
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
        }
    }
}
</script>
<style lang="scss">
.list {
    margin-top: 50px;
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
    width: 90%;
    margin-bottom: 40px;
    &-box{
        display: flex;
        width: 200px;
        flex: 0 0 200px;
        flex-wrap: wrap;
    }
    &-img {
        width: 200px;
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
<template>
    <div>
        <div class="list_movies" v-for="movie in allMovies" :key="movie.slug">
            <div class="list_movies-box">
                <input type="checkbox" v-model="movie.watched">
                <img class="list_movies-img" :src="movie.image">
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
            param: this.$route.params.movie_slug,
            all: this.$store.state.movies
        }
    },
    computed: {
        allMovies() {
            return this.all.filter((movie) => {
                return movie.slug === this.param
            })
        }          
    }
}
</script>
<style lang="scss">
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
            right: 150px;
        }
    }
}
</style>
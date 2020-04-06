<template>
    <div class="home">
        <div>
            <input class="home_search-bar"  v-model="search" placeholder="Search for a film...">
        </div>
        <div v-for="m in moviesSearch" :key="m.id" class="home_movies">
            <div class="home_movies-box">
                <router-link :to="{name: 'SingleMovie', params: { movie_slug: m.slug}}"><img class="home_movies-img" :src="m.image"></router-link>
            </div>
            <div class="home_movies-description">
                <h4>{{ m.name }}</h4>
                <p>{{ m.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            search: '',
        }
    },
    computed: {
        moviesSearch() {
            if (this.search === '') {
                this.search = null
            } else {
                return this.$store.state.movies.filter(movie => {
                let capitalized = movie.name.toLowerCase();
                return capitalized.includes(this.search.toLowerCase())
                });
            }

        }
    }
}
</script>
<style lang="scss">
.home {
    min-height: 400px;
    input {
        text-transform: lowercase;
    }
    &_search-bar {
        display: flex;
        width: 70%;
        margin: 50px auto;
        height: 30px;
        padding: 0 10px;
        align-content: center;

    &::placeholder {
        opacity: 0.4;
        font-size: 14px;
        }
    }
}
.home_movies {
    display: flex;
    padding: 0 50px;
    &-box{
        margin-top: 40px;
    }
    &-img {
        display: flex;
        width: 200px;
        flex: 0 0 30%;
        border-radius: 4px;
    }
    &-description {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 0px 30px 10px;
        margin-top: 55px;
        h4 {
            text-transform: uppercase;
        }
    }
}

</style>

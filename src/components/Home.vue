<template>
    <div class="home">
        <div>
            <input class="home_search-bar" autocapitalize="none" v-model="search" placeholder="Search for a film...">
        </div>
        <div v-for="m in moviesSearch" :key="m.id" class="home_movies">
            <div class="home_movies-box">
                <img class="home_movies-img" :src="m.image">
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
            search: null,
            capitalized: ''
        }
    },
    computed: {
        capitalizedStr() {
            return this.$store.state.movies.filter(doc => {
                return this.capitalized = doc.name.toUpperCase();
                console.log(this.capitalized)
            })
        },
        moviesSearch() {
            if (this.search === '') {
                this.search = null   
            } else {
                return this.$store.state.movies.filter(movie => {
                return movie.name.match(this.search)
                console.log(this.capitalized);
                });
            }
            
        }
    }
}
</script>
<style lang="scss">
.home {
    min-height: 400px;
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
    }
    &-description {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 0px 30px 10px;
        margin-top: 55px;
    }
}

</style>
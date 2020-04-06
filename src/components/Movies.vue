<template>
    <div class="movies">
        <div class="movies_container">
            <div class="movies_container-right">
                <ListMovies :filtermovies="movies"></ListMovies>
            </div>
        </div>
    </div>
</template>

<script>
import ListMovies from './ListMovies'

export default {
    name: 'Movies',
    components: {
        ListMovies
            },
    data() {
        return {
            movies: this.$store.state.movies
        }
    },
    computed: {
    },
    methods: {

    }
}
</script>
<style lang="scss">
.movies {
    h1 {
        position: absolute;
        text-transform: uppercase;
        font-size: 20px;
        color: rgb(44, 44, 44);
        left: 30px;
        top: 65px;
    }
    &_container {
        display: flex;

        &-left {
            flex: 0 0 20%;
            position: relative;
            display: flex;
            flex-direction: column;
            margin: 0 30px 0 0;
            &-inner {
                button {
                    width: 100%;
                    height: 35px;
                    border: none;
                    background-color: #107996;
                    cursor: pointer;
                    &:hover {
                        background-color: #10799691;
                    }

                }
            }
            &-dropdown {
                display: flex;
                flex-direction: column;
                background-color: rgb(245, 245, 245);
                width: 100%;

                ul li {
                    a {
                      background-color: #fff;
                        cursor: pointer;
                    }
                }
                .jan, .feb, .mar, .apr, .may, .june, .july, .aug, .sep, .oct, .nov, .dec{
                    display: none;
                    &.active {
                        display: block;
                    }
                }

            }
        }
        &-right {
            flex: 0 0 75%;
            margin: 0 auto;
        }

    }
}
</style>

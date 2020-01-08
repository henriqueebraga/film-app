<template>
    <div class="movies">
        <h1>Releases</h1>
        <div class="movies_container">
            <div class="movies_container-left">
                <div class="movies_container-left-inner">
                    <button type="button" @click="showLinks($event)" id="1">January</button>
                    <div v-for="jan in januaryMovies" :key="jan.slug" class="movies_container-left-dropdown">
                        <a class="jan">{{ jan.name }}</a>
                    </div>
                </div>
                <div class="movies_container-left-inner">
                    <button type="button" @click="showLinks($event)" id="2" class="dropbtn">February</button>
                    <div id="dropdown" class="movies_container-left-dropdown">
                        <a class="feb">link 1</a>
                    </div>
                </div>
                <div class="movies_container-left-inner">
                    <button class="dropbtn">March</button>
                    <div id="dropdown" class="movies_container-left-dropdown">
                        <a>link 1</a>
                    </div>
                </div>
                <div class="movies_container-left-inner">
                    <button class="dropbtn">April</button>
                    <div id="dropdown" class="movies_container-left-dropdown">
                        <a>link 1</a>
                    </div>
                </div>
                <div class="movies_container-left-inner">
                    <button class="dropbtn">May</button>
                    <div id="dropdown" class="movies_container-left-dropdown">
                        <a>link 1</a>
                    </div>
                </div>
                <div class="movies_container-left-inner">
                    <button class="dropbtn">June</button>
                    <div id="dropdown" class="movies_container-left-dropdown">
                        <a>link 1</a>
                    </div>
                </div>
                <div class="movies_container-left-inner">
                    <button class="dropbtn">July</button>
                    <div id="dropdown" class="movies_container-left-dropdown">
                        <a>link 1</a>
                    </div>
                </div>
                <div class="movies_container-left-inner">
                    <button class="dropbtn">August</button>
                    <div id="dropdown" class="movies_container-left-dropdown">
                        <a>link 1</a>
                    </div>
                </div>
                <div class="movies_container-left-inner">
                    <button class="dropbtn">September</button>
                    <div id="dropdown" class="movies_container-left-dropdown">
                        <a>link 1</a>
                    </div>
                </div>
                <div class="movies_container-left-inner">
                    <button class="dropbtn">October</button>
                    <div id="dropdown" class="movies_container-left-dropdown">
                        <a>link 1</a>
                    </div>
                </div>
                <div class="movies_container-left-inner">
                    <button class="dropbtn">November</button>
                    <div id="dropdown" class="movies_container-left-dropdown">
                        <a>link 1</a>
                    </div>
                </div>
                <div class="movies_container-left-inner">
                    <button class="dropbtn">December</button>
                    <div id="dropdown" class="movies_container-left-dropdown">
                        <a>link 1</a>
                    </div>
                </div>
            
            <!-- <li>January</li>
            <li>February</li>
            <li>March</li>
            <li>April</li>
            <li>May</li>
            <li>June</li>
            <li>July</li>
            <li>August</li>
            <li>September</li>
            <li>October</li>
            <li>November</li>
            <li>December</li> -->
            </div>
            <div class="movies_container-right">
                <ListMovies></ListMovies>
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
            toggleLink: false
        }
    },
    computed: {
        januaryMovies() {
            return this.$store.state.movies.filter(movie => {
                return movie.date.charAt(4) == '1';
            })
        }
    },
    methods: {
        // showLinks(el) {
        //     if(this.toggleLink) {
        //         this.toggleLink = false;
        //         document.querySelector('.movies_container-left-dropdown a').classList.remove('active');
        //     } else {
        //         this.toggleLink = true;
        //         document.querySelector('.movies_container-left-dropdown a').classList.add('active');
        //     }
        // }
        showLinks(event) {
            let targetId = event.currentTarget.id;
            if(targetId === '1') {
                if(this.toggleLink) {
                this.toggleLink = false;
                document.querySelector('.movies_container-left-dropdown .jan').classList.remove('active');
                } else {
                    this.toggleLink = true;
                    document.querySelector('.movies_container-left-dropdown .jan').classList.add('active');
                }
            } else if (targetId === '2') {
                if(this.toggleLink) {
                this.toggleLink = false;
                document.querySelector('.movies_container-left-dropdown .feb').classList.remove('active');
                } else {
                    this.toggleLink = true;
                    document.querySelector('.movies_container-left-dropdown .feb').classList.add('active');
                }
            }
        }
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
            margin: 50px 30px 0 0;
            &-inner {
                button {
                    width: 100%;
                    height: 20px;
                    border: none;
                    background-color: #107996;
                    border-radius: 2px;
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

                a {
                    display: none;
                    &:hover {
                        background-color: #fff;
                        cursor: pointer;
                    }
                }
                .jan, .feb{
                    display: none;
                    &.active {
                        display: block;
                    }
                }
                
            }
        }
        &-right {
            flex: 0 0 80%;
        }

    }
}
</style>
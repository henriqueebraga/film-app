<template>
    <div class="navbar">
        <ul class="navbar-menu">
            <router-link :to="{ name: 'Home'}"><li>Home</li></router-link>
            <router-link :to="{ name: 'Movies'}"><li>Movies</li></router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Navbar'
        }
    }
}
</script>
<style lang="scss">
.navbar{
    background-color: #107896;
    height: 50px;
    &-menu {
        list-style-type: none;
        display: flex;
        justify-content: center;
        a {
            text-decoration: none;
            text-transform: uppercase;
            font-weight: 900;
            color: #fff;
            margin-right: 20px;
            &:hover {
                background-color: #fff;
                color: #107896;
            }
        }
        li {
            line-height: 50px;    
        }
    }
}

</style>
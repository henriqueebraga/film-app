import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store ({
    state: {
        movies: [
            {
                slug: 'black-widow',
                watched: false,
                name: 'Black Widow',
                description: 'Black Widow',
                date: '01.05.2020',
                image: require('../assets/film-img/black-widow.jpg')
            },
            {
                slug: 'birds-of-prey',
                watched: true,
                name: 'Birds of Prey',
                description: 'Birds of Prey',
                date: '05.02.2020',
                image: require('../assets/film-img/birds-of-prey.jpg')
            },
            {
                slug: 'wonder-woman',
                watched: false,
                name: 'Wonder Woman',
                description: 'Wonder Woman',
                date: '05.06.2020',
                image: require('../assets/film-img/wonder-woman.jpg')
            },
            {
                slug: 'mulan',
                watched: false,
                name: 'Mulan',
                description: 'Mulan',
                date: '25.03.2020',
                image: require('../assets/film-img/mulan.jpg')
            },
            {
                slug: 'the-new-mutants',
                watched: false,
                name: 'The New Mutants',
                description: 'The New Mutants',
                date: '02.04.2020',
                image: require('../assets/film-img/mutants.jpg')
            },
            {
                slug: 'bad-boys',
                watched: false,
                name: 'Bad boys 3',
                description: 'Bad boys 3',
                date: '01.16.2020',
                image: require('../assets/film-img/bad-boys.jpg')
            },
            {
                slug: 'a-quiet-place',
                watched: false,
                name: 'A quiet place',
                description: 'A quiet place',
                date: '18.03.2020',
                image: require('../assets/film-img/quiet-place.jpg')
            },
            {
                slug: 'ghostbursters-2',
                watched: false,
                name: 'Ghostbursters 2',
                description: 'Ghostbursters 2',
                date: '08.07.2020',
                image: require('../assets/film-img/ghostbursters.jpg')
            },
            {
                slug: 'Dolittle',
                watched: false,
                name: 'Dolittle',
                description: 'Dolittle',
                date: '26.01.2020',
                image: require('../assets/film-img/dolittle.jpg')
            },
            {
                slug: 'fast-furious',
                watched: false,
                name: 'Fast & Furious',
                description: 'Fast & Furious',
                date: '21.05.2020',
                image: require('../assets/film-img/fast-furios.jpg')
            },
            {
                slug: 'the-invisible-man',
                watched: false,
                name: 'The invisble Man',
                description: 'The invisble Man',
                date: '28.02.2020',
                image: require('../assets/film-img/invisible-man.jpg')
            },
            {
                slug: 'minions-2',
                watched: false,
                name: 'Minions 2',
                description: 'Minions 2',
                date: '02.07.2020',
                image: require('../assets/film-img/minions.jpg')
            },
            {
                slug: 'free-guy',
                watched: false,
                name: 'Free guy',
                description: 'Free guy',
                date: '01.07.2020',
                image: require('../assets/film-img/free-guy.jpg')
            },
            {
                slug: 'venom-2',
                watched: false,
                name: 'Venom 2',
                description: 'Venom 2',
                date: '02.10.2020',
                image: require('../assets/film-img/venom.jpg')
            },
            {
                slug: 'the-eternals',
                watched: false,
                name: 'The Eternals',
                description: 'The Eternals',
                date: '02.10.2020',
                image: require('../assets/film-img/eternals.jpg')
            }
        ]
    },
    getter: {
        filterMoviesByName: state => name => state.movies.filter(m => m.name === name)
    }
})

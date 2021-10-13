import api from "../../api";

const MUTATION_TYPES = {
    UPDATE_WEATHER: 'UPDATE_WEATHER'
};

export default {
    actions: {
        async fetchWeather({commit}, city) {
            const weather = await api.weather(city)
            const weatherJSON = await weather.json()

            commit(MUTATION_TYPES.UPDATE_WEATHER, weatherJSON)
        }
    },
    mutations: {
        [MUTATION_TYPES.UPDATE_WEATHER](state, weather) {
            state.weather = weather
        }
    },
    state: {
        weather: {},
    },
    getters: {
        getCityName: state => {
            return state.weather.city
        },
         getWeather: state => {
            return state.weather
        }
    }
}
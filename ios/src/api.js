export default {
    applications: page => fetch(`http://localhost:3000/pages/${page}`),
    bar: () => fetch(`http://localhost:3000/bar`),
    background: () => fetch(`http://localhost:3000/background`),
    pages: () => fetch(`http://localhost:3000/pages`),
    weather: city => fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&cnt=4&appid=b6adff16587c21bf6f5192ce85bf7440`)
}



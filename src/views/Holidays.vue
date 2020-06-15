<template>
    <div>
        Holidays
        <app-header></app-header>
        <div v-if="user">Välkommen till Helgdagarna, {{user}}</div>
        <select id="countries" v-model="currentCountry" @change="getHolidays">
            <option value=""></option>
            <option v-for="country in countries" :key="country.country" :value="country">{{country.country}}</option>
        </select>
        <div v-if="holidays.length > 0">
            <div v-for="(holiday,index) in holidays" :key="index">
                <span>
                    <app-holiday :holiday="holiday"></app-holiday>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import Holiday from "../components/Holiday";
    import axios from 'axios'

    export default {
        name: "Holidays",
        data() {
            return {
                countries: [],
                currentCountry: {},
                holidays: []
            }
        },
        beforeMount() {
            this.getCountries()
        },
        components: {
            appHeader: Header,
            appHoliday: Holiday
        },
        computed: {
            user: {
                get() {
                    return this.$store.getters.getUser
                }
            }
        },
        methods: {
            async getHolidays() {
                this.holidays = []

                const date = new Date().getFullYear()

                const response = await axios.get(`https://calendarific.com/api/v2/holidays?&api_key=de7eee7f32d4660a5a14cff44dbbad0dec117a15&country=${this.currentCountry.alpha2code}&year=${date}`)
                if(response.data.response.holidays) {
                    for (const holiday of response.data.response.holidays) {
                        this.holidays.push(holiday)
                    }
                }
            },
            async getCountries() {
                const response = await axios.get('https://restcountries.eu/rest/v2/all')
                for (const country of response.data) {
                    this.countries.push({country: country.name, alpha2code: country.alpha2Code})
                }
            }
        }
    }
</script>

<style scoped>
    p{
        margin: 2px;
    }
</style>
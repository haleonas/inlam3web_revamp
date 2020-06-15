<template>
    <div>
        <p>Name: {{this.holiday.name}}</p>
        <p>Description: {{this.holiday.description}}</p>
        <p>Country: {{this.holiday.country.name}}</p>
        <p>Countrycode: {{this.holiday.country.id}}</p>
        <p>Date:  {{this.holiday.date.iso}}</p>
        <p>Datetime: {{this.holiday.date.datetime.year}}-{{this.holiday.date.datetime.month}}-{{this.holiday.date.datetime.day}}</p>
        <p>Type: {{this.holiday.type[0]}}</p>
        <p>Locations: {{this.holiday.locations}}</p>
        <p>States: {{this.holiday.states}}</p>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "Holiday",
        props:{
            holiday:Object
        }
    }
</script>

<style scoped>

</style>
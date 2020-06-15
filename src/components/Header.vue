<template>
    <div id="header">
        {{title}}
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/holidays">Holidays</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props: {
            title: String
        }
    }
</script>

<style scoped>
    #header {
        display: flex;
        flex-direction: column;
    }

    #nav {
        display: flex;
        justify-content: space-evenly;
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
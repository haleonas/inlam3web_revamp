<template>
    <div class="home">
        <app-header title="Home"></app-header>
        <app-set-user></app-set-user>
        <app-button-game></app-button-game>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import SetUser from "../components/SetUser";
    import ButtonGame from "../components/ButtonGame";
    export default {
        name: 'Home',
        components: {
            appHeader: Header,
            appSetUser: SetUser,
            appButtonGame: ButtonGame
        }
    }
</script>

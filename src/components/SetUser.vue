<template>
    <div id="user">
        <div v-if="user">Hej {{user}}</div>
        <form>
            <label for="username"> Username: </label>
            <input type="text" v-model="user" id="username" placeholder="username">
            <button @click.prevent="addUserAlert">Set</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "SetUser",
        computed: {
            user: {
                get() {
                    return this.$store.getters.getUser
                },
                set(value) {
                    this.$store.commit('setUser', value)
                }
            }
        },
        methods: {
            addUserAlert(){
                alert(`Användare satt,hej ${this.user}`)
            }
        }
    }
</script>

<style scoped>
    #user{
        display: flex;
        flex-direction: column;
    }
</style>
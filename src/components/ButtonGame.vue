<template>
    <div id="game">

        <div v-if="gameRuned">You got: {{buttonPushed}} button/s pressed</div>
        <div v-if="!gameStarted">
            <button @click="startGame">Start Game</button>
            <br>
            Click as many times as you can on the button
        </div>
        <div v-if="gameStarted">
            <button @click="$store.commit('increaseCounter',1)">{{buttonPushed}}</button>
            <br>
            Time left: {{countdown}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "ButtonGame",
        data() {
            return {
                countdown: 10,
                gameStarted: false,
                gameRuned: false
            }
        },
        computed: {
            buttonPushed: {
                get() {
                    return this.$store.getters.getButtonPushed
                }
            }
        },
        methods: {
            startGame() {
                this.gameStarted = true
                this.countdown = 10
                this.gameRuned = false
                this.$store.commit('resetCounter')
                this.countDownTimer()
            },
            countDownTimer() {
                if(this.countdown > 0) {
                    setTimeout(() => {
                        this.countdown -= 1
                        this.countDownTimer()
                    }, 1000)
                } else {
                    this.gameStarted = false
                    this.gameRuned = true
                }
            }

        }
    }
</script>

<style scoped>
    #game {
        margin-top: 20px;
    }
</style>
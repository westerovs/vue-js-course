// Декларативная отрисовка
const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello fucking world!'
    }
})

const app2 = new Vue({
    el: '#app-2',
    data: {
        message: `you are created this message ${new Date().toLocaleString()}`
    }
})


// Условия и циклы
const app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

const app4 = new Vue({
    el: '#app-4',
    data: {
        value: [
            {li: 'to Fucking your mom !'},
            {li: 'to Fucking your !'},
            {li: 'to Fucking all your girlfriend !'},
            {li: 'to Fucking this world !'},
        ]
    }
})

// Работа с пользовательским вводом
const app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Привет, Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })


























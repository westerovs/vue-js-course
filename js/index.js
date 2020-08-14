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
        message: `Привет, господин, я твой верный раб vue.js!`
    },
    methods: {
        reverseMessage33: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

const app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Be strong'
    }
})


// -----------------------------------------------------------
// ------------- Разбиение приложения на компоненты ----------
// -----------------------------------------------------------

// Определяем новый компонент под именем todo-item
// v1
Vue.component('todo-item', {
    template: '<li>My Beautiful Li</li>'
})

const app7a = new Vue({
    el: '#app-7-a'
})

// v2
Vue.component('todo-item', {
    // "prop", то есть входной параметр.
    // Имя входного параметра todo.
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

const app7b = new Vue({
    el: '#app-7-b',
    data: {
        shitList: [
            { id: 0, text: 'У нас тут есть такие Щи'},
            { id: 1, text: 'Xоть весь рот прополощи'},
        ]
    }
})


















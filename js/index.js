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


const app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  })










let { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Ciao caro, vengo da Vue :D !',
        image: 'https://picsum.photos/200/300'
      }
    }
  }).mount('#app')
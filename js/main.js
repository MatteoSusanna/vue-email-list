var app = new Vue({
    el: '#app',
    data: {
        mailCasuale: null,
    },
    mounted(){
      
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(mail => {
          this.mailCasuale = mail.data.response
        })
    },
  })
var app = new Vue({
    el: '#app',
    data: {
        mailCasuale: [],
    },

    mounted(){
        for(let i = 0; i < 10; i++){
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(mail => {
              if(!this.mailCasuale.includes()){
                this.mailCasuale.push(mail.data.response);
              }
            }) 
        }    
    },
  })
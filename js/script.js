const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            Mail_List:[], 
            Single_Mail: null,
            
        }
    },
    mounted() {

            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    this.Mail_List.push(result.data.response)
                    
                }
                )}
    },
    
}).mount('#app')  


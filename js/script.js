// const { createApp } = Vue

// createApp({
//     data() {
//         return {
//             message: 'Hello Vue!',
//             Mail_List:[], 
//             Single_Mail: null
//         }
//     },
//     mounted() {
//         axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
//             this.Single_Mail = result.data.response

//             console.log(this.Single_Mail)

//             for (let i = 0; i < 5; i++) {
//                 this.Mail_List.push(this.Single_Mail)
//                 console.log(this.Mail_List)
//             }

//         })
//     },
// }).mount('#app')  


const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            Mail_List:[], 
            Single_Mail: null
        }
    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
            this.Single_Mail = result.data.response

    


            
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    this.Mail_List.push(result.data.response)
                    console.log(this.Mail_List)
                   
                }
        )}

        })
    },
}).mount('#app')  
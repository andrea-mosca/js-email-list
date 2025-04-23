const emailEl = document.getElementById("email-list");

// funzione che aggiunge un'email alla lista
const createHTMLEmailList = (email) => {
    return `<li class="list-group-item">${email}/li>`
};

const apiEmailUrl = `https://flynn.boolean.careers/exercises/api/random/mail`
 
axios.get(apiEmailUrl)
    .then(responsive => {
        const utentEmail = responsive.data.response;
        for(let i = 0; i < 10; i++){
            emailEl.innerHTML += createHTMLEmailList(utentEmail);
        }
    });

const emailEl = document.getElementById("email-list");
const apiEmailUrl = `https://flynn.boolean.careers/exercises/api/random/mail`

// * FUNZIONE CHE AGGIUNGE UNA EMAIL ALLA LISTA
const createHTMLEmailList = (email) => {
    return `<li class="list-group-item">${email}</li>`
};

// * CICLO CHE GENERA TRAMITE API  10 EMAIL E LE AGGIUNGE NELL'HTML
for(let i = 0; i < 10; i++){
    axios.get(apiEmailUrl)
        .then(response => {
            const userEmail = response.data.response;
            emailEl.innerHTML += createHTMLEmailList(userEmail);
        });
}
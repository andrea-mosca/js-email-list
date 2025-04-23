const emailEl = document.getElementById("email-list");
const apiEmailUrl = `https://flynn.boolean.careers/exercises/api/random/mail`;

// * FUNZIONE CHE AGGIUNGE UNA EMAIL ALLA LISTA
const createHTMLEmailList = (email) => {
  return `<li class="list-group-item">${email}</li>`;
};

// *CREA FUNZIONE CHE GENERA TRAMITE API 10 EMAIL E LE AGGIUNGE NELL'HTML
function fetchAndRenderEmails() {
  for (let i = 0; i < 10; i++) {
    axios.get(apiEmailUrl).then((response) => {
      const userEmail = response.data.response;
      emailEl.innerHTML += createHTMLEmailList(userEmail);
    });
  }
}

//* CHIAMO FUNZIONE DI GENERAZIONE EMAIL
fetchAndRenderEmails();

// * bottone che generi altre 10 email in sostituzione delle altre
const generatEmailButton = document.getElementById("generate-email-button");

generatEmailButton.addEventListener("click", function () {
  emailEl.innerHTML = ``;
  fetchAndRenderEmails();
});


const apiEmailUrl = `https://flynn.boolean.careers/exercises/api/random/mail`

axios.get(apiEmailUrl)
    .then(responsive => {
        console.log(responsive.data.response);
    });
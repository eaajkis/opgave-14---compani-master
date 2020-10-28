// deletex.js
const fetch = require('node-fetch');

let beskedUrl = 'http://localhost:8080/beskeder/2';

async function deLete(url) {
    let respons = await fetch(url, {
        method: "DELETE"
    });
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function main(url) {
    try {
        let respons = await deLete(url);
        console.log(respons);
    } catch (fejl) {
        console.log(fejl);
    }
    process.exit();
}
main(beskedUrl);
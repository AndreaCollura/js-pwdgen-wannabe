
const nome = prompt ('Come ti chiami?'); 
const cognome = prompt ('Cognome?');
const colore = prompt ('Qual é il tuo colore preferito?');
const num = 21;

if (nome && cognome && colore && num) {

    document.getElementById('password').innerHTML= `
    <h1>CONGRATULAZIONI!</h1>
    <h1>La tua nuova Password super sicura è: ${nome}${cognome}${colore}${num} </h1>

    `;


} else  { 
    document.getElementById('password').innerHTML= `
    <h1>Per favore, aggiorna e ricompila tutti i campi correttamente!</h1>
    
    
    `;
}



console.log(nome + cognome + colore + num);
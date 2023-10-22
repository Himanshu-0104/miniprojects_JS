const quote = document.querySelector('.quote');
const quoteauthor = document.querySelector('.quoteauthor');
const category = document.querySelector('.category');

const quotebtn = document.querySelector('.quotebtn');


quotebtn.disabled = false;


quotebtn.addEventListener('click', func);


async function func(){
    // const category = 'inspirational'
    const apiKey = 'fZsyKVhh0mIU8k3w5gsozw==PWKaIN369imlyKdI';
    const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category='+category.value;

    quotebtn.disabled=true;

    const temp = await fetch(apiUrl,{
        method: 'GET',
        headers: { 'X-Api-Key': apiKey},
        contentType: 'application/json',
        // success: function(result) {console.log(result);},
        // error: function ajaxError(jqXHR) {console.error('Error: ', jqXHR.responseText);}
    });

    const json = await temp.json();

    quote.innerText=json[0]?.quote;
    quoteauthor.innerText=json[0]?.author;

    quotebtn.disabled=false;
}





// // USING .then()
// function func() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://type.fit/api/quotes', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }
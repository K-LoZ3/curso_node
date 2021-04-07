// npm init -y
// npm install puppeteer
/* 
Web scraping es una técnica utilizada mediante programas de software para extraer
información de sitios web. Usualmente, estos programas simulan la navegación de un
humano en la World Wide Web ya sea utilizando el protocolo HTTP manualmente, o
incrustando un navegador en una aplicación.
*/
// Curso en platzi.
// https://platzi.com/clases/webscraping/

const puppeteer = require('puppeteer');

(async () => {
    console.log('lanzamos navegador');
    // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch( { headless: false } );

    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');

    var titulo1 = await page.evaluate(()  => {
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);
        return h1.innerHTML;
    });

    console.log(titulo1);
    console.log('Cerramos navegador');
    browser.close();
    console.log('Navegardor cerrado');
}) ();
const puppeteer = require('puppeteer');

(async () => {
    try{
        const browser = await puppeteer.launch({headless:false})//INICIA O BROWSER (CHROMIUM)
        const page = await browser.newPage() //INICIA UMA NOVA ABA NO BROWSER
        await page.goto('https://albadev.com.br/') //VAI PARA URL
        await page.waitForSelector('.lead') //METODO PARA SELECIONAR UM SELECTOR, NO CASO A CLASSE .LEAD . FAZ O SCRIPT ESPERAR UM SELECTOR
        const valor = await page.$('.lead') //SELECIONA A CLASSE
        const valueFinal = await page.evaluate(el => el.textContent, valor)//PEGA VALOR DO ELEMENTO VIA QUERYSELECTOR (NO CASO CLASSE.LEAD)
        console.log(valueFinal)
    }catch(e){
        console.log(e)
    }
})();
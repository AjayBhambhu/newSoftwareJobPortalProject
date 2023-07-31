const request = require('request');
const cheerio = require('cheerio');
const express = require('express');
const puppeteer = require("puppeteer");
require("ejs");

var app = express();
app.set('view engine', 'ejs');

app.get('/', async function(req, res) {
    const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();
    await page.goto("https://www.amazon.jobs/en/business_categories/student-programs");

    const html = await page.content();
    const $ = cheerio.load(html);
    let titles = [];
    $(".job-tile").each((index, element) => {
        
        const urlElement = $(element).find(".job-link");
        const start = "https://www.amazon.jobs/";
        const url = start + $(urlElement).attr("href");  //.text();

        const titleElement = $(element).find(".job-title");
        const title = $(titleElement).text();
        titles.push(url);
        titles.push(title);

    });
    res.render('index', { titles });
});

app.listen(5000);
console.log('Express listening on port 5000');


// app.get('/', function(req, res) {
//     request('https://store.steampowered.com/search/?filter=weeklongdeals', (error, response, html) => {
//         if(!error && response.statusCode == 200) {
//             const $ = cheerio.load(html);
//             let titles = [];
//             $('.search_result_row').each((i,ele) => {
//                 const title = $(ele).attr("href"); //.text()
//                 console.log(title);
//                 titles.push(title);
//             });
//             res.render('index', { titles });
//         }
//     })

// });

// app.listen(3000);
// console.log('Express listening on port 3000');




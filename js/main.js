import quotes from './quotes.js';
import { getYearPrefics, typeEffect } from './helpers.js';

const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const quoteYear = document.getElementById('quoteYear');
const quoteGenereate = document.getElementById('generate');

async function getRandomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const { text, author, year } = quotes[randomNumber];

    quoteText.textContent = '';
    quoteAuthor.textContent = '';
    quoteYear.textContent = '';

    await typeEffect(quoteText, `"${text}"`);
    await typeEffect(quoteAuthor, `${author},`);
    await typeEffect(quoteYear, year.toString() + ' ' + getYearPrefics(year));
}

getRandomQuote();

quoteGenereate.addEventListener('click', getRandomQuote);

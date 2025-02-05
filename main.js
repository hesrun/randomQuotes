const quotes = [
    {
        text: 'It does not matter how slowly you go as long as you do not stop.',
        author: 'Confucius',
        year: -500,
    },
    {
        text: 'Be yourself; everyone else is already taken.',
        author: 'Oscar Wilde',
        year: 1890,
    },
    {
        text: 'Happiness is a journey, not a destination.',
        author: 'Aristotle',
        year: -322,
    },
    {
        text: 'Your life is what you make it.',
        author: 'Napoleon Hill',
        year: 1937,
    },
    {
        text: 'Failure is simply the opportunity to begin again, this time more intelligently.',
        author: 'Henry Ford',
        year: 1926,
    },
    {
        text: 'Great things are done by a series of small things brought together.',
        author: 'Vincent Van Gogh',
        year: 1883,
    },
    {
        text: 'What you do today can improve all your tomorrows.',
        author: 'Ralph Marston',
        year: 1995,
    },
    { text: 'Knowledge is power.', author: 'Francis Bacon', year: 1597 },
    {
        text: 'Patience and time are the strongest warriors.',
        author: 'Leo Tolstoy',
        year: 1869,
    },
    {
        text: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
        author: 'Winston Churchill',
        year: 1941,
    },
    {
        text: 'In the middle of every difficulty lies opportunity.',
        author: 'Albert Einstein',
        year: 1936,
    },
    {
        text: 'Act as if what you do makes a difference. It does.',
        author: 'William James',
        year: 1905,
    },
    {
        text: 'Life is 10% what happens to us and 90% how we react to it.',
        author: 'Charles R. Swindoll',
        year: 1984,
    },
    {
        text: 'Do what you can, with what you have, where you are.',
        author: 'Theodore Roosevelt',
        year: 1901,
    },
    {
        text: 'Success usually comes to those who are too busy to be looking for it.',
        author: 'Henry David Thoreau',
        year: 1854,
    },
    {
        text: "Don't let yesterday take up too much of today.",
        author: 'Will Rogers',
        year: 1935,
    },
    {
        text: 'You only live once, but if you do it right, once is enough.',
        author: 'Mae West',
        year: 1937,
    },
    {
        text: 'Life is either a daring adventure or nothing at all.',
        author: 'Helen Keller',
        year: 1921,
    },
    {
        text: 'Dream big and dare to fail.',
        author: 'Norman Vaughan',
        year: 1952,
    },
    {
        text: 'Hardships often prepare ordinary people for an extraordinary destiny.',
        author: 'C.S. Lewis',
        year: 1942,
    },
    {
        text: "Opportunities don't happen. You create them.",
        author: 'Chris Grosser',
        year: 2013,
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: 'Sam Levenson',
        year: 1955,
    },
    {
        text: 'The future belongs to those who believe in the beauty of their dreams.',
        author: 'Eleanor Roosevelt',
        year: 1933,
    },
    {
        text: "Everything you've ever wanted is on the other side of fear.",
        author: 'George Addair',
        year: 1970,
    },
    {
        text: 'Action is the foundational key to all success.',
        author: 'Pablo Picasso',
        year: 1935,
    },
    {
        text: 'The only way to do great work is to love what you do.',
        author: 'Steve Jobs',
        year: 2005,
    },
    {
        text: 'Success is the sum of small efforts, repeated day in and day out.',
        author: 'Robert Collier',
        year: 1926,
    },
    {
        text: "Don't wait. The time will never be just right.",
        author: 'Napoleon Hill',
        year: 1937,
    },
    {
        text: 'The best way to predict the future is to create it.',
        author: 'Peter Drucker',
        year: 1954,
    },
    {
        text: "Believe you can and you're halfway there.",
        author: 'Theodore Roosevelt',
        year: 1901,
    },
    {
        text: 'Do one thing every day that scares you.',
        author: 'Eleanor Roosevelt',
        year: 1933,
    },
    {
        text: "If opportunity doesn't knock, build a door.",
        author: 'Milton Berle',
        year: 1952,
    },
    {
        text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        author: 'Roy T. Bennett',
        year: 2016,
    },
    {
        text: 'Happiness is not something ready-made. It comes from your own actions.',
        author: 'Dalai Lama',
        year: 1989,
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: 'John Lennon',
        year: 1980,
    },
    {
        text: 'The only limit to our realization of tomorrow is our doubts of today.',
        author: 'Franklin D. Roosevelt',
        year: 1945,
    },
    {
        text: 'The purpose of our lives is to be happy.',
        author: 'Dalai Lama',
        year: 1989,
    },
    {
        text: 'It always seems impossible until it’s done.',
        author: 'Nelson Mandela',
        year: 1994,
    },
    {
        text: 'The best revenge is massive success.',
        author: 'Frank Sinatra',
        year: 1961,
    },
    {
        text: 'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
        author: 'Ralph Waldo Emerson',
        year: 1841,
    },
    {
        text: 'Challenges are what make life interesting and overcoming them is what makes life meaningful.',
        author: 'Joshua J. Marine',
        year: 1998,
    },
    {
        text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
        author: 'Ralph Waldo Emerson',
        year: 1841,
    },
    {
        text: 'In the middle of every difficulty lies opportunity.',
        author: 'Albert Einstein',
        year: 1936,
    },
    {
        text: 'The way to get started is to quit talking and begin doing.',
        author: 'Walt Disney',
        year: 1947,
    },
    {
        text: 'Success is walking from failure to failure with no loss of enthusiasm.',
        author: 'Winston Churchill',
        year: 1941,
    },
    {
        text: 'It is never too late to be what you might have been.',
        author: 'George Eliot',
        year: 1859,
    },
    {
        text: 'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.',
        author: 'Buddha',
        year: -400,
    },
    {
        text: 'Strive not to be a success, but rather to be of value.',
        author: 'Albert Einstein',
        year: 1936,
    },
    {
        text: 'An unexamined life is not worth living.',
        author: 'Socrates',
        year: -399,
    },
];

const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const quoteYear = document.getElementById('quoteYear');
const quoteGenereate = document.getElementById('generate');

const getYearPrefics = (year) => (year <= 0 ? 'BC' : 'AD');

function typeEffect(element, text, speed = 10) {
    return new Promise((resolve) => {
        new Typed(element, {
            strings: [text],
            typeSpeed: speed,
            showCursor: false,
            onComplete: () => resolve(),
        });
    });
}

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

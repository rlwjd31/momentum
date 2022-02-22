const quotes = [{
        author: "Wayne Huizenga.",
        enQuote: "Some people dream of success, while other people get up every morning and make it happen.",
        krQuote: "성공을 꿈꾸는 사람들도 있지만, 매일 아침에 일어나 꿈을 실현시키는 사람들도 있다.",
    },
    {
        author: "Seth Godin.",
        enQuote: "The only thing worse than starting something and failing is not starting something.",
        krQuote: "무언가를 시작하고 실패하는 것보다 더 나쁜 것은 아무것도 시작하지 않는 것이다.",
    },
    {
        author: "Jim Rohn.",
        enQuote: "If you really want to do something, you'll find a way. If you do not, you'll find an excuse.",
        krQuote: "무언가를 정말 하고 싶다면, 당신은 방법을 찾을 것이다. 그렇지 않다면, 변명을 찾을 것이다.",
    },
    {
        author: "Estee Lauder.",
        enQuote: "I never dreamed about success, I worked for it.",
        krQuote: "나는 결코 성공에 대해 꿈꾸지 않았다. 나는 꿈을 위해 행동했다.",
    },
    {
        author: "Paul Rand.",
        enQuote: "Do not try to be original, just try to be good.",
        krQuote: "독특한 사람이 되려 하지 말아라. 좋은 사람이 되도록 해라.",
    },
    {
        author: "John D. Rockefeller.",
        enQuote: "Do not be afraid to give up the good to go for the great.",
        krQuote: "더 좋은 것을 쫓기 위해 좋은 것을 버리는 것을 두려워하지 마라.",
    },
    {
        author: "Martin Luther King Jr..",
        enQuote: "If you cannot fly then run. If you cannot run, then walk. And, if you cannot walk, then crawl. but whatever you do, you have to keep moving forward.",
        krQuote: "날지 못하면 달려라. 달리지 못하면 걸어라. 그리고 걷지 못하면 기어라. 당신이 무엇을 하든 앞으로 가야 한다는 것만 명심해라.",
    },
    {
        author: "Thomas Edison.",
        enQuote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        krQuote: "우리의 최대의 약점은 포기다. 성공으로 가는 확실한 방법은 언제든지 한번 더 시도해보는 것이다.",
    },
    {
        author: "Reid Hoffman.",
        enQuote: "The fastest way to change yourself is to hang out with people who are already the way you want to be.",
        krQuote: "자신을 가장 빨리 변화시키는 방법은 당신이 되고 싶은 모습을 하고 있는 사람들과 어울리는 것이다.",
    },
    {
        author: "Tim O'Reilly.",
        enQuote: "Money is like gasline during a road trip. You do not want to run out of gas on your trip, but you're not doing a tour of gas stations.",
        krQuote: "돈은 자동차 여행의 휘발유 같은 것이다. 여행 중에 휘발유가 떨어지는 것을 원치 않지만, 주유소를 위한 여행을 하고 있는 것은 아니다.",
    },
];

const quote = document.querySelector("#quote span:first-child");
const krQuote = document.querySelector("#quote span:nth-child(2)");
const enQuote = document.querySelector("#quote span:last-child");
// quotes의 길이만큼을 곱해주면 원하는 배열의 index를 다 얻을 수 있다.

function paintQuotes() {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomQuoteIndex];

    quote.innerText = `- ${randomQuote.author} -`;
    krQuote.innerText = randomQuote.krQuote;
    enQuote.innerText = randomQuote.enQuote;
}
paintQuotes();
setInterval(paintQuotes, 10000);
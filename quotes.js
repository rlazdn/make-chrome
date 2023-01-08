const quotes = [
  {
    quote:
      "We're gonna choose the blue pill. We're gonna close the curtains. We're gonna rabbit hole down, third act love now.",
    author: "Bastille",
  },
  {
    quote:
      "All of your flaws and all of my flaws, they lie there hand in hand. Ones we've herited, ones that we learnd they pass from man to man",
    author: "Bastille",
  },
  {
    quote: "We are the leaders of the not-coming-back's.",
    author: "5 Seconds of Summer",
  },
  {
    quote:
      "Blood on my shirt, rose in my hand. Blood on my shirt, heart in my hand Still beating.",
    author: "5 Seconds of Summer",
  },
  {
    quote: "It's me, Hi! I'm the problem it's me.",
    author: "Taylor Swift",
  },
  {
    quote:
      "Best believe I'm still bejeweled. When I walk in the room, I can still make the whole place shimmer.",
    author: "Taylor Swift",
  },
  {
    quote: "Now is not the time to cry, now's the time to find out why.",
    author: "Oasis",
  },
  {
    quote:
      "Now it's over, can't forget what you said. And I never, wanna do this again. Heartbreaker!",
    author: "Simple plan",
  },
  {
    quote: "난 땅에서도 숨을 쉴 수 있는 물고기였을지도 몰라",
    author: "Yerin Back",
  },
  {
    quote:
      "I wanna be somewhere like no need to be clear, no need to be explaining. I just wanna rest, no complain, no watching.",
    author: "Yerin Back",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

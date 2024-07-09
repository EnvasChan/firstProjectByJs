const text = document.querySelector("#dogsounds span:first-child");
const author = document.querySelector("#dogsounds span:nth-child(2)");
const random = Math.floor(Math.random() * 4);


const quotes = [
    {
        text: "불막",
        author: "이진서",
    },
    {
        text: "소영이짬ㅈ지",
        author: "조용찬",
    },
    {
        text: "자살시급함",
        author: "정찬영",
    },
    {
        text: "나 전문하사한다 ㅋㅋ",
        author: "류주헌",
    }
];

text.innerHTML = quotes[random].text;
author.innerHTML = "-" + quotes[random].author;
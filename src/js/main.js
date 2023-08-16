"use strict";

const cards = [
    {
        imgURL: "/src/image/1.webp",
        headTitle: "Pick a template",
        paragraph: "Open the banner maker, choose a template and start customizing."
    },
    {
        imgURL: "/src/image/2.webp",
        headTitle: "Pick a template",
        paragraph: "Open the banner maker, choose a template and start customizing."
    },
    {
        imgURL: "/src/image/3.webp",
        headTitle: "Pick a template",
        paragraph: "Open the banner maker, choose a template and start customizing."
    },
    {
        imgURL: "/src/image/4.webp",
        headTitle: "Pick a template",
        paragraph: "Open the banner maker, choose a template and start customizing."
    }
];
const CardsContainer = document.querySelector(".cards")



// !? map qeyd  edilen arrayin hər bir elementini emal edir və yeni array yaradır
CardsContainer.innerHTML = cards.map(function(card){
    return `
        <div class="card">
            <div class="card__body">
                <div class="card__body__img">
                    <img src="${card.imgURL}" alt="">
                </div>
                <div class="card__body__title">
                    <h1>${card.headTitle}</h1>
                    <p>${card.paragraph}</p>
                </div>
            </div>
        </div>
         `;
}).join("")


// !? forEach array yaratmadan qeyd edilen arrayin hər bir elementi üzerinde əməliyyat aparır
// cards.forEach(function(card){
//     const cardHTML =`
//     <div class="card">
//         <div class="card__body">
//             <div class="card__body__img">
//                 <img src="${card.imgURL}" alt="">
//             </div>
//             <div class="card__body__title">
//                 <h1>${card.headTitle}</h1>
//                 <p>${card.paragraph}</p>
//             </div>
//         </div>
//     </div>
//      `;
//      CardsContainer.innerHTML += cardHTML
// })
const customCursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
});

function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder
    let showHand = pokerHand.map(chooseCard).join('');
    return `
        <div class="text-center mt-5 hand">
        ${showHand}
        </div>
    `

}

function chooseCard(card){

    return `
    <div class="hand">
    <img class="card" src='cards/${card.value}${card.suit}.png'/>
    </div>
    `

}


function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}
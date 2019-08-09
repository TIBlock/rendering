
function renderRestaurants(restaurants) {
    let restChoices = restaurants.map(restInformation).join('');    
    return `
    <div class="text-center mt-5">
        <div class="menu">
            ${restChoices}
        </div>
    </div>
    `
}


function restInformation(restaurant){
    let cost = '$';
    let finalCost = cost.repeat(restaurant.priceRating);
    return `
            <div class="restaurant">
                <h4 class="name">${restaurant.name}</h>    
                <div class="type">${restaurant.type}</div>
                <div class="quality">${finalCost}</div>
            </div>
    
            `    
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}

function renderNametags(nametags) {
    
    
    return nametags.map(name => {

    return `
        <div class="text-center mt-5">
            <div style="width:200px; border: 1px black solid; color: white;">
            <h5 style="background-color:blue;"><b>Hello, my name is:</b></h5>
            <div style="color: black; padding: 8px;">${name}</div>
            </div>
        </div>
    `
}).join('')

}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}

thing.map(function(things){

})

thing.map(things => {
    
})
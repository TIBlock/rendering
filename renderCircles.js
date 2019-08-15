
function buildCircleHTML (circle) {
    return `
    <div class="text-center mt-5">
        <div style="width:${circle.radius}px; height:${circle.radius}px; border-radius:50%; background-color:${circle.color};"></div>
    </div>
`
}

function buildCirclesHTML (circles) {
    const circlesHTML = circles.map(buildCircleHTML)
    return circlesHTML.join('')
}

function circles() {
    const circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    const contentEl = document.getElementById('content');
    contentEl.innerHTML = buildCirclesHTML(circlesAbstraction);
}
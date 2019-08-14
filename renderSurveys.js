
function renderSurveys(surveys) 
{
    let finalSurvey = surveys.map(surveyContent).join("")

    return `
        <div class="text-center mt-5">
            ${finalSurvey}
        </div>
    `
}



function surveyContent(surveys)
{
    let question = "";
    surveys.fields.forEach(element => {
        question += `
        <div class="survey_question">${element.label}</div><br>
        `;
        return question;
    });


    //May need to nest survey items in above function like albums.
    
    let surveyItems = "";

    surveys.fields.

    return `
        <div>
            <div class="survey_title">${surveys.title}</div>
            <div class="survey_question">${question}</div>
                <div class="button_container">
                </div>
        </div>
    `
    // function askQuestion(surveys) {
        
        // }
        
}
        // console.dir(surveys.fields[0].label)


    // write an if statement that can tell what type of content the survey needs and add each element to the total survey
// IE you can have a bunch of buttons, or a bunch of texts etc, just depends on what value is requested in the data. 

//Start by just getting the titles of the sureys to show then down from there. 



// function renderButtons(surveys)




function surveys() {
    var content = document.getElementById('content');

    var surveysAbstraction = [
        {
            title: "Movie Goer Survey",
            fields: [
                {
                    label: "Have you gone to the movies in the last month?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "On a scale of 1 to 5, Did you enjoy your last theater experience?",
                    type: "radio",
                    options: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                },
            ],
            submitButtonText: "Submit Survey"
        },
        {
            title: "DigitalCrafts Survey",
            fields: [
                {
                    label: "Are you currently enrolled in a DigitalCrafts class?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "In 3000 words or more, explain what's so great about Adam?",
                    type: "text"
                }
            ],
            submitButtonText: "I'm Done"
        }
    ]

    content.innerHTML = renderSurveys(surveysAbstraction);

}
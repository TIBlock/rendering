
function renderSurveys(surveys) 
{
    let finalSurvey = surveys.map(surveyContent).join("")

    return `
        <div class="text-center mt-5">
            ${finalSurvey}
        </div>
    `
}

//make smaller functions, renderRadioInput, RenderTextInput
// used by "renderquestion"


function renderRadioInput(element,index,label)
{
    let surveyItems = "";
    element.options.forEach((element) => 
    {
        surveyItems += `    
            <label><input type="radio" name="survey_input_${index}_${label}" value="${element}" class="radio_input">${element}<br></label>
        `
    });
    return surveyItems
}

function RenderTextInput(element)
{
    let surveyItems = `   
            <input type="text" name="survey_input" class="text_input"><br>
        `
    return surveyItems
}

function surveyContent(surveys)
{
    let question = "";
        surveys.fields.forEach((element, index) => 
        {
            let surveyLabel = surveys.title.toLowerCase().split(' ').join('_')
            let surveyItems = "";
            if (element.type === "radio") 
            {
                surveyItems += renderRadioInput(element, index, surveyLabel)
            } 
            else 
            {
                surveyItems += RenderTextInput(element)
            }
            question += `
            <div class="survey_question">${element.label}</div>
            ${surveyItems}<br>
            `;
            return question;
        });

    return `
        <div>
            <div class="survey_title">${surveys.title}</div>
            ${question}
                <div class="button_container">
                </div>
        </div>
    `       
}

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
import React, { Component } from "react";

export default function Profile() {
    return (

        <div class="profilePage">

            <div class="firstGrid">
            <div class='htmcssPara'>
                <p class="explanation"><b>HORIZON</b> webpage has semantic HTML elements and follows a logical structure independent of styling and positioning.</p>
                <p class="explanation"><b>CSS SNIPPET</b> displays a collection of labeled CSS snippets in a responsive grid.</p>
                <p class="explanation"><b>PASSWORD GENERATOR</b> is an application that enables employees to generate random passwords based on criteria that they have selected.</p>
            </div>
                <div class='horizonContainer'>                 
                <img class="horizonImage" src="/images/Horizon.png" alt="horizon" />
                    <h4 class='horizonText'><a href="https://github.com/rimadas9878/HTML_CSS_GIT" target="_blank">Horizon</a></h4>
                </div>
                <div class='cssSnippetContainer'>
                    <img class="CSSSnippetImage" src="/images/CSSSnippet.png" alt="CSSSnippet" />
                    <h4 class='CSSSnippetText'><a href="https://github.com/rimadas9878/Collection-of-CSS-snippets" target="_blank">CSSSnippet</a></h4>
                </div>
                <div class='PasswordGeneratedContainer'>
                    <img class="PasswordGeneratedImage" src="/images/PasswordGenerated.png" alt="PasswordGenerated_image" />
                    <h4 class='PasswordGeneratedText'><a href="https://github.com/rimadas9878/Password-Generator" target="_blank">Password Generator</a></h4>
                </div>
            </div>

            <div class="secondGrid">
            <div class='htmcssPara'>
                <p class="explanation"><b>TEST YOUR KNOWLEDGE</b> is a quiz with multiple-choice questions. Also this application stores and retrieves data using the browser's local and session storage.</p>
                <p class="explanation"><b>SAVE THE TASK</b> is a simple calendar application that allows a user to save events for each hour of the day by modifying starter code.</p>
                <p class="explanation"><b>WHATS THE WEATHER</b> is a weather dashboard which uses a third party APIs to access their data</p>
            </div>
                <div class='TestYourKnowledgeContainer'>
                    <img class="TestYourKnowledgeImage" src="/images/Test-Your-Knowledge.gif" alt="TestYourKnowledge_image" />
                    <h4 class='TestYourKnowledgeText'><a href="https://github.com/rimadas9878/Test-Your-Knowledge" target="_blank">Test Your Knowledge</a></h4>
                </div>
                <div class='SaveTheTaskContainer'>
                    <img class="SaveTheTaskImage" src="/images/Save_The_Task.png" alt="SaveTheTask_image" />
                    <h4 class='SaveTheTaskText'><a href="https://github.com/rimadas9878/Save-The-Task" target="_blank">Save The Task</a></h4>
                </div>
                <div class='WeatherContainer'>
                    <img class="WeatherImage" src="/images/Weather_Image.png" alt="Weather_image" />
                    <h4 class='WeatherText'><a href="https://github.com/rimadas9878/Whats-The-Weather" target="_blank">Whats the Weather</a></h4>
                </div>

            </div>
            <div class="thirdGrid">
            <div class='htmcssPara'>
                <p class="explanation"><b>README GENERATOR</b> is a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package.</p>
                <p class="explanation"><b>TEAM PROFILE GENERATOR</b> is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.</p>
                <p class="explanation"><b>NOTE TAKER</b> is an application that can be used to write and save notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file.</p>
                </div>
            <div class='ReadMeGeneratorContainer'>
                    <img class="ReadMeGeneratorImage" src="/images/ReadMeGenerator.gif" alt="ReadMeGenerator" />
                    <h4 class='ReadMeGeneratorText'><a href="https://github.com/rimadas9878/ReadMe-Generator" target="_blank">ReadMe Generator</a></h4>
            </div>
            <div class='TeamGeneratorContainer'>
                    <img class="TeamGeneratorImage" src="/images/Team-generator.png" alt="Team-generator" />
                    <h4 class='TeamGeneratorText'><a href="https://github.com/rimadas9878/Employees-Details" target="_blank">Team Profile Generator</a></h4>
            </div>
            <div class='noteTakerContainer'>
                    <img class="noteTakerImage" src="/images/Note-Taker.png" alt="noteTaker" />
                    <h4 class='noteTakerText'><a href="https://github.com/rimadas9878/Notes-Taker" target="_blank">Note Taker</a></h4>
            </div>
            </div>
        </div>
    );
}
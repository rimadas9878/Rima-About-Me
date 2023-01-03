import React, { Component } from "react";

export default function Profile() {
    return (

        <div class="profilePage">
            <div class="firstGrid">
                <div class='horizonContainer'>
                    <img class="horizonImage" src="/images/Horizon.png" alt="horizon" />
                    <a class='horizonText' href="https://github.com/rimadas9878/HTML_CSS_GIT" target="_blank">
                        <img class="horizonGithubImage" src="/images/github.png" alt="github" />
                    </a>
                    <div class="explanationGrid">
                        <p class="explanation1"><b>HORIZON</b> webpage has semantic HTML elements and follows a logical structure independent of styling and positioning.</p>
                    </div>
                </div>

                <div class='cssSnippetContainer'>
                    <img class="CSSSnippetImage" src="/images/CSSSnippet.png" alt="CSSSnippet" />
                    <a class='CSSSnippetText' href="https://github.com/rimadas9878/Collection-of-CSS-snippets" target="_blank">
                    <img class="cssSnippetGithubImage" src="/images/github.png" alt="github" />
                    </a>                 
                    <div class="explanationGrid">
                        <p class="explanation1"><b>CSS SNIPPET</b> displays a collection of labeled CSS snippets in a responsive grid.</p>
                    </div>
                </div>

                <div class='PasswordGeneratedContainer'>
                <img class="PasswordGeneratedImage" src="/images/PasswordGenerated.png" alt="PasswordGenerated_image" />
                    <a class='PasswordGeneratedText' href="https://github.com/rimadas9878/Password-Generator" target="_blank">
                    <img class="PasswordGeneratedGithubImage" src="/images/github.png" alt="github" />
                    </a>                       
                    <div class="explanationGrid">
                        <p class="explanation1"><b>PASSWORD GENERATOR</b> is an application that enables employees to generate random passwords based on criteria that they have selected.</p>
                    </div>
                </div>
            </div>


            <div class="secondGrid">
                <div class='TestYourKnowledgeContainer'>
                    <img class="TestYourKnowledgeImage" src="/images/Test-Your-Knowledge.gif" alt="TestYourKnowledge_image" />
                    <a class='TestYourKnowledgeText' href="https://github.com/rimadas9878/Test-Your-Knowledge" target="_blank">
                    <img class="TestYourKnowledgeGithubImage" src="/images/github.png" alt="github" />
                    </a>
                    <div class="explanationGrid">
                    <p class="explanation2"><b>TEST YOUR KNOWLEDGE</b> is a quiz with multiple-choice questions. Also this application stores and retrieves data using the browser's local and session storage.</p>
                    </div>
                </div>

                <div class='SaveTheTaskContainer'>
                    <img class="SaveTheTaskImage" src="/images/Save_The_Task.png" alt="SaveTheTask_image" />
                    <a class='SaveTheTaskText' href="https://github.com/rimadas9878/Save-The-Task" target="_blank">
                    <img class="SaveTheTaskGithubImage" src="/images/github.png" alt="github" />
                    </a>
                    <div class="explanationGrid">
                    <p class="explanation2"><b>SAVE THE TASK</b> is a simple calendar application that allows a user to save events for each hour of the day by modifying starter code.</p>    
                    </div>
                </div>

                <div class='WeatherContainer'>
                    <img class="WeatherImage" src="/images/Weather_Image.png" alt="Weather_image" />
                    <a class='WeatherText'href="https://github.com/rimadas9878/Whats-The-Weather" target="_blank">
                    <img class="WeatherGithubImage" src="/images/github.png" alt="github" />  
                    </a>
                    <div class="explanationGrid">
                    <p class="explanation2"><b>WHATS THE WEATHER</b> is a weather dashboard which uses a third party APIs to access their data</p>           
                    </div>
                </div>

            </div>
            <div class="thirdGrid">
                <div class='ReadMeGeneratorContainer'>
                    <img class="ReadMeGeneratorImage" src="/images/ReadMeGenerator.gif" alt="ReadMeGenerator" />
                    <a class='ReadMeGeneratorText' href="https://github.com/rimadas9878/ReadMe-Generator" target="_blank">
                    <img class="ReadMeGeneratorGithubImage" src="/images/github.png" alt="github" />  
                    </a>
                    <div class="explanationGrid">
                    <p class="explanation3"><b>README GENERATOR</b> is a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package.</p>
                    </div>
                </div>

                <div class='TeamGeneratorContainer'>
                    <img class="TeamGeneratorImage" src="/images/Team-generator.png" alt="Team-generator" />
                    <a class='TeamGeneratorText' href="https://github.com/rimadas9878/Employees-Details" target="_blank">
                    <img class="TeamGeneratorGithubImage" src="/images/github.png" alt="github" />
                    </a>
                    <div class="explanationGrid">
                    <p class="explanation4"><b>TEAM PROFILE GENERATOR</b> is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.</p>
                    </div>
                </div>

                <div class='noteTakerContainer'>
                    <img class="noteTakerImage" src="/images/Note-Taker.png" alt="noteTaker" />
                    <a class='noteTakerText' href="https://github.com/rimadas9878/Notes-Taker" target="_blank">
                    <img class="noteTakerGithubImage" src="/images/github.png" alt="github" />
                    </a>
                    <div class="explanationGrid">
                    <p class="explanation3"><b>NOTE TAKER</b> is an application that can be used to write and save notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

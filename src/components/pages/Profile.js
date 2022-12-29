import React, { Component } from "react";

export default function Profile() {
    return (

        <div class="profilePage">
            {/* Grid which displays work using html and css */}
            <div class="firstGrid">
                <div class='horizonContainer'>                 
                <img class="horizonImage" src="/images/Horizon.png" alt="horizon" />
                    <h4 class='horizonText'><a href="https://github.com/rimadas9878/HTML_CSS_GIT" target="_blank">Horizon</a></h4>
                </div>
                <div class='cssSnippetContainer'>
                    <img class="CSSSnippetImage" src="/images/CSSSnippet.png" alt="CSSSnippet" />
                    <h4 class='CSSSnippetText'><a href="https://github.com/rimadas9878/Collection-of-CSS-snippets" target="_blank">CSSSnippet</a></h4>
                </div>
                <div class='PortfolioContainer'>
                    <img class="PortfolioImage" src="/images/Portfolio_image.png" alt="Portfolio_image" />
                    <h4 class='PortfolioText'><a href="https://github.com/rimadas9878/Creating-a-Portfolio" target="_blank">Portfolio</a></h4>
                </div>
                <div class='PasswordGeneratedContainer'>
                    <img class="PasswordGeneratedImage" src="/images/PasswordGenerated.png" alt="PasswordGenerated_image" />
                    <h4 class='PasswordGeneratedText'><a href="https://github.com/rimadas9878/Password-Generator" target="_blank">Password Generator</a></h4>
                </div>
            </div>
            <div class="secondGrid">
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
                <div class='TeamGeneratorContainer'>
                    <img class="TeamGeneratorImage" src="/images/Team-generator.png" alt="Weather_image" />
                    <h4 class='TeamGeneratorText'><a href="https://github.com/rimadas9878/Employees-Details" target="_blank">Team Generator</a></h4>
                </div>
            </div>
        </div>
    );
}
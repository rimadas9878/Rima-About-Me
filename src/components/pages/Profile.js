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

            </div>
        </div>
    );
}
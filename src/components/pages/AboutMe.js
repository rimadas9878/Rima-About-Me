import React, { Component } from "react";

export default function AboutMe() {

    return (
        <div>
            <div class="bannerContainer">
                <img
                    class='bannerImage'
                    src={`https://thumbs.dreamstime.com/b/hourglass-time-banner-background-format-wood-54533019.jpg`}
                />
            </div>
            <div>
                <h1 class="myStoryText">My Story</h1>
            </div>

            <div class='workContainer'>
                <div class='workContent'>
                    <p class='experiencePara'>
                        I joined Varite, Inc in the year 2020 and currently,
                        I am working on a Salesforce Project as a Quality Engineer.
                        I am responsible for testing the Salesforce App
                    </p>
                    <p class='experiencePara'>
                        Prior to Salesforce, I was working for Rave Technologies,
                        India where I was responsible for testing the Uk government
                        base website manually and also selecting test cases that can be
                        automated using selenium with java
                    </p>
                    <p class='experiencePara'>
                        Prior to Rave Technologies, I gained experience working in an insurance
                        domain testing web-based as well as device-based applications
                    </p>
                </div>
                <div class='workImageContainer'>
                    <img
                        class='workImage'
                        src={`https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822__480.jpg`}
                    />
                </div>
            </div>

            <div class='educationContainer'>
                <div class='educationImageContainer'>
                    <img
                        class='educationImage'
                        src={`https://www.timeshighereducation.com/sites/default/files/mortar-board-degree-certificate-books.jpg`}
                    />
                </div>
                <div class='educationContent'>
                    <p class='educationPara'>
                        After earning my Full-Stack Development Bootcamp certification
                        I will be looking to enter into the frontend Development world to
                        explore my passion to create beautiful and performant products with
                        delightful user experiences
                    </p>
                    <p class='educationPara'>
                        Graduated from the University in India in Statistics and gained certification
                        from a reputed institute in Computer Science
                    </p>
                    <p class='educationPara'>
                        Always keep on educating myself from the various platform
                    </p>
                </div>
            </div>
        </div>

    )
}


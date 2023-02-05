import React, { useState } from 'react';
import Homepage from './pages/Home'

export default function homeLandingpage () {
    
    const landingPage = () => {
        if (currentPage === 'Home') {
            return <Homepage />
        }
    }

}
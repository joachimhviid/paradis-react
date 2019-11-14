import React from 'react';
import './ConfigToolbar.css';

const configToolbar = () => {
    return (
        <div className="ingredient-toolbar-wrapper container-full">
            <div className="ingredient-toolbar-item left-arrow"></div>
            <div className="ingredient-toolbar-item"></div>
            <div className="ingredient-toolbar-item"></div>
            <div className="ingredient-toolbar-item"></div>
            <div className="ingredient-toolbar-item right-arrow"></div>
        </div>
    )
}

export default configToolbar;
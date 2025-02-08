import React from 'react';
import './Score.css'; // Import CSS

const ScoreIndicator = ({ score }) => {
    // Determine the color based on score value
    const getScoreColor = (score) => {
        if (score >= 80) return '#4CAF50'; // Green for high scores
        if (score >= 50) return '#FFC107'; // Yellow for medium scores
        return '#F44336'; // Red for low scores
    };

    return (
        <div className="score-container">
            <p className="score-label">Score: {score}</p>
            <div className="score-bar">
                <div 
                    className="score-fill" 
                    style={{ width: `${score}%`, backgroundColor: getScoreColor(score) }} 
                ></div>
            </div>
        </div>
    );
};

export default ScoreIndicator;

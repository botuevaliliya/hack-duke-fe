import { useState, useEffect } from 'react';
import Score from './Score';
import './Output.css';

export default function Register() {
    const [output, setOutput] = useState('');
    const [score, setScore] = useState('');
    const [error, setError] = useState('');


    useEffect(() => {
        const fetchFileContent = async () => {
            try {
                const response = await fetch('/text.txt');
                const text = await response.text();
                setOutput(text);
            } catch (err) {
                console.error('Error fetching file:', err);
            }
        };

        fetchFileContent();
    }, []);

    const responseString = '{"score": 70, "output":"Some Summary of the Requested"}';

    useEffect(() => {
        try {
            const response = JSON.parse(responseString);
            // setOutput(response.output);
            setScore(response.score);
        } catch (err) {
            setError('Some error occurred while parsing data.');
            console.error('Error parsing response:', err);
        }
    }, []);

    return (
        <div className="output-container">
            <h1 className="register-title">Here is the Summary</h1>
            {error ? (
                <p className="error">{error}</p>
            ) : (
                <div className="summary-box">
                    <Score score={score}/>
                    <p><strong>Summary:</strong> {output}</p>
                </div>
            )}
        </div>
    );
}

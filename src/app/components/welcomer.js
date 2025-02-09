import React from "react";

export default function Welcomer({ username }) { 

    const welcomeSentences = [
        "Bonjour",
        "Ravi de vous revoir",
        "Bienvenue",
    ];

    const getRandomSentence = () => {
        return welcomeSentences[Math.floor(Math.random() * welcomeSentences.length)];
    };

    return (
        <div>
            <h1>{getRandomSentence()} {username}</h1>
        </div>
    );
}

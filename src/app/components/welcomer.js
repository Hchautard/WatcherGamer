import React from "react";

export default function Welcomer({ username }) { // Déstructure l'objet props

    const welcomeSentences = [
        "Bonjour",
        "Ravi de vous revoir",
        "Bienvenue",
    ];

    const getRandomSentence = () => {
        return welcomeSentences[Math.floor(Math.random() * welcomeSentences.length)];
    };

    console.log(username);

    return (
        <div>
            <h1>{getRandomSentence()} {username}</h1>
        </div>
    );
}

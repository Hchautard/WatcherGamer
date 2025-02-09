import React, { useState } from 'react'
import Card from './card'

export default function CardGrid() {

    // Card array
    const [cards, setCards] = useState([
        Card(),
        Card(),
        Card(),
        Card(), 
        Card(),
        Card()
    ]);

    return (<div className="grid grid-cols-4 gap-4"> 
        {cards.map((card, index) => (
            <div key={index}>
                {card}
            </div>
        ))}
        {Card()}
    </div>);

}
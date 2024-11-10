import React from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
    const { id } = useParams();

    // Sample character details (you can expand this as needed)
    const characterDetails = {
        1: { name: 'Spider-Man', description: 'A superhero with spider-like abilities.' },
        2: { name: 'Iron Man', description: 'A wealthy industrialist and genius inventor.' },
        3: { name: 'Wonder Woman', description: 'An Amazonian princess and warrior.' },
        4: { name: 'Batman', description: 'A vigilante who fights crime in Gotham City.' },
    };

    const character = characterDetails[id];

    if (!character) {
        return <h2>Character not found!</h2>;
    }

    return (
        <div>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
        </div>
    );
};

export default CharacterDetails;
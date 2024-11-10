import React from 'react';
import { Link } from 'react-router-dom';

const BrowseCharacters = () => {
    // Sample static character data
    const characters = [
        { id: 1, name: 'Spider-Man' },
        { id: 2, name: 'Iron Man' },
        { id: 3, name: 'Wonder Woman' },
        { id: 4, name: 'Batman' },
    ];

    return (
        <div>
            <h2>Browse Characters</h2>
            <ul>
                {characters.map(character => (
                    <li key={character.id}>
                        <Link to={`/character/${character.id}`}>{character.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrowseCharacters;
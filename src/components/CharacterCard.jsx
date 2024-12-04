import React from 'react';

// CharacterCard component
const CharacterCard = ({ name, gender, age, imageUrl, profession }) => {
    return (
        <div style={styles.card}>
            <img src={imageUrl} alt={name} style={styles.image} />
            <h2>{name}</h2>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Occupation:</strong> {profession}</p>
        </div>
    );
};

// Styling for the card (can be customized)
const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        width: '250px',
        padding: '20px',
        textAlign: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',  // This ensures the elements are stacked
        flexDirection: 'column', // Align elements in a vertical direction
        justifyContent: 'center',  // Center elements vertically
        alignItems: 'center', // Center elements horizontally
    },
    image: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
        marginBottom: '10px',  // Add spacing below the image
    },
    h2: {
        margin: '10px 0', // Adds space above and below the name
    },
    p: {
        margin: '5px 0', // Adds space between text blocks
    }
};

export default CharacterCard;

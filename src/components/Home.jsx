import React from 'react'
import CharacterCard from "./CharacterCard.jsx";

function Home() {
  return (
    <div style={styles.container}>
      <CharacterCard 
        name="Random" 
        gender="Female" 
        age="33" 
        profession="Jobless" 
        imageUrl="https://i.pinimg.com/originals/94/19/fb/9419fb5fa6d57b43f413635684752a69.jpg" 
      />
      <CharacterCard 
        name="Random" 
        gender="Female" 
        age="33" 
        profession="Jobless" 
        imageUrl="https://i.pinimg.com/originals/94/19/fb/9419fb5fa6d57b43f413635684752a69.jpg" 
      />
      <CharacterCard 
        name="Random" 
        gender="Female" 
        age="33" 
        profession="Jobless" 
        imageUrl="https://i.pinimg.com/originals/94/19/fb/9419fb5fa6d57b43f413635684752a69.jpg" 
      />
      <CharacterCard 
        name="Random" 
        gender="Female" 
        age="33" 
        profession="Jobless" 
        imageUrl="https://i.pinimg.com/originals/94/19/fb/9419fb5fa6d57b43f413635684752a69.jpg" 
      />
      <CharacterCard 
        name="Random" 
        gender="Female" 
        age="33" 
        profession="Jobless" 
        imageUrl="https://i.pinimg.com/originals/94/19/fb/9419fb5fa6d57b43f413635684752a69.jpg" 
      />
    </div>
  );
}

// Styling for the container to display cards in a row
const styles = {
  container: {
    display: 'flex',             // Flexbox layout for horizontal display
    justifyContent: 'space-evenly', // Space out cards evenly
    flexWrap: 'wrap',            // Allow wrapping if screen is too small
    gap: '20px',                 // Space between cards
    padding: '20px',
  }
};

export default Home;



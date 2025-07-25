import React from 'react';
import styled from 'styled-components';
import Carousel from './components/Carousel';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  color: white;
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Description = styled.p`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  text-align: center;
  max-width: 600px;
  opacity: 0.9;
`;

// Sample data for the carousel
const carouselItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
    title: 'Mountain Landscape',
    description: 'Beautiful mountain scenery with crystal clear lakes'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=400&fit=crop',
    title: 'Ocean Sunset',
    description: 'Stunning sunset over the peaceful ocean waters'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop',
    title: 'Forest Path',
    description: 'A winding path through the enchanted forest'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
    title: 'City Skyline',
    description: 'Modern cityscape with towering skyscrapers'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&h=400&fit=crop',
    title: 'Desert Dunes',
    description: 'Golden sand dunes stretching to the horizon'
  }
];

function App() {
  return (
    <AppContainer>
      <Title>React Carousel</Title>
      <Description>
        A beautiful and responsive carousel component built with React and styled-components.
        Navigate through stunning images with smooth transitions and modern controls.
      </Description>
      <Carousel items={carouselItems} />
    </AppContainer>
  );
}

export default App;
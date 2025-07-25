import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  background: white;
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const CarouselTrack = styled.div`
  display: flex;
  width: ${props => props.itemCount * 100}%;
  height: 100%;
  transform: translateX(-${props => props.currentIndex * (100 / props.itemCount)}%);
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

const CarouselItem = styled.div`
  flex: 0 0 ${props => 100 / props.itemCount}%;
  height: 100%;
  position: relative;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
`;

const ItemContent = styled.div`
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 2rem;
  width: 100%;
  text-align: left;
`;

const ItemTitle = styled.h3`
  font-size: 1.8rem;
  margin: 0 0 0.5rem 0;
  font-weight: bold;
`;

const ItemDescription = styled.p`
  font-size: 1rem;
  margin: 0;
  opacity: 0.9;
  line-height: 1.4;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #333;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
  
  ${props => props.direction === 'prev' ? 'left: 20px;' : 'right: 20px;'}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: translateY(-50%);
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  background: white;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#667eea' : '#ddd'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#667eea' : '#bbb'};
    transform: scale(1.2);
  }
`;

const PlayPauseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: scale(1.1);
  }
`;

const Carousel = ({ 
  items = [], 
  autoPlay = true, 
  autoPlayInterval = 4000,
  showNavigation = true,
  showDots = true,
  showPlayPause = true 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  }, [items.length]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || items.length <= 1) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide, autoPlayInterval, items.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === ' ') {
        event.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide, togglePlayPause]);

  if (!items.length) {
    return <div>No items to display</div>;
  }

  return (
    <CarouselContainer>
      <CarouselWrapper>
        <CarouselTrack 
          currentIndex={currentIndex} 
          itemCount={items.length}
        >
          {items.map((item, index) => (
            <CarouselItem
              key={item.id}
              image={item.image}
              itemCount={items.length}
            >
              <ItemContent>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </ItemContent>
            </CarouselItem>
          ))}
        </CarouselTrack>

        {showNavigation && items.length > 1 && (
          <>
            <NavigationButton 
              direction="prev" 
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              &#8249;
            </NavigationButton>
            <NavigationButton 
              direction="next" 
              onClick={nextSlide}
              aria-label="Next slide"
            >
              &#8250;
            </NavigationButton>
          </>
        )}

        {showPlayPause && items.length > 1 && (
          <PlayPauseButton 
            onClick={togglePlayPause}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? '⏸' : '▶'}
          </PlayPauseButton>
        )}
      </CarouselWrapper>

      {showDots && items.length > 1 && (
        <DotsContainer>
          {items.map((_, index) => (
            <Dot
              key={index}
              active={index === currentIndex}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </DotsContainer>
      )}
    </CarouselContainer>
  );
};

export default Carousel;
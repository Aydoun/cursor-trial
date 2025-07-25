# React Carousel Component

A beautiful and responsive carousel component built with React.js and styled-components.

## Features

- 🎯 **Smooth Transitions**: CSS transitions with easing functions for professional animations
- 🎮 **Multiple Navigation Options**: Arrow buttons, dot indicators, and keyboard controls
- ⏯️ **Auto-play with Controls**: Automatic slideshow with play/pause functionality
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern Styling**: Built with styled-components for clean, maintainable CSS
- ♿ **Accessibility**: ARIA labels and keyboard navigation support
- 🔧 **Highly Customizable**: Configurable props for different use cases

## Demo

The carousel includes:
- Navigation arrows (left/right)
- Dot indicators for direct slide access
- Auto-play functionality (4-second intervals)
- Play/pause button
- Keyboard navigation (arrow keys and spacebar)
- Smooth CSS transitions
- Responsive design

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-carousel-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Usage

### Basic Usage

```jsx
import Carousel from './components/Carousel';

const items = [
  {
    id: 1,
    image: 'path/to/image1.jpg',
    title: 'Slide Title',
    description: 'Slide description'
  },
  // ... more items
];

function App() {
  return <Carousel items={items} />;
}
```

### Advanced Configuration

```jsx
<Carousel
  items={carouselItems}
  autoPlay={true}
  autoPlayInterval={3000}
  showNavigation={true}
  showDots={true}
  showPlayPause={true}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | Array | `[]` | Array of carousel items with id, image, title, and description |
| `autoPlay` | Boolean | `true` | Enable/disable auto-play functionality |
| `autoPlayInterval` | Number | `4000` | Auto-play interval in milliseconds |
| `showNavigation` | Boolean | `true` | Show/hide navigation arrows |
| `showDots` | Boolean | `true` | Show/hide dot indicators |
| `showPlayPause` | Boolean | `true` | Show/hide play/pause button |

## Item Structure

Each carousel item should have the following structure:

```javascript
{
  id: 1,                    // Unique identifier
  image: 'image-url',       // Image URL
  title: 'Slide Title',     // Title text
  description: 'Description' // Description text
}
```

## Controls

- **Arrow Keys**: Navigate left/right through slides
- **Spacebar**: Toggle play/pause
- **Mouse**: Click arrow buttons or dots to navigate
- **Touch**: Swipe functionality (coming soon)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- React 18.2.0
- styled-components 6.1.8
- react-scripts 5.0.1

## License

MIT License
import React, { useEffect, useState } from 'react';
import { Stage, Layer, Image, Line } from 'react-konva';

const CanvasWithLines = ({ imageUrl }) => {
  const [lines, setLines] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = imageUrl;
    img.onload = () => {
      setImage(img);
      // Example: Set initial lines data
      setLines([
        { x1: 100, y1: 100, x2: 200, y2: 200 },
        // Add more lines as needed
      ]);
    };
  }, [imageUrl]);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Image image={image} />
        {lines.map((line, index) => (
          <Line
            key={index}
            points={[line.x1, line.y1, line.x2, line.y2]}
            stroke="green"
            strokeWidth={5}
            tension={0.5}
            lineCap="round"
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default CanvasWithLines;

import React, { useEffect, useState } from 'react';
import {Stage, Layer, Rect, Image} from "react-konva";


export default function App() {
  const [image, setImage] = useState(new window.image());

  useEffect(() => {
    const img = new window.Image();
    img.src =

    setImage(img);
    }, []);

  const handleDragStart = e => {
    e.target.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15
      },
      scaleX: 1.1,
      scaleY: 1.1
      });
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Image x={100} y={200} image={image}
          draggable
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
      />
    </Layer>
  </Stage>
  );
}

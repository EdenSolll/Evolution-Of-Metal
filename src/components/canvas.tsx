import { useEffect, useState, useRef } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import Konva from 'konva';

export default function App() {
  const [image, setImage] = useState(new window.Image());
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const stageRef = useRef<Konva.Stage | null>(null);

  useEffect(() => {
    const img = new window.Image();
    img.src =
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F664794.jpg&f=1&nofb=1&ipt=2052f86d8afcde4e481f8dc86b8670d062a65e7dac1bacde2ff0bdd5c97a6090&ipo=images';
    img.onload = () => setImage(img);
  }, []);

  const handleDragStart = () => {
  };

  const handleDragEnd = (e: Konva.KonvaEventObject<DragEvent>) => {
    setPosition({ x: e.target.x(), y: e.target.y() });
  };

  const handleWheel = (e: Konva.KonvaEventObject<WheelEvent>) => {
    e.evt.preventDefault();
    const oldScale = scale;
    const pointer = stageRef.current?.getPointerPosition();

    if (!pointer) {
      return;
    }

    const newScale = e.evt.deltaY > 0 ? oldScale * 1.1 : oldScale / 1.1;
    setScale(newScale);

    const newPos = {
      x: pointer.x - ((pointer.x - position.x) / oldScale) * newScale,
      y: pointer.y - ((pointer.y - position.y) / oldScale) * newScale,
    };
    setPosition(newPos);
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      ref={stageRef}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onWheel={handleWheel}
    >
      <Layer>
        <Image
          x={position.x}
          y={position.y}
          image={image}
          width={image.width * scale}
          height={image.height * scale}
          draggable
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        />
      </Layer>
    </Stage>
  );
}

'use client';

import { Canvas } from '@react-three/fiber';
import { Float, Plane } from '@react-three/drei';

import Watch from './WatchModel';

const WatchScene = () => {
  return (
    <Canvas camera={{ position: [5, 0, 7] }} shadows>
      <Float
        speed={2} // Animation speed, defaults to 1
        rotationIntensity={1.5} // XYZ rotation intensity, defaults to 1
        floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <Watch />
      </Float>
      <ambientLight intensity={0.8} />
      <directionalLight intensity={1} position={[5, 5, 2]} visible castShadow />
      <Plane
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -7, 0]}
        args={[1000, 1000]}
      />
    </Canvas>
  );
};

export default WatchScene;

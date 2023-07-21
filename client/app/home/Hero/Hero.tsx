'use client';

import { Canvas } from '@react-three/fiber';
import { Float, Plane, OrbitControls } from '@react-three/drei';

import Watch from './Watch';

import './Hero.scss';

export default function Hero() {
  return (
    <div className="home-hero">
      <div className="home-hero__content">
        <h1 className="home-hero__content__title">
          TIME ROLE - Looks For your Time{' '}
        </h1>
        <p className="home-hero__content__description">
          TIME ROLE - Looking for a new watch? well this is the place, best
          money spent on your time, LITERALLY.
        </p>
      </div>
      <div className="home-hero__model">
        <Canvas camera={{ position: [5, 0, 7] }} shadows>
          <Float
            speed={2} // Animation speed, defaults to 1
            rotationIntensity={1.5} // XYZ rotation intensity, defaults to 1
            floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <Watch />
          </Float>
          <ambientLight intensity={0.8} />
          <directionalLight
            intensity={1}
            position={[5, 5, 2]}
            visible
            castShadow
          />
          <Plane
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -7, 0]}
            args={[1000, 1000]}
          />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}

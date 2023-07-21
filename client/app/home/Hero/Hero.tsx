'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

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
        <Canvas camera={{position: [8, 0, 7] }}>
          <Watch />
          <ambientLight intensity={0.8} />
          <directionalLight intensity={0.5} />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}

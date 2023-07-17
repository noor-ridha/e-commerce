'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Watch from './Watch';

import './Hero.scss';

export default function Hero() {
  return (
    <div className="home-hero">
      <div className="home-hero__content">
        <h1 className="home-hero__content__title">Looks Foor your Time </h1>
        <p className="home-hero__content__description">
          TIME ROLE - Looking for a new watch? well this is the place, best
          money spent on your time, LITERALLY.
        </p>
      </div>
      <div className="home-hero__model">
        <Canvas>
          <Watch />
          <ambientLight intensity={0.6} />
          <directionalLight intensity={0.5} />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}

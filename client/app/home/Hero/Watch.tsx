'use client';

import {
  useGLTF,
} from '@react-three/drei';

const Watch = () => {
  const { scene } = useGLTF('./models/watch.glb');

  return <primitive object={scene} scale={[100, 100, 100]} />;
}

export default Watch;

useGLTF.preload('./models/watch.glb');

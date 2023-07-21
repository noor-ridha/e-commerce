'use client';

import {
  useGLTF,
} from '@react-three/drei';

const Watch = () => {
  const { scene } = useGLTF('./models/watch.glb');

  return <primitive object={scene} scale={[150, 150, 150]} position={[0, 2, 0]} />;
}

export default Watch;

useGLTF.preload('./models/watch.glb');

'use client';

import {
  useGLTF,
} from '@react-three/drei';

const WatchModel = () => {
  const { scene } = useGLTF('./models/watch.glb');

  return (
    <mesh castShadow>
      <primitive object={scene} scale={[150, 150, 150]} />
    </mesh>
  );
}

export default WatchModel;

useGLTF.preload('./models/watch.glb');

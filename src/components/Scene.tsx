import React, { useRef, useEffect,Suspense } from 'react';
import { useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Vector3, Color, SphereGeometry, Mesh, MeshBasicMaterial,  } from 'three';
import { EffectComposer, GodRays } from '@react-three/postprocessing';
import { KernelSize } from 'postprocessing';



import * as THREE from 'three';
import { Lamp } from './Lamp';

interface MovingSpotProps {
  targetPosition?: Vector3;
  position: [number, number, number];
  angle: number;
  penumbra: number;
  visible: boolean; // Added visibility prop
}

const MovingSpot2: React.FC<MovingSpotProps> = ({
  targetPosition = new THREE.Vector3(-1, 0, 0),
  visible = false,
  ...props
}) => {
  const light = useRef<THREE.SpotLight>(null);
  const { scene } = useThree();

  useEffect(() => {
    if (light.current && visible) {
      const targetObject = light.current.target as THREE.Object3D;
      targetObject.position.copy(targetPosition);
      targetObject.updateMatrixWorld();
      scene.add(targetObject);
    }
  }, [targetPosition, scene, visible]);

  if (!visible) return null;

  return<spotLight scale={3.8} color={'#c9c9af'} intensity={2} castShadow ref={light} {...props} />;
};
interface SceneContainerProps {
  ambientIntensity: number;
  boxColor: string;
  effectsEnabled: boolean;
  environmentVisible: boolean;
  movingSpotVisible: boolean;
}

let lightColor = new Color(0.9, 0.9, 0.8);
let mesh = new Mesh(
  new SphereGeometry(0.45),
  new MeshBasicMaterial({
    color: lightColor,
    transparent: true,
    opacity: 1,
  })
);
mesh.rotation.x = Math.PI / 4;
mesh.position.set(-1.45, 0.25, 0);
mesh.scale.set(0.3, 0.3, 0.3);

export function SceneContainer({ ambientIntensity, boxColor, effectsEnabled, environmentVisible, movingSpotVisible }: SceneContainerProps) {
  return (
    <Suspense fallback={null}>
      <group scale={0.4} rotation={[0.01,Math.PI+1,0]}>
      <primitive object={mesh} />
      <ambientLight intensity={ambientIntensity} />
      {movingSpotVisible && <>
      <MovingSpot2
        targetPosition={new Vector3(0.7, -11, 0)}
        position={[-1.4, 0.4, 0]}
        angle={0.38}
        penumbra={0.1}
        visible={movingSpotVisible}
      />
      <pointLight position={[-1.4, 0, 0]} intensity={1} color={'#c9c9af'} distance={0.2}/>
      </>
      }
      <Lamp position={[0, -2, 0]} />
      <mesh>
        <sphereGeometry args={[30]} />
        <meshStandardMaterial color={boxColor} side={THREE.DoubleSide} />
      </mesh>

      {environmentVisible && <Environment preset="city" blur={1}/>}
      
      {effectsEnabled && (
        <EffectComposer>
          <GodRays sun={mesh} samples={20} density={0.97} decay={0.90} weight={0.06} exposure={0.9} clampMax={1} kernelSize={KernelSize.VERY_LARGE} blur={true} />
        </EffectComposer>
      )}
      </group>
    </Suspense>
  );
}
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useLamp } from '../context/LampContext'

type GLTFResult = GLTF & {
  nodes: {
    lamp_lampara001_1: THREE.Mesh
    lamp_lampara001_2: THREE.Mesh
    lamp_lampara001_3: THREE.Mesh
    lamp_lampara001_4: THREE.Mesh
    lamp_lampara001_5: THREE.Mesh
    lamp_lampara001_6: THREE.Mesh
    lamp_lampara001_7: THREE.Mesh
    lamp_lampara001_8: THREE.Mesh
    lamp_lampara001_9: THREE.Mesh
    lamp_lampara001_10: THREE.Mesh
    lamp_lampara001_11: THREE.Mesh
    lamp_lampara001_12: THREE.Mesh
  }
  materials: {
    Golden: THREE.MeshPhysicalMaterial
    Black_Lamp: THREE.MeshPhysicalMaterial
    plateado: THREE.MeshPhysicalMaterial
    Glossy_Lamp: THREE.MeshPhysicalMaterial
    red_Lamp: THREE.MeshPhysicalMaterial
    The_ball_thing: THREE.MeshPhysicalMaterial
    Screw_top: THREE.MeshPhysicalMaterial
    Cable_Fabric: THREE.MeshPhysicalMaterial
    Blackest_night: THREE.MeshPhysicalMaterial
    Black_Screw: THREE.MeshPhysicalMaterial
    Plastic: THREE.MeshPhysicalMaterial
    ['Material.001']: THREE.MeshPhysicalMaterial
  }
}

export function Lamp(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF('/desklamp.glb') as GLTFResult
  const { color } = useLamp()
  return (
    <group {...props} dispose={null} >
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lamp_lampara001_1.geometry} >
            <meshPhysicalMaterial
                attach="material"
                color={color}
                roughness={0.1}
                metalness={0.8}
                reflectivity={0.3}
                />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lamp_lampara001_2.geometry}>
            <meshPhysicalMaterial
                attach="material"
                color={color}
                roughness={0.3}
                metalness={0.8}
                reflectivity={1}
                />
          </mesh>
          {/* lamp serface */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lamp_lampara001_3.geometry}  >
            <meshPhysicalMaterial
                attach="material"
                color={color}
                roughness={0.3}
                metalness={0.8}
                reflectivity={0.3}
                />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lamp_lampara001_4.geometry}
         >
            <meshPhysicalMaterial
                attach="material"
                color={color}
                roughness={0.3}
                metalness={1}
                reflectivity={0.3}
                />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lamp_lampara001_5.geometry}>
            <meshPhysicalMaterial
                attach="material"
                color="white"
                roughness={1}
                metalness={1}
                reflectivity={1}
                />
        </mesh>
        {/* lamp inside */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lamp_lampara001_6.geometry}>
            <meshPhysicalMaterial
                attach="material"
                color={color}
                roughness={0.3}
                metalness={1}
                reflectivity={0.3}
                />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lamp_lampara001_7.geometry}>
            <meshPhysicalMaterial
                attach="material"
                color={color}
                roughness={0.3}
                metalness={1}
                reflectivity={0.3}
                />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lamp_lampara001_8.geometry}>
            <meshPhysicalMaterial
                attach="material"
                color="white"
                roughness={0.3}
                metalness={1}
                reflectivity={0.3}
                />
        </mesh>
        {/* cable */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lamp_lampara001_9.geometry}>
            <meshPhysicalMaterial
                attach="material"
                color={color}
                roughness={0.3}
                metalness={1}
                reflectivity={0.3}
                />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lamp_lampara001_10.geometry}>
            <meshPhysicalMaterial
                attach="material"
                color={color}
                roughness={0.3}
                metalness={1}
                reflectivity={0.3}
                />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lamp_lampara001_11.geometry}>
            <meshPhysicalMaterial
                attach="material"
                color={color}
                roughness={0.3}
                metalness={1}
                reflectivity={0.3}
                />
        </mesh>
        <mesh
            
          castShadow
          receiveShadow
          geometry={nodes.lamp_lampara001_12.geometry}>
            <meshPhysicalMaterial
                attach="material"
                color="yellow"
                roughness={0}
                metalness={1}
                reflectivity={0.3}
            />
        </mesh>
        {/* lampbulp */}
      </group>
    </group>
  )
}

useGLTF.preload('/desklamp.glb')
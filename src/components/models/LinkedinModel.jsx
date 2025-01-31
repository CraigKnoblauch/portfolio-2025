/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 linkedin.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function LinkedinModel(props) {
  const { nodes, materials } = useGLTF('./models/linkedin.glb')
  const matcapManager = props.matcapManager;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.linkedin_platform.geometry} position={[-0.05, 0.373, -0.039]} rotation={[0, -0.737, 0]}>
        <meshMatcapMaterial matcap={matcapManager.getMatcapByName(materials['platform-gray'].name)} />
      </mesh>
      <mesh geometry={nodes.linkedin_icon.geometry} position={[-0.021, 1.314, 0.183]} rotation={[0, -0.737, 0]}>
        <meshMatcapMaterial matcap={matcapManager.getMatcapByName(materials['phx-blue'].name)} />
      </mesh>
    </group>
  )
}

useGLTF.preload('./models/linkedin.glb')

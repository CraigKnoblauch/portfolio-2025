/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 nrl.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function NrlModel(props) {
  const { nodes, materials } = useGLTF('./models/nrl.glb')
  const matcapManager = props.matcapManager
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.nrl_windows.geometry} material={materials.black} position={[-0.031, 1.009, -0.464]} rotation={[0, 1.289, 0]}>
		   <meshMatcapMaterial matcap={matcapManager.getMatcapByName(materials.black.name)} />
      </mesh>
      <mesh geometry={nodes.nrl_stairs.geometry} material={materials.paper} position={[-0.016, 0.168, 1.531]} rotation={[0, 1.289, 0]}>
		   <meshMatcapMaterial matcap={matcapManager.getMatcapByName(materials.paper.name)} />
      </mesh>
      <mesh geometry={nodes.nrl_walls.geometry} material={materials['bright-white']} position={[-0.027, 1.031, -0.268]} rotation={[0, 1.289, 0]}>
		   <meshMatcapMaterial matcap={matcapManager.getMatcapByName(materials['bright-white'].name)} />
      </mesh>
      <mesh geometry={nodes.nrl_accent.geometry} material={materials['nrl-accent']} position={[-0.012, 1.756, -0.283]} rotation={[0, 1.289, 0]}>
		   <meshMatcapMaterial matcap={matcapManager.getMatcapByName(materials['nrl-accent'].name)} />
      </mesh>
      <mesh geometry={nodes.nrl_dish_support.geometry} material={materials['dish-support']} position={[-0.011, 2.337, -0.036]} rotation={[0, 1.289, 0]}>
		   <meshMatcapMaterial matcap={matcapManager.getMatcapByName(materials['dish-support'].name)} />
      </mesh>
      <mesh geometry={nodes.nrl_under_dish_support.geometry} material={materials['rock-gray']} position={[-0.012, 2.939, -0.062]} rotation={[0, 1.289, 0]}>
		   <meshMatcapMaterial matcap={matcapManager.getMatcapByName(materials['rock-gray'].name)} />
      </mesh>
      <mesh geometry={nodes.nrl_collector.geometry} material={materials['dish-support']} position={[-0.011, 4.345, -0.046]} rotation={[0, 1.289, 0]}>
		   <meshMatcapMaterial matcap={matcapManager.getMatcapByName(materials['dish-support'].name)} />
      </mesh>
      <mesh geometry={nodes.nrl_dish.geometry} material={materials['platform-gray']} position={[-0.008, 3.053, -0.045]} rotation={[0, 1.289, 0]}>
		   <meshMatcapMaterial matcap={matcapManager.getMatcapByName(materials['platform-gray'].name)} />
      </mesh>
    </group>
  )
}

useGLTF.preload('./models/nrl.glb')

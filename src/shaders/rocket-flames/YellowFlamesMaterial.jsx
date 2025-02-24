import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'

import flamesVertexShader from 'src/shaders/rocket-flames/vertex.glsl'
import flamesFragmentShader from 'src/shaders/rocket-flames/fragment.glsl'

export const YellowFlamesMaterial = shaderMaterial(
    {
        uTime: 0,
        uPerlinTexture: new THREE.Uniform(null),
        uJumpyPerlinTexture: new THREE.Uniform(null),
        uJumpyPerlinTextureVertical: 0,
        uHotFlameColor: new THREE.Color('#fabd07'),
        uCoolFlameColor: new THREE.Color('#077cfa')
    },
    flamesVertexShader,
    flamesFragmentShader
)
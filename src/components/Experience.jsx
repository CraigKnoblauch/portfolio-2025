import { useGLTF, useScroll, useTexture, shaderMaterial } from "@react-three/drei"
import * as THREE from "three"
import MatcapManager from "src/MatcapManager"
import { useRef } from "react"
import { useFrame, extend, useThree } from "@react-three/fiber"

import { Overlay } from "src/components/Overlay"

import yellowFlamesVertexShader from 'src/shaders/rocket-flames/yellow/vertex.glsl'
import yellowFlamesFragmentShader from 'src/shaders/rocket-flames/yellow/fragment.glsl'

/**
 * Rocket flames
 */
const YellowFlamesMaterial = shaderMaterial(
    {
        uTime: 0,
        uPerlinTexture: new THREE.Uniform(null),
        uJumpyPerlinTexture: new THREE.Uniform(null),
        uJumpyPerlinTextureVertical: 0,
        uHotFlameColor: new THREE.Color('#fabd07'),
        uCoolFlameColor: new THREE.Color('#077cfa')
    },
    yellowFlamesVertexShader,
    yellowFlamesFragmentShader
)
extend({ YellowFlamesMaterial })

export const Experience = () => {

    /**
     * Load materials
     */
    const matcapManager = new MatcapManager();

    const asuLiteRock = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('asu-lite-rock')})
    const asuRed = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('asu-red')})
    const asuSoil = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('asu-soil')})
    const awsGreen = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('aws-green')})
    const awsOrange = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('aws-orange')})
    const awsPurple = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('aws-purple')})
    const black = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('black')})
    const brightWhite = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('bright-white')})
    const cactusFlowerPink = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('cactus-flower-pink')})
    const darkBrown = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('dark-brown')})
    const dishSupport = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('dish-support')})
    const gold = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('gold')})
    const gradCap = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('grad-cap')})
    const ground = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('ground')})
    const leafGreen = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('leaf-green')})
    const nrlAccent = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('nrl-accent')})
    const paper = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('paper')})
    const phxBlue = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('phx-blue')})
	const phxGray = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('phx-gray')})
	const platformGray = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('platform-gray')})
	const pythonBlue = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('python-blue')})
	const rockGray = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('rock-gray')})
	const silver = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('silver')})
	const softwareRed = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('software-red')})
	const vanguardRed = new THREE.MeshMatcapMaterial({matcap: matcapManager.getMatcapByName('vanguard-red')})

    // NOTE Use rocket-uv-no-bg.png when blending with the matcap
    const rocketTexture = useTexture('./textures/rocket-uv-map.jpg')
    rocketTexture.flipY = false
    rocketTexture.extend = true
    rocketTexture.colorSpace = THREE.SRGBColorSpace

    /**
     * Load models
     */
	const asuModel = useGLTF('./models/asu.glb')
	const phxLogoLiteModel = useGLTF('./models/phoenix-logo-lite.glb')
	const cubesatModel = useGLTF('./models/cubesat.glb')
	const rocketLaunchModel = useGLTF('./models/rocket-launch.glb')
	const vanguardModel = useGLTF('./models/vanguard.glb')
	const nrlModel = useGLTF('./models/nrl.glb')
	const linkedinModel = useGLTF('./models/linkedin.glb')
	const githubModel = useGLTF('./models/github.glb')
	const mailboxModel = useGLTF('./models/mailbox.glb')
	const rabbitHoleModel = useGLTF('./models/rabbit-hole.glb')

    /**
     * Rocket flames
     */
    // Flames perlin texture
    const perlinTexture = useTexture('./textures/perlin.png')
    perlinTexture.wrapS = THREE.RepeatWrapping
    perlinTexture.wrapT = THREE.RepeatWrapping

    // Texture to use for flame jumpiness
    const jumpyPerlinTexture = useTexture('./textures/jumpy-perlin.png')
    jumpyPerlinTexture.wrapS = THREE.RepeatWrapping
    jumpyPerlinTexture.wrapT = THREE.RepeatWrapping

    const yellowFlamesMaterialRef1 = useRef()
    const yellowFlamesMaterialRef2 = useRef()

    /**
     * Set group refs
     */
    const masterRef = useRef()
	const asuRef = useRef()
	const phxLogoLiteRef = useRef()
	const cubesatRef = useRef()
	const rocketLaunchRef = useRef()
    const rocketBodyRef = useRef()
    const rocketCradleRef = useRef()
	const vanguardRef = useRef()
	const nrlRef = useRef()
	const linkedinRef = useRef()
	const githubRef = useRef()
	const mailboxRef = useRef()
	const rabbitHoleRef = useRef()

    /**
     * Set page height and postions for each group in the sequence
     */
    const objectDistance = 4
    const numPages = 8
    const asuPos = 2 - 1
    const phxPos = 3 - 1
    const rocketPos = 4 - 1
    const vanguardPos = 5 -1
    const nrlPos = 6 -1
    const contactPos = 7-1
    const rabbitHolePos = 8-1

    const scroll = useScroll()

    useFrame((state, delta) => {
        // Animate flames
        yellowFlamesMaterialRef1.current.uTime += delta
        yellowFlamesMaterialRef2.current.uTime += delta

    })

    /**
     * Scroll animation implementatoin by moving camera
     */
    const { viewport } = useThree();
    useFrame((state, delta) => {
        state.camera.position.y = -scroll.offset * objectDistance * numPages
    })

    return <>
        {/* Having OrbitControls enabled conflicts with camera movement by scroll wheel */}
        {/* <OrbitControls enableZoom={false} /> */}
        <ambientLight intensity={2} />
        <Overlay />
        <group ref={masterRef} dispose={null} position={new THREE.Vector3(0, 0, 0)}>
            <group ref={asuRef} dispose={null} scale={0.5} position={new THREE.Vector3(0, -asuPos*objectDistance, 0)}>
                <primitive object={asuModel.nodes.asu_platform} material={platformGray} />
                <primitive object={asuModel.nodes.asu_soil} material={asuSoil} />
                <primitive object={asuModel.nodes.asu_dark_tall_rock} material={darkBrown} />
                <primitive object={asuModel.nodes.asu_lite_tall_rock} material={asuLiteRock} />
                <primitive object={asuModel.nodes.asu_dark_rock001} material={darkBrown} />
                <primitive object={asuModel.nodes.asu_dark_rock002} material={darkBrown} />
                <primitive object={asuModel.nodes.asu_lite_rock001} material={asuLiteRock} />
                <primitive object={asuModel.nodes.asu_lite_rock002} material={asuLiteRock} />
                <primitive object={asuModel.nodes.asu_lite_rock003} material={asuLiteRock} />
                <primitive object={asuModel.nodes.asu_lite_rock004} material={asuLiteRock} />
                <primitive object={asuModel.nodes.asu_dark_rock003} material={darkBrown} />
                <primitive object={asuModel.nodes.asu_dark_rock004} material={darkBrown} />
                <primitive object={asuModel.nodes.asu_dark_rock005} material={darkBrown} />
                <primitive object={asuModel.nodes.asu_dark_rock006} material={darkBrown} />
                <primitive object={asuModel.nodes.asu_dark_rock007} material={darkBrown} />
                <primitive object={asuModel.nodes.asu_dark_rock008} material={darkBrown} />
                <primitive object={asuModel.nodes.asu_lite_rock005} material={asuLiteRock} />
                <primitive object={asuModel.nodes.asu_dark_rock009} material={darkBrown} />
                <primitive object={asuModel.nodes.asu_dark_rock} material={darkBrown} />
                <primitive object={asuModel.nodes.asu_lite_rock} material={asuLiteRock} />
                <primitive object={asuModel.nodes.asu_cactus002} material={leafGreen} />
                <primitive object={asuModel.nodes.asu_cactus001} material={leafGreen} />
                <primitive object={asuModel.nodes.asu_cactus} material={leafGreen} />
                <primitive object={asuModel.nodes.asu_ground_cactus} material={leafGreen} />
                <primitive object={asuModel.nodes.asu_ground_cactus001} material={leafGreen} />
                <primitive object={asuModel.nodes.asu_ground_cactus002} material={leafGreen} />
                <primitive object={asuModel.nodes.asu_logo_body} material={asuRed} />
                <primitive object={asuModel.nodes.asu_logo_sun} material={gold} />
                <primitive object={asuModel.nodes.grad_cap_base} material={gradCap} />
                <primitive object={asuModel.nodes.grad_cap_top} material={gradCap} />
                <primitive object={asuModel.nodes.grad_cap_button} material={gradCap} />
                <primitive object={asuModel.nodes.grad_cap_cord} material={gold} />
                <primitive object={asuModel.nodes.grad_cap_tassel} material={gold} />
                <primitive object={asuModel.nodes.asu_cactus_flower001} material={cactusFlowerPink} />
                <primitive object={asuModel.nodes.asu_cactus_flower} material={cactusFlowerPink} />
            </group>
            <group ref={phxLogoLiteRef} dispose={null} position={new THREE.Vector3(0, -phxPos*objectDistance, 0)}>
                <primitive object={phxLogoLiteModel.nodes.logo} material={phxLogoLiteModel.materials['wrapped-logo']} />
            </group>
            <group ref={cubesatRef} dispose={null} position={new THREE.Vector3(0, -phxPos*objectDistance, 0)}>
                    <primitive object={cubesatModel.nodes.antenna} material={paper} />
                    <primitive object={cubesatModel.nodes.antenna_board} material={darkBrown} />
                    <primitive object={cubesatModel.nodes.cubesat_solar_panels} material={black} />
                    <primitive object={cubesatModel.nodes.cubesat_lens} material={black} />
                    <primitive object={cubesatModel.nodes.cubesat_silver_sides} material={silver} />
                    <primitive object={cubesatModel.nodes.cubesat_sides} material={phxGray} />
            </group>
            <group ref={rocketLaunchRef} dispose={null} position={new THREE.Vector3(0, -rocketPos*objectDistance, 0)}>
                    <primitive object={rocketLaunchModel.nodes.rocket_platform} material={platformGray} />
                    <primitive object={rocketLaunchModel.nodes.rocket_cradle} material={rockGray} ref={rocketCradleRef}/>
                    {/* TODO Blend the rocket-art.png texture with the bright white matcap in a custom shader to get rocket to look right */}
                    <group ref={rocketBodyRef}>
                        <primitive object={rocketLaunchModel.nodes.rocket} material={new THREE.MeshBasicMaterial({map: rocketTexture})} />
                        <primitive object={rocketLaunchModel.nodes.rocket_nozzle_1} material={silver} />
                        <primitive object={rocketLaunchModel.nodes.rocket_nozzle_2} material={silver} />
                        <primitive object={rocketLaunchModel.nodes.rocket_yellow_flames_1}>
                            <yellowFlamesMaterial ref={yellowFlamesMaterialRef1} 
                                            uPerlinTexture={perlinTexture} 
                                            uJumpyPerlinTexture={jumpyPerlinTexture}
                                            uJumpyPerlinTextureVertical={0.5}
                                            transparent 
                            />
                        </primitive>
                        <primitive object={rocketLaunchModel.nodes.rocket_yellow_flames_2}>
                            <yellowFlamesMaterial ref={yellowFlamesMaterialRef2} 
                                            uPerlinTexture={perlinTexture} 
                                            uJumpyPerlinTexture={jumpyPerlinTexture}
                                            uJumpyPerlinTextureVertical={0.5}
                                            transparent 
                            />
                        </primitive>
                    </group>
                    <primitive object={rocketLaunchModel.nodes.launch_button_platform} material={platformGray} />
                    <primitive object={rocketLaunchModel.nodes.launch_button} material={vanguardRed} />
                    <primitive object={rocketLaunchModel.nodes.exhaust_emitter} material={new THREE.MeshNormalMaterial()} />
            </group>
            <group ref={vanguardRef} dispose={null} position={new THREE.Vector3(0, -vanguardPos*objectDistance, 0)}>
                    <primitive object={vanguardModel.nodes.aws_emr_icon} material={awsOrange} />
                    <primitive object={vanguardModel.nodes.aws_glue_icon_funnel} material={awsPurple} />
                    <primitive object={vanguardModel.nodes.aws_lambda_icon} material={awsOrange} />
                    <primitive object={vanguardModel.nodes.vanguard_text} material={vanguardRed} />
                    <primitive object={vanguardModel.nodes.vanguard_platform} material={platformGray} />
                    <primitive object={vanguardModel.nodes.python_icon_top} material={pythonBlue} />
                    <primitive object={vanguardModel.nodes.aws_glue_icon_green_objects} material={awsGreen} />
                    <primitive object={vanguardModel.nodes.aws_glue_icon_red_objects} material={softwareRed} />
                    <primitive object={vanguardModel.nodes.aws_glue_icon_orange_objects} material={awsOrange} />
                    <primitive object={vanguardModel.nodes.python_icon_bottom} material={gold} />
            </group>
            <group ref={nrlRef} dispose={null} position={new THREE.Vector3(0, -nrlPos*objectDistance, 0)}>
                    <primitive object={nrlModel.nodes.nrl_windows} material={black} />
                    <primitive object={nrlModel.nodes.nrl_stairs} material={paper} />
                    <primitive object={nrlModel.nodes.nrl_walls} material={brightWhite} />
                    <primitive object={nrlModel.nodes.nrl_accent} material={nrlAccent} />
                    <primitive object={nrlModel.nodes.nrl_dish_support} material={dishSupport} />
                    <primitive object={nrlModel.nodes.nrl_under_dish_support} material={rockGray} />
                    <primitive object={nrlModel.nodes.nrl_collector} material={dishSupport} />
                    <primitive object={nrlModel.nodes.nrl_dish} material={platformGray} />
            </group>
            <group ref={linkedinRef} dispose={null} position={new THREE.Vector3(0, -contactPos*objectDistance, 0)}>
                    <primitive object={linkedinModel.nodes.linkedin_platform} material={platformGray} />
                    <primitive object={linkedinModel.nodes.linkedin_icon} material={phxBlue} />
            </group>
            <group ref={githubRef} dispose={null} position={new THREE.Vector3(0, -contactPos*objectDistance, 0)}>
                    <primitive object={githubModel.nodes.github_platform} material={platformGray} />
                    <primitive object={githubModel.nodes.github_model} material={black} />
            </group>
            <group ref={mailboxRef} dispose={null} position={new THREE.Vector3(0, -contactPos*objectDistance, 0)}>
                    <primitive object={mailboxModel.nodes.mailbox_platform.geometry} material={platformGray} />
                    <primitive object={mailboxModel.nodes.mailbox_housing.geometry} material={black} />
                    <primitive object={mailboxModel.nodes.mailbox_flag.geometry} material={softwareRed} />
                    <primitive object={mailboxModel.nodes.letter001.geometry} material={paper} />
                    <primitive object={mailboxModel.nodes.letter002.geometry} material={paper} />
                    <primitive object={mailboxModel.nodes.letter.geometry} material={paper} />
                    <primitive object={mailboxModel.nodes.mailbox_post.geometry} material={darkBrown} />
            </group>
            <group ref={rabbitHoleRef} dispose={null} position={new THREE.Vector3(0, -rabbitHolePos*objectDistance, 0)}>
                    <primitive object={rabbitHoleModel.nodes.rabbit_hole_ground_rear} material={ground} />
                    <primitive object={rabbitHoleModel.nodes.rabbit_hole_portal} material={new THREE.MeshNormalMaterial()} />
                    <primitive object={rabbitHoleModel.nodes.canopy} material={leafGreen} />
                    <primitive object={rabbitHoleModel.nodes.tree} material={darkBrown} />
                    <primitive object={rabbitHoleModel.nodes.hedge008} material={leafGreen} />
                    <primitive object={rabbitHoleModel.nodes.stem1004} material={darkBrown} />
                    <primitive object={rabbitHoleModel.nodes['tall-bush1']} material={leafGreen} />
                    <primitive object={rabbitHoleModel.nodes['tall-stem1']} material={darkBrown} />
                    <primitive object={rabbitHoleModel.nodes['tall-stem2']} material={darkBrown} />
                    <primitive object={rabbitHoleModel.nodes['wide-bush1']} material={leafGreen} />
                    <primitive object={rabbitHoleModel.nodes['wide-bush2']} material={leafGreen} />
                    <primitive object={rabbitHoleModel.nodes.stem2005} material={darkBrown} />
                    <primitive object={rabbitHoleModel.nodes.Rock_Moss_2_Cube001} material={rockGray} />
                    <primitive object={rabbitHoleModel.nodes.Rock_Moss_2_Cube002} material={rockGray} />
                    <primitive object={rabbitHoleModel.nodes.Rock_2_Cube005} material={rockGray} />
            </group>
        </group>
    </>
}

useGLTF.preload('./models/rabbit-hole.glb')
useGLTF.preload('./models/vanguard.glb')
useGLTF.preload('./models/asu.glb')
useGLTF.preload('./models/phoenix-logo-lite.glb')
useGLTF.preload('./models/cubesat.glb')
useGLTF.preload('./models/rocket-launch.glb')
useGLTF.preload('./models/nrl.glb')
useGLTF.preload('./models/linkedin.glb')
useGLTF.preload('./models/github.glb')
useGLTF.preload('./models/mailbox.glb')

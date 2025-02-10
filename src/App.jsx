import { Canvas } from '@react-three/fiber'
import { Experience } from 'src/components/Experience'
import { ScrollControls } from '@react-three/drei'
import './App.css'

function App() {

  return (
    <>
      <Canvas>
        <ScrollControls pages={8} damping={0.25}>
            <Experience />
        </ScrollControls>
      </Canvas>
    </>
  )
}

export default App

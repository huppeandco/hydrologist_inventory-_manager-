import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useInView } from "react-intersection-observer";





// A custom component that loads and renders a 3D model
function Model(props) {
  // Load the GLTF file
  const gltf = useLoader(GLTFLoader, props.url);
  // Return the scene object
  return <primitive object={gltf.scene} />;
}

// The main app component
function Scene() {
const [ref, inView ] = useInView();
const [modalVisible, setModalVisible ] = useState(false);
useEffect(() => {
    if(inView ) {
        setModalVisible(true)
    }
}, [inView])
  return (
    <div className="dap" ref={ref}>
      <Canvas  style={{ width: "500px", height: "500px" }} >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {/* Render the model component with the url prop */}
        {modalVisible && <Model url="/models/BeerCrown3.gltf" />}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Scene;

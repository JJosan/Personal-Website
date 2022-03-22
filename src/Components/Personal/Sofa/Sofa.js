import React, { Suspense } from 'react';
import './Sofa.css';
import Fade from 'react-reveal/Fade';
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";

const Scene = () => {
    const sofa = useLoader(FBXLoader, "sofa.fbx");
    sofa.rotation.x = .5;
    useFrame(({clock}) => {
      const a = clock.getElapsedTime();
      sofa.rotation.y = a;
    })
    return <primitive object={sofa} scale={0.02} />;
  };

function Sofa() {
  return (
    <Fade bottom>
      <div className='sofa'>
        <div>
          <hr />
          <h1>Sofa</h1>
        </div>
        <div className='sofa_info'>
            This is my really cool spinning sofa.
        </div>
        <div className='sofa_display'>
          <Canvas>
              <Suspense fallback={null}>
                  <Scene />
              </Suspense>
          </Canvas>
        </div>
        
      </div>
    </Fade>
  );
}

export default Sofa;
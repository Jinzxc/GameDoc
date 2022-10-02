import React from 'react'
import { Canvas } from '@react-three/fiber'
import 'bootstrap/dist/css/bootstrap.css';
import Avatar from './Avatar'
import ShopItem from './ShopItem';

const Rewards = () => {
  return (
    <div class="d-flex flex-column 
                justify-content-center 
                align-items-center">
      <Canvas class="m-5">
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Avatar position={[0, 0, 0]} />
      </Canvas >
      <div class="container
                d-flex flex-column 
                justify-content-center 
                align-items-center">
        <div class="row">
          <ShopItem type="Color" name="Red" desc="Red color style"/>
          <ShopItem type="Color" name="Blue" desc="Blue color style"/>
        </div>
        <div class="row">
          <ShopItem type="Color" name="Orange" desc="Orange color style"/>
          <ShopItem type="Color" name="Pink" desc="Pink color style"/>
        </div>
        <div class="row">
          <ShopItem type="Shape" name="Sphere" desc="Round boi"/>
          <ShopItem type="Shape" name="Cube" desc="Qwube"/>
        </div>
      </div>
    </div>
  )
}

export default Rewards
import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Avatar from './Avatar'
import ShopItem from './ShopItem';
import { Container, Row, Col} from 'react-bootstrap';

const Rewards = () => {
  const [updateAva, setUpdateAva] = useState({shape: "cube", color: "green"});

  // hard coded items for testing before db
  const items = [
    {type:"Color", name:"red", desc:"Red color style", cost:1},
    {type:"Color", name:"blue", desc:"Blue color style", cost:1},
    {type:"Color", name:"orange", desc:"Orange color style", cost:1},
    {type:"Color", name:"green", desc:"Green color style", cost:1},
    {type:"Color", name:"white", desc:"White color style", cost:1},
    {type:"Color", name:"pink", desc:"White color style", cost:1},
    {type:"Shape", name:"sphere", desc:"round boi", cost:1},
    {type:"Shape", name:"cube", desc:"square boi", cost:1}
  ]

  return (
    <div className="d-flex flex-column 
                    justify-content-center 
                    align-items-center">
      <Canvas className="m-5">
          <ambientLight />
          <pointLight position={[0, 5, 5]} />
          <Avatar shape={updateAva.shape} color={updateAva.color}/>
      </Canvas >
      <Container className="container">
        <Row>
          {items.map((item) => 
                          <Col key={item.name}                                         
                            className="container
                              d-flex flex-column 
                              justify-content-center 
                              align-items-center">
                          <ShopItem     key={item.name}
                                        type={item.type} 
                                        name={item.name} 
                                        desc={item.desc}
                                        cost={item.cost}
                                        ava={updateAva}
                                        setAva={setUpdateAva}/>
                          </Col>
                      )}
        </Row>
      </Container>
    </div>
  )
}

export default Rewards
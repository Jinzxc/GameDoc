import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';

const ShopItem = (props) => {

    const [bought, changeBought] = useState(false);

    const handleBuy = () => {
        if(props.cost > props.pts) {
            changeBought(false);
            alert("Not enough points.")
            return;
        }

        props.setPts(props.pts - props.cost);
        changeBought(true);
    }

    const handleUse = () => {
        if (props.type === "Color") {
            props.setAva({...props.ava, color: props.name});
        } else {
            props.setAva({...props.ava, shape: props.name});
        }
    }

    return (
        <div>
            <Card border="secondary" style={{ width: '18rem', margin: '5px'}}>
                <Card.Header>{props.type}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.desc}
                    </Card.Text>
                    <Card.Text className="text-warning">
                        Cost: {props.cost} points
                    </Card.Text>
                    <div className="d-grid gap-2">
                        {bought ? 
                            <button onClick={handleUse} className="btn btn-primary">Use</button> : 
                            <button onClick={handleBuy} className="btn btn-primary">Buy</button>}
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ShopItem;
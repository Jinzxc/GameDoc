import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';

const ShopItem = (props) => {

    const [bought, changeBought] = useState(false);

    const handleClick = () => {
        changeBought(b => !b);
    }

    return (
        <Card border="secondary" style={{ width: '18rem', margin: '5px'}}>
            <Card.Header>{props.type}</Card.Header>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.desc}
                </Card.Text>
                <div class="d-grid gap-2">
                    {bought ? 
                        <button onClick={handleClick} class="btn btn-primary">Use</button> : 
                        <button onClick={handleClick} class="btn btn-primary">Buy</button>}
                </div>
            </Card.Body>
        </Card>
    );
}

export default ShopItem;
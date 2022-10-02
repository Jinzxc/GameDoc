import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function TaskCard({ task }) {
  const handleClick = () => {
    console.log("dnausidhiuas");
  };

  return (
    <div>
      <Card>
        <Card.Header>{task.title}</Card.Header>
        <Card.Body>
          <Card.Text>{task.description}</Card.Text>
          <Button onClick={handleClick} variant="primary">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TaskCard;

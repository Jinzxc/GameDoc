import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const navigate = useNavigate();
  const handleClick = (taskId, taskIds) => {
    navigate(`/Task/${taskId}`);
  };

  return (
    <div
      className="d-flex flex-column 
                    justify-content-center 
                    align-items-center
                    p-5"
    >
      <Card style={{ width: "50em" }}>
        <Card.Header>{task.title}</Card.Header>
        <Card.Body>
          <Card.Text>{task.description}</Card.Text>
          <Button
            onClick={() => handleClick(task.id, task.ids)}
            variant="primary"
          >
            Do Task
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TaskCard;

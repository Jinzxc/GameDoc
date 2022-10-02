import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";

function QuestionCard(props) {

  const handleCheck = (event) => {
    const newAnswer = event.target.id;
    const answers = props.pickedAnswers;
    const questionNumber = props.qid;
    props.pickAnswer({...answers, [questionNumber]: newAnswer});
  }

  return (
    <div className="d-flex flex-column 
                    justify-content-center 
                    align-items-center
                    p-4
                    m-2">
      <Card style={{ width: "65rem" }}>
        <Card.Header>{props.question}</Card.Header>
          <Form className="
                    d-flex flex-column 
                    justify-content-center 
                    align-items-center">
            {props.choices.map((choice) => (
              <div key={`default-${choice}`} className="m-3">
                <Form.Check 
                  type='radio'
                  id={`${choice}`}
                  label={`${choice}`}
                  name="choice"
                  onChange={handleCheck}/>
              </div>
            ))}
          </Form>
      </Card>
    </div>

  );
}

export default QuestionCard;
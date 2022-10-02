import * as React from "react";
import { useState} from "react";
import QuestionCard from "../components/QuestionCard";

const QuestionPage = (props) => {
  const questions = [
    {_id:{$oid: 1}, id: 1, question:"What is 1 + 1?", answers:["1","2","3"], cAnswer:"2", points:1},
    {_id:{$oid: 2}, id: 2, question:"What is 2 + 3", answers:["5","4","3"], cAnswer:"5", points:2},
    {_id:{$oid: 3}, id: 3, question:"What is 7 * 3", answers:["-4","15","21"], cAnswer:"21", points:3}];
    
  const handleSubmit = () => {
    // add submit and check
    // and routing
  }

  const [pickedC, changePicked] = useState();

  return (
    <div>
        {props.ids.length ? (
         props.ids.map((q) => <QuestionCard key={questions[q]._id.$oid} 
                                            qid={questions[q].id}
                                            question={questions[q].question} 
                                            choices={questions[q].answers} 
                                            correct={questions[q].cAnswer} 
                                            pts={questions[q].points}
                                            pickedAnswers={pickedC}
                                            pickAnswer={changePicked}
                                            />)
        ) : (
          <p className="pt-5 text-center">"No Tasks Found"</p>
        )}

    { pickedC != null && Object.keys(pickedC).length >= props.ids.length && 
        <div className="p-5">
              <button onClick={ handleSubmit }>Submit</button>
        </div>
    }
    </div>
  );
};

export default QuestionPage;


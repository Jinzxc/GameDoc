import * as React from "react";
import { useState } from "react";
import QuestionCard from "../components/QuestionCard";

const QuestionPage = (props) => {
  const questions = [
    {
      _id: { $oid: 1 },
      id: "1",
      question: "What is 1 + 1?",
      answers: ["1", "2", "3"],
      cAnswer: "2",
      points: 1,
    },
    {
      _id: { $oid: 2 },
      id: "2",
      question: "What is 2 + 3?",
      answers: ["5", "4", "3"],
      cAnswer: "5",
      points: 2,
    },
    {
      _id: { $oid: 3 },
      id: "3",
      question: "What is 7 * 3?",
      answers: ["-4", "15", "21"],
      cAnswer: "21",
      points: 3,
    },
    {
      _id: { $oid: 4 },
      id: "4",
      question: "What is 10 + 10?",
      answers: ["20", "1", "3"],
      cAnswer: "20",
      points: 1,
    },
    {
      _id: { $oid: 5 },
      id: "5",
      question: "What is 10 * 10?",
      answers: ["100", "1", "40"],
      cAnswer: "100",
      points: 5,
    },
    {
      _id: { $oid: 6 },
      id: "6",
      question: "What is 6 * 4",
      answers: ["24", "1", "2"],
      cAnswer: "24",
      points: 3,
    },
    {
      _id: { $oid: 7 },
      id: "7",
      question: "What is 2 + 2?",
      answers: ["4", "1", "2"],
      cAnswer: "4",
      points: 1,
    },
    {
      _id: { $oid: 8 },
      id: "8",
      question: "What is 1 + 10?",
      answers: ["11", "2", "13"],
      cAnswer: "11",
      points: 2,
    },
    {
      _id: { $oid: 9 },
      id: "9",
      question: "What is 5 * 5?",
      answers: ["20", "2", "3"],
      cAnswer: "30",
      points: 3,
    },
  ];

  const [pointsEarned, updatePoints] = useState(0);

  const handleSubmit = () => {
    const questionsId = Object.keys(pickedC);
    questionsId.forEach((questionId) => {
      const quest = questions.find((x) => {
        return x.id === questionId;
      });
      if (quest != null && pickedC[questionId] === quest.cAnswer) {
        updatePoints((p) => pointsEarned + quest.points);
      }
    });
  };

  const [pickedC, changePicked] = useState();

  return (
    <div>
      {props.ids.length ? (
        props.ids.map((q) => (
          <QuestionCard
            key={questions[q]._id.$oid}
            qid={questions[q].id}
            question={questions[q].question}
            choices={questions[q].answers}
            correct={questions[q].cAnswer}
            pts={questions[q].points}
            pickedAnswers={pickedC}
            pickAnswer={changePicked}
          />
        ))
      ) : (
        <p className="pt-5 text-center">"No Tasks Found"</p>
      )}

      {pickedC != null && Object.keys(pickedC).length >= props.ids.length && (
        <div className="p-5">
          <button onClick={handleSubmit}>Submit</button>
          {pointsEarned > 0 && (
            <p className="text-success">You earned {pointsEarned} points</p>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionPage;

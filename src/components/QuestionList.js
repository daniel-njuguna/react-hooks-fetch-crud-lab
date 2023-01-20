import React, {useState} from "react";
import QuestionItem from  "./QuestionItem"; 

function QuestionList({questions}) {

  console.log(questions)
  //[question, setQuestion] = useState({})
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map( (question) => { 
        console.log(question)

        
        
        return <QuestionItem key = {question.id} question = {question}/>
      }
      )}</ul>
    </section>
  );
}

export default QuestionList;
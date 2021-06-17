import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [Question , setQuestions] = useState(data)

  return <main>
  <div className="container">
      <h3>Frequently asked questions (FAQ)</h3>
  <section className="info">
    {
          Question.map((answers)=>{
            return <SingleQuestion key={answers.id} {...answers}/>
          })
    }

  </section>

  </div>

    


  </main>;
}

export default App;

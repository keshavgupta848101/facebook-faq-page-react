import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {

  const [bol, setbol] = useState(false)

  function setboolean(){
    setbol(!bol)
  }
  return <article className="QUESTION">

    <header className='conatiner'>
      <h4>{title}</h4>
      <button className="btn" onClick={setboolean}> <AiOutlinePlus/></button>
    </header>
    <p>{bol ? info : ''}</p>

  </article>;
};

export default Question;

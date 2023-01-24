import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props) {

  const onClickButon = () =>{
   props.setOpenModal(prevState => !prevState);
  }

  return (
    <button className="CreateTodoButton"
    onClick={onClickButon}
    >
      +
    </button>
  )
}

export default CreateTodoButton;

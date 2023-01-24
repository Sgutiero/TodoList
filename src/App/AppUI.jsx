import React from "react";
import  TodoCounter  from "../TodoCounter/index.jsx";
import  TodoItem from "../TodoItem/index.jsx";
import  TodoList from "../TodoList/index.jsx";
import  TodoSearch from "../TodoSearch/index.jsx";
import { TodoContext }  from "../TodoContext/index.jsx";
import { Modal } from "../Modal/index.jsx";
import CreateTodoButton from "../CreateTodoButton/index.jsx";
import { TodoForm } from "../TodoForm/index.jsx";


function AppUI(){

  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal, 
    setOpenModal,
   } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>

          <TodoList>
        
          {error && <p>Desespérate, hubo un error...</p>}
          {loading && <p>Estamos cargando, no desesperes...</p>}
          {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
  
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}

          <CreateTodoButton 
          setOpenModal={setOpenModal}
          />

      </React.Fragment>
  );
}

export default AppUI;

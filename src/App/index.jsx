import React, { useState } from 'react';
import AppUI from './AppUI.jsx';
import { TodoProvider } from '../TodoContext/index.jsx';



function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );

  }
export default App;
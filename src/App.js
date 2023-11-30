// App.js

import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginForm from './routes/Login';
import SignUpForm from './routes/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/signup" element={<SignUpForm/>}/>
          <Route path="/" element={<LoginForm />}/>
      </Routes>
         
    </BrowserRouter>
  );
}

export default App;

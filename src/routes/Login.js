// LoginForm.js

import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서는 간단히 콘솔에 로그인 정보를 출력하는 예제입니다.
    console.log(`Username: ${username}, Password: ${password}`);

    const request = {
      id: username,
      password: password
    }


    // fetch("http://34.64.206.72:5000/login", {
    //     method: "POST",
    //     credentials: 'include',
    //     headers: {
    //         "Content-Type": "application/json"

    //     },
    //     body: JSON.stringify(request)
    // })
    // .then((response) => {
    //     if(response.ok) {
    //         return response.text();
    //     }
    //     throw new Error('네트워크 응답 실패');
    // })
    // .then((data) => {
    //     console.log(data);
    //     alert(data);
    //     if("success" === data){
    //         window.location.href = "/";
    //     }
    // })

    

    axios.post('http://34.64.206.72:5000/login', request, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
        throw new Error('네트워크 응답 실패');
      })
      .then((data) => {
        console.log(data);
        alert(data);
        if (data === 'success') {
          window.location.href = '/';
        }
      })
      .catch((error) => {
        console.error('에러 발생:', error);
        // 에러 처리 로직 추가
      });

    // 실제로는 여기에 로그인 처리 로직을 구현하면 됩니다.
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

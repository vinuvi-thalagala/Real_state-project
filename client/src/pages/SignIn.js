import React, {useState} from 'react';
import axios from 'axios';

export default function SignIn() {

const [username, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

function sendData(e){

  e.preventDefault();

  const newUser = {
    username,
    email,
    password
  }
 
  axios.post("http://localhost:8070/user/create", newUser).then(() => {
    alert("User added");
  }).catch((err) => {
    alert(err);
  })
}


  return (
    <div>

        <form action="/submit" method="POST" class="max-w-lg mx-auto p-4 border rounded shadow space-y-4">
            <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                class="w-full p-2 border rounded"
                required
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                class="w-full p-2 border rounded"
                required
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                class="w-full p-2 border rounded"
                required
            />

            <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Submit
            </button>
        </form>

    </div>
  )
}

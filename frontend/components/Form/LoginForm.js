import React, {useState} from 'react'
import axios from 'axios'
import { useRouter } from "next/router";

const LoginForm = () => {

  const router = useRouter();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isError, setIsError] = useState(false);

  async function login(){
    let login_data = {
        username: username,
        password: password,
        user_type: "client"
      }
      await axios.post("http://34.168.32.14:8081/api/v1/login/access-token", login_data, {headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      }})
      .then(res => {
        console.log(res);
        if (res.status == 200) {
          localStorage.setItem("ACCESS_TOKEN", res.data.access_token);
          router.push('/client')
        }
      })
      .catch(err => {
          console.log(err)
          setIsError(true);

    });
  }

  return (
    <div class="w-9/10 mx-auto">
      <h1 class="text-2xl text-white">Login</h1>
      <br />
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
        </label>
        <input class="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={( {target} ) => setUsername(target?.value) } />
        </div>
        <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
        </label>
        <input class="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={({target})=>setPassword(target?.value)} />
        </div>
        <div class="flex items-center justify-between mb-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={ () => login()}>
                Sign In
            </button>
            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
            </a>
        </div>
        { isError ? <p class="text-red-500 text-xs italic">Please type in the correct username or password</p> : ''}
        <a href="/register" class="text-blue-500 text-xs">Don't have an account? Register here</a>
    </form>
    </div>
  )
}

export default LoginForm

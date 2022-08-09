import React, {useState} from 'react'
const LoginForm = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState()
  const [dob, setDob] = useState();
  const [address, setAddress] = useState();
  const [isError, setIsError] = useState(false);

  function register(){
    console.log(name)
    console.log(email)
    console.log(username)
    console.log(password)
    console.log(dob)
    console.log(address)
  }

  return (
    <div class="w-9/10 mx-auto">
      <h1 class="text-2xl">Register</h1>
      <br />
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Full Name
        </label>
        <input class="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Full Name" onChange={({target})=>setName(target?.value)}/>
        </div>
        <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
        </label>
        <input class="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" onChange={({target})=>setEmail(target?.value)} />
        </div>
        <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
        </label>
        <input class="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={({target})=>setUsername(target?.value)}/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
          </label>
          <input class="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={({target})=>setPassword(target?.value)}/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Date of Birth
          </label>
          <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="date" class="bg-white border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " placeholder="Select date" onChange={({target})=>setDob(target?.value)}/>
          </div>
        </div>
        <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
            Address
        </label>
        <input class="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Address" onChange={({target})=>setAddress(target?.value)}/>
        </div>
        <div class="flex items-center justify-between mb-2">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={()=>register()}>
                Register
            </button>
        </div>
        { isError ? <p class="text-red-500 text-xs italic">Please type in the correct username or password</p> : ''}
        <a href="/login" class="text-blue-500 text-xs">Have an account? Login here</a>
    </form>
    </div>
  )
}

export default LoginForm
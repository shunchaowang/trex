import axios from "axios"
import { FC, useEffect, useState } from "react"
import User from "./components/User"
import { AppProps, UserType } from "./App.types"

const App: FC<AppProps> = ({ title }) => {
  const [users, setUsers] = useState<UserType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState("")

  const getUsers = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.get("https://randomuser.me/api/?results=10")
      console.log(data)
      setUsers(data.results)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  // this will load automatically when page is loaded
  useEffect(() => {
    getUsers()
  }, [])

  // with typescript every variable should have a type
  // i use an inline function to handle the input change event,
  // the correct type is automatically passed to the function parameter
  // when using inline functions
  return (
    <div>
      <h1>{title}</h1>
      <input
        type="text"
        onChange={(event) => setUsername(event.target.value)}
      />
      <div>{username}</div>
      <br />
      <button onClick={getUsers}>Load Users</button>
      {isLoading && <p>Loading...</p>}
      <ul>
        {users.map(({ login, name, email }) => (
          <User key={login.uuid} name={name} email={email} />
        ))}
      </ul>
    </div>
  )
}

// const App = ({ title }: { title: string }) => {
//   return <div>{title}</div>
// }

export default App

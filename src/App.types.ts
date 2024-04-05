export interface AppProps {
  title: string
}

export interface UserType {
  name: Name
  login: Login
  email: string
}

export interface Login {
  uuid: string
}

export interface Name {
  first: string
  last: string
}

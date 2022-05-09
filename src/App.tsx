import { TaskList } from './components/TaskList'
import { Header } from "./components/Header";
import { Alerts } from "./components/Alerts";

import './styles/global.scss'


export function App() {
  return (
    <>
      <Header />
      <TaskList />
    </>
  )
}
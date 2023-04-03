import { Registration } from './components/Registration/Registration'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {
  // TODO: replace in index js file
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Registration />} path="/login" />
      </Routes>
    </BrowserRouter>
  )
}

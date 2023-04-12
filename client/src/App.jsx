import { Registration } from './components/Registration/Registration'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { NotFound } from './components/NotFound/NotFound'
import { DeletePopup } from './components/DeletePopup/DeletePopup'
import { CreatePopup } from './components/CreatePopup/CreatePopup'
import { EditPopup } from './components/EditPopup/EditPopup'

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Registration />} path="/login" />
        <Route element={<EditPopup />} path="/edit" />
        <Route element={<NotFound />} path="*" />
        <Route element={<DeletePopup />} path="/delete" />
        <Route element={<CreatePopup />} path="/create" />
      </Routes>
    </Router>
  )
}

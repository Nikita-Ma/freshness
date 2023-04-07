import { Registration } from './components/Registration/Registration'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from './components/NotFound/NotFound'
import { DeletePopup } from './components/DeletePopup/DeletePopup'

export const App = () => {
  // TODO: replace in index js file
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Registration />} path="/login" />
        <Route element={<NotFound />} path="*" />
        <Route element={<DeletePopup />} path="/delete" />
      </Routes>
    </BrowserRouter>
  )
}

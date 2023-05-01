import { Registration } from './components/Registration/Registration'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { DeletePopup } from './components/DeletePopup/DeletePopup'
import { CreatePopup } from './components/CreatePopup/CreatePopup'
import { EditPopup } from './components/EditPopup/EditPopup'
import { SearchBar } from './components/SearchBar/SearchBar'
import { AllList } from './components/AllList/AllList'

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<SearchBar />} path="/search" />
        <Route element={<Registration />} path="/login" />
        <Route element={<CreatePopup />} path="/create" />
        <Route element={<EditPopup />} path="/edit" />
        <Route element={<DeletePopup />} path="/delete" />
        <Route element={<AllList />} path="*" />
      </Routes>
    </Router>
  )
}

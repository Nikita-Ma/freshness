import { Registration } from './components/Registration/Registration'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { DeletePopup } from './components/DeletePopup/DeletePopup'
import { CreatePopup } from './components/CreatePopup/CreatePopup'
import { EditPopup } from './components/EditPopup/EditPopup'
import { SearchBar } from './components/SearchBar/SearchBar'
import { AllList } from './components/AllList/AllList'
import { Login } from './components/Login/Login'

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<SearchBar />} path="/product/search" />
        <Route element={<Registration />} path="/register" />
        <Route element={<Login />} path="/login" />
        <Route element={<CreatePopup />} path="/product/create" />
        <Route element={<EditPopup />} path="/product/edit" />
        <Route element={<DeletePopup />} path="/product/delete" />
        <Route element={<AllList />} path="*" />
      </Routes>
    </Router>
  )
}

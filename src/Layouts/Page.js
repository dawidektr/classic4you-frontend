import { Routes, Route } from 'react-router-dom';
import AddPage from '../Pages/Admin/AddPage';
import AdminPage from '../Pages/Admin/AdminPage';
import EditPage from '../Pages/Admin/EditPage';
import CarPage from '../Pages/CarPage';
import HomePage from '../Pages/HomePage';

const Page = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/car/:id_car" element={<CarPage />} />
      <Route path="admin" exact element={<AdminPage />} />
      <Route path="add" element={<AddPage />} />
      <Route path="edit/:id" element={<EditPage />} />
    </Routes>
  );
};

export default Page;

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from "./components/layout";
import Home from "./page/home";
import Detail from "./page/detail";
import Category from "./page/category";
import NotFoundPage from "./page/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-[#192037] p-8">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="recipe/:slug" element={<Detail />} />
            <Route path="category/:nom?" element={<Category />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

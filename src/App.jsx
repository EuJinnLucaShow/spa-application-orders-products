import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";

function App() {
  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NavigationMenu />} />
          <Route path="/*" element={<NavigationMenu />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

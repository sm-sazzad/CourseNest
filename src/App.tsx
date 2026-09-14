import { useState } from "react";
import Banner from "./Components/Banner"
import Courses from "./Components/Courses";
import Navbar from "./Components/Navbar"
import type { IDataType } from "./DataType";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";


const dataFetch = async (): Promise<IDataType[]> => {
  const res = await fetch("/Data.json");
  const data = await res.json();
  return data;
}

const Promises = dataFetch();

function App() {

  const [sidebar, setSidebar] = useState<boolean>(false);

  const [selected, setSelected] = useState<IDataType[]>([]);
  const [total, setTotal] = useState<number>(0);

  return (
    <>
      <Navbar total={total} setTotal={setTotal} selected={selected} setSelected={setSelected} sidebar={sidebar} setSidebar={setSidebar} />
      <Banner setSidebar={setSidebar} />
      <Courses Promises={Promises} selected={selected} setSelected={setSelected} total={total} setTotal={setTotal} />
      <Footer sidebar={sidebar} setSidebar={setSidebar} />
      <ToastContainer />

    </>
  )
}

export default App

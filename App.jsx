import"./App.css";
import Navbar from "./Navbar";
import Blogs from "./Blogs";

const App = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="py-40">
        <Blogs/>
      </div>
    </div>
  )
}

export default App
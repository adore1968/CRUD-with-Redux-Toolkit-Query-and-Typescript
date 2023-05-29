import GroceryBud from "./components/grocery bud/GroceryBud";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-800">
      <main>
        <section className="flex items-center justify-center min-h-screen px-6">
          <GroceryBud />
          <ToastContainer autoClose={3500} />
        </section>
      </main>
    </div>
  );
}

export default App;

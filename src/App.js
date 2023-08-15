import Header from "./components/Header";
import { Products } from "./pages/Products";

function App() {
  return (
    <div>
      <Header />
      <Products products={DUMMY_PRODUCTS}/>
    </div>
  );
}

export default App;

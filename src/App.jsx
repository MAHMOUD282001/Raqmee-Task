import "./App.css";
import FilterProductsComponent from "./components/Filteration/FilterProductsComponent/FilterProductsComponent";
import Products from "./components/Products/Products";
function App() {
  return (
    <section className="my-[75px]">
      <div className="container">
        <FilterProductsComponent />
        <Products />
      </div>
    </section>
  );
}
export default App;

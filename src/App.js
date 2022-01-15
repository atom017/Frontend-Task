
import Categories from "./components/Category/Categories";
import Hero from "./components/Hero";
import Products from "./components/Products/Products";
import NewArrivals from './components/NewArrivals/NewArrivals'
import Bar from './components/Bar'
import PhoneIcon from './assets/Category icons/Asset 42.png'
import LaptopIcon from './assets/Category icons/Asset 43.png'
import TabletIcon from './assets/Category icons/Asset 45.png'
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero/>
      <Categories/>
      <div className="buy1get1">
      <Products title='Buy1 Get1'/>
      </div>
      
      <Products title='Promotions' promotion='00%'>
        <p className="no-margin small-text" style={{textDecoration:'line-through'}}>$58,000</p>
      </Products>
      <Bar/>
      <NewArrivals/>
      <Bar/>
      <Products title="Phone" img={PhoneIcon}/>
      <Bar/>
      <Products title="Laptop" img={LaptopIcon}/>
      <Bar/>
      <Products title="Tablet" img={TabletIcon}/>
      <Footer/>
    </div>
  );
}

export default App;

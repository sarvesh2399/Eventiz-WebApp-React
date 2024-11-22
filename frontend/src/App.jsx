import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Footer from './components/reusables/Footer';
import ProductList from './components/shop/product-list/ProductList';
import HomeTitle from './components/home/HomeTitle';
import Header from './components/reusables/Header';
import PCart from './components/shop/product-cart/PCart';
import PCheckout from './components/shop/product-checkout/PCheckout';
import Create from './components/CRUD/Create';
import ViewAll from './components/CRUD/ViewAll';
import Read from './components/CRUD/Read';
import Update from './components/CRUD/Update';
import PDetail from './components/shop/product-detail/PDetail';
import { ShopTitle } from './components/shop/ShopReusables/ShopTitle';

// Reusable layout component for shop pages
const ShopLayout = ({ title, children }) => (
  <>
    <Header>
      <ShopTitle subpage={title} />
    </Header>
    {children}
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Route */}
        <Route path="/" element={<><Header><HomeTitle /></Header><Home /></>}/>

        {/* Shop Routes */}
        <Route path="/product-list" element={<ShopLayout title="Archives: Shop"><ProductList /></ShopLayout>} />
        <Route path="/product-detail" element={<ShopLayout title="Product Detail"><PDetail /></ShopLayout>} />
        <Route path="/product-cart" element={<ShopLayout title="Cart"><PCart /></ShopLayout>} />
        <Route path="/product-checkout" element={<ShopLayout title="Checkout"><PCheckout /></ShopLayout>} />

        {/* CRUD Routes */}
        <Route path="/view-all" element={<ShopLayout title="View All"><ViewAll /></ShopLayout>} />
        <Route path="/create" element={<ShopLayout title="Add New Product"><Create /></ShopLayout>} />
        <Route path="/read" element={<ShopLayout title="Read"><Read /></ShopLayout>} />
        <Route path="/update" element={<ShopLayout title="Update Product"><Update /></ShopLayout>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

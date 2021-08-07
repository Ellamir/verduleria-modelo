import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import UserList from './containers/user-list/UserList'
import ProdList from './containers/product-list/ProductList'
import store from './store'
import UserCreate from './containers/user-create/UserCreate'
import UserDetail from './containers/user-detail/UserDetail'
import ProductCreate from './containers/product-create/ProductCreate'
import ProductDetail from './containers/product-detail/ProductDetail'
import Menu from './components/navbar/Menu'

function App() {
  return (
    <div className="container mt-4">
      <Provider store={store}>
        <Router>
          <Menu />
          <Route path="/" exact>
            <UserList />
          </Route>
          <Route path="/create">
            <UserCreate />
          </Route>
          <Route path="/products/create">
            <ProductCreate />
          </Route>
          <Route path="/products" exact>
            <ProdList />
          </Route>
          <Route path="/detail/:id">
            <UserDetail />
          </Route>
          <Route path="/products/detail/:id">
            <ProductDetail />
          </Route>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

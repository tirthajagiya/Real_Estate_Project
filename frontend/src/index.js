import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Component/Home';
import Layout from './Component/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExploreProperty from './Component/ExploreProperty';
import FindBroker from './Component/FindBroker';
import CustomerCare from './Component/CustomerCare';
import Login from './Component/Login';
import ExploreOneProperty from './Component/ExploreOneProperty';
import AddProperty from './Component/AddProperty';
import EditProperty from './Component/EditProperty';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/exploreproperty' element={<ExploreProperty />} />
          <Route path='/exploreproperty/:id' element={<ExploreOneProperty />} />
          <Route path='/exploreproperty/addproperty' element={<AddProperty />} />
          <Route path='/exploreproperty/edit/:id' element={<EditProperty/>}/>
          <Route path='/findbroker' element={<FindBroker />} />
          <Route path='/customercare' element={<CustomerCare />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
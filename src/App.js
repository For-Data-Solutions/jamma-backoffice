import React from 'react';
import { Route } from 'react-router-dom';

import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import Pedidos from './pages/pedidos/Pedidos';
import { pedidoReducer } from './pages/pedidos/redux/reducers';

const customRoutes = [
  <Route
    path='/pedidos'
    component={Pedidos}
  />
];

const App = () => (
  <Admin customReducers={{pedido: pedidoReducer}} customRoutes={customRoutes} dataProvider={dataProvider}>
    <Resource name="posts" />
  </Admin>
);

export default App;
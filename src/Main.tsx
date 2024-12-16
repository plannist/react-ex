import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { BrowserRouter } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import store from '@/store/coreStore';
import { AliveScope } from 'react-activation';

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <AliveScope>
          <App />
        </AliveScope>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

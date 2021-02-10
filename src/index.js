import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

// import App from './components/App';
import { store, persistor } from './redux/store';

import '../node_modules/modern-normalize/modern-normalize.css';
import './index.css';
import Preloader from './components/preloader/Preloader';

const App = lazy(() => import('./components/App'));

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Suspense fallback={<Preloader />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

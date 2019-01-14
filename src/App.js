import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { createBrowserHistory } from 'history';

import Main from './pages/Main';

import setupStore from './store';

const history = createBrowserHistory();
const { store, persistor } = setupStore(history);

class App extends Component {
  state = {
    error: null,
  };

  componentDidCatch(error) {
    this.setState({ error });
  }
  render() {
    const { error } = this.state;
    if (error) {
      return <div>Something went wrong</div>;
    }
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <Main />
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;

import { Provider } from 'react-redux';
import { App } from './App';
import { store, history } from './store/store';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

export function AppWrapper() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
}

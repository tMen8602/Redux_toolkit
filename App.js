import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;
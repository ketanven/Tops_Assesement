// App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Checklist from './components/Checklist';

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <h1 className='mb-4'>Redux Checklist Example</h1>
                <Checklist options={['ARE YOU A CITIZEN', 'ARE YOU OVER 21?']} />
            </div>
        </Provider>
    );
};

export default App;

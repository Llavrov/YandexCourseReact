import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./redux";
import {rootReducer} from "./redux/reducers";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {BrowserRouter as Router} from "react-router-dom";

export type RootState = ReturnType<typeof rootReducer>

ReactDOM.render(
    <React.StrictMode>
        <DndProvider backend={HTML5Backend}>
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        </DndProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

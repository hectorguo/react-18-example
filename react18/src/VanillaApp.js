import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export default class VanillaApp {
    constructor(props) {
        this.props = props;
    }
    mount(element) {
        this.instance = ReactDOM.createRoot(element);
        this.instance.render(
            <React.StrictMode>
                <App {...this.props} />
            </React.StrictMode>
        )
    }
    update(props) {
        this.instance.render(
            <React.StrictMode>
                <App {...this.props} {...props} />
            </React.StrictMode>
        )
    }
    unmount() {
        this.instance.unmount();
    }
}

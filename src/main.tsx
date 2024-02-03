import './main.css'

import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './views/app';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

declare const module: any;

if (module.hot) {
    module.hot.accept();
}
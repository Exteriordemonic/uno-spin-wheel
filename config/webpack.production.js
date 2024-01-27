import { merge } from 'webpack-merge';  

import { loadTS, loadCSS } from "./webpack.parts.js";


export default merge([
    loadTS(),
    loadCSS(),
]);

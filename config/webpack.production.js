import { merge } from 'webpack-merge';  

import { loadTS, loadCSS, loadAssets } from "./webpack.parts.js";


export default merge([
    loadTS(),
    loadCSS(),
    loadAssets(),
]);

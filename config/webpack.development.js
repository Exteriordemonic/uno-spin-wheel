import { merge } from 'webpack-merge';  

import { devServer, loadTS, loadCSS, loadAssets } from "./webpack.parts.js";


export default merge([
    devServer({
        // Customize host/port here if needed
        host: process.env.HOST,
        port: process.env.PORT,
    }),
    loadTS(),
    loadCSS(),
    loadAssets(),
]);

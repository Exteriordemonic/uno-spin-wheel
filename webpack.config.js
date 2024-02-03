import { merge } from 'webpack-merge';

import commonConfig from "./config/webpack.common.js";
import productionConfig from "./config/webpack.production.js";
import developmentConfig from "./config/webpack.development.js";

export default (_env, argv) => {
  const mode = argv.mode;
  
    if (mode === "production") {
        return merge(commonConfig, productionConfig, { mode });
    }

    return merge(commonConfig, developmentConfig, { mode });
};

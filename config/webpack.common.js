import HtmlWebpackPlugin from "html-webpack-plugin";
import { merge } from "webpack-merge";
import ESLintPlugin from 'eslint-webpack-plugin';

import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default merge([
    {
        entry: './src/main.tsx',
        output: {
          path: path.resolve(__dirname, '../dist'),
          filename: '[name].js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html'
            }),
            new ESLintPlugin(),
        ],
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
    },
]);

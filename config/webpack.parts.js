import dotenv from 'dotenv';
dotenv.config();

export function devServer({ host, port } = {}) { return ({
    devServer: {
        host: host,
        port: port,
        open: true,
        hot: true,
        client: {
            overlay: true,
        },
    },
});     }

export function loadTS({ include, exclude } = {}) { return ({
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include,
                exclude,

                use: ["ts-loader"],
            },
        ],
    },
});     }

export function loadCSS({ include, exclude } = {}) { return ({
    module: {
        rules: [
            {
                test: /\.css?$/,
                include,
                exclude,

                use: [
                    "style-loader",
                    "css-loader",
                    {
                      loader: "postcss-loader"
                    }
                ]
            },
        ],
    },
});     }
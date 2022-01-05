module.exports = {
    runtimeCompiler: true,
    configureWebpack: {
        entry: ['babel-polyfill', './src/main.js'],
    },
    // 개발 서버 설정
    devServer: {
        host: 'localhost',
        port: 8080,
        overlay: false,
        disableHostCheck: true,
        proxy: {
            '/board': {
                target: process.env.VUE_APP_API_URL,
                changeOrigin: true,
            },
            '/board/:id': {
                target: process.env.VUE_APP_API_URL,
                changeOrigin: true,
            },
            '/edit/:id': {
                target: process.env.VUE_APP_API_URL,
                changeOrigin: true,
            },
            '/add': {
                target: process.env.VUE_APP_API_URL,
                changeOrigin: true,
            },
        }
    }
};
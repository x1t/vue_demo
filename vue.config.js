module.exports = {
    publicPath: '',
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/mock': {
                target: 'http://localhost:8080',
                ws: false,
                changeOrigin: false
            }
        }
    }
}
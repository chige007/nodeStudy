const express = require('express')
const bodyParser = require('body-parser')
const proxy = require('http-proxy-middleware')
const querystring = require('querystring')

const proxyConfig = require('./proxy.config')

const app = express()

// make http proxy middleware setting
const createProxySetting = function (url) {
    return {
        target: url,
        changeOrigin: true,
        headers: {
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
        onProxyReq: function (proxyReq, req) {
            if (req.method === 'POST' && req.body) {
                const bodyData = querystring.stringify(req.body)
                proxyReq.write(bodyData)
            }
        }
    }
}

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// proxy
proxyConfig.forEach(function (item) {
    app.use(item.url, proxy(createProxySetting(item.target)))
})
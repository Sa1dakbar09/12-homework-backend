const http = require('http');
const { createEm, getEm, deleteEM, uptadeEm } = require('./myModule/myModule');

const App = http.createServer(function (req, res) {
    const product_id = req.url.split('/')[2];

    if (req.url == '/') {
        res.end('Cannot get here /')
    }
    else if (req.method == 'GET') {
        if (req.url == '/products') {
            getEm(res, 'products')
        } else {
            res.end('404, other thing not found')
        }
    }
    else if (req.method == 'POST') {
        if (req.url == '/create_products') {
            createEm(req, res, 'products')
        } else {
            res.end('404, other thing not found')
        }
    }
    else if (req.method == 'DELETE') {
        if (req.url == `/delete_products/${product_id}`) {
            const what = req.url.split('/')[1].split('_')[1]
            deleteEM(res, product_id, what)
        } else {
            res.end('404, other thing not found')
        }
    }
    else if (req.method == "PUT") {
        if (req.url == `/update_products/${product_id}`) {
            const what = req.url.split('/')[1].split('_')[1]
            uptadeEm(req, res, product_id, what);
        } else {
            res.end('404, other thing not found')
        }
    }
    else {
        res.end('404 not found')
    }
})

App.listen(2024, () => {
    console.log('Server is working on 2024 port !!');
})
    ;
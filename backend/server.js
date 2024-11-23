const express = require('express');
const fs = require('fs');
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

const helmet = require('helmet');

const path = require('path');
const dataFilePath = path.resolve(__dirname, 'productListData.json');

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());



// API endpoint to fetch all products
// app.get('/api/products', (req, res) => {
//     fs.readFile('./productListData.json', 'utf8', (err, data) => {
//         if (err) {
//             return res.status(500).send('Error reading file');
//         }
//         res.json(JSON.parse(data));
//     });
// });
////////////////////////////////////////////////
app.get('/api/products', (req, res) => {
    const page = parseInt(req.query.page) || 1; // Default to 1 if no page is provided
    const limit = parseInt(req.query.limit) || 10; // Default to 10 products per page
    const startIndex = (page - 1) * limit;
    
    fs.readFile('./productListData.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        const products = JSON.parse(data);
        const totalCount = products.length;
        const paginatedProducts = products.slice(startIndex, startIndex + limit); // Get 10 products for current page
        res.json({
            products: paginatedProducts,
            totalCount // Include total count in the response
        });
    });
});

// API endpoint to fetch a product by ID
app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    fs.readFile('./productListData.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        const products = JSON.parse(data);
        const product = products.find(p => p.id === productId);
        if (product) {
            res.json(product); // Send the product data as JSON
        } else {
            res.status(404).send('Product not found'); // Handle case if product is not found
        }
    });
});

// API endpoint to add a new product
app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    fs.readFile('./productListData.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        const products = JSON.parse(data);
        products.push(newProduct);
        fs.writeFile('./productListData.json', JSON.stringify(products, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing to file');
            }
            res.status(201).send('Product added successfully');
        });
    });
});

// API endpoint to update a product
app.put('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const updatedProduct = req.body;
    fs.readFile('./productListData.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        let products = JSON.parse(data);
        products = products.map((product) =>
            product.id === productId ? { ...product, ...updatedProduct } : product
        );
        fs.writeFile('./productListData.json', JSON.stringify(products, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing to file');
            }
            res.status(200).send('Product updated successfully');
        });
    });
});

// API endpoint to delete a product
app.delete('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    fs.readFile('./productListData.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        let products = JSON.parse(data);
        products = products.filter((product) => product.id !== productId);
        fs.writeFile('./productListData.json', JSON.stringify(products, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing to file');
            }
            res.status(200).send('Product deleted successfully');
        });
    });
});
app.use((req, res) => {
    res.status(404).json({ message: 'Endpoint not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

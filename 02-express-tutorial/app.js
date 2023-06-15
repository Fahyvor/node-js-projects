const express = require('express');
const app = express()
// const morgan = require('morgan')
// const { products } = require('./data')

// // app.get('/', (req,res) => {
// //     res.json(products)
// // })

// app.get('/', (req,res) => {
//     res.send('<h1> Home Page </h1><a href="/api/products">products</a>')
// })

// app.get('/api/products', (req,res) => {
//     const newProducts = products.map((product) => {
//         const {id,name,image} = product;
//         return {id,name,image}
//     })
//     res.json(newProducts)
// })

// app.get('/api/products/:productID', (req,res) => {
//     // console.log(req);
//     // console.log(req.params);
//     const { productID } = req.params;
//     const singleProduct = products.find(
//         (product) => 
//         product.id === Number(productID))

//         if(!singleProduct) {
//             return res.status(404).send('Product does not exist');
//         }
//     res.json(singleProduct)
// })

// app.get('/api/products/:productID/reviews/:reviewsID', (req,res)=>{
//     console.log(req.params);
//     res.send('Hello World');
// })

// app.get('/api/v1/query', (req,res)=>{
//     const { search, limit } = req.query
//     let sortedProducts = [...products]

//     if (search) {
//         sortedProducts = sortedProducts.filter((products) => {
//             return products.name.startsWith(search)
//         })
//     }
//     if(limit) {
//         sortedProducts = sortedProducts.slice(0,Number(limit))
//     }
//     if(sortedProducts.length < 1) {
//         // res.status(200).send('No products matched your search')
//         return res.status(200).json({ sucess: true, data: [] })
//     }

//     res.status(200).json(sortedProducts)
//     // res.send('Hello World')
// })

//MIDDLEWARES

//req => middleware => res

// const logger = require('./logger')
// const authorize = require('./authorize')
// // app.use([logger, authorize ])
// app.use(morgan('tiny'))
// // app.use(express.static('./public'))

// app.get('/', (req,res) => {
//     res.send('Home')
// })

// app.get('/about', (req,res) => {
//     res.send('About')
// })

// app.get('/api/products', (req,res) => {
//     res.send('Products')
// })

// app.get('/api/items', (req,res) => {
//     res.send('Items')
// })


const people = require('./routes/people')
const auth = require('./routes/auth')

//static assets
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({ extended: false}))
//parse json
app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)


// app.post('/api/postman/people', (req,res) => {
//     const {name} = req.body
// })


app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
})



// setup static and middleware
// app.use(express.static('./public'))

// app.get('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

// app.all('*', (req,res) => {
//     res.status(404).send('Resource not found')
//app.get('/', (req, res) => {
//     console.log('User hit the resource');
//     res.status(200).send('Home Page')
// })

// app.get('/about', (req, res) => {
//     res.status(200).send('About Page')
// })

// app.all('*', (req, res) => {
//     res.status(404).send('<h1>Resource not found</h1>')
// })
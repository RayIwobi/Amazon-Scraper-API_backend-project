const express = require('express')
const request = require('request-promise')
const cors = require('cors')
const PORT = process.env.PORT || 5000


const app = express()
app.use(express.json());

app.use(cors({
    origin: 'https://amazon-scrapert.vercel.app/'
}))

const apiKey = 'c9b89eaf2bb7b9ad606738ea8733996c';
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`

app.get('/', (req, res) => {
    res.send('Welcome To Amazon Scraper API')
})

//Get products details
app.get('/products/:searchQuesry', async(req, res) => {
    const {searchQuesry} = req.params

    try{
        const response = await request(`${baseUrl}&url=https://www.amazon.com/s?k=${searchQuesry}`);
        res.json(JSON.parse(response))

    }catch (error){
        res.json(error)

    }
})


//Get products reviews
app.get('/products/:searchQuery/reviews', async(req, res) => {
    const {searchQuery} = req.params

    try{
        const response = await request(`${baseUrl}&url=https://www.amazon.com/s?k=${searchQuery}/product-reviews/`);
        res.json(JSON.parse(response))

    }catch (error){
        res.json(error)

    }
})

//Get products offers
app.get('/products/:productId/offers', async(req, res) => {
    const {productId} = req.params

    try{
        const response = await request(`${baseUrl}&url=https://www.amazon.com/gp/offer-listing/${productId}`);
        res.json(JSON.parse(response))

    }catch (error){
        res.json(error)

    }
})

//Get search results
//app.get('/search/:searchQuery', async(req, res) => { //you can remove the search in front of the searchQuery to make it easy for users
app.get('/search/:searchQuery', async(req, res) => {
    const {searchQuery} = req.params

    try{
        const response = await request(`${baseUrl}&url=https://www.amazon.com/s?k=${searchQuery}`);
        res.json(JSON.parse(response))

    }catch (error){
        res.json(error)

    }
})


app.listen(PORT, () => {
    console.log('App running on Port', PORT)
})
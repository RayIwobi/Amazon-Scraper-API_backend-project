import scraperimage from './assets/web-scraper.png'
import './scraper.css'

function AmazonWebScraper() {

  return (
    <div className='container'>
        <div className='titleContainer'>
            <img src={scraperimage} alt='web-scraper' className='scraperimage'/>
            <h2>AMAZON SCRAPER API</h2>
        </div>
        <div className='siteInfo'>
            The Amazon Scraper API is a fast, reliable, and developer-friendly 
            REST API that allows you to easily extract real-time product information, 
            reviews, and search results directly from Amazon.

            Whether you’re building a price comparison tool, an e-commerce app, or a 
            product analytics dashboard, this API gives you the power to integrate live 
            Amazon data into your application in just a few lines of code.<br/><br/>

            🚀 Key Features<br/><br/>

            🔍 Product API<br/>
            Fetch detailed product information by simply providing the product name. 
            Instantly get title, images, pricing, description, ratings, and more.<br/><br/>

            <h4>Try it</h4>
            <div>Run this code here, in a console or from any site:</div><br/>

            <div className='productsection'>
                <div> 
                    <h4>If you want to search for a specific item/product</h4>
                In your browser/searchbar :<br/>
                http://localhost:5000/products/playstation 5 ,(or biodance, bobisuka etc)

                <h5>Note: you can change the playstation to biodance or any product name you want.</h5>
                </div>

                or in your app:

                <div>axios.get('http://localhost:5000/products/playstation 5')</div>
            </div>


            🧭 Search API<br/>
            Search for any product keyword and get structured search results including product 
            names, prices, and ratings—just like on Amazon, but ready for your app.<br/><br/>

           
            <h4>Try it</h4>
            <div>Run this code here, in a console or from any site:</div><br/>

            <div className='searchquery'>
                <div> 
                in your browser/searchbar :<br/>
                http://localhost:5000/search/shoes ,(or bags, phones etc)
                </div>

                or in your app:

                <div>axios.get('http://localhost:5000/search/shoes')</div>
            </div>

            ⭐ Review API<br/>
            Access authentic customer reviews and ratings for any product. Perfect for sentiment 
            analysis, review aggregation, or showcasing testimonials.<br/><br/>
        </div>
        <h4>Try it</h4>
        <div>Run this code here, in a console or from any site:</div><br/>

            <div className='reviewsection'>
                <div> 
                In your browser/searchbar :<br/>
                http://localhost:5000/products/shoes/reviews ,(or bags, phones etc)

                <h5>Note: you can change the shoes to any product name you want, then add reviews
                since we are trying to review the product.</h5>
                </div>

                or in your app:

                <div>axios.get('http://localhost:5000/products/shoes/reviews')</div>
            </div>

            <div className='whentouse'>
           
                <h2>When to use</h2>
                <p>
                Amazon Scraper API is a free online REST API that you can use to collect 
                json data from Amazon and use in your app if you need to generate real-time data from Amazon. 
            </p>
            </div>

            <div className='owner'>
                coded and maintained by Raymond: <a href='https://github.com/rayiwobi/Amazon-Scraper-API_backend-project'>Github</a>
            </div>
      
    </div>
  )
}

export default AmazonWebScraper

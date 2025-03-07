const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Base route
app.get("/", (req, res) => {
  res.send("Financial Helper API is running!");
});

// Financial News API endpoint
app.get("/api/news", async (req, res) => {
  try {
    // Get parameters from query string
    const { category = "general", items = 3 } = req.query;
    
    // Make request to financial news API
    // Using Alpha Vantage as an example
    const response = await axios.get("https://www.alphavantage.co/query", {
      params: {
        function: "NEWS_SENTIMENT",
        topics: category,
        limit: items,
        apikey: process.env.ALPHA_VANTAGE_API_KEY
      }
    });

    // Extract the news articles from the response
    const news = response.data.feed || [];
    
    // Return formatted news data
    res.json({
      success: true,
      count: news.length,
      data: news.map(article => ({
        title: article.title,
        summary: article.summary,
        url: article.url,
        source: article.source,
        publishedAt: article.time_published,
        sentiment: article.overall_sentiment_label,
        image: article.banner_image || null
      }))
    });
    
  } catch (error) {
    console.error("Error fetching financial news:", error.message);
    res.status(500).json({ 
      success: false, 
      error: "Failed to fetch financial news",
      message: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// News by symbol API endpoint
app.get("/api/news/symbol/:symbol", async (req, res) => {
  try {
    const symbol = req.params.symbol;
    
    // Validate input
    if (!symbol) {
      return res.status(400).json({
        success: false,
        error: "Stock symbol is required"
      });
    }
    
    // Make request to Alpha Vantage API for symbol-specific news
    const response = await axios.get("https://www.alphavantage.co/query", {
      params: {
        function: "NEWS_SENTIMENT",
        tickers: symbol,
        limit: 10,
        apikey: process.env.ALPHA_VANTAGE_API_KEY
      }
    });

    // Extract the news articles from the response
    const news = response.data.feed || [];
    
    // Return formatted news data
    res.json({
      success: true,
      symbol,
      count: news.length,
      data: news.map(article => ({
        title: article.title,
        summary: article.summary,
        url: article.url,
        source: article.source,
        publishedAt: article.time_published,
        sentiment: article.overall_sentiment_label,
        image: article.banner_image || null,
        tickerSentiment: article.ticker_sentiment?.find(t => t.ticker === symbol)
      }))
    });
    
  } catch (error) {
    console.error(`Error fetching news for symbol ${req.params.symbol}:`, error.message);
    res.status(500).json({ 
      success: false, 
      error: "Failed to fetch symbol news",
      message: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

This is the Spindletop Portfolio Tracking Application for [Spindletop Energy Investment Fund](https://www.smuspindletop.com/)

# Welcome

The Spindletop Energy Investment Fund members faced challenges accessing a daily portfolio view of the fund. The need for a more efficient, transparent, and user-friendly solution led to the creation of this portfolio tracker. Our goal is to provide real-time insights and comprehensive management tools for tracking and analyzing investments within the fund.

Previously, members struggled with limited access to up-to-date portfolio data. This tracker aims to offer a seamless, user-friendly interface that provides easy access to daily portfolio information.

By centralizing and updating portfolio data in real-time, the tracker enhances transparency and ensures all members have consistent and accurate information.

With comprehensive insights and analytics, the tracker supports informed decision-making by providing detailed performance metrics and historical data.

The tracker simplifies portfolio management, allowing members to view holdings, track performance, and make adjustments more efficiently.

Our mission is to deliver a tool that meets the evolving needs of the fund, improves operational efficiency, and supports the strategic goals of the Spindletop Energy Investment Fund.

# Tech Stack
- Next.js
- Tailwind CSS
- Shadcn
- Supabase
- Prisma

API Endpoints
- [Yahoo Finance](https://github.com/gadicc/node-yahoo-finance2)

# Development

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


# API Documentation

## Endpoints

### 1. Fetch All Assets/Stocks in Holdings

- **Endpoint:** `/api/assets/holdings`
- **Method:** `GET`
- **Description:** Retrieves a list of all assets/stocks currently in holdings.

#### Example Request
```http
GET /api/assets/holdings

[
  {
    "symbol": "AAPL",
    "name": "Apple Inc.",
    "quantity": 10
  },
  {
    "symbol": "MSFT",
    "name": "Microsoft Corp.",
    "quantity": 5
  }
]

```

### 2. Fetch a Specific Asset/Stock

- **Endpoint:** `/api/assets`
- **Method:** `GET`
- **Query Parameter symbol (string):** `The ticker symbol of the stock to retrieve.`
- **Description:** Retrieves detailed information about a specific asset/stock based on the provided symbol.

#### Example Request
```http
GET /api/assets?symbol=AAPL

{
  "symbol": "AAPL",
  "name": "Apple Inc.",
  "price": 150.00,
  "quantity": 10
}

```

### 3. Get a List of Top Gainers/Top Sellers

- **Endpoint:** `/api/assets/dailg-gainers`
- **Method:** `GET`
- **Description:** Retrieves a list of daily gainers based on performance metrics.

#### Example Request
```http
GET /api/assets/daily-gainers

[
  {
    "symbol": "TSLA",
    "name": "Tesla Inc.",
    "gain": 20.5
  },
  {
    "symbol": "AMZN",
    "name": "Amazon.com Inc.",
    "gain": 15.3
  }
]

```


# Deployment

The app is deployed on Next.js app, using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
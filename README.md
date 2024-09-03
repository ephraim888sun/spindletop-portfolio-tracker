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

Check out **`.env.example`** to configure environment variables.

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



# Database Schema Design

## Overview

The database schema for this project is designed to manage and track organizations, stocks, transactions, and error logs. The schema aims to provide a comprehensive structure for handling stock portfolios and related operations efficiently.

## Schema Tables

### 1. Organization Table

- **`id`**: A unique identifier for each organization. This is an auto-incrementing integer.
- **`name`**: The name of the organization. This field must be unique to prevent duplication.
- **`createdAt`**: Timestamp for when the organization was created. Automatically set to the current date and time.
- **`updatedAt`**: Timestamp for when the organization was last updated. Automatically updated whenever changes are made.
- **`stocks`**: A one-to-many relationship with the `Stock` table, indicating that an organization can have multiple stocks.

### 2. Stock Table

- **`id`**: A unique identifier for each stock. This is an auto-incrementing integer.
- **`ticker`**: The stock ticker symbol, which is unique for each stock.
- **`symbol`**: A unique symbol representing the stock.
- **`initialPrice`**: The price at which the stock was initially bought.
- **`dateBought`**: The date when the stock was purchased.
- **`organizationId`**: Foreign key linking to the `Organization` table, indicating which organization the stock belongs to.
- **`organization`**: A many-to-one relationship with the `Organization` table.
- **`transactions`**: A one-to-many relationship with the `Transaction` table, representing the transactions associated with the stock.

### 3. Transaction Table

- **`id`**: A unique identifier for each transaction. This is an auto-incrementing integer.
- **`stockId`**: Foreign key linking to the `Stock` table, indicating which stock the transaction is associated with.
- **`stock`**: A many-to-one relationship with the `Stock` table.
- **`quantity`**: The number of shares involved in the transaction.
- **`price`**: The price at which the stock was bought or sold.
- **`date`**: The date when the transaction occurred.
- **`type`**: Enum indicating the type of transaction. Possible values are `BUY` and `SELL`.


### 4. ErrorLog Table

- **`id`**: A unique identifier for each error log entry. This is an auto-incrementing integer.
- **`errorDate`**: Timestamp for when the error occurred. Automatically set to the current date and time.
- **`errorMessage`**: Description of the error encountered.
- **`errorIdentifier`**: Unique identifier for the error to track and manage errors efficiently.

## Additional Details

- **`TransactionType` Enum**: Defines the possible types of transactions (`BUY` and `SELL`) to categorize the nature of each transaction.
- **Relationships**: The schema uses foreign key relationships to link `Stock` with `Organization` and `Transaction` with `Stock`, ensuring referential integrity and enabling efficient querying.

## Rationale

The schema is designed to provide a clear and structured approach to managing stock portfolios. By including timestamps (`createdAt`, `updatedAt`, and `errorDate`), it facilitates tracking and auditing changes. Relationships between tables help maintain data integrity and allow for efficient data retrieval and management.

This design supports the core functionalities needed for portfolio tracking and error logging, ensuring that all relevant data is captured and can be queried effectively.



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
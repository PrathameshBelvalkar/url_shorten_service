# [URL Shortening Service](https://roadmap.sh/projects/url-shortening-service)

## Overview

The URL Shortening Service is a RESTful API that allows users to create, retrieve, update, delete, and get statistics for shortened URLs. This service is built using Node.js, Express, and MongoDB.

## Features

- Create a new short URL
- Retrieve the original URL from a short URL
- Update an existing short URL
- Delete an existing short URL
- Get statistics on the short URL (e.g., number of times accessed)

## API Endpoints

### Create Short URL

**POST** `/api/shorten`

Request Body:

```json
{
  "url": "https://www.example.com/some/long/url"
}
```

Response:

```json
{
  "id": "1",
  "url": "https://www.example.com/some/long/url",
  "shortCode": "abc123",
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:00:00Z"
}
```

### Retrieve Original URL

**GET** `/api/shorten/:shortCode`

Response:

```json
{
  "id": "1",
  "url": "https://www.example.com/some/long/url",
  "shortCode": "abc123",
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:00:00Z"
}
```

### Update Short URL

**PUT** `/api/shorten/:shortCode`

Request Body:

```json
{
  "url": "https://www.example.com/some/updated/url"
}
```

Response:

```json
{
  "id": "1",
  "url": "https://www.example.com/some/updated/url",
  "shortCode": "abc123",
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:30:00Z"
}
```

### Delete Short URL

**DELETE** `/api/shorten/:shortCode`

Response:

- 204 No Content

### Get URL Statistics

**GET** `/api/shorten/:shortCode/stats`

Response:

```json
{
  "id": "1",
  "url": "https://www.example.com/some/long/url",
  "shortCode": "abc123",
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:00:00Z",
  "accessCount": 10
}
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/PrathameshBelvalkar/url_shorten_service.git
   cd url_shorten_service
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a .env file in the root directory and add the following environment variables:

   ```env
   PORT=5000
   DATABASE_URL=mongodb://0.0.0.0:27017/url_shortner
   ```

4. Start the server:
   ```sh
   npm run dev
   ```

The server will be running at `http://localhost:5000`.

## Usage

You can use Postman or any other API client to interact with the API. Import the provided Postman collection to get started quickly. The Postman collection file is named [url_shortner.postman_collection.json](./url_shortner.postman_collection.json) and is located in the root directory of the project.

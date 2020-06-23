### Backend for Tweeter - a twitter-lite clone
This project uses Node and Express to create two endpoints for retrieving and creating tweets. Tweets are stored in MongoDB via Mongoose.
- GET `/api/tweets/` returns an array of all tweet objects
- POST `/api/tweets/` saves the new tweet object in the database and returns the saved object

## Installation
1. Clone repo
2. Install dependencies via `npm install`
3. Add an `.env` file with your *PROD_MONGODB_URI* and *PORT* variables
4. Start server via `npm run start`
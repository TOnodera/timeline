require('dotenv').config();
const baseUrl = process.env.NODE_ENV === "prod" ? process.env.WEB_SERVER_URL : "http://localhost:3000";

export { baseUrl };
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://NaSilvaNick:NickGab011120@api-node-livraria.uwteu.mongodb.net/api-node-livraria");

const db = mongoose.connection;

export default db;
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://NaSilvaNick:NickGab011120@api-node-livraria.uwteu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

const db = mongoose.connection;

export default db;
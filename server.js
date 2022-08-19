const http=require('http');
const mongoose=require('mongoose');
const app= require('./app');
const PORT=process.env.PORT|| 8000;
const MONGO_URL='mongodb+srv://gal:gal963963@cluster0.bly5g4s.mongodb.net/?retryWrites=true&w=majority';
const server = http.createServer(app);

mongoose.connection.once('open',()=>{
    console.log('MongoDB connectin ready!');
});
mongoose.connection.on('error',(err)=>{
    console.error(err);
});
async function startServer(){
    await  mongoose.connect(MONGO_URL);
    server.listen(PORT,()=>{
        console.log(`Listening on ${PORT}...`);
    });
}

startServer()
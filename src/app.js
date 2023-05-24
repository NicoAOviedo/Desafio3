import express from 'express';


const app = express();


const products =
[
{title:"prod1",description:"descrip1",price:30,thumbnail:"thumb1",code:101,stock:8,id:"1"},
{title:"prod2",description:"descrip2",price:55,thumbnail:"thumb2",code:102,stock:58,id:"2"},
{title:"prod3",description:"descrip3",price:75,thumbnail:"thumb3",code:103,stock:20,id:"3"},
{title:"prod4",description:"descrip4",price:100,thumbnail:"thumb4",code:104,stock:34,id:"4"},
{title:"prod5",description:"descrip5",price:71,thumbnail:"thumb5",code:201,stock:674,id:"5"},
{title:"prod6",description:"descrip6",price:91,thumbnail:"thumb6",code:202,stock:356,id:"6"},
{title:"prod7",description:"descrip7",price:88,thumbnail:"thumb7",code:203,stock:13,id:"7"},
{title:"prod8",description:"descrip8",price:106,thumbnail:"thumb8",code:204,stock:435,id:"8"},
{title:"prod9",description:"descrip9",price:205,thumbnail:"thumb9",code:301,stock:876,id:"9"},
{title:"prod10",description:"descrip10",price:5,thumbnail:"thumb10",code:302,stock:23,id:"10"},
]



app.get('/products/:idProduct',(req,res)=>{
    let idProduct = req.params.idProduct;
    let product = products.find(u=>u.id===idProduct);
    if(!product) return res.send({error:"No existe ese producto"})
    
    res.send({product})
})
app.get('/products',(req,res)=>{
    let limit = req.query.limit;
    if(!limit|| limit > products.length) return res.send({products})
    let limitador = products.slice(0,limit);
    res.send({limitador})
})


app.listen(8080,()=>{
    console.log('servidor escuchando en el puerto 8080')
})
import express from 'express';

const app=express();
app.get('/api/products', (req,res)=>{
    const products=[
        {id:1,name:'product1'},
        {id:2,name:'product2'},
        {id:3,name:'product3'},
        ];
      if(req.query.search){
        const filterProducts = products.filter(product =>
            product.name.includes(req.quesry.search)
        )
        res.send(filterProducts);
        return;
      }
        

        setTimeout(()=>{ 
            res.send(products);
        }, 3000);
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{

    console.log(`SERVER RUNNING ON PORT ${port}`);
});

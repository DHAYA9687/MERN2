console.log("HELLO WORLD")
console.log("good moorniing")
const express = require('express')
const app =express();
app.get('/',firstRoute)
app.get('/second',secondRoute)
app.get('/third',thirdRoute)
NOTES=[
    {
       "id":1,
       "title":"this is 1st node"
    },
    {
       "id":2,
       "title":"this is node2"
    }
]
app.get('/notes',(req,res)=>{
    res.send(NOTES)
}
)
app.get('/notes/:id',(req,res)=>{
    const id = req.params.id ;
    for(var i=0;i<NOTES.length;i++){
        if(NOTES[i].id == id){
            res.send(NOTES[i]);
        }
        
    }
    
})



app.get('/dynamic/:id',dynamicRoute)
function firstRoute(req,res)
{
    res.send("hello world")
}
function secondRoute(req,res)
{
    res.send("DHAYA")
}
function thirdRoute(req,res){
    res.send("Gowtham")
}
function dynamicRoute(req,res)
{
    const id =req.params.id
    res.send(id);
}
app.listen(2000)
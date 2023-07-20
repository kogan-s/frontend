const API_URL = "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521"

const fetchData = async function(){
    await $.get(API_URL, function(res){
        console.log(res.items[0])
    })
}






const fetchDatum = async function (surname) {
    let data = await Person.find({lastName: surname})
    console.log(data)
}
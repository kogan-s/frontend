const data = $("div").data()
console.log("Item with barcode " + data.barcode + " will expire on " + data.expirationdate) //notice how we use expirationdate, even though in the HTML it's expirationDate

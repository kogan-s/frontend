const fetch = function (queryType, queryValue) {
    let url;
    if (queryType === "isbn") {
        url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${queryValue}`;
    } else if (queryType === "title") {
        url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${queryValue}`;
    } else {
        console.log("Invalid query type.");
        return;
    }

    $.ajax({
        method: "GET",
        url: url,
        success: function (data) {
            console.log(data)
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}


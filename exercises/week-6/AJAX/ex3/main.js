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
            data.items.forEach(function (book) {
                const title = book.volumeInfo.title;
                const author = book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown Author";
                const isbn = book.volumeInfo.industryIdentifiers ? book.volumeInfo.industryIdentifiers[0].identifier : "ISBN not available";

                console.log("Title:", title);
                console.log("Author:", author);
                console.log("isbn:", isbn);
                console.log("==========");
            });
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}


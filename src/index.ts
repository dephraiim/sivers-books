import { load } from "cheerio";

type Book = {
  title: string;
  recommendationRating: number;
  notesUrl: string;
};

async function getBookDetails(url: string) {
  try {
    // Fetch the webpage using Bun's native fetch
    const response = await fetch(url);
    const html = await response.text();

    // Load the HTML into cheerio
    const $ = load(html);

    // Array to hold the book details
    let books: Book[] = [];

    // Loop through each book element
    $(".abook").each((index: any, element: any) => {
      let book: Book = {
        title: "",
        recommendationRating: 0,
        notesUrl: "",
      };

      // Get the title from the data-title attribute
      book.title = $(element).attr("data-title") || "";
      book.notesUrl =
        "https://sive.rs" + $(element).find("a[href^='/book']").attr("href") ||
        "";

      // Get the rating from the data-rating attribute
      let rating = $(element).attr("data-rating");
      if (rating) {
        book.recommendationRating = parseInt(rating, 10);
      }

      // Only add the book object to the books array if both title and rating were found
      if (book.title && book.recommendationRating != null) {
        books.push(book);
      }
    });

    return books;
  } catch (error) {
    console.error("Error:", error);
  }
}

// URL of the webpage to scrape
const url = "https://sive.rs/book";

getBookDetails(url).then((books) => {
  const filePath = "books.json";

  Bun.write(filePath, JSON.stringify(books, null, 2))
    .then((bytesWritten) => {
      console.log(`Book details written to books.json (${bytesWritten} bytes)`);
    })
    .catch((error) => {
      console.error("Error writing to file:", error);
    });
});

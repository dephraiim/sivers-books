type Book = {
  title: string;
  recommendationRating: number;
};

async function createMarkdown() {
  try {
    // Read the JSON file using Bun
    const file = Bun.file("books.json");
    const books: Book[] = await file.json();

    // Filter books with a recommendation rating of 5 or higher
    const recommendedBooks = books.filter(
      (book) => book.recommendationRating >= 5
    );

    const title = "## Derek Sivers Recommended Books\n\n";
    const markdown =
      title + recommendedBooks.map((book) => `* ${book.title}`).join("\n");

    // Write to a Markdown file using Bun
    await Bun.write("readme.md", markdown);
    console.log("Recommended book titles written to readme.md");
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the function to create the Markdown file
createMarkdown();

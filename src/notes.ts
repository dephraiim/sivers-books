import { load } from "cheerio";

async function createMarkdownFiles() {
  try {
    const file = Bun.file("books.json");
    const books = await file.json(); // read and parse books data from books.json

    for (const book of books) {
      const response = await fetch(book.notesUrl);
      const html = await response.text();
      const $ = load(html);

      const description = $("#booksummary").text().trim();
      const notesElement = $("#booknotes").html();
      const notes = notesElement
        ? notesElement.trim().replace(/<br \/>/g, "\n")
        : "";

      const markdown = `## ${book.title}
> Recommendation: ${book.recommendationRating} / 10
    
### Description
${description}
    
### Notes
${notes}
`;

      const fileName =
        "notes/" +
        (parseInt(books.indexOf(book)) + 1).toString() +
        "-" +
        book.notesUrl.split("/").pop() +
        ".md";
      await Bun.write(fileName, markdown).then((bytesWritten) => {
        console.log(
          `Book notes written to ${fileName} (${bytesWritten} bytes)`
        );
      });
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

createMarkdownFiles();

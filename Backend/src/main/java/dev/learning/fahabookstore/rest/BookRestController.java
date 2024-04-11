package dev.learning.fahabookstore.rest;

import dev.learning.fahabookstore.dto.BookDto;
import dev.learning.fahabookstore.entity.Book;
import dev.learning.fahabookstore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class BookRestController {
    private BookService bookService;

    @Autowired
    public BookRestController(BookService bookService) {
        this.bookService = bookService;
    }

    // POST request at /api/v1/books
    @PostMapping("/books")
    public BookDto addBook(@RequestBody Book theBook) {
        return bookService.save(theBook);
    }

    // GET request at /api/v1/books
    @GetMapping("/books")
    public List<BookDto> getBooks() {
        return bookService.findAll();
    }

    // GET request at /api/v1/books/{id}
    @GetMapping("/books/{id}")
    public BookDto getBook(@PathVariable int id) {
        return bookService.findById(id);
    }

    // PATCH request at /api/v1/books/{id}
    @PatchMapping("/books/{id}")
    public BookDto updateBook(@PathVariable int id, @RequestBody Book theBook) {
        bookService.findById(id);
        theBook.setId(id);
        return bookService.save(theBook);
    }

    // DELETE request to "/api/v1/books/{id}
    @DeleteMapping("/books/{id}")
    public void deleteBook(@PathVariable int id) {
        bookService.deleteById(id);
    }
}

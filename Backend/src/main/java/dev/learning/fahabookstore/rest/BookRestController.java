package dev.learning.fahabookstore.rest;

import dev.learning.fahabookstore.dto.BookDto;
import dev.learning.fahabookstore.entity.Book;
import dev.learning.fahabookstore.service.BookService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class BookRestController {
    private BookService bookService;
    private ModelMapper modelMapper;

    @Autowired
    public BookRestController(BookService bookService, ModelMapper modelMapper) {
        this.bookService = bookService;
        this.modelMapper = modelMapper;
    }

    // POST request to "/api/v1/books
    @PostMapping("/books")
    public BookDto addBook(@RequestBody Book theBook) {
        Book book = bookService.save(theBook);
        return modelMapper.map(book, BookDto.class);
    }

    // GET request to /api/v1/books
    @GetMapping("/books")
    public List<BookDto> getBooks() {
        List<Book> bookList = bookService.findAll();
        List<BookDto> bookDtoList =new ArrayList<>();
        for (Book book:bookList) {
            // Model mapper
            BookDto bookDto = modelMapper.map(book, BookDto.class);
            bookDtoList.add(bookDto);
        }
        return bookDtoList;
    }

    // GET request to /api/v1/books/{bookId}
    @GetMapping("/books/{bookId}")
    public BookDto getBook(@PathVariable int bookId) {
        Book book = bookService.findById(bookId);
        return modelMapper.map(book, BookDto.class);
    }

    // PUT request to /api/v1/books/{bookId}
    @PatchMapping("/books/{bookId}")
    public BookDto updateBook(@PathVariable int bookId, @RequestBody Book theBook) {
        bookService.findById(bookId);
        theBook.setId(bookId);
        Book dbBook = bookService.save(theBook);
        return modelMapper.map(dbBook, BookDto.class);
    }

    // DELETE request to /api/v1/books/{bookId}
    @DeleteMapping("/books/{bookId}")
    public void deleteBook(@PathVariable int bookId) {
        Book book = bookService.findById(bookId);
        bookService.delete(book);
    }
}

package dev.learning.fahabookstore.service;

import dev.learning.fahabookstore.dto.BookDto;
import dev.learning.fahabookstore.entity.Book;

import java.util.List;

public interface BookService {
    BookDto save(Book theBook);

    List<BookDto> findAll();

    BookDto findById(int id);

    void deleteById(int id);
}

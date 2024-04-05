package dev.learning.fahabookstore.service;

import dev.learning.fahabookstore.entity.Book;

import java.util.List;

public interface BookService {
    Book save(Book theBook);

    List<Book> findAll();

    Book findById(int theId);

    void delete(Book theBook);
}

package dev.learning.fahabookstore.service;

import dev.learning.fahabookstore.entity.Book;
import dev.learning.fahabookstore.exception.ResourceNotFoundException;
import dev.learning.fahabookstore.repository.BookRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImplement implements BookService {
    private BookRepository bookRepository;

    @Autowired
    public BookServiceImplement(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    @Transactional
    public Book save(Book theBook) {
        return bookRepository.save(theBook);
    }

    @Override
    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    @Override
    public Book findById(int theId) {
        Optional<Book> result = bookRepository.findById(theId);
        Book book = null;
        if (result.isPresent()) {
           book  = result.get();
        }
        else {
            throw new ResourceNotFoundException("Cannot find book with id: " + theId);
        }
        return book;
    }

    @Override
    @Transactional
    public void delete(Book theBook) {
        bookRepository.delete(theBook);
    }
}

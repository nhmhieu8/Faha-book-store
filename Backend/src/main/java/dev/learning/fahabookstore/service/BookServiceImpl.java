package dev.learning.fahabookstore.service;

import dev.learning.fahabookstore.dto.BookDto;
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
public class BookServiceImpl implements BookService {
    private BookRepository bookRepository;
    private ModelMapper modelMapper;

    @Autowired
    public BookServiceImpl(BookRepository bookRepository, ModelMapper modelMapper) {
        this.bookRepository = bookRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    @Transactional
    public BookDto save(Book theBook) {
        Book dbBook = bookRepository.save(theBook);
        return modelMapper.map(dbBook, BookDto.class);
    }

    @Override
    public List<BookDto> findAll() {
        List<Book> books = bookRepository.findAll();
        return books.stream()
                .map(book -> modelMapper.map(book, BookDto.class))
                .toList();
    }

    @Override
    public BookDto findById(int id) {
        Optional<Book> result = bookRepository.findById(id);
        if (result.isPresent()) return modelMapper.map(result.get(), BookDto.class);
        throw new ResourceNotFoundException("Cannot find book with id: " + id);
    }

    @Override
    @Transactional
    public void deleteById(int id) {
        Optional<Book> result = bookRepository.findById(id);
        if (result.isPresent()) bookRepository.deleteById(id);
        else throw new ResourceNotFoundException("Cannot find book with id: " + id);
    }
}

package dev.learning.fahabookstore.repository;

import dev.learning.fahabookstore.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Integer> {
}

package dev.learning.fahabookstore.dto;

import dev.learning.fahabookstore.entity.*;
import jakarta.persistence.*;

import java.util.Date;
import java.util.Set;

public class BookDto {
    private Integer pageNumber;
    private Date publicationDate;
    private CoverForm coverForm;
    private Product productInfo;
    private Publisher publisher;
    private Genre genre;
    private Language language;
    private Set<Author> authors;
}

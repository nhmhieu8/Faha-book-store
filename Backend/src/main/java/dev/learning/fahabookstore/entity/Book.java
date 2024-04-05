package dev.learning.fahabookstore.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "book")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "title")
    private String title;
    @Column(name = "page_number")
    private Integer pageNumber;
    @Column(name = "publication_date")
    private Date publicationDate;
    @Column(name = "description")
    private String description;
    @Column(name = "price")
    private Double price;
    @Column(name = "remain_quantity")
    private Integer remainQuantity;
    @ManyToOne
    @JoinColumn(name="publisher_id", nullable=false)
    private Publisher publisher;
    @ManyToOne
    @JoinColumn(name="genre_id", nullable=false)
    private Genre genre;
    @OneToMany(mappedBy = "book")
    private Set<BookInvoice> bookInvoices;
    @ManyToMany
    @JoinTable(
            name = "book_author",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "author_id"))
    private Set<Author> authors;
}

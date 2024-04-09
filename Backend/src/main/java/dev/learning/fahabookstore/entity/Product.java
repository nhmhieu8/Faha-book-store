package dev.learning.fahabookstore.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "name", nullable = false)
    private String productName;
    @Column(name = "price", nullable = false)
    private Double price;
    @Column(name = "packaging_size_1")
    private Double packagingSize1;
    @Column(name = "packaging_size_2")
    private Double packagingSize2;
    @Column(name = "packaging_size_3")
    private Double packagingSize3;
    @Column(name = "weight")
    private Double weight;
    @Column(name = "description")
    private String description;
    @Column(name = "quantity_in_stock", nullable = false)
    private Integer quantityInStock;
    @Column(name = "product_type", nullable = false)
    @Enumerated(EnumType.STRING)
    private ProductType productType;
    @OneToMany(mappedBy = "product")
    private Set<ProductInvoice> productInvoices;
    @OneToOne(mappedBy = "productInfo")
    @JoinColumn(name = "book_id")
    private Book book;
    @OneToOne(mappedBy = "productInfo")
    @JoinColumn(name = "stationery_id")
    private Stationery stationery;
}


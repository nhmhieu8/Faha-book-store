package dev.learning.fahabookstore.dto;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class BookDto {
    private Integer id;
    private String title;
    private Integer pageNumber;
    private Date publicationDate;
    private String description;
    private Double price;
    private Integer remainQuantity;
}

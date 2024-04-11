package dev.learning.fahabookstore.dto;

import dev.learning.fahabookstore.entity.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BookDto {
    private Integer pageNumber;
    private Date publicationDate;
    private CoverForm coverForm;
}

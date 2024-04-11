package dev.learning.fahabookstore.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ResourceErrorResponse {
    private int status;
    private String message;
    private long errorTime;
}

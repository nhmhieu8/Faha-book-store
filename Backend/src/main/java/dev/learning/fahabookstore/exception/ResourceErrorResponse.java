package dev.learning.fahabookstore.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResourceErrorResponse {
    private int status;
    private String message;
    private long errorTime;
}

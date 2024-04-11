package dev.learning.fahabookstore.exception;

public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String errorMessage) {
        super(errorMessage);
    }

    public ResourceNotFoundException(Throwable cause) {
        super(cause);
    }

    public ResourceNotFoundException(String errorMessage, Throwable cause) {
        super(errorMessage, cause);
    }
}

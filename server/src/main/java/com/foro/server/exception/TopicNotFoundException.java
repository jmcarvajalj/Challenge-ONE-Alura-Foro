package com.foro.server.exception;

public class TopicNotFoundException extends RuntimeException {

    public TopicNotFoundException(Long id){
        super("Could not find topic with id " + id);
    }

}

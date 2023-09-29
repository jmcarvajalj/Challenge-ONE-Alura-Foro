package com.foro.server.controller;

import com.foro.server.model.Topic;
import com.foro.server.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TopicController {

    @Autowired
    private TopicRepository topicRepository;

    @PostMapping("/topicos")
    Topic newTopic(@RequestBody Topic newTopic){
        return topicRepository.save(newTopic);
    }

    @GetMapping("/topicos")
    List<Topic> getAllTopics(){
        return topicRepository.findAll();
    }
}

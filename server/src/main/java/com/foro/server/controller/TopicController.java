package com.foro.server.controller;

import com.foro.server.exception.TopicNotFoundException;
import com.foro.server.model.Topic;
import com.foro.server.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
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

    @GetMapping("/topicos/{id}")
    Topic getTopicById(@PathVariable Long id){
        return topicRepository.findById(id)
                .orElseThrow(() -> new TopicNotFoundException(id));
    }

    @PutMapping("/topicos/{id}")
    Topic updateTopic(@RequestBody Topic newTopic, @PathVariable Long id) {
        return topicRepository.findById(id)
                .map(topic -> {
                    topic.setAutor(newTopic.getAutor());
                    topic.setCurso(newTopic.getCurso());
                    topic.setEstatus(newTopic.getEstatus());
                    topic.setMensaje(newTopic.getMensaje());
                    topic.setTitulo(newTopic.getTitulo());
                    return topicRepository.save(topic);
                }).orElseThrow(() -> new TopicNotFoundException(id));
    }

    @DeleteMapping("/topicos/{id}")
    String deleteTopic(@PathVariable Long id){
        if(!topicRepository.existsById(id)){
            throw new TopicNotFoundException(id);
        }
        topicRepository.deleteById(id);
        return "Topic with id " + id + " has been succesfully deleted";
    }

}

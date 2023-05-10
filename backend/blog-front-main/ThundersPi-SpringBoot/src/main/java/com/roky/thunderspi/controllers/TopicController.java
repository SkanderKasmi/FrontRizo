package com.roky.thunderspi.controllers;



import com.roky.thunderspi.entities.Topic;
import com.roky.thunderspi.repositories.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8089/api/topics")
@RestController
@RequestMapping("/api")
public class TopicController {

@Autowired
TopicRepository topicRepository;

	@GetMapping("/topics")
	public ResponseEntity<List<Topic>> getAllTopics(@RequestParam(required = false) String title) {
		try {
			List<Topic> topics = new ArrayList<Topic>();

			if (title == null)
				topicRepository.findAll().forEach(topics::add);
			else
				topicRepository.findByTitleContaining(title).forEach(topics::add);

			if (topics.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(topics, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/topics/{id}")
	public ResponseEntity<Topic> getTopicById(@PathVariable("id") long id) {
		Optional<Topic> topicData = topicRepository.findById(id);

		if (topicData.isPresent()) {
			return new ResponseEntity<>(topicData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/topics")
	public ResponseEntity<Topic> createTopic(@RequestBody Topic topic) {
		try {
			Topic _topic = topicRepository
					.save(new Topic(topic.getTitle(), topic.getDescription(), false));
			return new ResponseEntity<>(_topic, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/topics/{id}")
	public ResponseEntity<Topic> updateTopic(@PathVariable("id") long id, @RequestBody Topic topic) {
		Optional<Topic> topicData = topicRepository.findById(id);

		if (topicData.isPresent()) {
			Topic _topic = topicData.get();
			_topic.setTitle(topic.getTitle());
			_topic.setDescription(topic.getDescription());
			_topic.setPublished(topic.isPublished());
			return new ResponseEntity<>(topicRepository.save(_topic), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/topics/{id}")
	public ResponseEntity<HttpStatus> deleteTopic(@PathVariable("id") long id) {
		try {
			topicRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/topics")
	public ResponseEntity<HttpStatus> deleteAllTopics() {
		try {
			topicRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping("/topics/published")
	public ResponseEntity<List<Topic>> findByPublished() {
		try {
			List<Topic> topics = topicRepository.findByPublished(true);

			if (topics.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(topics, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}

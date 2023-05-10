package com.roky.thunderspi.services;


import com.roky.thunderspi.entities.Topic;

import java.util.List;

public interface TopicServicee {
    List<Topic> getAllTopics(String title);

    Topic getTopicById(long id);

    Topic createTopic(Topic topic);

    Topic updateTopic(long id, Topic topic);

    void deleteTopic(long id);

    void deleteAllTopics();

    List<Topic> findPublishedTopics();
}

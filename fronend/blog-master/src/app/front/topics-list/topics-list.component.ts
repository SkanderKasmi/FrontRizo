import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/models/topic.model';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.css']
})
export class TopicsListComponent implements OnInit {

  topics?: Topic[];
  currentTopic: Topic = {};
  currentIndex = -1;
  title = '';

  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    this.retrieveTopics();
  }

  retrieveTopics(): void {
    this.topicService.getAll()
      .subscribe({
        next: (data) => {
          this.topics = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveTopics();
    this.currentTopic = {};
    this.currentIndex = -1;
  }

  setActiveTopic(topic: Topic, index: number): void {
    this.currentTopic = topic;
    this.currentIndex = index;
  }

  removeAllTopics(): void {
    this.topicService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentTopic = {};
    this.currentIndex = -1;

    this.topicService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.topics = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}

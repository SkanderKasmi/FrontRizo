import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/models/topic.model';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent implements OnInit {

  topic: Topic = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
  }

  saveTopic(): void {
    const data = {
      title: this.topic.title,
      description: this.topic.description
    };

    this.topicService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTopic(): void {
    this.submitted = false;
    this.topic = {
      title: '',
      description: '',
      published: false
    };
  }

}

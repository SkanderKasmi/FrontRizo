import { Component, Input, OnInit } from '@angular/core';
import { TopicService } from 'src/app/services/topic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Topic } from 'src/app/models/topic.model';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentTopic: Topic = {
    title: '',
    description: '',
    published: false
  };

  message = '';

  constructor(
    private topicService: TopicService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTopic(this.route.snapshot.params["id"]);
    }
  }

  getTopic(id: string): void {
    this.topicService.get(id)
      .subscribe({
        next: (data) => {
          this.currentTopic = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentTopic.title,
      description: this.currentTopic.description,
      published: status
    };

    this.message = '';

    this.topicService.update(this.currentTopic.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentTopic.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updateTopic(): void {
    this.message = '';

    this.topicService.update(this.currentTopic.id, this.currentTopic)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This topic was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteTopic(): void {
    this.topicService.delete(this.currentTopic.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/topics']);
        },
        error: (e) => console.error(e)
      });
  }

}

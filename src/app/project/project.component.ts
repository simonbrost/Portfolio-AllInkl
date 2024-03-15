import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project =
    {
      name: "Join",
      tools: "JavaScript|HTML|CSS",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      img: "join.png",
      github: "https://github.com/simonbrost/JOIN",
      demo: "",
    };
}

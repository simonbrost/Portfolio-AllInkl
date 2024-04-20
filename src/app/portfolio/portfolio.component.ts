import { Component, inject } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { CommonModule } from '@angular/common';
import { ProjectlistService } from '../projectlist.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

projectdata = inject(ProjectlistService)

isOdd(num: number): boolean {
  return num % 2 !== 0;
}

}

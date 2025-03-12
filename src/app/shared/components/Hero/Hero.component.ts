import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './Hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent { }

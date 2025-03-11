import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hero-app',
  imports: [],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent { }

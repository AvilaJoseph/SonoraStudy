import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../components/Hero/Hero.component';
import { FooterComponent } from '../../components/Footer/Footer.component';

@Component({
  selector: 'app-sonora-home',
  imports: [
    HeroComponent,
    FooterComponent,
  ],
  templateUrl: './SonoraHome.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SonoraHomeComponent { }

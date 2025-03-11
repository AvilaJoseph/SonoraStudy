import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-sonora-home',
  imports: [
    HeroComponent,
    FooterComponent

  ],
  templateUrl: './SonoraHome.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None // Esto deshabilita la encapsulación

})
export class SonoraHomeComponent { }

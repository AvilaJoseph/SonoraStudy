import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../components/Hero/Hero.component';
import { FooterComponent } from '../../components/Footer/Footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sonora-home',
  imports: [
    CommonModule,
    HeroComponent,
    FooterComponent,
  ],
  templateUrl: './SonoraHome.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SonoraHomeComponent { }

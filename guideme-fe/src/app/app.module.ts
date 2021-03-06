import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//UI imports
import { MenubarModule } from 'primeng/menubar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { SplitterModule } from 'primeng/splitter';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { MentoringComponent } from './mentoring/mentoring.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [AppComponent, SidenavComponent, HomeComponent, OnboardingComponent, MentoringComponent, SettingsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    SplitterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

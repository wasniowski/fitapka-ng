import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { SummaryComponent } from '../components/summary/summary.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, SidebarComponent, SummaryComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}

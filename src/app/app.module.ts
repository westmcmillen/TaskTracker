import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { CheckmarkComponent } from './components/checkmark/checkmark.component';
import { StarComponent } from './components/star/star.component';
import { TrashcanComponent } from './components/trashcan/trashcan.component';
import { CounterComponent } from './components/counter/counter.component';
import { DescriptionComponent } from './components/description/description.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ArchivesComponent } from './components/archives/archives.component';
import { LinkComponent } from './components/link/link.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArchiveComponent } from './components/archive/archive.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    FooterComponent,
    FormComponent,
    HeaderComponent,
    ItemComponent,
    ListComponent,
    CardComponent,
    CheckmarkComponent,
    StarComponent,
    TrashcanComponent,
    CounterComponent,
    DescriptionComponent,
    TasksComponent,
    ArchivesComponent,
    LinkComponent,
    NavbarComponent,
    ArchiveComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./services/api.service";
import { HeaderComponent } from "./components/header/header.component";
import { ComponentsModule } from "./components/components.module";
import { FooterComponent } from "./components/footer/footer.component";
import { HelperService } from "./services/helper.service";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
  ],
  providers: [ApiService, HelperService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { ClientsComponent } from './clients/clients.component';
import { ClientsModule } from './clients/clients.module';
import { AboutComponent } from './about/about.component';
import { AboutModule } from './about/about.module';
import { WhyusComponent } from './whyus/whyus.component';
import { WhyusModule } from './whyus/whyus.module';
import { SkillsComponent } from './skills/skills.component';
import { SkillsModule } from './skills/skills.module';
import { ServicesComponent } from './services/services.component';
import { ServicesModule } from './services/services.module';
import { CtasectionComponent } from './ctasection/ctasection.component';
import { CtasectionModule } from './ctasection/ctasection.module';
import { PortfolieComponent } from './portfolie/portfolie.component';
import { PortfolieModule } from './portfolie/portfolie.module';
import { TeamComponent } from './team/team.component';
import { TeamModule } from './team/team.module';
import { PricingComponent } from './pricing/pricing.component';
import { PricingModule } from './pricing/pricing.module';
import { FrequentlyaskedComponent } from './frequentlyasked/frequentlyasked.component';
import { FrequentlyaskedModule } from './frequentlyasked/frequentlyasked.module';
import { ContactComponent } from './contact/contact.component';
import { ContactModule } from './contact/contact.module';
import { FooterComponent } from './footer/footer.component';
import { FooterModule } from './footer/footer.module';



@NgModule({
  declarations: [
    HomeComponent,
    ClientsComponent,
    AboutComponent,
    WhyusComponent,
    SkillsComponent,
    ServicesComponent,
    CtasectionComponent,
    PortfolieComponent,
    TeamComponent,
    PricingComponent,
    FrequentlyaskedComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    ClientsModule,
    AboutModule,
    WhyusModule,
    SkillsModule,
    ServicesModule,
    CtasectionModule,
    PortfolieModule,
    TeamModule,
    PricingModule,
    FrequentlyaskedModule,
    ContactModule,
    FooterModule


  ],exports:[HomeComponent,ClientsComponent,AboutComponent,WhyusComponent,SkillsComponent,ServicesComponent,CtasectionComponent,PortfolieComponent,TeamComponent,PricingComponent,FrequentlyaskedComponent,ContactComponent,FooterComponent]
})
export class ComponentsModule { }

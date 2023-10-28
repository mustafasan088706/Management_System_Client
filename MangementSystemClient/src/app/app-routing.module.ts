import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';



const routes: Routes = [
  //Ilk once admin modulumuzu childlarla beraber ve lazy loading ile tanimladik.
  {
    path: "admin", component: LayoutComponent, children: [
      { path: "", component: DashboardComponent },//Admin girisi yapildiginda ilk acilacak sayfa bu.
      { path: "dashboard", loadChildren: () => import("./admin/components/dashboard/dashboard.module").then(module => module.DashboardModule) },
      { path: "endofproduction", loadChildren: () => import("./admin/components/end-of-production/end-of-production.module").then(module => module.EndOfProductionModule) },
      { path: "products", loadChildren: () => import("./admin/components/products/products.module").then(module => module.ProductsModule) },
      // {path:"widgets",loadChildren:()=>import("./admin/components/widgets/widgets.module").then(module=>module.WidgetsModule)}
    ]
  },
  //Burdan sonra ise ana modulumuzun tanimlamasini yapiyoruz.Bu sekilde multi layout islem yapmis oluyoruz.Burada home ana module olarak tanimlanirken onun childi olarak about tanimlandi.Eger ilerde admin ya da ui yapisina eklemek istediklerimiz olursa burada da revize etmeliyiz.
  { path: "", component: HomeComponent },
  { path: "clients", loadChildren: () => import("./ui/components/clients/clients.module").then(module => module.ClientsModule) },
  { path: "whyus", loadChildren: () => import("./ui/components/whyus/whyus.module").then(module => module.WhyusModule) },
  { path: "services", loadChildren: () => import("./ui/components/services/services.module").then(module => module.ServicesModule) },
  { path: "about", loadChildren: () => import("./ui/components/about/about.module").then(module => module.AboutModule) },
  { path: "skills", loadChildren: () => import("./ui/components/skills/skills.module").then(module => module.SkillsModule) },
  { path: "ctasection", loadChildren: () => import("./ui/components/ctasection/ctasection.module").then(module => module.CtasectionModule) },
  { path: "portfolie", loadChildren: () => import("./ui/components/portfolie/portfolie.module").then(module => module.PortfolieModule) },
  { path: "team", loadChildren: () => import("./ui/components/team/team.module").then(module => module.TeamModule) },
  { path: "pricing", loadChildren: () => import("./ui/components/pricing/pricing.module").then(module => module.PricingModule) },
  { path: "frequentlyasked", loadChildren: () => import("./ui/components/frequentlyasked/frequentlyasked.module").then(module => module.FrequentlyaskedModule) },
  { path: "contact", loadChildren: () => import("./ui/components/contact/contact.module").then(module => module.ContactModule) },
  { path: "footer", loadChildren: () => import("./ui/components/footer/footer.module").then(module => module.FooterModule) },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

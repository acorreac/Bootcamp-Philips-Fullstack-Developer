import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Erro404Component } from "./component/error-404/error-404.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        NavBarComponent,
        Erro404Component
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '**', component: Erro404Component
            }
        ])
    ],
    exports: [
        NavBarComponent,
    ]
})

export class CoreModule{

}
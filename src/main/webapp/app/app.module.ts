import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { JhipsterGatewayKeycloakConsuls4211SharedModule, UserRouteAccessService } from './shared';
import { JhipsterGatewayKeycloakConsuls4211HomeModule } from './home/home.module';
import { JhipsterGatewayKeycloakConsuls4211AdminModule } from './admin/admin.module';
import { JhipsterGatewayKeycloakConsuls4211EntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterGatewayKeycloakConsuls4211SharedModule,
        JhipsterGatewayKeycloakConsuls4211HomeModule,
        JhipsterGatewayKeycloakConsuls4211AdminModule,
        JhipsterGatewayKeycloakConsuls4211EntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterGatewayKeycloakConsuls4211AppModule {}

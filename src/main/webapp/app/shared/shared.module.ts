import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import {
    JhipsterGatewayKeycloakConsuls4211SharedLibsModule,
    JhipsterGatewayKeycloakConsuls4211SharedCommonModule,
    CSRFService,
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    Principal,
    HasAnyAuthorityDirective,
} from './';

@NgModule({
    imports: [
        JhipsterGatewayKeycloakConsuls4211SharedLibsModule,
        JhipsterGatewayKeycloakConsuls4211SharedCommonModule
    ],
    declarations: [
        HasAnyAuthorityDirective
    ],
    providers: [
        LoginService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        AuthServerProvider,
        UserService,
        DatePipe
    ],
    exports: [
        JhipsterGatewayKeycloakConsuls4211SharedCommonModule,
        HasAnyAuthorityDirective,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class JhipsterGatewayKeycloakConsuls4211SharedModule {}

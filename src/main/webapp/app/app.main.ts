import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './blocks/config/prod.config';
import { JhipsterGatewayKeycloakConsuls4211AppModule } from './app.module';

ProdConfig();

if (module['hot']) {
    module['hot'].accept();
}

platformBrowserDynamic().bootstrapModule(JhipsterGatewayKeycloakConsuls4211AppModule)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));

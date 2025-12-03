import { AppModule } from './app/app.module';

// Export the NgModule so the CommonEngine will use `renderModule` instead of
// treating the default export as a standalone bootstrap function.
export default AppModule;

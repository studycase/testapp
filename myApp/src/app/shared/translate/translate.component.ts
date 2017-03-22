import { LocalizableTranslateStaticLoader } from 'ng2-translate-localize';
import { Http } from '@angular/http';

/**
 * The LocalizableTranslateStaticLoader
 *
 */

export function createTranslateLoader(http: Http) {
    return new LocalizableTranslateStaticLoader(http, '../assets/translate/i18n', '.json');
}
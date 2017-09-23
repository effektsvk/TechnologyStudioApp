import I18n from 'react-native-i18n';
import en from '../i18n/locales/en.js';
import sk from '../i18n/locales/sk.js';

I18n.fallbacks = true;

I18n.translations = {
	en,
	sk
};

export default I18n;

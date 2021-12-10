import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app }) => {
    app.i18n = new VueI18n({
        // Idioma local
        locale: "es", 

        fallbackLocale: "es",

        // Configuración del idioma
        messages: {
            es: require("~/static/content-es.json"),
            en: require("~/static/content-en.json")
        }
    });
};
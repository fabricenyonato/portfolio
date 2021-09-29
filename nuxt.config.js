export default {
    target: 'static',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Fabrice NYONATO',
            htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Developpeur freelance, Lome, Togo, Web, Mobile, JavaScript, Flutter' },
            { name: 'format-detection', content: 'telephone=no' },
            { property: 'og:title', content: 'Fabrice NYONATO' },
            { property: 'og:description', content: 'Developpeur freelance, Lome, Togo, Web, Mobile, JavaScript, Flutter' },
            { property: 'og:image', content: 'https://www.fabrice-nyonato.com/me.jpeg' },
            { property: 'og:url', content: 'https://www.fabrice-nyonato.com' },
            { property: 'og:type', content: 'profile' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&display=swap' },
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },

    tailwindcss: {
        config: {
            mode: 'jit',
            theme: {
                extend: {
                    transitionProperty: {
                        'filter': 'filter',
                        'margin-left': 'margin-left',
                    }
                }
            }
        },
    },
}

requirejs.config({
    baseUrl: '',
    paths: {
        templates: 'templates',
        text: 'js/libs/require-text',
        app: 'js/app',
        libs: 'js/libs'
    }
});

requirejs(['app/views/main']);


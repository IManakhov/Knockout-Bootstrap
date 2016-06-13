requirejs.config({
    baseUrl: '',
    paths: {
        text: 'js/libs/require-text',
        app: 'js/app',
        libs: 'js/libs'
    }
});

requirejs(['app/main']);


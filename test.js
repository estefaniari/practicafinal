const assert = require('assert');

describe('pagina principal', function() {
    it('se muestra el mensaje "Hola Mundo"', function() {
        browser.url('/');
        const title = browser.getTitle();
        assert.strictEqual(title, 'Hola Mundo');
    });
});

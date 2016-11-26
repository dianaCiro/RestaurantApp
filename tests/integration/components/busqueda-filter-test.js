import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('busqueda-filter', 'Integration | Component | busqueda filter', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{busqueda-filter}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#busqueda-filter}}
      template block text
    {{/busqueda-filter}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

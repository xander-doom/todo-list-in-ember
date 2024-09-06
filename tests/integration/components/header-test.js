import { module, test } from 'qunit';
import { setupRenderingTest } from 'todo-list-in-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Render the component without any block content
    await render(hbs`<Header />`);

    // Check that the component renders the expected static content
    assert.dom().hasText('');

    // Render the component with block content
    await render(hbs`
      <Header>
        
      </Header>
    `);

    // Check that the component renders the block content
    assert.dom(this.element).hasText('');
  });
});

import { module, test } from 'qunit';
import { setupRenderingTest } from 'todo-list-in-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | todo', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Render the component without any block content
    await render(hbs`<Todo />`);

    // Check that the component renders the expected static content
    assert.dom().hasText('Edit todo');

    // Render the component with block content
    await render(hbs`
      <Todo>
        Edit todo
      </Todo>
    `);

    // Check that the component renders the block content
    assert.dom(this.element).hasText('Edit todo');
  });
});

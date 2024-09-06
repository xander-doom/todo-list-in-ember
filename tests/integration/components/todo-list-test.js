import { module, test } from 'qunit';
import { setupRenderingTest } from 'todo-list-in-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | todo-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Render the component without any block content
    await render(hbs`<TodoList />`);

    // Check that the component renders the expected static content
    assert.dom().hasText('Mark all as complete');

    // Render the component with block content
    await render(hbs`
      <TodoList>
        Mark all as complete
      </TodoList>
    `);

    // Check that the component renders the block content
    assert.dom(this.element).hasText('Mark all as complete');
  });
});

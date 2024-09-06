import { module, test } from 'qunit';
import { setupRenderingTest } from 'todo-list-in-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | footer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Render the component without any block content
    await render(hbs`<Footer />`);

    // Check that the component renders the expected static content
    assert.dom().hasText('0 todos left All Active Completed Clear completed');

    // Render the component with block content
    await render(hbs`
      <Footer>
        0 todos left All Active Completed Clear completed
      </Footer>
    `);

    // Check that the component renders the block content
    assert
      .dom(this.element)
      .hasText('0 todos left All Active Completed Clear completed');
  });
});

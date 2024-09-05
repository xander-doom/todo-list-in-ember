import { module, test } from 'qunit';
import { setupTest } from 'todo-list-in-ember/tests/helpers';

module('Unit | Route | active', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:active');
    assert.ok(route);
  });
});

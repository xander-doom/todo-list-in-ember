import { module, test } from 'qunit';
import { setupTest } from 'todo-list-in-ember/tests/helpers';

module('Unit | Service | todo-data', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:todo-data');
    assert.ok(service);
  });
});

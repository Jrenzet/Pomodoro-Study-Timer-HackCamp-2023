// tests run and are imported properly, but chrome apis cause issue running tests
import { equal } from 'assert';
import { formatRemainingTime } from '../popup.js';

describe('formatRemainingTime', function () {
  it('should return 00:00 when passed 0', function () {
    equal(formatRemainingTime(0), "00:00");
  })
})

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
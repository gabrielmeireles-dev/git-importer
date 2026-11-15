import { test } from "node:test";
import assert from "node:assert/strict";
import { relationshipDuration } from "./relationship-duration";
import { couple } from "./couple-data";

test("the relationship begins on 09/12/2024", () => {
  assert.equal(couple.startDate.slice(0, 10), "2024-12-09");
});

test("the counter stays fixed at 11/10/2026, exactly 671 elapsed days", () => {
  assert.equal(couple.endDate, "2026-10-11");
  assert.deepEqual(relationshipDuration(couple.startDate, couple.endDate), {
    days: 671, hours: 0, minutes: 0, seconds: 0,
  });
});
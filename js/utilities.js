"use strict";

/**
 *
 * @param {string} value
 * @returns {boolean}
 */
function checkString(value) {
  if (typeof value !== "string") {
    throw new TypeError(`"${value}" must be string`);
  }
  return true;
}

/**
 *
 * @param {number} value
 * @returns {boolean}
 */
function checkNumber(value) {
  if (typeof value !== "number") {
    throw new TypeError(`"${value}" must be a number`);
  }
  return true;
}

/**
 *
 * @param {number} value
 * @returns {boolean}
 */
function checkNumberGreatZero(value) {
  if (typeof value !== "number") {
    throw new TypeError(`"${value}" must be number`);
  }
  if (value < 0) {
    throw new RangeError(`"${value}" must be bigest than '0' `);
  }
  return true;
}

/**
 *
 * @param {number} value
 * @returns {boolean}
 */
function checkIsIntegerGreatZero(value) {
  if (!Number.isInteger(value) || value < 0) {
    throw new TypeError(`"${value}" must be an integer and not less than "0"`);
  }
  return true;
}

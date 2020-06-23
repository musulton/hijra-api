/* eslint-disable no-new */
/**
 * Find out whether value 1 and value 2 are equal
 * @param  {any} val1 to be validated
 * @param  {any} val2 to be validated
 * @returns {Boolean} true if value 1 and value 2 are equal, else false
 */
export const isEqual = (val1, val2) => val1 === val2;

/**
 * Find out whether value is null
 * @param  {any} val to be validated
 * @returns {Boolean} true if value is null, else false
 */
export const isNull = (val) => val === null;

/**
 * Find out whether type of value is undefined
 * @param  {any} val to be validated
 * @returns {Boolean} true if value is null, else false
 */
export const isUndefined = (val) => typeof val === 'undefined';

/**
 * Find out whether value is null or undefined, therefore "missing"
 * @param  {any} val to be validated
 * @returns {Boolean} true if value is null or undefined, else false
 */
export const isMissing = (val) => isNull(val) || isUndefined(val);

/**
 * Find out whether value is not null and not undefined, therefore "present"
 * @param  {any} val to be validated
 * @returns {Boolean} true if value is not null and not undefined, else false
 */
export const isPresent = (val) => !isMissing(val);

/**
 * Find out whether value is of type Boolean
 * @param  {any} val to be validated
 * @returns {Boolean} true if value is of type Boolean, else false
 */
export const isBoolean = (val) => isPresent(val) && typeof val === 'boolean';

/**
 * Find out whether value is of type Array
 * @param  {any} val to be validated
 * @returns {Boolean} true if value is of type Array, else false
 */
export const isArray = (val) => isPresent(val) && Array.isArray(val);

/**
 * Find out whether value is of type Object
 * @param  {any} val to be validated
 * @returns {Boolean} true if value is of type Object, else false
 */
export const isObject = (val) => isPresent(val) && typeof val === 'object' && !isArray(val);

/**
 * Find out whether value is of type String
 * @param  {any} val to be validated
 * @returns {Boolean} true if value is of type String, else false
 */
export const isString = (val) => isPresent(val) && typeof val === 'string';

/**
 * Find out whether value is of type Number
 * @param  {any} val to be validated
 * @returns {Boolean} true if value is of type Number, else false
 */
export const isNumber = (val) => isPresent(val) && typeof val === 'number' && !Number.isNaN(val);

/**
 * Find out whether value is of consist of Digit only
 * @param  {any} val to be validated
 * @returns {Boolean} true if value is consist of Digit only, else false
 */
export const isDigit = (val) => {
  const digitPattern = /^\d+$/;
  return isPresent(val) && digitPattern.test(val);
};
/**
 * Find out whether value is of type Number and is Integer
 * @param  {any} val to be validated
 * @returns {Boolean} true if value is of type Number, else false
 */
export const isInteger = (val) => isNumber(val) && Number.isInteger(val);

/**
 * Find out whether value is of type Function
 * @param  {any} val to be validated
 * @returns {Boolean} true if value is of type Function, else false
 */
export const isFunction = (val) => isPresent(val) && typeof val === 'function';

/**
 * Find out whether value is of type String, and has 0 characters
 * @param  {any} val to be validated
 * @returns {Boolean} true if value is of type String and has 0 characters, else false
 */
export const isEmptyString = (val) => isString(val) && isEqual(val.length, 0);

/**
 * Find out whether value is of type String, and has at least 1 character
 * @param  {any} val to be validated
 * @returns {Boolean} true if value is of type String and has at least 1 character, else false
 */
export const isNonEmptyString = (val) => isString(val) && val.length > 0;

/**
 * Find out whether value is of type Array and has no elements
 * @param  {any} val to be validated
 * @returns {Boolean} true if value is of type Array and has no elements, else false
 */
export const isEmptyArray = (val) => isArray(val) && isEqual(val.length, 0);

/**
 * Find out whether value is of type Array and has at least one element
 * @param  {any} val to be validated
 * @returns {Boolean} true if value is of type Array and has at least one element, else false
 */
export const isNonEmptyArray = (val) => isArray(val) && val.length > 0;

/**
 * Find out whether value is of type Object and has no keys,
 * including non-enumerable properties, and symbols
 * @param  {any} val to be validated
 * @returns {Boolean} true if value is of type Object and is "empty", else false
 */
export const isEmptyObject = (val) => {
  if (isObject(val)) {
    const propertyNames = Object.getOwnPropertyNames(val);
    const symbolKeys = Object.getOwnPropertySymbols(val);

    const keysLength = propertyNames.length + symbolKeys.length;

    return isEqual(keysLength, 0);
  }
  return false;
};

/**
 * Find out whether value is of type Boolean and is true
 * @param  {any} val to be validated
 * @returns {Boolean} true if value is of type Boolean and is true, else false
 */
export const isTrue = (val) => isBoolean(val) && val === true;

/**
 * Find out whether value is of type Boolean and is false
 * @param  {any} val to be validated
 * @returns {Boolean} true if value is of type Boolean and is false, else false
 */
export const isFalse = (val) => isBoolean(val) && val === false;

/**
 * Find out whether value is an Integer and greater than 0
 * @param  {any} val to be validated
 * @returns {Boolean} true if value is an Integer and greater than 0, else false
 */
export const isPositiveInteger = (val) => isInteger(val) && val > 0;

/**
 * Find out whether value is an Integer and greater or equal to 0
 * @param  {any} val to be validated
 * @returns {Boolean} true if value is an Integer and greater or equal to 0, else false
 */
export const isNonNegativeInteger = (val) => isInteger(val) && val >= 0;

/**
 * Find out whether value is an Array and its length is 1
 * @param  {any} val to be validated
 * @returns {Boolean} true if value is an Array and its length is 1, else false
 */
export const hasOneItem = (val) => isArray(val) && val.length === 1;

/**
 * Find out whether value is an Array and its length is more than 1
 * @param  {any} val to be validated
 * @returns {Boolean} true if value is an Array and its length is greater than 1, else false
 */
export const hasMultipleItems = (val) => isArray(val) && val.length > 1;

/**
 * Find out whether value is Constructable
 * @param  {any} val to be validated
 * @returns {Boolean} true if value is Constructable, else false
 */
export const isConstructable = (val) => {
  let result = isFunction(val);

  if (result) {
    try {
      // eslint-disable-next-line new-cap
      new val();
      result = true;
    } catch (err) {
      result = !isNonNegativeInteger(
        err.message.indexOf('is not a constructor')
      );
    }
  }

  return result;
};

/**
 * Find out whether value has only the keys provided
 * @param {any} val to be validated
 * @param {any} keys to be matched
 * @returns {Boolean} true if value has only the keys provided, else false
 */
export const hasOnlyKeys = (val, keys) => {
  if (isObject(val) && isArray(keys)) {
    const objKeys = Object.keys(val);
    const propertiesInKeys = keys.filter((key) => key in val);
    return (
      isEqual(propertiesInKeys.length, objKeys.length)
      && isEqual(objKeys.length, keys.length)
    );
  }
  return false;
};

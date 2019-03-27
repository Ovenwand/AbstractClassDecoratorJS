export const hasOwnProperty = (...args) => Object.prototype.hasOwnProperty.call(...args);

export const isDefined = (prop, obj, loose = true) => {
  return hasOwnProperty(obj, prop) || (loose && obj[prop] !== undefined);
};

export const isEqualType = (a, b, loose = true) => {
  return typeof a === typeof b || (loose && a instanceof b.constructor);
};

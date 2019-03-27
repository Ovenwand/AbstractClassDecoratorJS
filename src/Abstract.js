import { isDefined } from './utils';

export default (value) => {
  if (typeof value === 'object') {
    return (AbstractClass) => decorator(AbstractClass, value);
  } else {
    return decorator(value);
  }
};

function getAbstractClassDescriptor(AbstractClass, options = {}) {
  const instanceDescriptors = Object.getOwnPropertyDescriptors(AbstractClass.prototype);
  const staticDescriptors = Object.getOwnPropertyDescriptors(AbstractClass);
  const inheritDescriptors = {};

  for (const prop of options.inherit) {
    inheritDescriptors[prop] = instanceDescriptors[prop] || staticDescriptors[prop];
  }

  return {
    inherit: inheritDescriptors,
    instance: instanceDescriptors,
    static: staticDescriptors,
  };
}

function decorator(AbstractClass, options) {
  if (isDefined('__abstract__', AbstractClass)) {
    return;
  }

  const __abstract__ = getAbstractClassDescriptor(AbstractClass, options);

  Object.defineProperty(AbstractClass, '__abstract__', {
    value: __abstract__,
  });
}

import { isDefined, isEqualType } from './utils';

export default (...AbstractClasses) => (Class) => {
  for (const AbstractClass of AbstractClasses) {
    if (!isDefined('__abstract__', AbstractClass)) {
      throw new TypeError(`The '@Implement' decorator can only implement abstract classes. The provided class ${AbstractClass.name} is not abstract, make sure to annotate it with the '@Abstract' decorator.`);
    }

    const descriptors = AbstractClass.__abstract__;
    const __implements__ = AbstractClass;

    Object.defineProperty(Class, '__implements__', {
      value: __implements__,
    });

    ensurePropInheritance(Class, descriptors);
    validateInstanceProps(AbstractClass, Class, descriptors.instance);
    validateStaticProps(AbstractClass, Class, descriptors.static);
  }
};

function ensurePropInheritance(Class, classDescriptor) {
  const instanceKeys = Object.keys(classDescriptor.instance);
  const staticKeys = Object.keys(classDescriptor.static);

  for (const prop of Object.keys(classDescriptor.inherit)) {
    if (instanceKeys.includes(prop)) {
      if (Class.prototype[prop] === undefined) {
        Object.defineProperty(Class.prototype, prop, classDescriptor.inherit[prop]);
      }
    } else if (staticKeys.includes(prop)) {
      if (Class[prop] === undefined) {
        Object.defineProperty(Class, prop, classDescriptor.inherit[prop]);
      }
    }
  }
}

function validateInstanceProps(AbstractClass, Class, descriptors) {
  for (const prop of Object.keys(descriptors)) {
    if (!isDefined(prop, Class.prototype, false)) {
      throw new TypeError(`Class '${Class.name} is missing override for property '${prop}' on ${AbstractClass.name}.`);
    }

    if (!isEqualType(Class.prototype[prop], descriptors[prop].value)) {
      throw new TypeError(`Property '${prop}' of class '${Class.name}' match the type of '${prop}' on '${AbstractClass.name}'.`);
    }
  }
}

function validateStaticProps(AbstractClass, Class, descriptors) {
  for (const prop of Object.keys(descriptors)) {
    if (!isDefined(prop, Class, false)) {
      throw new TypeError(`Class '${Class.name} is missing override for property '${prop}' on ${AbstractClass.name}.`);
    }

    if (!isEqualType(Class[prop], descriptors[prop].value)) {
      throw new TypeError(`Property '${prop}' of class '${Class.name}' match the type of '${prop}' on '${AbstractClass.name}'.`);
    }
  }
}

import config from '@plone/volto/registry';

export function getComponentWithFallback(options) {
  if (typeof options === 'object') {
    const { name, dependencies = '' } = options;
    if (dependencies && Array.isArray(dependencies)) {
      const component = config.getComponent(options);
      if (!component.component && dependencies.length > 0) {
        const newDeps = [...dependencies];
        newDeps.pop();
        return getComponentWithFallback({ name, dependencies: newDeps });
      } else {
        return component;
      }
    }
  }
  return config.getComponent(options);
}

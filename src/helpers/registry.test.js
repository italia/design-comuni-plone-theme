import { getComponentWithFallback } from './registry';
import config from '@plone/volto/registry';

config.set('components', {
  Test: { component: 'test' },
  'Test|dep1': { component: 'test with dep1' },
  'Test|dep1+dep2': { component: 'test with dep1 and dep2' },
});

describe('getComponentWithFallback', () => {
  it('returns a component', () => {
    const component = getComponentWithFallback({
      name: 'Test',
    });
    expect(component.component).toEqual('test');
  });
  it('returns a component with one dependency', () => {
    const component = getComponentWithFallback({
      name: 'Test',
      dependencies: ['dep1'],
    });
    expect(component.component).toEqual('test with dep1');
  });
  it('returns a component with two dependencies', () => {
    const component = getComponentWithFallback({
      name: 'Test',
      dependencies: ['dep1', 'dep2'],
    });
    expect(component.component).toEqual('test with dep1 and dep2');
  });
  it('returns a component with one dependency if the second is not found', () => {
    const component = getComponentWithFallback({
      name: 'Test',
      dependencies: ['dep1', 'dep3'],
    });
    expect(component.component).toEqual('test with dep1');
  });
  it('returns a component with no dependencies if none is found', () => {
    const component = getComponentWithFallback({
      name: 'Test',
      dependencies: ['dep3'],
    });
    expect(component.component).toEqual('test');
  });
});

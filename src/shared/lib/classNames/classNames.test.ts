import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  // test('test', () => {
  //   expect(classNames('someClass')).toBe('someClass');
  // });
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with additional class', () => {
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2');
  });
  test('with additional mods', () => {
    expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2']))
      .toBe('someClass class1 class2 hovered scrollable');
  });
  test('with additional mods, some mode is false', () => {
    expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2']))
      .toBe('someClass class1 class2 hovered');
  });
  test('with additional mods, some mode is undefined', () => {
    expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['class1', 'class2']))
      .toBe('someClass class1 class2 hovered');
  });
  test('with additional mods, some mode is null', () => {
    expect(classNames('someClass', { hovered: true, scrollable: null }, ['class1', 'class2']))
      .toBe('someClass class1 class2 hovered');
  });
});

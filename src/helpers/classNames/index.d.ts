declare namespace classNames {
  type Value = string | number | boolean | undefined | null;
  type Mapping = Record<string, unknown>;
  interface ArgumentArray extends Array<Argument> {}
  interface ReadonlyArgumentArray extends ReadonlyArray<Argument> {}
  type Argument = Value | Mapping | ArgumentArray | ReadonlyArgumentArray;
}

interface ClassNames {
  (...args: classNames.ArgumentArray): string;

  default: ClassNames;
}

/**
 * A simple JavaScript utility for conditionally joining classNames together.
 */
declare const classNames: ClassNames;

export as namespace classNames;

export = classNames;

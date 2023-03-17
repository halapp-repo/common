abstract class BaseStrategy<T, K> {
  abstract execute(arg: T): K;
}

export { BaseStrategy };

abstract class EventSourceAggregate<T> {
  RetroEvents: T[] = [];
  Changes: T[] = [];
  abstract apply(event: T): void;
}

export { EventSourceAggregate };

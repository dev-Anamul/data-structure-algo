type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  private events: { [key: string]: Function[] } = {};

  subscribe(eventName: string, callback: Callback): Subscription {
    if (this.events[eventName]) this.events[eventName].push(callback);
    else this.events[eventName] = [callback];

    return {
      unsubscribe: () => {
        const calbacks = this.events[eventName];
        const ind = calbacks.indexOf(callback);

        if (ind !== -1) {
          calbacks.splice(ind, 1);
        }
      },
    };
  }

  emit(eventName: string, args: any[] = []): any[] {
    if (this.events[eventName]) {
      return this.events[eventName].map((fn) => fn(...args));
    }

    return [];
  }
}

const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() {
  return 99;
}
const sub = emitter.subscribe("onClick", onClickCallback);

emitter.emit("onClick"); // [99]
sub.unsubscribe(); // undefined
emitter.emit("onClick"); // []

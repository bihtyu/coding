// interface SomePort {
//   postMessage: (message: string) => void
//   onmessage?: (message: string) => void
// }

// declare class SomeChannel {
//   port1: SomePort
//   port2: SomePort
// }

// 22:29
class BetterChannel {
  constructor() {
    const badChannel = new SomeChannel();

    this.id = 0;
    this.cbMap = new Map();

    this.port1 = {};
    this.port2 = {};

    this.port1.postMessage = this.createPostMessage(
      badChannel.port1,
      badChannel.port2,
      this.port2,
    );
    this.port2.postMessage = this.createPostMessage(
      badChannel.port2,
      badChannel.port1,
      this.port1,
    )
  }

  createPostMessage(badSender, badReceiver, peer) {
    badReceiver.onmessage = ({id, msg}) => {
      if (!peer.onmessage) {
        return;
      }
      peer.onmessage(msg, (response) => {
        if (this.cbMap[id]) {
          this.cbMap[id](response);
          delete this.cbMap[id];
        }
      });
    };

    return (msg, cb) => {
      const id = this.id++;
      this.cbMap[id] = cb;
      badSender.postMessage({
        id,
        msg,
      });
    };
  }
}
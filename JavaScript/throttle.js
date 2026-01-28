function throttle(fn, delay) {
  let lastcall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastcall < delay) {
      return;
    }
    lastcall = now;
    return fn(...args);
  };
}

function sendChat(message) {
  console.log(`Send message`, message);
}

const sendChatSlowMo = throttle(sendChat, 2 * 1000);

sendChatSlowMo("hi");
sendChatSlowMo("hi I");
sendChatSlowMo("hi I am");
sendChatSlowMo("hi I am Aryan");

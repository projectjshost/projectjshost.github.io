function getRandomStr(length) {
    // Declare all characters
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';

    // Pick characers randomly
    let str = '';
    let len = length;
    let charLength = chars.length;
    while (len--) {
        str += chars.charAt(Math.floor(Math.random()*charLength));
    }
    return str;

};
self.addEventListener('message', function(e) {
    var message = parseInt(e.data);
    self.postMessage(getRandomStr(message));
  });

var fibonacci = function (n) {
    return n < 2 ? n : arguments.callee(n - 1) + arguments.callee(n - 2);
};
onmessage = function (e) {
    var result = fibonacci(e.data);
    postMessage(result);
};

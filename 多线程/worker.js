onmessage = function(e){
    //ͨ��e.data��ȡǰ̨������������
    var d = e.data;
    var str = d.split("").reverse().join("");
    postMessage(str);
};

export default class AjaxUtility {
    constructor (that) {this.that = that}
   	ajaxRequest(url, callback, failCallback) {
        let xmlhttp;
		let cb = callback.bind(this.that);
		let fcb = failCallback.bind(this.that);
        if (window.XMLHttpRequest)
            xmlhttp = new XMLHttpRequest();
        else
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    callback(xmlhttp.responseText, url);
				}
                else
                    fcb(url);
            }
        };

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }

    ajaxRequestMulti(urls, callbackMulti, failCallbackMulti) {
        let isAllCallsCompleted = false;
        let isCallFailed = false;
        let data = {};
		let cbMulti = callbackMulti.bind(this);

        for (let i = 0; i < urls.length; i++) {
            var callback = function (responseText, url) {
                if (isCallFailed) return;

                data[url] = responseText;

                // get size of data
                let size = 0;
                for (let index in data) {
                    if (data.hasOwnProperty(index))
                        size++;
                }

                if (size == urls.length)
                // all AJAX requests are completed successfully
                    cbMulti(data);
            }.bind(this);

            let failCallback = function (url) {
                isCallFailed = true;
                failCallbackMulti(url);
            };

            this.ajaxRequest(urls[i], callback, failCallback);
        }
    }
    
}
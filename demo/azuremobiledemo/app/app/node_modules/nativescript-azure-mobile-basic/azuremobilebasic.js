var http = require("http");
var dialogs = require("ui/dialogs");


function MobileServiceClient(baseUrl, key) {
    this.baseUrl = baseUrl;
	this.key = key;
}

MobileServiceClient.prototype.getTableItems = function(tableName, dataColName, retArr) {
	
    var reqParams = {
        url:  this.baseUrl + 'tables/'+ tableName +'?$orderby=id',
        method: 'GET',
        headers: {
            'Accept': '*/*',
            'X-ZUMO-APPLICATION': this.key
        }
    };
    
    
	 return http.getJSON(reqParams)
        .then(function (obj) {
		    for(var index in obj) {
                var objItem = obj[index];
                
                var newItem = {
                    id: objItem['id'],
                    name: objItem[dataColName]
                };

                retArr.push(newItem);
            }
        
        }, function (e) {
            dialogs.alert('error: ' + e);
        });
}

exports.MobileServiceClient = MobileServiceClient;

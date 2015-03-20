var observable = require("data/observable");
var observableArray = require("data/observable-array");
var dialogs = require("ui/dialogs");
var azuremobile = require( "./node_modules/nativescript-azure-mobile-basic/azuremobilebasic" );

var tasksViewModel = new observable.Observable();
var tasks =  new observableArray.ObservableArray([]);

tasksViewModel.set('tasks', tasks);

tasksViewModel.loadTasks = function() {
    var client = new azuremobile.MobileServiceClient(
        "https://<your azure mobile service URL>.azure-mobile.net/", 
        "<your Azure Mobile Service Application Key>"
    );
    
    var itemArr = [];
    
    client.getTableItems('<tableName>', '<dataColumnName>', itemArr)
        .then(function(){
            for (var i = 0; i < itemArr.length; ++i) {
                tasks.push(itemArr[i]);
            }
        });
};

exports.tasksViewModel = tasksViewModel;
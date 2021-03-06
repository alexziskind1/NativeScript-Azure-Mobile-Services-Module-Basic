# NativeScript Azure Mobile Services Module Basic
NativeScript module for basic table data GET via Azure Mobile Services as a backend

NativeScript module for basic table data GET via Azure Mobile Services as a backend. Use `require()` to include the module.
This is a super basic fetch using a URL, key, and table name to demonstrate the concept. A more in-depth Azure Mobile Services module is coming.

## Usage

1) set up an Azure Mobile Service, get the URL and Application key.
2) create the MobileServiceClient

```
// viewmodel.js
    var client = new azuremobile.MobileServiceClient(
        "https://<Your Mobile Service URL>", 
        "<Your mobile service application key>"
    );
```

3) call getTableItems on the client, passing in the table name and the data column name

```
    var itemArr = [];

    client.getTableItems('<tableName>', '<dataColumnName>', itemArr)
        .then(function(){
            for (var i = 0; i < itemArr.length; ++i) {
                tasks.push(itemArr[i]);
            }
        });
```

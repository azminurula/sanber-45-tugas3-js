let productBin = {
    "requestId": null,
    "data": [
      {
        "id": 100000057465,
        "storageId": 10000008207,
        "code": "A01-01-01-A",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 76,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000057466,
        "storageId": 10000002181,
        "code": "A01-01-01-B",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 71,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000065224,
        "storageId": 10000008884,
        "code": "Tgt00-A-A-01",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 10,
        "createdTime": "2022-02-08T10:35:19Z",
      }
    ],
    "message": "success"
  }

  //ngambil object datanya aja
  var data = productBin.data;

  //parameter untuk search nya, bisa langsung di taro di kondisinya jg
  var search = "FBR00040101";
  
  //definisiin variable quantity buat sum nya
  var quantity = 0;
  
  //perulangan sebanyak object yang ada di dalam data
  for (var i in data) {
    //pengecekan kondisi productCode kalo sesuai sama yang di search dia akan ngejumlahin, kalo ga sesuai dia akan skip
    if (data[i].productCode == search) {
      quantity += data[i].quantity;
    }
  }
  console.log(quantity);

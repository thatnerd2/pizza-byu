var dominos = require("pizzapi");
var app = require('express')();
var express = require('express');
var http = require('http');
var server = http.Server(app);
var fs = require('fs');
var port = process.env.PORT || 4004

// This is a simple demo of the dominos API.
/*dominos.Util.findNearbyStores(
	'25 Heritage Halls, Provo, UT, 84604',
	'Delivery',
	function(storeData){
		if (!storeData.success) return;

		var stores = storeData.result.Stores;
    var sample = new dominos.Store({ID: stores[0].StoreID});
    console.log("Store ID:  " + stores[0].StoreID);
    sample.getMenu(function(obj){
      if (!obj.success) return;
      var data = obj.result;*/
      /*deleteThese = ["Categorizations", "Coupons", "Sides", "UnsupportedProducts", "UnsupportedOptions", "CookingInstructions", "CookingInstructionGroups"];
      for (var i = 0; i < deleteThese.length; i++) delete data[deleteThese[i]]*/

      //console.log(data);
        /*fs.writeFile("menu.json", JSON.stringify(data), function(err) {
          if(err) return console.log(err);
          console.log("The file was saved!");
        }); */
    /*})
	}
);*/

app.use(express.static('public'));
server.listen(port);
console.log("Listening at " + port);


/*

 StoreID: '7501',
  IsDeliveryStore: true,
  MinDistance: 0.8,
  MaxDistance: 0.8,
  Phone: '801-418-1100',
  AddressDescription: '156 W Bulldog Blvd\nProvo, UT 84604',
  HolidaysDescription: '',
  HoursDescription: 'Su-Th 10:00am-1:00am\nFr-Sa 10:00am-2:00am',
  ServiceHoursDescription: 
   { Carryout: 'Su-Th 10:00am-1:00am\nFr-Sa 10:00am-2:00am',
     Delivery: 'Su-Th 10:00am-1:00am\nFr-Sa 10:00am-2:00am' },
  IsOnlineCapable: true,
  IsOnlineNow: true,
  IsNEONow: true,
  IsSpanish: true,
  SubstitutionStore: '7501',
  LocationInfo: null,
  LanguageLocationInfo: { es: null },
  AllowDeliveryOrders: true,
  AllowCarryoutOrders: true,
  IsOpen: true,
  ServiceIsOpen: { Carryout: true, Delivery: true } }

  */

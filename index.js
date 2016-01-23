var dominos = require("pizzapi");
var app = require('express')();
var express = require('express');
var server = require('http').Server(app);

dominos.Util.findNearbyStores(
	'25 Heritage Halls, Provo, UT, 84604',
	'Delivery',
	function(storeData){
		if (!storeData.success) return;

		// Algorithm
		// naively we choose the store with the min distance
		// and the store that allows delivery orders
		// and the store that is open
		// 
		var stores = storeData.result.Stores;
		//console.log(storeData);
	}
);

app.use(express.static('public'));
server.listen(process.env.PORT || 4004);

console.log("Listening.");



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

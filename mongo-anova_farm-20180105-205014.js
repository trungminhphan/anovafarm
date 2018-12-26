
/** banle indexes **/
db.getCollection("banle").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** banlerauqua indexes **/
db.getCollection("banlerauqua").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** banletrung indexes **/
db.getCollection("banletrung").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** config indexes **/
db.getCollection("config").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** danhmucbanle indexes **/
db.getCollection("danhmucbanle").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** danhmucbanle indexes **/
db.getCollection("danhmucbanle").ensureIndex({
  "_fts": "text",
  "_ftsx": NumberInt(1)
},[
  
]);

/** danhmuccongty indexes **/
db.getCollection("danhmuccongty").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** danhmucnhamay indexes **/
db.getCollection("danhmucnhamay").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** danhmucnhamay indexes **/
db.getCollection("danhmucnhamay").ensureIndex({
  "_fts": "text",
  "_ftsx": NumberInt(1)
},[
  
]);

/** danhmucnongtrai indexes **/
db.getCollection("danhmucnongtrai").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** danhmucnongtrai indexes **/
db.getCollection("danhmucnongtrai").ensureIndex({
  "_fts": "text",
  "_ftsx": NumberInt(1)
},[
  
]);

/** donggoi indexes **/
db.getCollection("donggoi").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** donggoi indexes **/
db.getCollection("donggoi").ensureIndex({
  "_fts": "text",
  "_ftsx": NumberInt(1)
},[
  
]);

/** donggoirauqua indexes **/
db.getCollection("donggoirauqua").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** donggoirauqua indexes **/
db.getCollection("donggoirauqua").ensureIndex({
  "_fts": "text",
  "_ftsx": NumberInt(1)
},[
  
]);

/** donggoitrung indexes **/
db.getCollection("donggoitrung").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** donggoitrung indexes **/
db.getCollection("donggoitrung").ensureIndex({
  "_fts": "text",
  "_ftsx": NumberInt(1)
},[
  
]);

/** fs.chunks indexes **/
db.getCollection("fs.chunks").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** fs.chunks indexes **/
db.getCollection("fs.chunks").ensureIndex({
  "files_id": NumberLong(1),
  "n": NumberLong(1)
},{
  "unique": true
});

/** fs.files indexes **/
db.getCollection("fs.files").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** hienthi indexes **/
db.getCollection("hienthi").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** nhamay indexes **/
db.getCollection("nhamay").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** nhamayrauqua indexes **/
db.getCollection("nhamayrauqua").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** nongtrai indexes **/
db.getCollection("nongtrai").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** nongtrai indexes **/
db.getCollection("nongtrai").ensureIndex({
  "_fts": "text",
  "_ftsx": NumberInt(1)
},[
  
]);

/** nongtrairauqua indexes **/
db.getCollection("nongtrairauqua").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** nongtrairauqua indexes **/
db.getCollection("nongtrairauqua").ensureIndex({
  "_fts": "text",
  "_ftsx": NumberInt(1)
},[
  
]);

/** nongtraitrung indexes **/
db.getCollection("nongtraitrung").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** nongtraitrung indexes **/
db.getCollection("nongtraitrung").ensureIndex({
  "_fts": "text",
  "_ftsx": NumberInt(1)
},[
  
]);

/** sessions indexes **/
db.getCollection("sessions").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** users indexes **/
db.getCollection("users").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** banle records **/
db.getCollection("banle").insert({
  "_id": ObjectId("590034c8835e6f00073869fa"),
  "id_donggoi": ObjectId("58f71edad89398d40d000029"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T05:48:56.539Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banle").insert({
  "_id": ObjectId("59003553835e6f87073869f9"),
  "id_donggoi": ObjectId("59003529835e6fff063869f9"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T05:51:15.909Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banle").insert({
  "_id": ObjectId("59003693835e6fff063869fa"),
  "id_donggoi": ObjectId("5900366f835e6f30063869fa"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T05:56:35.278Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banle").insert({
  "_id": ObjectId("590042bf835e6fea043869fa"),
  "id_donggoi": ObjectId("590042a8835e6ffc063869fa"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T06:48:31.889Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banle").insert({
  "_id": ObjectId("59004342835e6ffc063869fb"),
  "id_donggoi": ObjectId("5900432b835e6f42083869fa"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T06:50:42.580Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banle").insert({
  "_id": ObjectId("590043bc835e6f3a083869fa"),
  "id_donggoi": ObjectId("590043b1835e6f00073869fb"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T06:52:44.879Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banle").insert({
  "_id": ObjectId("59004469835e6f49083869f9"),
  "id_donggoi": ObjectId("5900445b835e6f00073869fd"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T06:55:37.876Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banle").insert({
  "_id": ObjectId("590044f8835e6fff063869fb"),
  "id_donggoi": ObjectId("590044de835e6f3a083869fc"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T06:58:00.616Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banle").insert({
  "_id": ObjectId("59004670835e6f60083869f9"),
  "id_donggoi": ObjectId("59004666835e6fea043869fc"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:04:16.719Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banle").insert({
  "_id": ObjectId("590046d9835e6f37083869fc"),
  "id_donggoi": ObjectId("590046cd835e6f3e083869f9"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:06:01.574Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banle").insert({
  "_id": ObjectId("59004740835e6fff063869fc"),
  "id_donggoi": ObjectId("59004736835e6f49083869fc"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:07:44.468Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banle").insert({
  "_id": ObjectId("59004796835e6f77083869fa"),
  "id_donggoi": ObjectId("5900478d835e6f3a083869ff"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:09:10.847Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banle").insert({
  "_id": ObjectId("590047ec835e6f37083869fd"),
  "id_donggoi": ObjectId("590047e4835e6f80083869f9"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:10:36.672Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banle").insert({
  "_id": ObjectId("5900485e835e6f81083869f9"),
  "id_donggoi": ObjectId("59004842835e6fff063869fe"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:12:30.348Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banle").insert({
  "_id": ObjectId("59004941835e6f42083869fd"),
  "id_donggoi": ObjectId("59004938835e6fea043869ff"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:16:17.227Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banle").insert({
  "_id": ObjectId("593a73f6c12583de43b91763"),
  "id_donggoi": ObjectId("593a73dcc12583ed45b91760"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:09:58.34Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("banle").insert({
  "_id": ObjectId("593a743ec12583a641b91761"),
  "id_donggoi": ObjectId("593a7430c125839741b91763"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:11:10.22Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("banle").insert({
  "_id": ObjectId("593a747dc12583dc43b91763"),
  "id_donggoi": ObjectId("593a7477c125839741b91764"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:12:13.889Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("banle").insert({
  "_id": ObjectId("593a74e5c12583ed45b91761"),
  "id_donggoi": ObjectId("593a74dec12583a641b91763"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:13:57.897Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("banle").insert({
  "_id": ObjectId("593a7ca4c12583d247b91762"),
  "id_donggoi": ObjectId("593a7c97c12583df43b91762"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:47:00.12Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("banle").insert({
  "_id": ObjectId("593a7ce5c12583d247b91763"),
  "id_donggoi": ObjectId("593a7cdac125837d49b91762"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:48:05.894Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("banle").insert({
  "_id": ObjectId("593a7da5c12583d247b91764"),
  "id_donggoi": ObjectId("593a7d9cc12583df43b91763"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:51:17.944Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("banle").insert({
  "_id": ObjectId("593a7e53c125837d49b91763"),
  "id_donggoi": ObjectId("593a7e49c125837a49b91763"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:54:11.416Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});

/** banlerauqua records **/
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("58fdc50f835e6fd3711ef938"),
  "id_donggoirauqua": ObjectId("58fdc4f7835e6fea701ef94c"),
  "id_dmbanle": [
    "58f9796e835e6f5a4d8b4567"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-24T09:27:43.559Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("58fdc61c835e6fd3711ef939"),
  "id_donggoirauqua": ObjectId("58fdc4f7835e6fea701ef94c"),
  "id_dmbanle": [
    "58f2e890d893986c0f00002b"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-24T09:32:12.842Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("59000f39835e6ff4043869fa"),
  "id_donggoirauqua": ObjectId("59000e4a835e6f38063869f9"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T03:08:41.390Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("59001182835e6f4c063869f9"),
  "id_donggoirauqua": ObjectId("59001160835e6f45063869fa"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T03:18:26.394Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("59004b28835e6f3708386a01"),
  "id_donggoirauqua": ObjectId("59004b18835e6f80083869fb"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:24:24.215Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("59004b9e835e6f77083869fc"),
  "id_donggoirauqua": ObjectId("59004b95835e6f42083869fe"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:26:22.569Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("59004bfc835e6f80083869fc"),
  "id_donggoirauqua": ObjectId("59004bf4835e6f3708386a02"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:27:56.740Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("59004c4b835e6f98083869f9"),
  "id_donggoirauqua": ObjectId("59004c43835e6f60083869fd"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:29:15.561Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("59004cd0835e6f3708386a04"),
  "id_donggoirauqua": ObjectId("59004cc4835e6f9b083869f9"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:31:28.163Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("59004d35835e6f60083869fe"),
  "id_donggoirauqua": ObjectId("59004d2c835e6fff06386a00"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:33:09.235Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("59004fad835e6f80083869fe"),
  "id_donggoirauqua": ObjectId("59004f9e835e6f9b083869fa"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:43:41.985Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("59005005835e6f7c083869fa"),
  "id_donggoirauqua": ObjectId("59004ff8835e6f8f083869fa"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:45:09.109Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("59005055835e6fff06386a02"),
  "id_donggoirauqua": ObjectId("59005046835e6f3708386a05"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:46:29.114Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("590050a3835e6f98083869fb"),
  "id_donggoirauqua": ObjectId("59005096835e6f7c083869fb"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:47:47.233Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("59005114835e6f7c083869fc"),
  "id_donggoirauqua": ObjectId("5900510c835e6f8f083869fc"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:49:40.689Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("59005168835e6fff06386a03"),
  "id_donggoirauqua": ObjectId("5900515e835e6f3708386a06"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:51:04.251Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("592eeb66c12583802f4556c3"),
  "id_donggoirauqua": ObjectId("592eeb5dc12583da1e4556c5"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-31T16:12:22.734Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("593a71ccc125838e41b91762"),
  "id_donggoirauqua": ObjectId("593a71b1c125831b44b9175f"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:00:44.552Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("593a7219c125838e41b91763"),
  "id_donggoirauqua": ObjectId("593a7212c125839741b91760"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:02:01.181Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("593a724dc12583ee45b9175f"),
  "id_donggoirauqua": ObjectId("593a7247c12583d943b91762"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:02:53.796Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("593a72b8c12583ee45b91760"),
  "id_donggoirauqua": ObjectId("593a72adc12583de43b91760"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:04:40.658Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("593a72eec12583de43b91761"),
  "id_donggoirauqua": ObjectId("593a72e7c125831b44b91760"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:05:34.442Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("593a79f9c125837449b9175f"),
  "id_donggoirauqua": ObjectId("593a798bc12583a248b9175f"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:35:37.459Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("593a7b7bc125837d49b91760"),
  "id_donggoirauqua": ObjectId("593a7b3dc125837449b91760"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:42:03.218Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("593a7bb5c125837d49b91761"),
  "id_donggoirauqua": ObjectId("593a7baec125837449b91761"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:43:01.335Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("banlerauqua").insert({
  "_id": ObjectId("593a7bffc12583d247b91761"),
  "id_donggoirauqua": ObjectId("593a7bf8c125837649b9175f"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:44:15.406Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});

/** banletrung records **/
db.getCollection("banletrung").insert({
  "_id": ObjectId("58fdc49d835e6fd3711ef936"),
  "id_donggoitrung": ObjectId("58fd8436835e6f416f1ef936"),
  "id_dmbanle": [
    "58f9796e835e6f5a4d8b4567"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-24T09:25:49.889Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58f074f8d893983c0b000029"),
  "lock": NumberLong(1)
});
db.getCollection("banletrung").insert({
  "_id": ObjectId("592ec8c2c12583eb1e4556c1"),
  "id_donggoitrung": ObjectId("592ec672c1258339174556c1"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-31T13:44:34.576Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("banletrung").insert({
  "_id": ObjectId("593a6660c12583af3fb91760"),
  "id_donggoitrung": ObjectId("593a6618c12583af3fb9175f"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T09:12:00.341Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("banletrung").insert({
  "_id": ObjectId("593a6781c125830240b9175f"),
  "id_donggoitrung": ObjectId("593a676fc12583b53fb9175f"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T09:16:49.682Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("banletrung").insert({
  "_id": ObjectId("593a67cbc12583ac3fb91760"),
  "id_donggoitrung": ObjectId("593a67c1c125836640b9175f"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T09:18:03.851Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("banletrung").insert({
  "_id": ObjectId("593a67ffc125836640b91760"),
  "id_donggoitrung": ObjectId("593a67f3c125836440b91760"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T09:18:55.814Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("banletrung").insert({
  "_id": ObjectId("593a683bc12583ae3fb9175f"),
  "id_donggoitrung": ObjectId("593a6834c125830240b91760"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T09:19:55.308Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("banletrung").insert({
  "_id": ObjectId("593a70e4c12583dc43b9175f"),
  "id_donggoitrung": ObjectId("593a69ebc12583ae3fb91760"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T09:56:52.302Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("banletrung").insert({
  "_id": ObjectId("593a7617c125834147b9175f"),
  "id_donggoitrung": ObjectId("593a760ac12583a641b91766"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:19:03.202Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("banletrung").insert({
  "_id": ObjectId("593a7642c125831b44b91761"),
  "id_donggoitrung": ObjectId("593a763ac12583eb47b9175f"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:19:46.285Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("banletrung").insert({
  "_id": ObjectId("593a7725c125834147b91760"),
  "id_donggoitrung": ObjectId("593a7669c12583eb47b91760"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:23:33.508Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("banletrung").insert({
  "_id": ObjectId("5a4b5574c809de4b1456198b"),
  "id_donggoitrung": ObjectId("5a4b5551c809de021556198a"),
  "id_dmbanle": [
    "59000f19835e6f5e063869fa"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2018-01-02T09:48:36.888Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});

/** config records **/
db.getCollection("config").insert({
  "_id": ObjectId("5940e91fa401839c2100002b"),
  "title": "FARM TRACEWEB",
  "text": "FARM TRACEWEB",
  "image": ObjectId("596c960fc12583e2703fbaf5")
});

/** danhmucbanle records **/
db.getCollection("danhmucbanle").insert({
  "_id": ObjectId("58f2e890d893986c0f00002b"),
  "ten": "CO.OPMART NGUYỄN ĐÌNH CHIỂU",
  "diachi": "168 Nguyễn Đình Chiểu, P.6, Q.3, TPHCM"
});
db.getCollection("danhmucbanle").insert({
  "_id": ObjectId("58f2e8d5d893986c0f00002c"),
  "ten": "AEON MALL BÌNH TÂN",
  "diachi": "Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM"
});
db.getCollection("danhmucbanle").insert({
  "_id": ObjectId("58f9796e835e6f5a4d8b4567"),
  "ten": "CO.OPMART NGUYỄN KIỆM",
  "diachi": "571-573 Nguyễn Kiệm, Phường 9, Quận Phú Nhuận, TPHCM"
});
db.getCollection("danhmucbanle").insert({
  "_id": ObjectId("59000f19835e6f5e063869fa"),
  "ten": "CTY CỔ PHẦN NOVA SAFE FOODS",
  "diachi": "315 Nam Kỳ Khởi Nghĩa, P.7, Q.3, HCM"
});

/** danhmuccongty records **/
db.getCollection("danhmuccongty").insert({
  "_id": ObjectId("58f074f8d893983c0b000029"),
  "ten": "14812 - CÔNG TY CỔ PHẦN ANOVA SAFE FOOD",
  "diachi": "315 Nam Kỳ Khởi Nghĩa, P.7, Q.7, HCM",
  "title": "ANOVA SAFE FOODS"
});
db.getCollection("danhmuccongty").insert({
  "_id": ObjectId("591d6c69c12583e352f65fd6"),
  "ten": "00000 - TRỤ SỞ CHÍNH",
  "diachi": "315 Nam Kỳ Khởi Nghĩa, Phường 07, Quận 3, Thành phố Hồ Chí Minh, Việt Nam",
  "title": "Thay đổi danh mục cty\\tên hiển thị"
});
db.getCollection("danhmuccongty").insert({
  "_id": ObjectId("591ed2f4c12583ae4b3ae568"),
  "ten": "00000 - CÔNG TY TNHH TM DV SẢN XUẤT VÀ CHĂN NUÔI THANH ĐỨC",
  "diachi": "Tổ 3, ấp Bình Hòa, xã Xuân Phú, Xuân Lộc, Đồng Nai",
  "title": ""
});
db.getCollection("danhmuccongty").insert({
  "_id": ObjectId("591d6c69c12583e352f6608b"),
  "ten": "23233 - CÔNG TY CỔ PHẦN NOVA SAFE FOODS",
  "diachi": "315 Nam Kỳ Khởi Nghĩa, P.7, Q.7, HCM",
  "title": "NOVA SAFE FOODS"
});
db.getCollection("danhmuccongty").insert({
  "_id": ObjectId("58fd6e23835e6f186f1ef936"),
  "ten": "12981 - CÔNG TY CỔ PHẦN ANOVA FARM",
  "diachi": "315 Nam Kỳ Khởi Nghĩa, F7, Q3, TP.HCM",
  "title": ""
});
db.getCollection("danhmuccongty").insert({
  "_id": ObjectId("58f0801dd89398440b00002b"),
  "ten": "23638 - CÔNG TY CỔ PHẦN CO-OP NOVA SAFE FOODS",
  "diachi": "Căn hộ số 4.02, tầng 5(lầu 4), khối tháp V5 & V6, KCC Sunrise City, Khu South Towers- số 23 Nguyễn Hữu Thọ, P.Tân Hưng, Q.7, Tp.HCM",
  "title": ""
});
db.getCollection("danhmuccongty").insert({
  "_id": ObjectId("591ed750c125837a523ae568"),
  "ten": "00000 - NÔNG TRẠI LONG THÀNH",
  "diachi": "Nông trại Long Thành",
  "title": ""
});

/** danhmucnhamay records **/
db.getCollection("danhmucnhamay").insert({
  "_id": ObjectId("58f07ffcd89398440b00002a"),
  "ten": "Nhà máy chế biến và xử lý trứng gia cầm Ba Huân",
  "diachi": "E9/199E Thế Lữ, Tân Nhựt, Bình Chánh, TP.HCM",
  "id_congty": ObjectId("58f0801dd89398440b00002b")
});
db.getCollection("danhmucnhamay").insert({
  "_id": ObjectId("58f770687247ae140f00002b"),
  "ten": "Nhà máy giết mổ Le Boucher",
  "diachi": "Ấp Bình Thạnh, Xã Bình Tịnh, Huyện Tân Trụ, Tỉnh Long An, Viet Nam",
  "id_congty": ObjectId("58f0801dd89398440b00002b")
});
db.getCollection("danhmucnhamay").insert({
  "_id": ObjectId("58fdc6e7835e6f71711ef93a"),
  "ten": "Hợp tác xã nông nghiệp tổng hợp Anh Đào CO-OP",
  "diachi": "32C Nguyễn Công Trứ - Phường 2 - Tp Đà Lạt - Lâm Đồng",
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("danhmucnhamay").insert({
  "_id": ObjectId("590009eb835e6ff4043869f9"),
  "ten": "Đồng Xanh Farm",
  "diachi": "P.7, Tp. Đà Lạt, Tỉnh Lâm Đồng",
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("danhmucnhamay").insert({
  "_id": ObjectId("591ed340c125832f483ae568"),
  "ten": "Công ty TNHH TM DV Sản Xuất Và Chăn Nuôi Thanh Đức",
  "diachi": "Tổ 3, Ấp Bình Hòa, Xã Xuân Phú, Xuân Lộc, Đồng Nai",
  "id_congty": ObjectId("591ed2f4c12583ae4b3ae568")
});
db.getCollection("danhmucnhamay").insert({
  "_id": ObjectId("591ed7c9c125833b483ae568"),
  "ten": "Công ty TNHH TM DV Sản Xuất Và Chăn Nuôi Thanh Đức",
  "diachi": "Tổ 3, Ấp Bình Hòa, Xã Xuân Phú, Xuân Lộc, Đồng Nai",
  "id_congty": ObjectId("591ed2f4c12583ae4b3ae568")
});

/** danhmucnongtrai records **/
db.getCollection("danhmucnongtrai").insert({
  "_id": ObjectId("58f081fcd89398440b00002c"),
  "ten": "Trại gà đẻ Ba Huân, bình dương",
  "diachi": "Bình Dương",
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("danhmucnongtrai").insert({
  "_id": ObjectId("58f0820ad89398440b00002d"),
  "ten": "Hợp tác xã nông nghiệp tổng hợp Anh Đào CO-OP",
  "diachi": "32 C Nguyễn Công Trứ - Phường 2 - Tp Đà Lạt - Lâm Đồng",
  "id_congty": ObjectId("58f0801dd89398440b00002b")
});
db.getCollection("danhmucnongtrai").insert({
  "_id": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "ten": "Công ty cổ phần Anova Farm, Trại chăn nuôi Bảo Huy",
  "diachi": "Ấp 2, Xã Bưng Riềng, Huyện Xuyên Mộc, Tỉnh Bà Rịa – Vũng Tàu",
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("danhmucnongtrai").insert({
  "_id": ObjectId("58fef103835e6f027c3869f9"),
  "ten": "Đồng Xanh Farm",
  "diachi": "P.7, Tp. Đà Lạt, Tỉnh Lâm Đồng",
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("danhmucnongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f65fd5"),
  "ten": "Trại Bưng Riềng",
  "diachi": "xã Bưng Riềng, huyện Xuyên Mộc, tỉnh Bà Rịa Vũng Tàu, Việt Nam",
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("danhmucnongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f65fd9"),
  "ten": "Trại Tân Thắng",
  "diachi": "Thôn Hàm Thắng, xã Tân Thắng, huyện Hàm Tân, tỉnh Bình Thuận, Viêt Nam",
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("danhmucnongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f6608a"),
  "ten": "Bưng Riềng",
  "diachi": "Bình Thuận",
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("danhmucnongtrai").insert({
  "_id": ObjectId("591d6c6ac12583e352f6608d"),
  "ten": "Trại chăn nuôi Bảo Huy, Công ty cổ phần Anova Farm",
  "diachi": "Ấp 2, Xã Bưng Riềng, Huyện Xuyên Mộc, Tỉnh Bà Rịa – Vũng Tàu",
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("danhmucnongtrai").insert({
  "_id": ObjectId("591d6c6ac12583e352f6609f"),
  "ten": "Trại chăn nuôi Ngọc Minh Anh, Công ty cổ phần Anova Farm",
  "diachi": "Tổ 5, Thôn Hàm Thắng, Xã Tân Thắng, Huyện Hàm Tân, Tỉnh Bình Thuận",
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("danhmucnongtrai").insert({
  "_id": ObjectId("591ed31cc12583ab4d3ae568"),
  "ten": "Trại gà Thanh Đức",
  "diachi": "Tổ 3, Ấp Bình Hòa, Xã Xuân Phú, Xuân Lộc, Đồng Nai",
  "id_congty": ObjectId("591ed2f4c12583ae4b3ae568")
});
db.getCollection("danhmucnongtrai").insert({
  "_id": ObjectId("591ed7a1c1258380523ae568"),
  "ten": "Nông trại Long Thành",
  "diachi": "Tổ 3, Ấp Bình Hòa, Xã Xuân Phú, Xuân Lộc, Đồng Nai",
  "id_congty": ObjectId("591ed2f4c12583ae4b3ae568")
});
db.getCollection("danhmucnongtrai").insert({
  "_id": ObjectId("592fe2aac12583491d95002f"),
  "ten": "Trại bò Quảng Ngãi",
  "diachi": "Quảng Ngãi",
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});

/** donggoi records **/
db.getCollection("donggoi").insert({
  "_id": ObjectId("59003529835e6fff063869f9"),
  "id_nhamay": ObjectId("58f71da4d89398f408000029"),
  "tensanpham": "Thịt đùi",
  "quicachdonggoi": "500g/hộp",
  "solo": "090517001",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "12345",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-05-08T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T05:50:33.262Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("5900366f835e6f30063869fa"),
  "id_nhamay": ObjectId("58f71da4d89398f408000029"),
  "tensanpham": "Thịt vai",
  "quicachdonggoi": "500g/hộp",
  "solo": "090517001",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "12345",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-05-08T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T05:55:59.731Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("590042a8835e6ffc063869fa"),
  "id_nhamay": ObjectId("58f71da4d89398f408000029"),
  "tensanpham": "Thịt nạc dăm",
  "quicachdonggoi": "500g/hộp",
  "solo": "090517001",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "12345",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-05-08T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T06:48:08.875Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("5900432b835e6f42083869fa"),
  "id_nhamay": ObjectId("58f71da4d89398f408000029"),
  "tensanpham": "Nạc đùi",
  "quicachdonggoi": "500g/hộp",
  "solo": "090517001",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "12345",
  "ngaygiogietmo": ISODate("2017-05-08T17:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-05-08T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T06:50:19.766Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("590043b1835e6f00073869fb"),
  "id_nhamay": ObjectId("58f71da4d89398f408000029"),
  "tensanpham": "Thăn nội",
  "quicachdonggoi": "500g/hộp",
  "solo": "090517001",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "12345",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-05-08T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T06:52:33.338Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("5900445b835e6f00073869fd"),
  "id_nhamay": ObjectId("58f71da4d89398f408000029"),
  "tensanpham": "Cốt lết",
  "quicachdonggoi": "500g/hộp",
  "solo": "090517001",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "12345",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-05-08T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T06:55:23.401Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("590044de835e6f3a083869fc"),
  "id_nhamay": ObjectId("58f71da4d89398f408000029"),
  "tensanpham": "Ba rọi (ba chỉ)",
  "quicachdonggoi": "500g/hộp",
  "solo": "090517001",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "12345",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-05-08T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T06:57:34.562Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("59004583835e6f5f083869f9"),
  "id_nhamay": ObjectId("58f71da4d89398f408000029"),
  "tensanpham": "Sườn non",
  "quicachdonggoi": "500g/hộp",
  "solo": "090517001",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "12345",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-05-08T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:00:19.266Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("59004666835e6fea043869fc"),
  "id_nhamay": ObjectId("58f71da4d89398f408000029"),
  "tensanpham": "Sườn già",
  "quicachdonggoi": "500g/hộp",
  "solo": "090517001",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "12345",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-05-08T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:04:06.911Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("590046cd835e6f3e083869f9"),
  "id_nhamay": ObjectId("58f71da4d89398f408000029"),
  "tensanpham": "Xương đuôi",
  "quicachdonggoi": "500g/hộp",
  "solo": "090517001",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "12345",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-05-08T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:05:49.696Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("59004736835e6f49083869fc"),
  "id_nhamay": ObjectId("58f71da4d89398f408000029"),
  "tensanpham": "Chân bắp giò",
  "quicachdonggoi": "500g/hộp",
  "solo": "090517001",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "12345",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-05-08T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:07:34.870Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("5900478d835e6f3a083869ff"),
  "id_nhamay": ObjectId("58f71da4d89398f408000029"),
  "tensanpham": "Xương ống",
  "quicachdonggoi": "500g/hộp",
  "solo": "090517001",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "12345",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-05-08T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:09:01.197Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("590047e4835e6f80083869f9"),
  "id_nhamay": ObjectId("58f71da4d89398f408000029"),
  "tensanpham": "Giò heo rút xương",
  "quicachdonggoi": "500g/hộp",
  "solo": "090517001",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "12345",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-05-08T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:10:28.261Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("59004842835e6fff063869fe"),
  "id_nhamay": ObjectId("58f71da4d89398f408000029"),
  "tensanpham": "Dựng heo",
  "quicachdonggoi": "500g/hộp",
  "solo": "090517001",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "12345",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-05-08T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:12:02.543Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("59004938835e6fea043869ff"),
  "id_nhamay": ObjectId("58f71da4d89398f408000029"),
  "tensanpham": "Thịt xay",
  "quicachdonggoi": "500g/hộp",
  "solo": "090517001",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "12345",
  "ngaygiogietmo": ISODate("2017-05-08T17:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-05-08T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:16:08.433Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("58f71edad89398d40d000029"),
  "id_nhamay": ObjectId("58f71da4d89398f408000029"),
  "tensanpham": "Nạc đùi",
  "quicachdonggoi": "500g/hộp",
  "solo": "090517001",
  "tieuchuan": "HACCP",
  "sochungnhantieuchuan": "1239867",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-05-08T17:00:00.0Z"),
  "hansudung": "2 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-19T08:24:58.0Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("58f9788a835e6fb14c8b4573"),
  "id_nhamay": ObjectId("58f71da4d89398f408000029"),
  "tensanpham": "Sườn non",
  "quicachdonggoi": "500g/hộp",
  "solo": "090517001",
  "tieuchuan": "HACCP",
  "sochungnhantieuchuan": "CNTC001",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-05-08T17:00:00.0Z"),
  "hansudung": "2 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-21T03:12:10.734Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("592ea8cfc1258325104556c1"),
  "id_nhamay": ObjectId("5900490f835e6f77083869fb"),
  "tensanpham": "Test",
  "quicachdonggoi": "Test",
  "solo": "Test-DGTest",
  "tieuchuan": "Test",
  "sochungnhantieuchuan": "Test",
  "ngaygiogietmo": ISODate("2017-05-30T23:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-05-30T23:00:00.0Z"),
  "hansudung": "Test",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-31T11:28:15.32Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("592eec25c12583da1e4556c7"),
  "id_nhamay": ObjectId("592eeba0c12583f22e4556c1"),
  "tensanpham": "Bó xôi",
  "quicachdonggoi": "500g/phần ",
  "solo": "31050017",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "12345",
  "ngaygiogietmo": ISODate("2017-05-30T23:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-05-30T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-31T16:15:33.183Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("593a73dcc12583ed45b91760"),
  "id_nhamay": ObjectId("593a73a8c12583a641b91760"),
  "tensanpham": "Thăn nội",
  "quicachdonggoi": "500g/phần ",
  "solo": "09060017",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaygiogietmo": ISODate("2017-06-08T23:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:09:32.446Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("593a7430c125839741b91763"),
  "id_nhamay": ObjectId("593a741fc12583ee45b91761"),
  "tensanpham": "Thịt nạc dăm",
  "quicachdonggoi": "500g/phần ",
  "solo": "09060017",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaygiogietmo": ISODate("2017-06-08T23:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:10:56.199Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("593a7477c125839741b91764"),
  "id_nhamay": ObjectId("593a745fc12583de43b91764"),
  "tensanpham": "Thịt vai",
  "quicachdonggoi": "500g/phần ",
  "solo": "09060017",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaygiogietmo": ISODate("2017-06-08T23:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:12:07.317Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("593a74dec12583a641b91763"),
  "id_nhamay": ObjectId("593a74cbc12583d943b91764"),
  "tensanpham": "Thịt xay",
  "quicachdonggoi": "500g/phần ",
  "solo": "09060017",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaygiogietmo": ISODate("2017-06-08T23:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:13:50.975Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("593a751bc12583de43b91765"),
  "id_nhamay": ObjectId("593a7506c12583d943b91765"),
  "tensanpham": "Ba rọi (ba chỉ)",
  "quicachdonggoi": "500g/phần ",
  "solo": "09060017",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaygiogietmo": ISODate("2017-06-08T23:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:14:51.64Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("593a7c97c12583df43b91762"),
  "id_nhamay": ObjectId("593a7c25c125837b49b91760"),
  "tensanpham": "Nạc đùi",
  "quicachdonggoi": "500g/phần ",
  "solo": "09060017",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaygiogietmo": ISODate("2017-06-08T23:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:46:47.481Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("593a7cdac125837d49b91762"),
  "id_nhamay": ObjectId("593a7cc1c125837a49b91760"),
  "tensanpham": "Dựng heo",
  "quicachdonggoi": "500g/phần ",
  "solo": "09060017",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaygiogietmo": ISODate("2017-06-08T23:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:47:54.704Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("593a7d9cc12583df43b91763"),
  "id_nhamay": ObjectId("593a7d7fc125837649b91760"),
  "tensanpham": "Giò heo rút xương",
  "quicachdonggoi": "500g/phần ",
  "solo": "09060017",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaygiogietmo": ISODate("2017-06-08T23:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:51:08.342Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("593a7e49c125837a49b91763"),
  "id_nhamay": ObjectId("593a7e13c12583a248b91760"),
  "tensanpham": "Chân, bắp, giò",
  "quicachdonggoi": "500g/phần ",
  "solo": "09060017",
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaygiogietmo": ISODate("2017-06-08T23:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:54:01.344Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});

/** donggoirauqua records **/
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("59000e4a835e6f38063869f9"),
  "tensanpham": "Cải ngọt",
  "quicachdonggoi": "450g/gói ",
  "solo": "150517001",
  "id_nhamayrauqua": ObjectId("59000d96835e6fc7023869fc"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-05-14T17:00:00.0Z"),
  "hansudung": "2 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-15T01:30:37.163Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("59001160835e6f45063869fa"),
  "tensanpham": "Cải thảo",
  "quicachdonggoi": "600g - 800g",
  "solo": "020517001",
  "id_nhamayrauqua": ObjectId("59001092835e6fc7023869fd"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-05-01T17:00:00.0Z"),
  "hansudung": "2 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:36:18.476Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("59004b18835e6f80083869fb"),
  "tensanpham": "Cải thìa",
  "quicachdonggoi": "450g/gói ",
  "solo": "150517001",
  "id_nhamayrauqua": ObjectId("59004adc835e6f3708386a00"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-05-14T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-15T01:31:11.819Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("59004b95835e6f42083869fe"),
  "tensanpham": "Bó xôi",
  "quicachdonggoi": "450g/gói ",
  "solo": "020517001",
  "id_nhamayrauqua": ObjectId("59004b75835e6f7c083869f9"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-05-01T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:36:49.326Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("59004bf4835e6f3708386a02"),
  "tensanpham": "Rau muống baby",
  "quicachdonggoi": "300g/gói",
  "solo": "050517001",
  "id_nhamayrauqua": ObjectId("59004bcc835e6f87083869f9"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-05-04T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:37:18.588Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("59004c43835e6f60083869fd"),
  "tensanpham": "Rau dền mini",
  "quicachdonggoi": "300g/gói",
  "solo": "050517001",
  "id_nhamayrauqua": ObjectId("59004c27835e6f60083869fc"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-05-04T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:37:36.720Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("59004cc4835e6f9b083869f9"),
  "tensanpham": "Mồng tơi mini",
  "quicachdonggoi": "300g/gói",
  "solo": "050517001",
  "id_nhamayrauqua": ObjectId("59004c84835e6f9c083869f9"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-05-04T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:38:00.852Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("59004d2c835e6fff06386a00"),
  "tensanpham": "Xà lách lô lô",
  "quicachdonggoi": "450g/gói ",
  "solo": "120517001",
  "id_nhamayrauqua": ObjectId("59004cfd835e6fff063869ff"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "N/A",
  "sochungnhantieuchuan": "N/A",
  "ngaydonggoi": ISODate("2017-05-11T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-11T07:27:42.453Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("59004f9e835e6f9b083869fa"),
  "tensanpham": "Bắp cải",
  "quicachdonggoi": "cây, bọc màng co",
  "solo": "020517001",
  "id_nhamayrauqua": ObjectId("59004f71835e6f98083869fa"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-05-01T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:39:15.490Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("59004ff8835e6f8f083869fa"),
  "tensanpham": "Cà chua",
  "quicachdonggoi": "500g/hộp ",
  "solo": "150517001",
  "id_nhamayrauqua": ObjectId("59004fd8835e6f9c083869fa"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-05-14T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-15T01:29:59.999Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("59005046835e6f3708386a05"),
  "tensanpham": "Bầu sao",
  "quicachdonggoi": "trái, bọc màng co",
  "solo": "020517001",
  "id_nhamayrauqua": ObjectId("5900502e835e6f9b083869fb"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-05-01T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:39:41.880Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("59005096835e6f7c083869fb"),
  "tensanpham": "Cà rốt",
  "quicachdonggoi": "500g/khay",
  "solo": "050517001",
  "id_nhamayrauqua": ObjectId("5900507c835e6f8f083869fb"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-05-08T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-17T07:58:44.108Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("5900510c835e6f8f083869fc"),
  "tensanpham": "Khoai tây",
  "quicachdonggoi": "500g/khay ",
  "solo": "120517001",
  "id_nhamayrauqua": ObjectId("590050ef835e6f9c083869fc"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "N/A",
  "sochungnhantieuchuan": "N/A",
  "ngaydonggoi": ISODate("2017-05-11T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-11T07:27:59.319Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("5900515e835e6f3708386a06"),
  "tensanpham": "Hành tây",
  "quicachdonggoi": "túi lưới",
  "solo": "020517001",
  "id_nhamayrauqua": ObjectId("59005143835e6f98083869fc"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-05-01T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:40:15.852Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("5913e143835e6f65188b4567"),
  "tensanpham": "Thanh long",
  "quicachdonggoi": "2trái/khay ",
  "solo": "120517001",
  "id_nhamayrauqua": ObjectId("5913e103835e6f6a188b4567"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "N/A",
  "sochungnhantieuchuan": "N/A",
  "ngaydonggoi": ISODate("2017-05-11T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-11T07:24:49.843Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("58fdc4f7835e6fea701ef94c"),
  "tensanpham": "Bí xanh",
  "quicachdonggoi": "1kg/gói",
  "solo": "000189",
  "id_nhamayrauqua": ObjectId("58fdc407835e6fd0711ef93e"),
  "id_dmnhamay": ObjectId("58fdc6e7835e6f71711ef93a"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-05-08T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:43:28.920Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("58fdc5fb835e6f71711ef939"),
  "tensanpham": "Cải bẹ xanh",
  "quicachdonggoi": "450g/gói ",
  "solo": "090517001",
  "id_nhamayrauqua": ObjectId("58fdc5a0835e6f0f721ef936"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-05-08T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:43:36.573Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("591ed99fc12583cb563ae569"),
  "tensanpham": "Gạo",
  "quicachdonggoi": "5kg/gói",
  "solo": "N/A",
  "id_nhamayrauqua": ObjectId("591ed845c12583ab4d3ae569"),
  "id_dmnhamay": ObjectId("591ed7c9c125833b483ae568"),
  "tieuchuan": "N/A",
  "sochungnhantieuchuan": "N/A",
  "ngaydonggoi": ISODate("2017-05-18T23:00:00.0Z"),
  "hansudung": "3 tháng từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-19T11:40:15.699Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("592eeb5dc12583da1e4556c5"),
  "tensanpham": "Bó xôi",
  "quicachdonggoi": "500g/phần ",
  "solo": "31050017",
  "id_nhamayrauqua": ObjectId("592eeb40c12583ab344556c1"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-05-30T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-31T16:12:13.917Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("593a71b1c125831b44b9175f"),
  "tensanpham": "Bó xôi",
  "quicachdonggoi": "500g/phần ",
  "solo": "09060017",
  "id_nhamayrauqua": ObjectId("593a7198c12583ae3fb91761"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:00:17.419Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("593a7212c125839741b91760"),
  "tensanpham": "Bắp cải",
  "quicachdonggoi": "500g/phần ",
  "solo": "09060017",
  "id_nhamayrauqua": ObjectId("593a71fec12583d943b91761"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:01:54.48Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("593a7247c12583d943b91762"),
  "tensanpham": "Khoai tây",
  "quicachdonggoi": "500g/phần ",
  "solo": "09060017",
  "id_nhamayrauqua": ObjectId("593a7237c12583de43b9175f"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:02:47.57Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("593a72adc12583de43b91760"),
  "tensanpham": "Bắp cải thảo",
  "quicachdonggoi": "500g/phần ",
  "solo": "09060017",
  "id_nhamayrauqua": ObjectId("593a7295c12583dc43b91760"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:04:29.385Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("593a72e7c125831b44b91760"),
  "tensanpham": "Cải ngọt",
  "quicachdonggoi": "500g/phần ",
  "solo": "09060017",
  "id_nhamayrauqua": ObjectId("593a72d5c12583dc43b91761"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:05:27.941Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("593a798bc12583a248b9175f"),
  "tensanpham": "Cải thìa",
  "quicachdonggoi": "500g/phần ",
  "solo": "09060017",
  "id_nhamayrauqua": ObjectId("593a796cc125837c49b9175f"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:33:47.32Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("593a7b3dc125837449b91760"),
  "tensanpham": "Mồng tơi",
  "quicachdonggoi": "500g/phần ",
  "solo": "09060017",
  "id_nhamayrauqua": ObjectId("593a7b2cc125837a49b9175f"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:41:01.97Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("593a7baec125837449b91761"),
  "tensanpham": "Rau dền",
  "quicachdonggoi": "500g/phần ",
  "solo": "09060017",
  "id_nhamayrauqua": ObjectId("593a7b9fc12583a648b9175f"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:42:54.645Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("593a7bf8c125837649b9175f"),
  "tensanpham": "Rau muống",
  "quicachdonggoi": "500g/phần ",
  "solo": "09060017",
  "id_nhamayrauqua": ObjectId("593a7be5c12583a648b91760"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:44:08.604Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});

/** donggoitrung records **/
db.getCollection("donggoitrung").insert({
  "_id": ObjectId("58fd8436835e6f416f1ef936"),
  "id_nongtraitrung": ObjectId("58f72d80d89398e40f00002a"),
  "tensanpham": "Trứng gà",
  "quicachdonggoi": "6 trứng/hộp",
  "solo": "123456",
  "id_dmnhamay": ObjectId("58f07ffcd89398440b00002a"),
  "tieuchuan": "HACCP",
  "sochungnhantieuchuan": "12345",
  "ngaydonggoi": ISODate("2017-04-23T17:00:00.0Z"),
  "hansudung": "10 ngày ",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-24T10:15:17.845Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58f074f8d893983c0b000029"),
  "lock": NumberLong(0)
});
db.getCollection("donggoitrung").insert({
  "_id": ObjectId("591ed401c125839f4d3ae568"),
  "id_nongtraitrung": ObjectId("591ed392c1258390533ae568"),
  "tensanpham": "Trứng gà sạch",
  "quicachdonggoi": "10 trứng/hộp",
  "solo": "190517001",
  "id_dmnhamay": ObjectId("591ed340c125832f483ae568"),
  "tieuchuan": "N/A",
  "sochungnhantieuchuan": "N/A",
  "ngaydonggoi": ISODate("2017-05-18T23:00:00.0Z"),
  "hansudung": "14 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-19T11:16:17.185Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("donggoitrung").insert({
  "_id": ObjectId("592ec672c1258339174556c1"),
  "id_nongtraitrung": ObjectId("592ec62cc12583f4244556c2"),
  "tensanpham": "Trứng",
  "quicachdonggoi": "6 trứng/gói",
  "solo": "31050017",
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-05-30T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-31T13:34:42.115Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("donggoitrung").insert({
  "_id": ObjectId("593a6618c12583af3fb9175f"),
  "id_nongtraitrung": ObjectId("593a659cc125835904b9175f"),
  "tensanpham": "Trứng",
  "quicachdonggoi": "12 trứng / vĩ",
  "solo": "09060017",
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T09:10:48.210Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b"),
  "lock": NumberLong(0)
});
db.getCollection("donggoitrung").insert({
  "_id": ObjectId("593a676fc12583b53fb9175f"),
  "id_nongtraitrung": ObjectId("593a6759c125836740b9175f"),
  "tensanpham": "Trứng",
  "quicachdonggoi": "6 trứng / vĩ",
  "solo": "09060017",
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T09:16:31.353Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b"),
  "lock": NumberLong(0)
});
db.getCollection("donggoitrung").insert({
  "_id": ObjectId("593a67c1c125836640b9175f"),
  "id_nongtraitrung": ObjectId("593a67afc125836440b9175f"),
  "tensanpham": "Trứng",
  "quicachdonggoi": "6 trứng / vĩ",
  "solo": "09060017",
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T09:17:53.872Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b"),
  "lock": NumberLong(0)
});
db.getCollection("donggoitrung").insert({
  "_id": ObjectId("593a67f3c125836440b91760"),
  "id_nongtraitrung": ObjectId("593a67e4c12583af3fb91761"),
  "tensanpham": "Trứng",
  "quicachdonggoi": "12 trứng / vĩ",
  "solo": "09060017",
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T09:18:43.871Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b"),
  "lock": NumberLong(0)
});
db.getCollection("donggoitrung").insert({
  "_id": ObjectId("593a6834c125830240b91760"),
  "id_nongtraitrung": ObjectId("593a6816c12583ac3fb91761"),
  "tensanpham": "Trứng",
  "quicachdonggoi": "6 trứng / vĩ",
  "solo": "09060017",
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T09:19:48.539Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b"),
  "lock": NumberLong(0)
});
db.getCollection("donggoitrung").insert({
  "_id": ObjectId("593a69ebc12583ae3fb91760"),
  "id_nongtraitrung": ObjectId("593a69d5c125839741b9175f"),
  "tensanpham": "Trứng",
  "quicachdonggoi": "6 trứng / vĩ",
  "solo": "09060017",
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T09:27:07.204Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029"),
  "lock": NumberLong(0)
});
db.getCollection("donggoitrung").insert({
  "_id": ObjectId("593a760ac12583a641b91766"),
  "id_nongtraitrung": ObjectId("593a75ecc12583a641b91765"),
  "tensanpham": "Trứng",
  "quicachdonggoi": "12 trứng / vĩ",
  "solo": "09060017",
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:18:50.248Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029"),
  "lock": NumberLong(0)
});
db.getCollection("donggoitrung").insert({
  "_id": ObjectId("593a763ac12583eb47b9175f"),
  "id_nongtraitrung": ObjectId("593a762dc12583d247b9175f"),
  "tensanpham": "Trứng",
  "quicachdonggoi": "6 trứng / vĩ",
  "solo": "09060017",
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:19:38.482Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029"),
  "lock": NumberLong(0)
});
db.getCollection("donggoitrung").insert({
  "_id": ObjectId("593a7669c12583eb47b91760"),
  "id_nongtraitrung": ObjectId("593a7654c125839741b91765"),
  "tensanpham": "Trứng",
  "quicachdonggoi": "10 trứng / vĩ",
  "solo": "09060017",
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaydonggoi": ISODate("2017-06-08T23:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:20:25.318Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029"),
  "lock": NumberLong(0)
});
db.getCollection("donggoitrung").insert({
  "_id": ObjectId("5a466b8dc809def529d3b71e"),
  "id_nongtraitrung": ObjectId("5a466b39c809de0a36d3b71e"),
  "tensanpham": "heo ",
  "quicachdonggoi": "KG",
  "solo": "4567890",
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "GAP",
  "sochungnhantieuchuan": "GAP01",
  "ngaydonggoi": ISODate("2017-12-28T17:00:00.0Z"),
  "hansudung": "29/12/2018",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-12-29T16:21:33.813Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("donggoitrung").insert({
  "_id": ObjectId("5a466cdcc809de3b36d3b71e"),
  "id_nongtraitrung": ObjectId("5a466b39c809de0a36d3b71e"),
  "tensanpham": "San Pham GD2",
  "quicachdonggoi": "kg",
  "solo": "234567890-",
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "GAP",
  "sochungnhantieuchuan": "wdfgh",
  "ngaydonggoi": ISODate("2017-12-28T17:00:00.0Z"),
  "hansudung": "29/12/2018",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-12-29T16:27:08.483Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("donggoitrung").insert({
  "_id": ObjectId("5a466cf9c809def529d3b71f"),
  "id_nongtraitrung": ObjectId("593a7654c125839741b91765"),
  "tensanpham": "rthrty",
  "quicachdonggoi": "rtyr",
  "solo": "rty",
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "rty",
  "sochungnhantieuchuan": "rty",
  "ngaydonggoi": ISODate("2017-12-28T17:00:00.0Z"),
  "hansudung": "29/12/2017",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-12-29T16:27:37.762Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("donggoitrung").insert({
  "_id": ObjectId("5a4b47d3c809de546f56198b"),
  "id_nongtraitrung": ObjectId("5a4b4767c809de371556198a"),
  "tensanpham": "TR06.0001",
  "quicachdonggoi": "Hộp 6 Trứng",
  "solo": "Lo.1801.0001",
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "GLOB",
  "sochungnhantieuchuan": "GLOB.01-1",
  "ngaydonggoi": ISODate("2018-01-01T17:00:00.0Z"),
  "hansudung": "15 ngày",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2018-01-02T08:50:27.300Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("donggoitrung").insert({
  "_id": ObjectId("5a4b5489c809de371556198b"),
  "id_nongtraitrung": ObjectId("5a4b5454c809de4b1456198a"),
  "tensanpham": "Trứng vịt",
  "quicachdonggoi": "12 trứng / vĩ",
  "solo": "123456",
  "id_dmnhamay": ObjectId("58f07ffcd89398440b00002a"),
  "tieuchuan": "Global Gap",
  "sochungnhantieuchuan": "123456",
  "ngaydonggoi": ISODate("2018-01-01T17:00:00.0Z"),
  "hansudung": "2 tuần",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2018-01-02T09:44:41.809Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("donggoitrung").insert({
  "_id": ObjectId("5a4b5510c809de1a3156198a"),
  "id_nongtraitrung": ObjectId("5a4b5454c809de4b1456198a"),
  "tensanpham": "Trứng vịt",
  "quicachdonggoi": "12 trứng / vĩ",
  "solo": "123456",
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "Global Gap",
  "sochungnhantieuchuan": "123456",
  "ngaydonggoi": ISODate("2018-01-01T17:00:00.0Z"),
  "hansudung": "2 tuần",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2018-01-02T09:46:56.811Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("donggoitrung").insert({
  "_id": ObjectId("5a4b5551c809de021556198a"),
  "id_nongtraitrung": ObjectId("5a4b5454c809de4b1456198a"),
  "tensanpham": "Trứng vịt",
  "quicachdonggoi": "12 trứng / vĩ",
  "solo": "123456",
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "Global Gap",
  "sochungnhantieuchuan": "123456",
  "ngaydonggoi": ISODate("2018-01-01T17:00:00.0Z"),
  "hansudung": "2 tuần",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2018-01-02T09:48:01.111Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});

/** fs.chunks records **/
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4568"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4569"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(1),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b456a"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(2),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b456b"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(3),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b456c"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(4),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b456d"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(5),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b456e"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(6),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b456f"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(7),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4570"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(8),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4571"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(9),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4572"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(10),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4573"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(11),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4574"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(12),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4575"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(13),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4576"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(14),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4577"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(15),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4578"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(16),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4579"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(17),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b457a"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(18),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b457b"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(19),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b457c"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(20),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b457d"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(21),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b457e"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(22),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b457f"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(23),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4580"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(24),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4581"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(25),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4582"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(26),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4583"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(27),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4584"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(28),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4585"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(29),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4586"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(30),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4587"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(31),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4588"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(32),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4589"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(33),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b458a"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(34),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b458b"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(35),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b458c"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(36),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b458d"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(37),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b458e"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(38),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b458f"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(39),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4590"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(40),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4591"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(41),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4592"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(42),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4593"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(43),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4594"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(44),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4595"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(45),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4596"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(46),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4597"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(47),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4598"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(48),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4599"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(49),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b459a"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(50),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b459b"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(51),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b459c"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(52),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b459d"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(53),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b459e"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(54),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b459f"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(55),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b45a0"),
  "files_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "n": NumberLong(56),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("591d5d3ec125835835f65fd8"),
  "files_id": ObjectId("591d5d3ec125835835f65fd7"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592d8958c12583436d9c5453"),
  "files_id": ObjectId("592d8958c12583436d9c5452"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592d8958c12583436d9c5455"),
  "files_id": ObjectId("592d8958c12583436d9c5454"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592d8958c12583436d9c5457"),
  "files_id": ObjectId("592d8958c12583436d9c5456"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592d8958c12583436d9c5459"),
  "files_id": ObjectId("592d8958c12583436d9c5458"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592d8958c12583436d9c545b"),
  "files_id": ObjectId("592d8958c12583436d9c545a"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592d8958c12583436d9c545d"),
  "files_id": ObjectId("592d8958c12583436d9c545c"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592d8958c12583436d9c545f"),
  "files_id": ObjectId("592d8958c12583436d9c545e"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592d8958c12583436d9c5461"),
  "files_id": ObjectId("592d8958c12583436d9c5460"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592d8958c12583436d9c5463"),
  "files_id": ObjectId("592d8958c12583436d9c5462"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592d8958c12583436d9c5465"),
  "files_id": ObjectId("592d8958c12583436d9c5464"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592d8958c12583436d9c5467"),
  "files_id": ObjectId("592d8958c12583436d9c5466"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592d8988c12583a72d9c5453"),
  "files_id": ObjectId("592d8988c12583a72d9c5452"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592d8988c12583a72d9c5455"),
  "files_id": ObjectId("592d8988c12583a72d9c5454"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592d8988c12583a72d9c5457"),
  "files_id": ObjectId("592d8988c12583a72d9c5456"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592d8988c12583a72d9c5459"),
  "files_id": ObjectId("592d8988c12583a72d9c5458"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592d8988c12583a72d9c545b"),
  "files_id": ObjectId("592d8988c12583a72d9c545a"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592d8988c12583a72d9c545d"),
  "files_id": ObjectId("592d8988c12583a72d9c545c"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592d8989c12583a72d9c545f"),
  "files_id": ObjectId("592d8989c12583a72d9c545e"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592d8989c12583a72d9c5461"),
  "files_id": ObjectId("592d8989c12583a72d9c5460"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592d8989c12583a72d9c5463"),
  "files_id": ObjectId("592d8989c12583a72d9c5462"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592d8989c12583a72d9c5465"),
  "files_id": ObjectId("592d8989c12583a72d9c5464"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592d8989c12583a72d9c5467"),
  "files_id": ObjectId("592d8989c12583a72d9c5466"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24ac125832a4b4556c2"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24ac125832a4b4556c3"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(1),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24ac125832a4b4556c4"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(2),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24bc125832a4b4556c5"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(3),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24bc125832a4b4556c6"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(4),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24bc125832a4b4556c7"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(5),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24bc125832a4b4556c8"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(6),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24bc125832a4b4556c9"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(7),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24bc125832a4b4556ca"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(8),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24bc125832a4b4556cb"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(9),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24bc125832a4b4556cc"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(10),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24bc125832a4b4556cd"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(11),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24bc125832a4b4556ce"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(12),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24bc125832a4b4556cf"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(13),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24bc125832a4b4556d0"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(14),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24bc125832a4b4556d1"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(15),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24bc125832a4b4556d2"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(16),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24bc125832a4b4556d3"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(17),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24bc125832a4b4556d4"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(18),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24bc125832a4b4556d5"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(19),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24bc125832a4b4556d6"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(20),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24bc125832a4b4556d7"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(21),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24bc125832a4b4556d8"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(22),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24cc125832a4b4556d9"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(23),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24cc125832a4b4556da"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(24),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24cc125832a4b4556db"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(25),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24cc125832a4b4556dc"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(26),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592fe145c125838e1a950030"),
  "files_id": ObjectId("592fe145c125838e1a95002f"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24cc125832a4b4556dd"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(27),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24cc125832a4b4556de"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(28),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24cc125832a4b4556df"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(29),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24cc125832a4b4556e0"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(30),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24cc125832a4b4556e1"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(31),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24cc125832a4b4556e2"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(32),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24cc125832a4b4556e3"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(33),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24dc125832a4b4556e4"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(34),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24dc125832a4b4556e5"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(35),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24dc125832a4b4556e6"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(36),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24dc125832a4b4556e7"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(37),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24dc125832a4b4556e8"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(38),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24dc125832a4b4556e9"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(39),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24dc125832a4b4556ea"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(40),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24dc125832a4b4556eb"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(41),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24dc125832a4b4556ec"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(42),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24dc125832a4b4556ed"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(43),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24dc125832a4b4556ee"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(44),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24dc125832a4b4556ef"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(45),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24dc125832a4b4556f0"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(46),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24dc125832a4b4556f1"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(47),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24dc125832a4b4556f2"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(48),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24dc125832a4b4556f3"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(49),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24dc125832a4b4556f4"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(50),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24dc125832a4b4556f5"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(51),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24dc125832a4b4556f6"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(52),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24dc125832a4b4556f7"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(53),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24dc125832a4b4556f8"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(54),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24dc125832a4b4556f9"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(55),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("592ea24dc125832a4b4556fa"),
  "files_id": ObjectId("592ea24ac125832a4b4556c1"),
  "n": NumberLong(56),
  "data": "<Mongo Binary Data>"
});
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("596c960fc12583e2703fbaf6"),
  "files_id": ObjectId("596c960fc12583e2703fbaf5"),
  "n": NumberLong(0),
  "data": "<Mongo Binary Data>"
});

/** fs.files records **/
db.getCollection("fs.files").insert({
  "_id": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "filename": "Coop Nova Safefood_Logo_final.png",
  "filetype": "image/png",
  "caption": "Coop Nova Safefood_Logo_final.png",
  "uploadDate": ISODate("2017-04-21T08:15:06.777Z"),
  "length": NumberLong(14783292),
  "chunkSize": NumberLong(261120),
  "md5": "ac4cb320ae7e515a20b0986f2fcbcfa4"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("591d5d3ec125835835f65fd7"),
  "filename": "default_logo.png",
  "filetype": "image/png",
  "caption": "default_logo.png",
  "uploadDate": ISODate("2017-05-18T08:37:18.180Z"),
  "length": NumberLong(95302),
  "chunkSize": NumberLong(261120),
  "md5": "173950c1099db9ed97ec7f3ebfff7f02"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("592d8958c12583436d9c5452"),
  "filename": "logocoopnova.png",
  "filetype": "image/png",
  "caption": "logocoopnova.png",
  "uploadDate": ISODate("2017-05-30T15:01:44.61Z"),
  "length": NumberLong(95302),
  "chunkSize": NumberLong(261120),
  "md5": "0c3cef7602b90ea311a160f4d51fbf43"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("592d8958c12583436d9c5454"),
  "filename": "logocoopnova.png",
  "filetype": "image/png",
  "caption": "logocoopnova.png",
  "uploadDate": ISODate("2017-05-30T15:01:44.418Z"),
  "length": NumberLong(95302),
  "chunkSize": NumberLong(261120),
  "md5": "0c3cef7602b90ea311a160f4d51fbf43"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("592d8958c12583436d9c5456"),
  "filename": "logocoopnova.png",
  "filetype": "image/png",
  "caption": "logocoopnova.png",
  "uploadDate": ISODate("2017-05-30T15:01:44.447Z"),
  "length": NumberLong(95302),
  "chunkSize": NumberLong(261120),
  "md5": "0c3cef7602b90ea311a160f4d51fbf43"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("592d8958c12583436d9c5458"),
  "filename": "logocoopnova.png",
  "filetype": "image/png",
  "caption": "logocoopnova.png",
  "uploadDate": ISODate("2017-05-30T15:01:44.448Z"),
  "length": NumberLong(95302),
  "chunkSize": NumberLong(261120),
  "md5": "0c3cef7602b90ea311a160f4d51fbf43"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("592d8958c12583436d9c545a"),
  "filename": "logocoopnova.png",
  "filetype": "image/png",
  "caption": "logocoopnova.png",
  "uploadDate": ISODate("2017-05-30T15:01:44.782Z"),
  "length": NumberLong(95302),
  "chunkSize": NumberLong(261120),
  "md5": "0c3cef7602b90ea311a160f4d51fbf43"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("592d8958c12583436d9c545c"),
  "filename": "logocoopnova.png",
  "filetype": "image/png",
  "caption": "logocoopnova.png",
  "uploadDate": ISODate("2017-05-30T15:01:44.784Z"),
  "length": NumberLong(95302),
  "chunkSize": NumberLong(261120),
  "md5": "0c3cef7602b90ea311a160f4d51fbf43"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("592d8958c12583436d9c545e"),
  "filename": "logocoopnova.png",
  "filetype": "image/png",
  "caption": "logocoopnova.png",
  "uploadDate": ISODate("2017-05-30T15:01:44.786Z"),
  "length": NumberLong(95302),
  "chunkSize": NumberLong(261120),
  "md5": "0c3cef7602b90ea311a160f4d51fbf43"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("592d8958c12583436d9c5460"),
  "filename": "logocoopnova.png",
  "filetype": "image/png",
  "caption": "logocoopnova.png",
  "uploadDate": ISODate("2017-05-30T15:01:44.788Z"),
  "length": NumberLong(95302),
  "chunkSize": NumberLong(261120),
  "md5": "0c3cef7602b90ea311a160f4d51fbf43"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("592d8958c12583436d9c5462"),
  "filename": "logocoopnova.png",
  "filetype": "image/png",
  "caption": "logocoopnova.png",
  "uploadDate": ISODate("2017-05-30T15:01:44.790Z"),
  "length": NumberLong(95302),
  "chunkSize": NumberLong(261120),
  "md5": "0c3cef7602b90ea311a160f4d51fbf43"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("592d8958c12583436d9c5464"),
  "filename": "logocoopnova.png",
  "filetype": "image/png",
  "caption": "logocoopnova.png",
  "uploadDate": ISODate("2017-05-30T15:01:44.791Z"),
  "length": NumberLong(95302),
  "chunkSize": NumberLong(261120),
  "md5": "0c3cef7602b90ea311a160f4d51fbf43"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("592d8958c12583436d9c5466"),
  "filename": "logocoopnova.png",
  "filetype": "image/png",
  "caption": "logocoopnova.png",
  "uploadDate": ISODate("2017-05-30T15:01:44.794Z"),
  "length": NumberLong(95302),
  "chunkSize": NumberLong(261120),
  "md5": "0c3cef7602b90ea311a160f4d51fbf43"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("592d8988c12583a72d9c5452"),
  "filename": "logocoopnova.png",
  "filetype": "image/png",
  "caption": "logocoopnova.png",
  "uploadDate": ISODate("2017-05-30T15:02:32.569Z"),
  "length": NumberLong(95302),
  "chunkSize": NumberLong(261120),
  "md5": "0c3cef7602b90ea311a160f4d51fbf43"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("592d8988c12583a72d9c5454"),
  "filename": "logocoopnova.png",
  "filetype": "image/png",
  "caption": "logocoopnova.png",
  "uploadDate": ISODate("2017-05-30T15:02:32.751Z"),
  "length": NumberLong(95302),
  "chunkSize": NumberLong(261120),
  "md5": "0c3cef7602b90ea311a160f4d51fbf43"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("592d8988c12583a72d9c5456"),
  "filename": "logocoopnova.png",
  "filetype": "image/png",
  "caption": "logocoopnova.png",
  "uploadDate": ISODate("2017-05-30T15:02:32.760Z"),
  "length": NumberLong(95302),
  "chunkSize": NumberLong(261120),
  "md5": "0c3cef7602b90ea311a160f4d51fbf43"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("592d8988c12583a72d9c5458"),
  "filename": "logocoopnova.png",
  "filetype": "image/png",
  "caption": "logocoopnova.png",
  "uploadDate": ISODate("2017-05-30T15:02:32.761Z"),
  "length": NumberLong(95302),
  "chunkSize": NumberLong(261120),
  "md5": "0c3cef7602b90ea311a160f4d51fbf43"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("592d8988c12583a72d9c545a"),
  "filename": "logocoopnova.png",
  "filetype": "image/png",
  "caption": "logocoopnova.png",
  "uploadDate": ISODate("2017-05-30T15:02:32.922Z"),
  "length": NumberLong(95302),
  "chunkSize": NumberLong(261120),
  "md5": "0c3cef7602b90ea311a160f4d51fbf43"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("592d8988c12583a72d9c545c"),
  "filename": "logocoopnova.png",
  "filetype": "image/png",
  "caption": "logocoopnova.png",
  "uploadDate": ISODate("2017-05-30T15:02:32.924Z"),
  "length": NumberLong(95302),
  "chunkSize": NumberLong(261120),
  "md5": "0c3cef7602b90ea311a160f4d51fbf43"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("592d8989c12583a72d9c545e"),
  "filename": "logocoopnova.png",
  "filetype": "image/png",
  "caption": "logocoopnova.png",
  "uploadDate": ISODate("2017-05-30T15:02:33.59Z"),
  "length": NumberLong(95302),
  "chunkSize": NumberLong(261120),
  "md5": "0c3cef7602b90ea311a160f4d51fbf43"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("592d8989c12583a72d9c5460"),
  "filename": "logocoopnova.png",
  "filetype": "image/png",
  "caption": "logocoopnova.png",
  "uploadDate": ISODate("2017-05-30T15:02:33.60Z"),
  "length": NumberLong(95302),
  "chunkSize": NumberLong(261120),
  "md5": "0c3cef7602b90ea311a160f4d51fbf43"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("592d8989c12583a72d9c5462"),
  "filename": "logocoopnova.png",
  "filetype": "image/png",
  "caption": "logocoopnova.png",
  "uploadDate": ISODate("2017-05-30T15:02:33.137Z"),
  "length": NumberLong(95302),
  "chunkSize": NumberLong(261120),
  "md5": "0c3cef7602b90ea311a160f4d51fbf43"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("592d8989c12583a72d9c5464"),
  "filename": "logocoopnova.png",
  "filetype": "image/png",
  "caption": "logocoopnova.png",
  "uploadDate": ISODate("2017-05-30T15:02:33.138Z"),
  "length": NumberLong(95302),
  "chunkSize": NumberLong(261120),
  "md5": "0c3cef7602b90ea311a160f4d51fbf43"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("592d8989c12583a72d9c5466"),
  "filename": "logocoopnova.png",
  "filetype": "image/png",
  "caption": "logocoopnova.png",
  "uploadDate": ISODate("2017-05-30T15:02:33.213Z"),
  "length": NumberLong(95302),
  "chunkSize": NumberLong(261120),
  "md5": "0c3cef7602b90ea311a160f4d51fbf43"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("592ea24ac125832a4b4556c1"),
  "filename": "Coop Nova Safefood_Logo_final.png",
  "filetype": "image/png",
  "caption": "Coop Nova Safefood_Logo_final.png",
  "uploadDate": ISODate("2017-05-31T11:00:26.143Z"),
  "length": NumberLong(14783292),
  "chunkSize": NumberLong(261120),
  "md5": "ac4cb320ae7e515a20b0986f2fcbcfa4"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("592fe145c125838e1a95002f"),
  "filename": "1655986_555599417942267_3085784004196666099_n.jpg",
  "filetype": "image/jpeg",
  "caption": "1655986_555599417942267_3085784004196666099_n.jpg",
  "uploadDate": ISODate("2017-06-01T09:41:25.82Z"),
  "length": NumberLong(87883),
  "chunkSize": NumberLong(261120),
  "md5": "b159b5c5c5879baa68a30da5310c13c4"
});
db.getCollection("fs.files").insert({
  "_id": ObjectId("596c960fc12583e2703fbaf5"),
  "filename": "image.jpg",
  "filetype": "image/jpeg",
  "caption": "image.jpg",
  "uploadDate": ISODate("2017-07-17T10:48:47.808Z"),
  "length": NumberLong(65493),
  "chunkSize": NumberLong(261120),
  "md5": "f199c905dc1a82f7e21b8e4c2dbc9ff4"
});

/** hienthi records **/
db.getCollection("hienthi").insert({
  "_id": ObjectId("592cf2cba40183200d00002a"),
  "giaidoan": "nongtrai",
  "tengiaidoan": "GIẾT MỔ - NÔNG TRẠI",
  "title": "THÔNG TIN NGUỒN GỐC SẢN PHẨM NÔNG TRẠI",
  "hinhanh": "592d8988c12583a72d9c5452",
  "date_post": ISODate("2017-05-30T04:19:23.0Z")
});
db.getCollection("hienthi").insert({
  "_id": ObjectId("592cf2cba40183200d00002b"),
  "giaidoan": "nhamay",
  "tengiaidoan": "GIẾT MỔ - GIẾT MỔ",
  "title": "THÔNG TIN NGUỒN GỐC SẢN PHẨM",
  "hinhanh": "592d8988c12583a72d9c5454",
  "date_post": ISODate("2017-05-30T04:19:23.0Z")
});
db.getCollection("hienthi").insert({
  "_id": ObjectId("592cf2cba40183200d00002c"),
  "giaidoan": "donggoi",
  "tengiaidoan": "GIẾT MỔ - ĐÓNG GÓI",
  "title": "THÔNG TIN NGUỒN GỐC SẢN PHẨM",
  "hinhanh": "592d8988c12583a72d9c5456",
  "date_post": ISODate("2017-05-30T04:19:23.0Z")
});
db.getCollection("hienthi").insert({
  "_id": ObjectId("592cf2cba40183200d00002d"),
  "giaidoan": "banle",
  "tengiaidoan": "GIẾT MỔ - BÁN LẺ",
  "title": "THÔNG TIN NGUỒN GỐC SẢN PHẨM",
  "hinhanh": "592d8988c12583a72d9c5458",
  "date_post": ISODate("2017-05-30T04:19:23.0Z")
});
db.getCollection("hienthi").insert({
  "_id": ObjectId("592cf2cba40183200d00002e"),
  "giaidoan": "nongtraitrung",
  "tengiaidoan": "TRỨNG - NÔNG TRẠI",
  "title": "THÔNG TIN NGUỒN GỐC SẢN PHẨM",
  "hinhanh": "592d8988c12583a72d9c545a",
  "date_post": ISODate("2017-05-30T04:19:23.0Z")
});
db.getCollection("hienthi").insert({
  "_id": ObjectId("592cf2cba40183200d00002f"),
  "giaidoan": "donggoitrung",
  "tengiaidoan": "TRỨNG - ĐÓNG GÓI",
  "title": "THÔNG TIN NGUỒN GỐC SẢN PHẨM",
  "hinhanh": "592d8988c12583a72d9c545c",
  "date_post": ISODate("2017-05-30T04:19:23.0Z")
});
db.getCollection("hienthi").insert({
  "_id": ObjectId("592cf2cba40183200d000030"),
  "giaidoan": "banletrung",
  "tengiaidoan": "TRỨNG - BÁN LẺ",
  "title": "THÔNG TIN NGUỒN GỐC SẢN PHẨM",
  "hinhanh": "592d8989c12583a72d9c545e",
  "date_post": ISODate("2017-05-30T04:19:23.0Z")
});
db.getCollection("hienthi").insert({
  "_id": ObjectId("592cf2cba40183200d000031"),
  "giaidoan": "nongtrairauqua",
  "tengiaidoan": "RAU QUẢ - NÔNG TRẠI",
  "title": "THÔNG TIN NGUỒN GỐC SẢN PHẨM",
  "hinhanh": "592d8989c12583a72d9c5460",
  "date_post": ISODate("2017-05-30T04:19:23.0Z")
});
db.getCollection("hienthi").insert({
  "_id": ObjectId("592cf2cba40183200d000032"),
  "giaidoan": "nhamayrauqua",
  "tengiaidoan": "RAU QUẢ - SƠ CHẾ",
  "title": "THÔNG TIN NGUỒN GỐC SẢN PHẨM",
  "hinhanh": "592d8989c12583a72d9c5462",
  "date_post": ISODate("2017-05-30T04:19:23.0Z")
});
db.getCollection("hienthi").insert({
  "_id": ObjectId("592cf2cba40183200d000033"),
  "giaidoan": "donggoirauqua",
  "tengiaidoan": "RAU QUẢ - ĐÓNG GÓI",
  "title": "THÔNG TIN NGUỒN GỐC SẢN PHẨM",
  "hinhanh": "592d8989c12583a72d9c5464",
  "date_post": ISODate("2017-05-30T04:19:23.0Z")
});
db.getCollection("hienthi").insert({
  "_id": ObjectId("592cf2cba40183200d000034"),
  "giaidoan": "banlerauqua",
  "tengiaidoan": "RAU QUẢ - BÁN LẺ",
  "title": "THÔNG TIN NGUỒN GỐC SẢN PHẨM RAU QUẢ",
  "hinhanh": "592d8989c12583a72d9c5466",
  "date_post": ISODate("2017-05-30T04:19:23.0Z")
});

/** nhamay records **/
db.getCollection("nhamay").insert({
  "_id": ObjectId("590034b7835e6ff7063869f9"),
  "id_dmnhamay": ObjectId("58f770687247ae140f00002b"),
  "tieuchuan": "VIETGAP",
  "solo": "080517001",
  "sogiaykiemdichthusong": "N/A",
  "giaychungnhan": "N/A",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "id_nongtrai": ObjectId("5900345f835e6f0b083869f9"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T05:48:39.280Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("59003620835e6ff2063869f9"),
  "id_dmnhamay": ObjectId("58f770687247ae140f00002b"),
  "tieuchuan": "VIETGAP",
  "solo": "080517001",
  "sogiaykiemdichthusong": "N/A",
  "giaychungnhan": "N/A",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "id_nongtrai": ObjectId("590035d2835e6fea043869f9"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T05:54:40.200Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("5900426c835e6f42083869f9"),
  "id_dmnhamay": ObjectId("58f770687247ae140f00002b"),
  "tieuchuan": "VIETGAP",
  "solo": "080517001",
  "sogiaykiemdichthusong": "N/A",
  "giaychungnhan": "N/A",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "id_nongtrai": ObjectId("5900345f835e6f0b083869f9"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T06:47:08.848Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("590042fc835e6f3a083869f9"),
  "id_dmnhamay": ObjectId("58f770687247ae140f00002b"),
  "tieuchuan": "VIETGAP",
  "solo": "080517001",
  "sogiaykiemdichthusong": "N/A",
  "giaychungnhan": "N/A",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "id_nongtrai": ObjectId("590042e1835e6f39083869f9"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T06:49:32.696Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("59004388835e6f39083869fa"),
  "id_dmnhamay": ObjectId("58f770687247ae140f00002b"),
  "tieuchuan": "VIETGAP",
  "solo": "080517001",
  "sogiaykiemdichthusong": "N/A",
  "giaychungnhan": "N/A",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "id_nongtrai": ObjectId("5900436a835e6f37083869fa"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T06:51:52.420Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("59004427835e6f3a083869fb"),
  "id_dmnhamay": ObjectId("58f770687247ae140f00002b"),
  "tieuchuan": "VIETGAP",
  "solo": "080517001",
  "sogiaykiemdichthusong": "N/A",
  "giaychungnhan": "N/A",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "id_nongtrai": ObjectId("590043e5835e6f00073869fc"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T06:54:31.131Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("590044b0835e6ffc063869fc"),
  "id_dmnhamay": ObjectId("58f770687247ae140f00002b"),
  "tieuchuan": "VIETGAP",
  "solo": "080517001",
  "sogiaykiemdichthusong": "N/A",
  "giaychungnhan": "N/A",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "id_nongtrai": ObjectId("59004491835e6fea043869fb"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T06:56:48.595Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("59004556835e6f49083869fa"),
  "id_dmnhamay": ObjectId("58f770687247ae140f00002b"),
  "tieuchuan": "VIETGAP",
  "solo": "080517001",
  "sogiaykiemdichthusong": "N/A",
  "giaychungnhan": "N/A",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "id_nongtrai": ObjectId("59004531835e6f37083869fb"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T06:59:34.378Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("590045ca835e6f5f083869fa"),
  "id_dmnhamay": ObjectId("58f770687247ae140f00002b"),
  "tieuchuan": "VIETGAP",
  "solo": "080517001",
  "sogiaykiemdichthusong": "N/A",
  "giaychungnhan": "N/A",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "id_nongtrai": ObjectId("590045ac835e6f49083869fb"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:01:30.633Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("590046a6835e6f42083869fc"),
  "id_dmnhamay": ObjectId("58f770687247ae140f00002b"),
  "tieuchuan": "VIETGAP",
  "solo": "080517001",
  "sogiaykiemdichthusong": "N/A",
  "giaychungnhan": "N/A",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "id_nongtrai": ObjectId("5900468f835e6f3a083869fd"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:05:10.157Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("59004717835e6fea043869fd"),
  "id_dmnhamay": ObjectId("58f770687247ae140f00002b"),
  "tieuchuan": "VIETGAP",
  "solo": "080517001",
  "sogiaykiemdichthusong": "N/A",
  "giaychungnhan": "N/A",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "id_nongtrai": ObjectId("59004703835e6ffc063869fd"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:07:03.743Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("5900476d835e6f77083869f9"),
  "id_dmnhamay": ObjectId("58f770687247ae140f00002b"),
  "tieuchuan": "VIETGAP",
  "solo": "080517001",
  "sogiaykiemdichthusong": "N/A",
  "giaychungnhan": "N/A",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "id_nongtrai": ObjectId("5900475a835e6f3a083869fe"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:08:29.708Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("590047c4835e6f3e083869fa"),
  "id_dmnhamay": ObjectId("58f770687247ae140f00002b"),
  "tieuchuan": "VIETGAP",
  "solo": "080517001",
  "sogiaykiemdichthusong": "N/A",
  "giaychungnhan": "N/A",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "id_nongtrai": ObjectId("590047ae835e6fff063869fd"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:09:56.641Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("5900481b835e6f60083869fa"),
  "id_dmnhamay": ObjectId("58f770687247ae140f00002b"),
  "tieuchuan": "VIETGAP",
  "solo": "080517001",
  "sogiaykiemdichthusong": "N/A",
  "giaychungnhan": "N/A",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "id_nongtrai": ObjectId("59004808835e6f3e083869fb"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:11:23.600Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("5900490f835e6f77083869fb"),
  "id_dmnhamay": ObjectId("58f770687247ae140f00002b"),
  "tieuchuan": "VIETGAP",
  "solo": "080517001",
  "sogiaykiemdichthusong": "N/A",
  "giaychungnhan": "N/A",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "id_nongtrai": ObjectId("590048f0835e6f37083869fe"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:15:27.371Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("58f71da4d89398f408000029"),
  "id_dmnhamay": ObjectId("58f770687247ae140f00002b"),
  "tieuchuan": "HACCP",
  "solo": "080517001",
  "sogiaykiemdichthusong": "  N/A  ",
  "giaychungnhan": "N/A",
  "nhanvienkiemsoat": "NGUYÊN VĂN ANH",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "id_nongtrai": ObjectId("58fd72ad835e6f0d6f1ef936"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-19T08:19:48.0Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("58fd7300835e6f756f1ef937"),
  "id_dmnhamay": ObjectId("58f770687247ae140f00002b"),
  "tieuchuan": "HACCP",
  "solo": "080517001",
  "sogiaykiemdichthusong": "N/A",
  "giaychungnhan": "N/A",
  "nhanvienkiemsoat": "Lại Văn Công",
  "ngaygiogietmo": ISODate("2017-05-07T17:00:00.0Z"),
  "id_nongtrai": ObjectId("58fd72ad835e6f0d6f1ef936"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-24T03:37:36.735Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("59244314c1258324764aeb9b"),
  "id_dmnhamay": ObjectId("591ed7c9c125833b483ae568"),
  "tieuchuan": "HACCP",
  "solo": "230517001",
  "sogiaykiemdichthusong": "4059883071894",
  "giaychungnhan": "4059883071894",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-05-22T23:00:00.0Z"),
  "id_nongtrai": ObjectId("591d6c6cc12583e352f664af"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-23T14:11:32.869Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("592857d4c12583c66bae9a51"),
  "id_dmnhamay": ObjectId("58f770687247ae140f00002b"),
  "tieuchuan": "Test-NM",
  "solo": "Test-NM",
  "sogiaykiemdichthusong": "Test-NM",
  "giaychungnhan": "Test-NM",
  "nhanvienkiemsoat": "Test-NM",
  "ngaygiogietmo": ISODate("2017-05-25T23:00:00.0Z"),
  "id_nongtrai": ObjectId("59284f48c12583673cae9a51"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-26T16:29:08.805Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("592eeba0c12583f22e4556c1"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "solo": "31050017",
  "sogiaykiemdichthusong": "1234",
  "giaychungnhan": "123456",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-05-30T23:00:00.0Z"),
  "id_nongtrai": ObjectId("592eeb8ec1258321274556c1"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-31T16:13:20.108Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("592fe67cc12583411f95002f"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "ABC",
  "solo": "ACB",
  "sogiaykiemdichthusong": "UIO",
  "giaychungnhan": "UIO",
  "nhanvienkiemsoat": "IOO",
  "ngaygiogietmo": ISODate("2017-05-31T23:00:00.0Z"),
  "id_nongtrai": ObjectId("592ef229c12583ab344556c3"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-01T10:03:40.557Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("593a73a8c12583a641b91760"),
  "id_dmnhamay": ObjectId("591ed7c9c125833b483ae568"),
  "tieuchuan": "VIETGAP",
  "solo": "09060017",
  "sogiaykiemdichthusong": "1234",
  "giaychungnhan": "123456",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-06-08T23:00:00.0Z"),
  "id_nongtrai": ObjectId("593a731bc12583ed45b9175f"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:08:40.99Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("593a741fc12583ee45b91761"),
  "id_dmnhamay": ObjectId("591ed7c9c125833b483ae568"),
  "tieuchuan": "VIETGAP",
  "solo": "09060017",
  "sogiaykiemdichthusong": "1234",
  "giaychungnhan": "123456",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-06-08T23:00:00.0Z"),
  "id_nongtrai": ObjectId("593a7410c12583d943b91763"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:10:39.519Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("593a745fc12583de43b91764"),
  "id_dmnhamay": ObjectId("591ed7c9c125833b483ae568"),
  "tieuchuan": "VIETGAP",
  "solo": "09060017",
  "sogiaykiemdichthusong": "1234",
  "giaychungnhan": "123456",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-06-08T23:00:00.0Z"),
  "id_nongtrai": ObjectId("593a7453c12583df43b91760"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:11:43.560Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("593a74cbc12583d943b91764"),
  "id_dmnhamay": ObjectId("591ed7c9c125833b483ae568"),
  "tieuchuan": "VIETGAP",
  "solo": "09060017",
  "sogiaykiemdichthusong": "1234",
  "giaychungnhan": "123456",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-06-08T23:00:00.0Z"),
  "id_nongtrai": ObjectId("593a7498c12583a641b91762"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:13:31.193Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("593a7506c12583d943b91765"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "solo": "09060017",
  "sogiaykiemdichthusong": "1234",
  "giaychungnhan": "123456",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-06-08T23:00:00.0Z"),
  "id_nongtrai": ObjectId("593a74fcc125834a47b9175f"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:14:30.898Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("593a75a1c12583a641b91764"),
  "id_dmnhamay": ObjectId("591ed7c9c125833b483ae568"),
  "tieuchuan": "VIETGAP",
  "solo": "09060017",
  "sogiaykiemdichthusong": "1234",
  "giaychungnhan": "123456",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-06-08T23:00:00.0Z"),
  "id_nongtrai": ObjectId("593a74fcc125834a47b9175f"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:17:05.786Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("593a7c25c125837b49b91760"),
  "id_dmnhamay": ObjectId("58fdc6e7835e6f71711ef93a"),
  "tieuchuan": "VIETGAP",
  "solo": "09060017",
  "sogiaykiemdichthusong": "1234",
  "giaychungnhan": "123456",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-06-08T23:00:00.0Z"),
  "id_nongtrai": ObjectId("593a7cb6c125837c49b91762"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:44:53.174Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("593a7cc1c125837a49b91760"),
  "id_dmnhamay": ObjectId("58fdc6e7835e6f71711ef93a"),
  "tieuchuan": "VIETGAP",
  "solo": "09060017",
  "sogiaykiemdichthusong": "1234",
  "giaychungnhan": "123456",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-06-08T23:00:00.0Z"),
  "id_nongtrai": ObjectId("593a7c19c125837449b91762"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:47:29.93Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("593a7d7fc125837649b91760"),
  "id_dmnhamay": ObjectId("58fdc6e7835e6f71711ef93a"),
  "tieuchuan": "VIETGAP",
  "solo": "09060017",
  "sogiaykiemdichthusong": "1234",
  "giaychungnhan": "123456",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-06-08T23:00:00.0Z"),
  "id_nongtrai": ObjectId("593a7d68c125837a49b91761"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:50:39.921Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("593a7e13c12583a248b91760"),
  "id_dmnhamay": ObjectId("58fdc6e7835e6f71711ef93a"),
  "tieuchuan": "VIETGAP",
  "solo": "09060017",
  "sogiaykiemdichthusong": "1234",
  "giaychungnhan": "123456",
  "nhanvienkiemsoat": "Nguyễn Văn Anh",
  "ngaygiogietmo": ISODate("2017-06-08T23:00:00.0Z"),
  "id_nongtrai": ObjectId("593a7e0ac125837a49b91762"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:53:07.125Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});

/** nhamayrauqua records **/
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("59000d96835e6fc7023869fc"),
  "id_nongtrairauqua": ObjectId("59000d56835e6f5e063869f9"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Caingot.0001",
  "ngaysoche": ISODate("2017-04-30T17:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-15T01:26:06.596Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  " ngaysoche": ISODate("2017-05-13T17:00:00.0Z")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("59001092835e6fc7023869fd"),
  "id_nongtrairauqua": ObjectId("59004fc8835e6fff06386a01"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Bapcaithao.0001",
  "ngaysoche": ISODate("2017-04-30T17:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:32:23.659Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  " ngaysoche": ISODate("2017-04-30T17:00:00.0Z")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("59004adc835e6f3708386a00"),
  "id_nongtrairauqua": ObjectId("59004ab8835e6f37083869ff"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Caithia.0001",
  "ngaysoche": ISODate("2017-06-01T17:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-15T01:27:35.318Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  " ngaysoche": ISODate("2017-05-13T17:00:00.0Z")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("59004b75835e6f7c083869f9"),
  "id_nongtrairauqua": ObjectId("59004fc8835e6fff06386a01"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Boxoi.0001",
  "ngaysoche": ISODate("2017-05-01T17:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:33:10.693Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  " ngaysoche": ISODate("2017-05-01T17:00:00.0Z")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("59004bcc835e6f87083869f9"),
  "id_nongtrairauqua": ObjectId("59004fc8835e6fff06386a01"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Raumuong.0001",
  "ngaysoche": ISODate("2017-05-01T17:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:32:58.875Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  " ngaysoche": ISODate("2017-05-01T17:00:00.0Z")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("59004c27835e6f60083869fc"),
  "id_nongtrairauqua": ObjectId("59004fc8835e6fff06386a01"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Rauden.0001",
  "ngaysoche": ISODate("2017-05-01T17:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:32:54.660Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  " ngaysoche": ISODate("2017-05-01T17:00:00.0Z")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("59004c84835e6f9c083869f9"),
  "id_nongtrairauqua": ObjectId("59004fc8835e6fff06386a01"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Mongtoi.0001",
  "ngaysoche": ISODate("2017-05-01T17:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:32:49.357Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  " ngaysoche": ISODate("2017-05-01T17:00:00.0Z")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("59004cfd835e6fff063869ff"),
  "id_nongtrairauqua": ObjectId("590050bd835e6f80083869ff"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Xalachlolo.0001",
  "ngaysoche": ISODate("2017-05-01T17:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-11T03:49:39.290Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  " ngaysoche": ISODate("2017-05-10T17:00:00.0Z")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("59004f71835e6f98083869fa"),
  "id_nongtrairauqua": ObjectId("59004fc8835e6fff06386a01"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Bapcai.0001",
  "ngaysoche": ISODate("2017-05-01T17:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:33:41.880Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  " ngaysoche": ISODate("2017-05-01T17:00:00.0Z")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("59004fd8835e6f9c083869fa"),
  "id_nongtrairauqua": ObjectId("59004fc8835e6fff06386a01"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Cachua.0001",
  "ngaysoche": ISODate("2017-05-01T17:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-15T01:28:59.569Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  " ngaysoche": ISODate("2017-05-13T17:00:00.0Z")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("5900502e835e6f9b083869fb"),
  "id_nongtrairauqua": ObjectId("59004fc8835e6fff06386a01"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Bausao.0001",
  "ngaysoche": ISODate("2017-05-01T17:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:33:52.128Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  " ngaysoche": ISODate("2017-05-01T17:00:00.0Z")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("5900507c835e6f8f083869fb"),
  "id_nongtrairauqua": ObjectId("5900506e835e6f9c083869fb"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Carot.0001",
  "ngaysoche": ISODate("2017-05-07T17:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-17T07:58:12.598Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  " ngaysoche": ISODate("2017-05-01T17:00:00.0Z")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("590050ef835e6f9c083869fc"),
  "id_nongtrairauqua": ObjectId("590050bd835e6f80083869ff"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Khoaitay.0001",
  "ngaysoche": ISODate("2017-05-01T17:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-11T03:49:51.523Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  " ngaysoche": ISODate("2017-05-10T17:00:00.0Z")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("59005143835e6f98083869fc"),
  "id_nongtrairauqua": ObjectId("59004fc8835e6fff06386a01"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Hanhtay.0001",
  "ngaysoche": ISODate("2017-05-01T17:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:34:13.424Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  " ngaysoche": ISODate("2017-05-01T17:00:00.0Z")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("5913e103835e6f6a188b4567"),
  "id_nongtrairauqua": ObjectId("5913e0e6835e6f69188b4567"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "GLOBALGAP",
  "sochungnhantieuchuan": "BIOCERT FV-VIET-1007, GGN: 4056186928917",
  "matruyxuatsanpham": "Thanhlong.0001",
  "ngaysoche": ISODate("2017-05-10T17:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-11T07:43:59.915Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  " ngaysoche": ISODate("2017-05-10T17:00:00.0Z")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("58fdc407835e6fd0711ef93e"),
  "id_nongtrairauqua": ObjectId("59004fc8835e6fff06386a01"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "BiXanh.0001",
  "ngaysoche": ISODate("2017-04-23T17:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:31:50.632Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  " ngaysoche": ISODate("2017-05-07T17:00:00.0Z")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("58fdc5a0835e6f0f721ef936"),
  "id_nongtrairauqua": ObjectId("59004fc8835e6fff06386a01"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Caibexanh.0001",
  "ngaysoche": ISODate("2017-04-23T17:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:50:08.110Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  " ngaysoche": ISODate("2017-05-07T17:00:00.0Z")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("591ed845c12583ab4d3ae569"),
  "id_nongtrairauqua": ObjectId("591ed80bc12583d05a3ae568"),
  "id_dmnhamay": ObjectId("591ed7c9c125833b483ae568"),
  "tieuchuan": "N/A",
  "sochungnhantieuchuan": "N/A",
  "matruyxuatsanpham": "190517001",
  "ngaysoche": ISODate("2017-05-18T23:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-19T11:34:29.883Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("592eeb40c12583ab344556c1"),
  "id_nongtrairauqua": ObjectId("592eeaf8c1258381264556c2"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "GLOBALGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Boxoi.0002",
  "ngaysoche": ISODate("2017-05-30T23:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-31T16:11:44.186Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("593a7198c12583ae3fb91761"),
  "id_nongtrairauqua": ObjectId("593a718bc12583d943b9175f"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Boxoi.0001",
  "ngaysoche": ISODate("2017-06-08T23:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T09:59:52.585Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("593a71fec12583d943b91761"),
  "id_nongtrairauqua": ObjectId("593a71f6c12583ae3fb91762"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Bapcai.0001",
  "ngaysoche": ISODate("2017-06-08T23:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:01:34.414Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("593a7237c12583de43b9175f"),
  "id_nongtrairauqua": ObjectId("593a7230c12583df43b9175f"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Khoaitay.0001",
  "ngaysoche": ISODate("2017-06-08T23:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:02:31.890Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("593a7295c12583dc43b91760"),
  "id_nongtrairauqua": ObjectId("593a728bc125839741b91761"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Bapcaithao.0001",
  "ngaysoche": ISODate("2017-06-08T23:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:04:05.335Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("593a72d5c12583dc43b91761"),
  "id_nongtrairauqua": ObjectId("593a72cac125839741b91762"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Caingot.0001",
  "ngaysoche": ISODate("2017-06-08T23:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:05:09.517Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("593a796cc125837c49b9175f"),
  "id_nongtrairauqua": ObjectId("593a7960c12583d247b91760"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Caithia.0001",
  "ngaysoche": ISODate("2017-06-08T23:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:33:16.587Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("593a7b2cc125837a49b9175f"),
  "id_nongtrairauqua": ObjectId("593a7b23c125837c49b91760"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Mongtoi.0001",
  "ngaysoche": ISODate("2017-06-08T23:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:40:44.100Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("593a7b9fc12583a648b9175f"),
  "id_nongtrairauqua": ObjectId("593a7b98c125837c49b91761"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Rauden.0001",
  "ngaysoche": ISODate("2017-06-08T23:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:42:39.247Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("593a7be5c12583a648b91760"),
  "id_nongtrairauqua": ObjectId("593a7bc7c12583df43b91761"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Raumuong.0001",
  "ngaysoche": ISODate("2017-06-08T23:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:43:49.365Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});

/** nongtrai records **/
db.getCollection("nongtrai").insert({
  "_id": ObjectId("5900345f835e6f0b083869f9"),
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-05-08T17:00:00.0Z"),
  "madan": "12345",
  "soluong": NumberLong(358),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T05:47:11.567Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("590035d2835e6fea043869f9"),
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-05-08T17:00:00.0Z"),
  "madan": "56789",
  "soluong": NumberLong(358),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "5678",
  "tentaixe": "Trần Văn Ba",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T05:53:22.731Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("5900423a835e6f0b083869fa"),
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-05-08T17:00:00.0Z"),
  "madan": "12345",
  "soluong": NumberLong(358),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "5678",
  "tentaixe": "Nguyễn Văn An",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T06:46:18.758Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("590042e1835e6f39083869f9"),
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-05-08T17:00:00.0Z"),
  "madan": "56789",
  "soluong": NumberLong(358),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T06:49:05.828Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("5900436a835e6f37083869fa"),
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-05-08T17:00:00.0Z"),
  "madan": "78901",
  "soluong": NumberLong(358),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T06:51:22.410Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("590043e5835e6f00073869fc"),
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-05-08T17:00:00.0Z"),
  "madan": "01234",
  "soluong": NumberLong(358),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T06:53:25.565Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("59004491835e6fea043869fb"),
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-05-08T17:00:00.0Z"),
  "madan": "34567",
  "soluong": NumberLong(358),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T06:56:17.260Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("59004531835e6f37083869fb"),
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-05-08T17:00:00.0Z"),
  "madan": "56789",
  "soluong": NumberLong(358),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T06:58:57.890Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("590045ac835e6f49083869fb"),
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-05-08T17:00:00.0Z"),
  "madan": "23456",
  "soluong": NumberLong(358),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:01:00.959Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("5900468f835e6f3a083869fd"),
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-05-08T17:00:00.0Z"),
  "madan": "90123",
  "soluong": NumberLong(358),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:04:47.378Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("59004703835e6ffc063869fd"),
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-05-08T17:00:00.0Z"),
  "madan": "45678",
  "soluong": NumberLong(358),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:06:43.455Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("5900475a835e6f3a083869fe"),
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-05-08T17:00:00.0Z"),
  "madan": "11123",
  "soluong": NumberLong(358),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:08:10.519Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("590047ae835e6fff063869fd"),
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-05-08T17:00:00.0Z"),
  "madan": "11145",
  "soluong": NumberLong(358),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:09:34.794Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("59004808835e6f3e083869fb"),
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-05-08T17:00:00.0Z"),
  "madan": "11134",
  "soluong": NumberLong(358),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:11:04.677Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("592eeb8ec1258321274556c1"),
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-05-30T23:00:00.0Z"),
  "madan": "12345",
  "soluong": NumberLong(10),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Nguyễn Văn An",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-31T16:13:02.532Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("58f9aae4835e6fc84f8b4567"),
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "Global G.A.P",
  "ngaygioxuat": ISODate("2017-04-20T17:00:00.0Z"),
  "madan": "13776",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CTY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "RR3451",
  "tentaixe": "Huỳnh Văn Tiên",
  "sogiaykiemdichthusong": "N/A",
  "nhanvienkiemdich": "Cao Thị Ánh",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-21T06:47:00.154Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("58fd72ad835e6f0d6f1ef936"),
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "GLOBAL G.A.P",
  "ngaygioxuat": ISODate("2017-04-23T17:00:00.0Z"),
  "madan": "13778",
  "soluong": NumberLong(20),
  "nhamaycungcapthucan": "CN ĐỒNG NAI ANOVA FEED",
  "soxevanchuyen": "09887777",
  "tentaixe": "Huỳnh Văn Tiên",
  "sogiaykiemdichthusong": "N/A",
  "nhanvienkiemdich": "Lại Văn A",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-24T03:36:13.132Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f6658e"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17315-433-1232001",
  "TRANSFER_DATE": "2017/04/28 07:44:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170428_074438.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-07T23:00:00.0Z"),
  "ngaygioxuat_1": "28/04/2017 07:43:53",
  "madan": "17315",
  "soluong": NumberLong(25),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.574Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f6658f"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17076-433-1232001",
  "TRANSFER_DATE": "2017/04/28 07:44:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170428_074438.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-07T23:00:00.0Z"),
  "ngaygioxuat_1": "28/04/2017 07:43:53",
  "madan": "17076",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.575Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66590"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17316-435-1232495",
  "TRANSFER_DATE": "2017/04/29 08:04:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170429_080439.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-08T23:00:00.0Z"),
  "ngaygioxuat_1": "29/04/2017 08:03:35",
  "madan": "17316",
  "soluong": NumberLong(60),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11489",
  "tentaixe": "3895",
  "sogiaykiemdichthusong": "3895",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.577Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66591"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17433-440-1234001",
  "TRANSFER_DATE": "2017/05/04 09:06:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170504_090638.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-05-03T23:00:00.0Z"),
  "ngaygioxuat_1": "04/05/2017 09:04:57",
  "madan": "17433",
  "soluong": NumberLong(95),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "4405 & 4406",
  "sogiaykiemdichthusong": "4405 & 4406",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.578Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66592"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17499-442-1234338",
  "TRANSFER_DATE": "2017/05/04 17:18:40",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170504_171840.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-05-03T23:00:00.0Z"),
  "ngaygioxuat_1": "04/05/2017 17:16:18",
  "madan": "17499",
  "soluong": NumberLong(11),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 00109",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.579Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66593"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17316-442-1234338",
  "TRANSFER_DATE": "2017/05/04 17:18:40",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170504_171840.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-05-03T23:00:00.0Z"),
  "ngaygioxuat_1": "04/05/2017 17:16:18",
  "madan": "17316",
  "soluong": NumberLong(3),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 00109",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.580Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66594"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17433-442-1234338",
  "TRANSFER_DATE": "2017/05/04 17:18:40",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170504_171840.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-05-03T23:00:00.0Z"),
  "ngaygioxuat_1": "04/05/2017 17:16:18",
  "madan": "17433",
  "soluong": NumberLong(10),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 00109",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.581Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66595"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17499-444-1235005",
  "TRANSFER_DATE": "2017/05/08 09:39:11",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170508_093911.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-05-05T23:00:00.0Z"),
  "ngaygioxuat_1": "06/05/2017 14:39:45",
  "madan": "17499",
  "soluong": NumberLong(10),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 06520",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.582Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66596"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17499-448-1235338",
  "TRANSFER_DATE": "2017/05/08 09:39:11",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170508_093911.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-05-07T23:00:00.0Z"),
  "ngaygioxuat_1": "08/05/2017 08:39:03",
  "madan": "17499",
  "soluong": NumberLong(77),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "4427",
  "sogiaykiemdichthusong": "4427",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.583Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66597"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17501-445-1235299",
  "TRANSFER_DATE": "2017/05/08 09:39:11",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170508_093911.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-05-06T23:00:00.0Z"),
  "ngaygioxuat_1": "07/05/2017 07:35:25",
  "madan": "17501",
  "soluong": NumberLong(44),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "4425",
  "sogiaykiemdichthusong": "4425",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.584Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66598"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17499-443-1235002",
  "TRANSFER_DATE": "2017/05/08 09:39:11",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170508_093911.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-05-05T23:00:00.0Z"),
  "ngaygioxuat_1": "06/05/2017 14:35:42",
  "madan": "17499",
  "soluong": NumberLong(20),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 00109",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.585Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f6659a"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17499-446-1235300",
  "TRANSFER_DATE": "2017/05/08 09:39:11",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170508_093911.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-05-06T23:00:00.0Z"),
  "ngaygioxuat_1": "07/05/2017 07:39:19",
  "madan": "17499",
  "soluong": NumberLong(40),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "4425",
  "sogiaykiemdichthusong": "4425",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.586Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f6659b"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-19060-449-1235399",
  "TRANSFER_DATE": "2017/05/08 09:58:25",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170508_095825.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-05-07T23:00:00.0Z"),
  "ngaygioxuat_1": "08/05/2017 09:48:06",
  "madan": "19060",
  "soluong": NumberLong(130),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21040",
  "tentaixe": "4429",
  "sogiaykiemdichthusong": "4429",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.587Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f6659c"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-19060-450-1235933",
  "TRANSFER_DATE": "2017/05/09 08:28:13",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170509_082813.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-05-08T23:00:00.0Z"),
  "ngaygioxuat_1": "09/05/2017 08:26:34",
  "madan": "19060",
  "soluong": NumberLong(220),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20861",
  "tentaixe": "4431",
  "sogiaykiemdichthusong": "4431",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.589Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f6659d"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-19060-452-1236040",
  "TRANSFER_DATE": "2017/05/09 10:49:13",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170509_104913.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-05-08T23:00:00.0Z"),
  "ngaygioxuat_1": "09/05/2017 10:44:49",
  "madan": "19060",
  "soluong": NumberLong(125),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 10816",
  "tentaixe": "4430",
  "sogiaykiemdichthusong": "4430",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.590Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f6659e"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17557-454-1236313",
  "TRANSFER_DATE": "2017/05/10 07:43:14",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170510_074314.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-29T23:00:00.0Z"),
  "ngaygioxuat_1": "10/05/2017 07:41:41",
  "madan": "17557",
  "soluong": NumberLong(60),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11490",
  "tentaixe": "4436",
  "sogiaykiemdichthusong": "4436",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.592Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f6659f"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17557-455-1236333",
  "TRANSFER_DATE": "2017/05/10 08:16:13",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170510_081613.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-29T23:00:00.0Z"),
  "ngaygioxuat_1": "10/05/2017 08:15:06",
  "madan": "17557",
  "soluong": NumberLong(80),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "61C 18095",
  "tentaixe": "4435",
  "sogiaykiemdichthusong": "4435",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.594Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f665a0"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17559-459-1236734",
  "TRANSFER_DATE": "2017/05/11 08:49:14",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170511_084914.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-30T23:00:00.0Z"),
  "ngaygioxuat_1": "11/05/2017 08:46:20",
  "madan": "17559",
  "soluong": NumberLong(35),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11490",
  "tentaixe": "4445",
  "sogiaykiemdichthusong": "4445",
  "nhanvienkiemdich": "NGUYÊN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.755Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c70c12583e352f665a1"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17633-460-1236735",
  "TRANSFER_DATE": "2017/05/11 08:52:13",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170511_085213.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-30T23:00:00.0Z"),
  "ngaygioxuat_1": "11/05/2017 08:49:09",
  "madan": "17633",
  "soluong": NumberLong(5),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11490",
  "tentaixe": "4445",
  "sogiaykiemdichthusong": "4445",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:08.10Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c70c12583e352f665a2"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17637-459-1236734",
  "TRANSFER_DATE": "2017/05/11 08:52:13",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170511_085213.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-30T23:00:00.0Z"),
  "ngaygioxuat_1": "11/05/2017 08:46:20",
  "madan": "17637",
  "soluong": NumberLong(20),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11490",
  "tentaixe": "4445",
  "sogiaykiemdichthusong": "4445",
  "nhanvienkiemdich": "NGUYÊN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:08.11Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c70c12583e352f665a3"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17633-461-1236779",
  "TRANSFER_DATE": "2017/05/11 09:13:14",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170511_091314.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-30T23:00:00.0Z"),
  "ngaygioxuat_1": "11/05/2017 09:11:15",
  "madan": "17633",
  "soluong": NumberLong(60),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "61C 18095",
  "tentaixe": "4446",
  "sogiaykiemdichthusong": "4446",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:08.12Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c70c12583e352f665a4"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17633-462-1236826",
  "TRANSFER_DATE": "2017/05/11 10:10:13",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170511_101013.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-30T23:00:00.0Z"),
  "ngaygioxuat_1": "11/05/2017 10:07:06",
  "madan": "17633",
  "soluong": NumberLong(85),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21550",
  "tentaixe": "4444",
  "sogiaykiemdichthusong": "4444",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:08.14Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c70c12583e352f665a5"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17634-462-1236826",
  "TRANSFER_DATE": "2017/05/11 10:10:13",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170511_101013.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-30T23:00:00.0Z"),
  "ngaygioxuat_1": "11/05/2017 10:07:06",
  "madan": "17634",
  "soluong": NumberLong(5),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21550",
  "tentaixe": "4444",
  "sogiaykiemdichthusong": "4444",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:08.15Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c70c12583e352f665a6"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17634-463-1236939",
  "TRANSFER_DATE": "2017/05/11 15:07:14",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170511_150714.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-30T23:00:00.0Z"),
  "ngaygioxuat_1": "11/05/2017 15:04:31",
  "madan": "17634",
  "soluong": NumberLong(2),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 00109",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:08.16Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c70c12583e352f665a7"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17557-463-1236939",
  "TRANSFER_DATE": "2017/05/11 15:07:14",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170511_150714.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-30T23:00:00.0Z"),
  "ngaygioxuat_1": "11/05/2017 15:04:31",
  "madan": "17557",
  "soluong": NumberLong(4),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 00109",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:08.17Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c70c12583e352f665a8"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17633-463-1236939",
  "TRANSFER_DATE": "2017/05/11 15:07:14",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170511_150714.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-30T23:00:00.0Z"),
  "ngaygioxuat_1": "11/05/2017 15:04:31",
  "madan": "17633",
  "soluong": NumberLong(3),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 00109",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:08.18Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c70c12583e352f665a9"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17634-465-1237044",
  "TRANSFER_DATE": "2017/05/12 07:19:15",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170512_071915.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-05-01T23:00:00.0Z"),
  "ngaygioxuat_1": "12/05/2017 07:14:03",
  "madan": "17634",
  "soluong": NumberLong(60),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 16572",
  "tentaixe": "4447",
  "sogiaykiemdichthusong": "4447",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:08.19Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c70c12583e352f665aa"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17634-466-1237401",
  "TRANSFER_DATE": "2017/05/13 07:40:14",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170513_074014.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-05-02T23:00:00.0Z"),
  "ngaygioxuat_1": "13/05/2017 07:36:15",
  "madan": "17634",
  "soluong": NumberLong(65),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11490",
  "tentaixe": "5102",
  "sogiaykiemdichthusong": "5102",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:08.20Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("592ef228c12583ab344556c2"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17499-447-1235301",
  "TRANSFER_DATE": "2017/05/21 19:49:13",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170521_194913.csv",
  "CREATED_BY": "NTKY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-05-07T23:00:00.0Z"),
  "ngaygioxuat_1": "08/05/2017 05:36:47",
  "madan": "17499",
  "soluong": NumberLong(3),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 10816",
  "tentaixe": "CAO THANH LÂM",
  "sogiaykiemdichthusong": "4426",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-31T16:41:12.998Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("592ef229c12583ab344556c3"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17633-474-1241335",
  "TRANSFER_DATE": "2017/05/22 08:43:13",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170522_084313.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-05-21T23:00:00.0Z"),
  "ngaygioxuat_1": "22/05/2017 08:40:46",
  "madan": "17633",
  "soluong": NumberLong(5),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 15326",
  "tentaixe": "PHẠM THÀNH DUY",
  "sogiaykiemdichthusong": "5117",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-31T16:41:13.2Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("593a7410c12583d943b91763"),
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f6608a"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-06-08T23:00:00.0Z"),
  "madan": "12345",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Nguyễn Văn A",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:10:24.961Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f6650f"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16292-278-1193187",
  "TRANSFER_DATE": "2017/01/23 08:48:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170123_084838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-03T00:00:00.0Z"),
  "ngaygioxuat_1": "23/01/2017 08:47:23",
  "madan": "16292",
  "soluong": NumberLong(50),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 19018",
  "tentaixe": "1586",
  "sogiaykiemdichthusong": "1586",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.461Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66510"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16019-282-1193791",
  "TRANSFER_DATE": "2017/01/24 10:42:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170124_104239.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-04T00:00:00.0Z"),
  "ngaygioxuat_1": "24/01/2017 10:40:44",
  "madan": "16019",
  "soluong": NumberLong(35),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 08642",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.463Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66511"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16019-283-1193806",
  "TRANSFER_DATE": "2017/01/24 10:58:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170124_105839.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-04T00:00:00.0Z"),
  "ngaygioxuat_1": "24/01/2017 10:57:14",
  "madan": "16019",
  "soluong": NumberLong(15),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 00109",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.513Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66512"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16019-284-1193876",
  "TRANSFER_DATE": "2017/01/24 13:42:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170124_134238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-04T00:00:00.0Z"),
  "ngaygioxuat_1": "24/01/2017 13:40:28",
  "madan": "16019",
  "soluong": NumberLong(35),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 08642",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.515Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66513"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16019-285-1193885",
  "TRANSFER_DATE": "2017/01/24 14:00:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170124_140039.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-04T00:00:00.0Z"),
  "ngaygioxuat_1": "24/01/2017 13:59:07",
  "madan": "16019",
  "soluong": NumberLong(15),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 00109",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.516Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66514"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17557-287-1194140",
  "TRANSFER_DATE": "2017/01/25 08:48:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170125_084838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-05T00:00:00.0Z"),
  "ngaygioxuat_1": "25/01/2017 08:47:19",
  "madan": "17557",
  "soluong": NumberLong(150),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11322",
  "tentaixe": "1589",
  "sogiaykiemdichthusong": "1589",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.517Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66515"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17557-288-1194165",
  "TRANSFER_DATE": "2017/01/25 09:20:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170125_092038.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-05T00:00:00.0Z"),
  "ngaygioxuat_1": "25/01/2017 09:18:36",
  "madan": "17557",
  "soluong": NumberLong(200),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21888",
  "tentaixe": "1590",
  "sogiaykiemdichthusong": "1590",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.519Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66516"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17557-292-1194522",
  "TRANSFER_DATE": "2017/02/02 09:18:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170202_091838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-02T00:00:00.0Z"),
  "ngaygioxuat_1": "02/02/2017 09:16:32",
  "madan": "17557",
  "soluong": NumberLong(170),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21040",
  "tentaixe": "1608",
  "sogiaykiemdichthusong": "1608",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.520Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66517"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17557-293-1194528",
  "TRANSFER_DATE": "2017/02/02 09:52:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170202_095238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-02T00:00:00.0Z"),
  "ngaygioxuat_1": "02/02/2017 09:52:02",
  "madan": "17557",
  "soluong": NumberLong(150),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 10816",
  "tentaixe": "1607",
  "sogiaykiemdichthusong": "1607",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.522Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66518"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16292-296-1194717",
  "TRANSFER_DATE": "2017/02/02 13:32:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170202_133238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-02T00:00:00.0Z"),
  "ngaygioxuat_1": "02/02/2017 13:31:47",
  "madan": "16292",
  "soluong": NumberLong(180),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "61C 18151",
  "tentaixe": "1611",
  "sogiaykiemdichthusong": "1611",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.523Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66519"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16292-297-1194756",
  "TRANSFER_DATE": "2017/02/02 14:38:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170202_143838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-02T00:00:00.0Z"),
  "ngaygioxuat_1": "02/02/2017 14:36:30",
  "madan": "16292",
  "soluong": NumberLong(90),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "51C 36512",
  "tentaixe": "1615",
  "sogiaykiemdichthusong": "1615",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.525Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f6651a"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17557-298-1194850",
  "TRANSFER_DATE": "2017/02/02 15:58:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170202_155838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-02T00:00:00.0Z"),
  "ngaygioxuat_1": "02/02/2017 15:56:11",
  "madan": "17557",
  "soluong": NumberLong(80),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20861",
  "tentaixe": "1609",
  "sogiaykiemdichthusong": "1609",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.526Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f6651b"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17633-298-1194850",
  "TRANSFER_DATE": "2017/02/02 15:58:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170202_155838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-02T00:00:00.0Z"),
  "ngaygioxuat_1": "02/02/2017 15:56:11",
  "madan": "17633",
  "soluong": NumberLong(144),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20861",
  "tentaixe": "1609",
  "sogiaykiemdichthusong": "1609",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.527Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f6651c"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17557-301-1194952",
  "TRANSFER_DATE": "2017/02/02 16:50:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170202_165039.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-02T00:00:00.0Z"),
  "ngaygioxuat_1": "02/02/2017 16:48:19",
  "madan": "17557",
  "soluong": NumberLong(173),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21040",
  "tentaixe": "1608",
  "sogiaykiemdichthusong": "1608",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.529Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f6651d"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17557-302-1194956",
  "TRANSFER_DATE": "2017/02/02 16:54:40",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170202_165440.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-02T00:00:00.0Z"),
  "ngaygioxuat_1": "02/02/2017 16:53:08",
  "madan": "17557",
  "soluong": NumberLong(153),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 10816",
  "tentaixe": "1607",
  "sogiaykiemdichthusong": "1607",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.530Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f6651e"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17633-303-1195035",
  "TRANSFER_DATE": "2017/02/02 18:36:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170202_183638.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-02T00:00:00.0Z"),
  "ngaygioxuat_1": "02/02/2017 18:35:23",
  "madan": "17633",
  "soluong": NumberLong(120),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 15885",
  "tentaixe": "1616",
  "sogiaykiemdichthusong": "1616",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.531Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f6651f"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17633-305-1195038",
  "TRANSFER_DATE": "2017/02/02 19:00:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170202_190039.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-02T00:00:00.0Z"),
  "ngaygioxuat_1": "02/02/2017 18:59:13",
  "madan": "17633",
  "soluong": NumberLong(180),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 26204",
  "tentaixe": "1617",
  "sogiaykiemdichthusong": "1617",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.533Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66520"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16292-306-1195201",
  "TRANSFER_DATE": "2017/02/03 10:50:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170203_105038.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-03T00:00:00.0Z"),
  "ngaygioxuat_1": "03/02/2017 10:43:21",
  "madan": "16292",
  "soluong": NumberLong(130),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "61C 18205",
  "tentaixe": "1622",
  "sogiaykiemdichthusong": "1622",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.534Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66521"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16721-306-1195201",
  "TRANSFER_DATE": "2017/02/03 10:52:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170203_105238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-03T00:00:00.0Z"),
  "ngaygioxuat_1": "03/02/2017 10:43:21",
  "madan": "16721",
  "soluong": NumberLong(70),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "61C 18205",
  "tentaixe": "1622",
  "sogiaykiemdichthusong": "1622",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.536Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66522"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16721-307-1195221",
  "TRANSFER_DATE": "2017/02/03 11:40:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170203_114038.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-03T00:00:00.0Z"),
  "ngaygioxuat_1": "03/02/2017 11:39:44",
  "madan": "16721",
  "soluong": NumberLong(160),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "61C 11637",
  "tentaixe": "1623",
  "sogiaykiemdichthusong": "1623",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.538Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66523"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16019-307-1195221",
  "TRANSFER_DATE": "2017/02/03 11:40:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170203_114038.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-03T00:00:00.0Z"),
  "ngaygioxuat_1": "03/02/2017 11:39:44",
  "madan": "16019",
  "soluong": NumberLong(20),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "61C 11637",
  "tentaixe": "1623",
  "sogiaykiemdichthusong": "1623",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.538Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66524"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16721-308-1195266",
  "TRANSFER_DATE": "2017/02/03 12:28:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170203_122839.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-03T00:00:00.0Z"),
  "ngaygioxuat_1": "03/02/2017 12:26:54",
  "madan": "16721",
  "soluong": NumberLong(70),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "61C 16766",
  "tentaixe": "1624",
  "sogiaykiemdichthusong": "1624",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.540Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66525"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17633-309-1195570",
  "TRANSFER_DATE": "2017/02/04 15:22:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170204_152238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-04T00:00:00.0Z"),
  "ngaygioxuat_1": "04/02/2017 15:21:01",
  "madan": "17633",
  "soluong": NumberLong(200),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20861",
  "tentaixe": "1633",
  "sogiaykiemdichthusong": "1633",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.541Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66526"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17634-311-1197180",
  "TRANSFER_DATE": "2017/02/07 10:54:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170207_105438.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-07T00:00:00.0Z"),
  "ngaygioxuat_1": "07/02/2017 10:53:50",
  "madan": "17634",
  "soluong": NumberLong(50),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21040",
  "tentaixe": "1642",
  "sogiaykiemdichthusong": "1642",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.543Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66527"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17633-311-1197180",
  "TRANSFER_DATE": "2017/02/07 10:56:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170207_105638.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-07T00:00:00.0Z"),
  "ngaygioxuat_1": "07/02/2017 10:53:50",
  "madan": "17633",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21040",
  "tentaixe": "1642",
  "sogiaykiemdichthusong": "1642",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.544Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66528"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17634-312-1197751",
  "TRANSFER_DATE": "2017/02/08 10:12:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170208_101239.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-08T00:00:00.0Z"),
  "ngaygioxuat_1": "08/02/2017 10:11:52",
  "madan": "17634",
  "soluong": NumberLong(120),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 10816",
  "tentaixe": "1646",
  "sogiaykiemdichthusong": "1646",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.546Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66529"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17634-313-1197816",
  "TRANSFER_DATE": "2017/02/08 11:16:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170208_111639.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-08T00:00:00.0Z"),
  "ngaygioxuat_1": "08/02/2017 11:15:24",
  "madan": "17634",
  "soluong": NumberLong(200),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20861",
  "tentaixe": "1647",
  "sogiaykiemdichthusong": "1647",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.547Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f6652a"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17634-314-1198575",
  "TRANSFER_DATE": "2017/02/09 16:36:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170209_163638.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-09T00:00:00.0Z"),
  "ngaygioxuat_1": "09/02/2017 16:36:19",
  "madan": "17634",
  "soluong": NumberLong(50),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21040",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.548Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f6652b"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17634-315-1198715",
  "TRANSFER_DATE": "2017/02/10 10:44:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170210_104439.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-31T00:00:00.0Z"),
  "ngaygioxuat_1": "10/02/2017 10:43:48",
  "madan": "17634",
  "soluong": NumberLong(150),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21040",
  "tentaixe": "1701",
  "sogiaykiemdichthusong": "1701",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.550Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f6652c"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17634-316-1198785",
  "TRANSFER_DATE": "2017/02/10 13:58:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170210_135838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-31T00:00:00.0Z"),
  "ngaygioxuat_1": "10/02/2017 13:57:07",
  "madan": "17634",
  "soluong": NumberLong(200),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20861",
  "tentaixe": "1702",
  "sogiaykiemdichthusong": "1702",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.552Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f6652d"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16364-318-1199463",
  "TRANSFER_DATE": "2017/02/13 07:58:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170213_075839.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-03T00:00:00.0Z"),
  "ngaygioxuat_1": "13/02/2017 07:57:23",
  "madan": "16364",
  "soluong": NumberLong(85),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20244",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.553Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f6652e"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16364-320-1199486",
  "TRANSFER_DATE": "2017/02/13 08:18:40",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170213_081840.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-03T00:00:00.0Z"),
  "ngaygioxuat_1": "13/02/2017 08:18:21",
  "madan": "16364",
  "soluong": NumberLong(91),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 16572",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.554Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f6652f"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16364-321-1199511",
  "TRANSFER_DATE": "2017/02/13 08:42:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170213_084238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-03T00:00:00.0Z"),
  "ngaygioxuat_1": "13/02/2017 08:41:06",
  "madan": "16364",
  "soluong": NumberLong(74),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21550",
  "tentaixe": "1715",
  "sogiaykiemdichthusong": "1715",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.556Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66530"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16364-322-1200176",
  "TRANSFER_DATE": "2017/02/14 07:36:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170214_073638.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-04T00:00:00.0Z"),
  "ngaygioxuat_1": "14/02/2017 07:36:17",
  "madan": "16364",
  "soluong": NumberLong(86),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 16572",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.557Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66531"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16364-323-1200202",
  "TRANSFER_DATE": "2017/02/14 08:24:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170214_082438.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-04T00:00:00.0Z"),
  "ngaygioxuat_1": "14/02/2017 08:22:24",
  "madan": "16364",
  "soluong": NumberLong(14),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20244",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.767Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66532"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16721-323-1200202",
  "TRANSFER_DATE": "2017/02/14 08:26:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170214_082638.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-04T00:00:00.0Z"),
  "ngaygioxuat_1": "14/02/2017 08:22:24",
  "madan": "16721",
  "soluong": NumberLong(76),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20244",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.769Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66533"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16721-325-1200243",
  "TRANSFER_DATE": "2017/02/14 09:34:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170214_093438.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-04T00:00:00.0Z"),
  "ngaygioxuat_1": "14/02/2017 09:32:21",
  "madan": "16721",
  "soluong": NumberLong(74),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21550",
  "tentaixe": "1718",
  "sogiaykiemdichthusong": "1718",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.771Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66534"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16721-327-1200932",
  "TRANSFER_DATE": "2017/02/15 11:24:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170215_112438.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-05T00:00:00.0Z"),
  "ngaygioxuat_1": "15/02/2017 11:23:19",
  "madan": "16721",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 19018",
  "tentaixe": "1722",
  "sogiaykiemdichthusong": "1722",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.772Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66535"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16721-328-1200948",
  "TRANSFER_DATE": "2017/02/15 11:52:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170215_115238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-05T00:00:00.0Z"),
  "ngaygioxuat_1": "15/02/2017 11:52:10",
  "madan": "16721",
  "soluong": NumberLong(70),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21550",
  "tentaixe": "1723",
  "sogiaykiemdichthusong": "1723",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.774Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66536"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16292-328-1200948",
  "TRANSFER_DATE": "2017/02/15 11:54:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170215_115439.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-05T00:00:00.0Z"),
  "ngaygioxuat_1": "15/02/2017 11:52:10",
  "madan": "16292",
  "soluong": NumberLong(16),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21550",
  "tentaixe": "1723",
  "sogiaykiemdichthusong": "1723",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.832Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66537"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15924-328-1200948",
  "TRANSFER_DATE": "2017/02/15 11:54:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170215_115439.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-05T00:00:00.0Z"),
  "ngaygioxuat_1": "15/02/2017 11:52:10",
  "madan": "15924",
  "soluong": NumberLong(14),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21550",
  "tentaixe": "1723",
  "sogiaykiemdichthusong": "1723",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.833Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66538"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17634-329-1200954",
  "TRANSFER_DATE": "2017/02/15 12:56:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170215_125639.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-05T00:00:00.0Z"),
  "ngaygioxuat_1": "15/02/2017 12:55:33",
  "madan": "17634",
  "soluong": NumberLong(200),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20861",
  "tentaixe": "1721",
  "sogiaykiemdichthusong": "1721",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.835Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66539"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17856-330-1201359",
  "TRANSFER_DATE": "2017/02/16 10:24:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170216_102439.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-06T00:00:00.0Z"),
  "ngaygioxuat_1": "16/02/2017 10:22:29",
  "madan": "17856",
  "soluong": NumberLong(140),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09943",
  "tentaixe": "1727",
  "sogiaykiemdichthusong": "1727",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.836Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f6653a"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16721-331-1201414",
  "TRANSFER_DATE": "2017/02/16 12:30:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170216_123039.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-06T00:00:00.0Z"),
  "ngaygioxuat_1": "16/02/2017 12:30:02",
  "madan": "16721",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21550",
  "tentaixe": "1729",
  "sogiaykiemdichthusong": "1729",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.838Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f6653b"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16721-332-1201413",
  "TRANSFER_DATE": "2017/02/16 13:14:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170216_131438.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-06T00:00:00.0Z"),
  "ngaygioxuat_1": "16/02/2017 13:14:10",
  "madan": "16721",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 19018",
  "tentaixe": "1728",
  "sogiaykiemdichthusong": "1728",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.839Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f6653c"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16721-333-1201753",
  "TRANSFER_DATE": "2017/02/17 11:36:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170217_113638.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-07T00:00:00.0Z"),
  "ngaygioxuat_1": "17/02/2017 11:36:03",
  "madan": "16721",
  "soluong": NumberLong(60),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11490",
  "tentaixe": "1735",
  "sogiaykiemdichthusong": "1735",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.840Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f6653d"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17856-334-1201762",
  "TRANSFER_DATE": "2017/02/17 12:06:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170217_120638.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-07T00:00:00.0Z"),
  "ngaygioxuat_1": "17/02/2017 12:05:02",
  "madan": "17856",
  "soluong": NumberLong(160),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20861",
  "tentaixe": "1733",
  "sogiaykiemdichthusong": "1733",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.842Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f6653e"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17730-334-1201762",
  "TRANSFER_DATE": "2017/02/17 14:08:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170217_140838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-07T00:00:00.0Z"),
  "ngaygioxuat_1": "17/02/2017 12:05:02",
  "madan": "17730",
  "soluong": NumberLong(40),
  "nhamaycungcapthucan": "CTY TNHH THƯƠNG MẠI THÚ Y TÂN TIẾN",
  "soxevanchuyen": "60C 20861",
  "tentaixe": "1733",
  "sogiaykiemdichthusong": "1733",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.843Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f6653f"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17730-338-1202465",
  "TRANSFER_DATE": "2017/02/19 10:14:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170219_101438.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-09T00:00:00.0Z"),
  "ngaygioxuat_1": "19/02/2017 10:06:24",
  "madan": "17730",
  "soluong": NumberLong(200),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20861",
  "tentaixe": "1746",
  "sogiaykiemdichthusong": "1746",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.845Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66540"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17856-341-1203987",
  "TRANSFER_DATE": "2017/02/23 11:24:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170223_112438.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-03T00:00:00.0Z"),
  "ngaygioxuat_1": "23/02/2017 11:23:54",
  "madan": "17856",
  "soluong": NumberLong(152),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21040",
  "tentaixe": "1750",
  "sogiaykiemdichthusong": "1750",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.846Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66541"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17856-342-1205876",
  "TRANSFER_DATE": "2017/02/25 17:28:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170225_172839.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-05T00:00:00.0Z"),
  "ngaygioxuat_1": "25/02/2017 17:25:26",
  "madan": "17856",
  "soluong": NumberLong(200),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21040",
  "tentaixe": "2302",
  "sogiaykiemdichthusong": "2302",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.848Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66542"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16721-346-1208564",
  "TRANSFER_DATE": "2017/03/02 10:38:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170302_103838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-02T00:00:00.0Z"),
  "ngaygioxuat_1": "02/03/2017 10:37:20",
  "madan": "16721",
  "soluong": NumberLong(70),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 15326",
  "tentaixe": "2308",
  "sogiaykiemdichthusong": "2308",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.849Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f66543"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17856-348-1209754",
  "TRANSFER_DATE": "2017/03/07 08:58:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170307_085838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-06T00:00:00.0Z"),
  "ngaygioxuat_1": "06/03/2017 15:06:24",
  "madan": "17856",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21040",
  "tentaixe": "2331",
  "sogiaykiemdichthusong": "2331",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.101Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f66544"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-16028-349-1209946",
  "TRANSFER_DATE": "2017/03/07 09:12:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170307_091238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-07T00:00:00.0Z"),
  "ngaygioxuat_1": "07/03/2017 09:11:53",
  "madan": "16028",
  "soluong": NumberLong(2),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21550",
  "tentaixe": "2332",
  "sogiaykiemdichthusong": "2332",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.170Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f66545"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16292-350-1209948",
  "TRANSFER_DATE": "2017/03/07 09:18:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170307_091838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-07T00:00:00.0Z"),
  "ngaygioxuat_1": "07/03/2017 09:16:36",
  "madan": "16292",
  "soluong": NumberLong(62),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21550",
  "tentaixe": "2332",
  "sogiaykiemdichthusong": "2332",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.333Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f66546"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16721-350-1209948",
  "TRANSFER_DATE": "2017/03/07 09:18:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170307_091838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-07T00:00:00.0Z"),
  "ngaygioxuat_1": "07/03/2017 09:16:36",
  "madan": "16721",
  "soluong": NumberLong(36),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21550",
  "tentaixe": "2332",
  "sogiaykiemdichthusong": "2332",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.346Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f66547"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16721-351-1209955",
  "TRANSFER_DATE": "2017/03/07 09:52:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170307_095238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-07T00:00:00.0Z"),
  "ngaygioxuat_1": "07/03/2017 09:51:10",
  "madan": "16721",
  "soluong": NumberLong(32),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 19018",
  "tentaixe": "2333",
  "sogiaykiemdichthusong": "2333",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.409Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f66548"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16364-351-1209955",
  "TRANSFER_DATE": "2017/03/07 09:52:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170307_095238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-07T00:00:00.0Z"),
  "ngaygioxuat_1": "07/03/2017 09:51:10",
  "madan": "16364",
  "soluong": NumberLong(7),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 19018",
  "tentaixe": "2333",
  "sogiaykiemdichthusong": "2333",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.411Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f66549"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16774-351-1209955",
  "TRANSFER_DATE": "2017/03/07 09:52:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170307_095238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-07T00:00:00.0Z"),
  "ngaygioxuat_1": "07/03/2017 09:51:10",
  "madan": "16774",
  "soluong": NumberLong(61),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 19018",
  "tentaixe": "2333",
  "sogiaykiemdichthusong": "2333",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.411Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f6654a"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16774-354-1210427",
  "TRANSFER_DATE": "2017/03/08 12:14:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170308_121438.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-08T00:00:00.0Z"),
  "ngaygioxuat_1": "08/03/2017 12:13:44",
  "madan": "16774",
  "soluong": NumberLong(85),
  "nhamaycungcapthucan": "",
  "soxevanchuyen": "60C 21550",
  "tentaixe": "2336",
  "sogiaykiemdichthusong": "2336",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.420Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f6654b"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16774-355-1210428",
  "TRANSFER_DATE": "2017/03/08 12:30:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170308_123038.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-08T00:00:00.0Z"),
  "ngaygioxuat_1": "08/03/2017 12:28:43",
  "madan": "16774",
  "soluong": NumberLong(86),
  "nhamaycungcapthucan": "",
  "soxevanchuyen": "60C 19018",
  "tentaixe": "2337",
  "sogiaykiemdichthusong": "2337",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.421Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f6654c"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16774-357-1210801",
  "TRANSFER_DATE": "2017/03/09 11:10:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170309_111038.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-09T00:00:00.0Z"),
  "ngaygioxuat_1": "09/03/2017 11:08:54",
  "madan": "16774",
  "soluong": NumberLong(98),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 16572",
  "tentaixe": "2338",
  "sogiaykiemdichthusong": "2338",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.423Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f6654d"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16774-358-1210821",
  "TRANSFER_DATE": "2017/03/09 12:04:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170309_120439.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-09T00:00:00.0Z"),
  "ngaygioxuat_1": "09/03/2017 12:03:56",
  "madan": "16774",
  "soluong": NumberLong(98),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 19018",
  "tentaixe": "2339",
  "sogiaykiemdichthusong": "2339",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.431Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f6654e"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16774-359-1211107",
  "TRANSFER_DATE": "2017/03/10 11:44:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170310_114439.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-28T00:00:00.0Z"),
  "ngaygioxuat_1": "10/03/2017 11:43:33",
  "madan": "16774",
  "soluong": NumberLong(90),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 19018",
  "tentaixe": "2343",
  "sogiaykiemdichthusong": "2343",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.432Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f6654f"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-18070-360-1211416",
  "TRANSFER_DATE": "2017/03/11 11:30:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170311_113039.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-01T00:00:00.0Z"),
  "ngaygioxuat_1": "11/03/2017 11:28:41",
  "madan": "18070",
  "soluong": NumberLong(124),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21040",
  "tentaixe": "2347",
  "sogiaykiemdichthusong": "2347",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.434Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f66550"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-18096-362-1212855",
  "TRANSFER_DATE": "2017/03/14 10:16:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170314_101638.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-04T00:00:00.0Z"),
  "ngaygioxuat_1": "14/03/2017 10:16:16",
  "madan": "18096",
  "soluong": NumberLong(120),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 10816",
  "tentaixe": "2348",
  "sogiaykiemdichthusong": "2348",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.435Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f66551"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16774-363-1213576",
  "TRANSFER_DATE": "2017/03/16 07:10:40",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170316_071040.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-06T00:00:00.0Z"),
  "ngaygioxuat_1": "16/03/2017 07:09:04",
  "madan": "16774",
  "soluong": NumberLong(70),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "2350",
  "sogiaykiemdichthusong": "2350",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.436Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f66552"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16774-364-1213577",
  "TRANSFER_DATE": "2017/03/16 07:38:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170316_073838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-06T00:00:00.0Z"),
  "ngaygioxuat_1": "16/03/2017 07:37:06",
  "madan": "16774",
  "soluong": NumberLong(32),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "2351",
  "sogiaykiemdichthusong": "2351",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.438Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f66553"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16774-365-1213874",
  "TRANSFER_DATE": "2017/03/17 07:54:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170317_075439.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-07T00:00:00.0Z"),
  "ngaygioxuat_1": "17/03/2017 07:51:32",
  "madan": "16774",
  "soluong": NumberLong(77),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "2352",
  "sogiaykiemdichthusong": "2352",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.567Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f66554"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16774-366-1213875",
  "TRANSFER_DATE": "2017/03/17 08:02:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170317_080238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-07T00:00:00.0Z"),
  "ngaygioxuat_1": "17/03/2017 08:00:17",
  "madan": "16774",
  "soluong": NumberLong(25),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "2352,2353",
  "sogiaykiemdichthusong": "2352,2353",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.575Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f66555"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16774-367-1214124",
  "TRANSFER_DATE": "2017/03/18 07:40:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170318_074038.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-08T00:00:00.0Z"),
  "ngaygioxuat_1": "18/03/2017 07:39:01",
  "madan": "16774",
  "soluong": NumberLong(102),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "2360 VÀ 2361",
  "sogiaykiemdichthusong": "2360 VÀ 2361",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.586Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f66556"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-18178-368-1214211",
  "TRANSFER_DATE": "2017/03/18 09:28:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170318_092838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-08T00:00:00.0Z"),
  "ngaygioxuat_1": "18/03/2017 09:25:37",
  "madan": "18178",
  "soluong": NumberLong(180),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21040",
  "tentaixe": "2359",
  "sogiaykiemdichthusong": "2359",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.634Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f66557"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-18178-369-1214213",
  "TRANSFER_DATE": "2017/03/18 10:40:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170318_104039.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-08T00:00:00.0Z"),
  "ngaygioxuat_1": "18/03/2017 10:38:08",
  "madan": "18178",
  "soluong": NumberLong(220),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20861",
  "tentaixe": "2358",
  "sogiaykiemdichthusong": "2358",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.635Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f66558"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16774-370-1215299",
  "TRANSFER_DATE": "2017/03/19 07:30:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170319_073038.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-09T00:00:00.0Z"),
  "ngaygioxuat_1": "19/03/2017 07:29:14",
  "madan": "16774",
  "soluong": NumberLong(102),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "2362",
  "sogiaykiemdichthusong": "2362",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.637Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f66559"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16774-373-1215301",
  "TRANSFER_DATE": "2017/03/20 07:30:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170320_073038.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-02-28T00:00:00.0Z"),
  "ngaygioxuat_1": "20/03/2017 07:30:17",
  "madan": "16774",
  "soluong": NumberLong(102),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "2364",
  "sogiaykiemdichthusong": "2364",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.641Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f6655a"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16774-374-1215653",
  "TRANSFER_DATE": "2017/03/21 07:14:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170321_071438.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-01T00:00:00.0Z"),
  "ngaygioxuat_1": "21/03/2017 07:13:41",
  "madan": "16774",
  "soluong": NumberLong(30),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 04993",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.644Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f6655b"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-16365-375-1215655",
  "TRANSFER_DATE": "2017/03/21 08:24:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170321_082438.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-01T00:00:00.0Z"),
  "ngaygioxuat_1": "21/03/2017 08:22:04",
  "madan": "16365",
  "soluong": NumberLong(45),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "2365",
  "sogiaykiemdichthusong": "2365",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.647Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f6655c"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-16777-375-1215655",
  "TRANSFER_DATE": "2017/03/21 08:24:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170321_082438.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-01T00:00:00.0Z"),
  "ngaygioxuat_1": "21/03/2017 08:22:04",
  "madan": "16777",
  "soluong": NumberLong(17),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "2365",
  "sogiaykiemdichthusong": "2365",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.648Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f6655d"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16774-376-1215686",
  "TRANSFER_DATE": "2017/03/21 08:26:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170321_082638.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-01T00:00:00.0Z"),
  "ngaygioxuat_1": "21/03/2017 08:25:52",
  "madan": "16774",
  "soluong": NumberLong(18),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "2365",
  "sogiaykiemdichthusong": "2365",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.654Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f6655e"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16774-378-1216185",
  "TRANSFER_DATE": "2017/03/22 07:36:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170322_073638.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-02T00:00:00.0Z"),
  "ngaygioxuat_1": "22/03/2017 07:34:35",
  "madan": "16774",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "2366",
  "sogiaykiemdichthusong": "2366",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.667Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ec12583e352f6655f"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16956-379-1216662",
  "TRANSFER_DATE": "2017/03/23 10:10:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170323_101039.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-03T00:00:00.0Z"),
  "ngaygioxuat_1": "23/03/2017 10:08:01",
  "madan": "16956",
  "soluong": NumberLong(65),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20861",
  "tentaixe": "2367",
  "sogiaykiemdichthusong": "2367",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:06.674Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66560"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16956-380-1216663",
  "TRANSFER_DATE": "2017/03/23 10:44:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170323_104438.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-03T00:00:00.0Z"),
  "ngaygioxuat_1": "23/03/2017 10:43:11",
  "madan": "16956",
  "soluong": NumberLong(65),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 15326",
  "tentaixe": "2368",
  "sogiaykiemdichthusong": "2368",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.63Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66561"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16956-385-1216878",
  "TRANSFER_DATE": "2017/03/24 07:20:40",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170324_072040.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-04T00:00:00.0Z"),
  "ngaygioxuat_1": "24/03/2017 07:18:27",
  "madan": "16956",
  "soluong": NumberLong(70),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "2369",
  "sogiaykiemdichthusong": "2369",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.277Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66562"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-18178-387-1217122",
  "TRANSFER_DATE": "2017/03/24 14:32:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170324_143238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-04T00:00:00.0Z"),
  "ngaygioxuat_1": "24/03/2017 14:30:20",
  "madan": "18178",
  "soluong": NumberLong(200),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20861",
  "tentaixe": "2370",
  "sogiaykiemdichthusong": "2370",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.279Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66563"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-18096-388-1217315",
  "TRANSFER_DATE": "2017/03/25 08:14:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170325_081438.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-05T00:00:00.0Z"),
  "ngaygioxuat_1": "25/03/2017 08:11:52",
  "madan": "18096",
  "soluong": NumberLong(200),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20861",
  "tentaixe": "2377",
  "sogiaykiemdichthusong": "2377",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.281Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66564"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16956-389-1218299",
  "TRANSFER_DATE": "2017/03/26 07:44:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170326_074438.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-06T00:00:00.0Z"),
  "ngaygioxuat_1": "26/03/2017 07:43:15",
  "madan": "16956",
  "soluong": NumberLong(60),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "2381",
  "sogiaykiemdichthusong": "2381",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.283Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66565"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-18178-390-1218309",
  "TRANSFER_DATE": "2017/03/26 17:00:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170326_170038.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-06T00:00:00.0Z"),
  "ngaygioxuat_1": "26/03/2017 16:58:47",
  "madan": "18178",
  "soluong": NumberLong(200),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20861",
  "tentaixe": "2380",
  "sogiaykiemdichthusong": "2380",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.284Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66566"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16956-391-1218757",
  "TRANSFER_DATE": "2017/03/27 16:26:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170327_162639.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-07T00:00:00.0Z"),
  "ngaygioxuat_1": "27/03/2017 16:25:45",
  "madan": "16956",
  "soluong": NumberLong(14),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 00109",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.286Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66567"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16956-392-1218759",
  "TRANSFER_DATE": "2017/03/27 16:28:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170327_162839.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-07T00:00:00.0Z"),
  "ngaygioxuat_1": "27/03/2017 16:27:38",
  "madan": "16956",
  "soluong": NumberLong(16),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 06520",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.287Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66568"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17077-393-1219250",
  "TRANSFER_DATE": "2017/03/29 07:14:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170329_071439.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-09T00:00:00.0Z"),
  "ngaygioxuat_1": "29/03/2017 07:13:18",
  "madan": "17077",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "2390 và 2391",
  "sogiaykiemdichthusong": "2390 và 2391",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.289Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66569"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16956-394-1219612",
  "TRANSFER_DATE": "2017/03/29 15:58:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170329_155839.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-09T00:00:00.0Z"),
  "ngaygioxuat_1": "29/03/2017 15:57:00",
  "madan": "16956",
  "soluong": NumberLong(14),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 06520",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.290Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f6656a"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16956-395-1219613",
  "TRANSFER_DATE": "2017/03/29 16:00:40",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170329_160040.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-09T00:00:00.0Z"),
  "ngaygioxuat_1": "29/03/2017 15:59:29",
  "madan": "16956",
  "soluong": NumberLong(14),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 01619",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.292Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f6656b"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16956-396-1219614",
  "TRANSFER_DATE": "2017/03/29 16:02:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170329_160238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-09T00:00:00.0Z"),
  "ngaygioxuat_1": "29/03/2017 16:01:15",
  "madan": "16956",
  "soluong": NumberLong(12),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 00109",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.293Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f6656c"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17077-397-1220079",
  "TRANSFER_DATE": "2017/03/31 07:10:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170331_071038.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-01T00:00:00.0Z"),
  "ngaygioxuat_1": "31/03/2017 07:08:27",
  "madan": "17077",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "2399 & 2400",
  "sogiaykiemdichthusong": "2399 & 2400",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.295Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f6656d"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-18575-398-1220539",
  "TRANSFER_DATE": "2017/03/31 14:00:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170331_140038.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-01T00:00:00.0Z"),
  "ngaygioxuat_1": "31/03/2017 13:59:40",
  "madan": "18575",
  "soluong": NumberLong(210),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20861",
  "tentaixe": "3801",
  "sogiaykiemdichthusong": "3801",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.296Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f6656e"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17076-400-1220914",
  "TRANSFER_DATE": "2017/04/01 07:48:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170401_074838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-31T23:00:00.0Z"),
  "ngaygioxuat_1": "01/04/2017 07:47:05",
  "madan": "17076",
  "soluong": NumberLong(11),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "3804",
  "sogiaykiemdichthusong": "3804",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.298Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f6656f"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17077-401-1220915",
  "TRANSFER_DATE": "2017/04/01 07:50:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170401_075038.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-31T23:00:00.0Z"),
  "ngaygioxuat_1": "01/04/2017 07:48:37",
  "madan": "17077",
  "soluong": NumberLong(89),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "3803 & 3804",
  "sogiaykiemdichthusong": "3803 & 3804",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.299Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66570"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17077-402-1221299",
  "TRANSFER_DATE": "2017/04/02 07:44:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170402_074439.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-01T23:00:00.0Z"),
  "ngaygioxuat_1": "02/04/2017 07:42:57",
  "madan": "17077",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "3811",
  "sogiaykiemdichthusong": "3811",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.301Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66571"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17316-403-1221300",
  "TRANSFER_DATE": "2017/04/03 07:42:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170403_074238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-02T23:00:00.0Z"),
  "ngaygioxuat_1": "03/04/2017 07:41:40",
  "madan": "17316",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "3814 & 3815",
  "sogiaykiemdichthusong": "3814 & 3815",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.302Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66572"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17316-404-1221747",
  "TRANSFER_DATE": "2017/04/04 07:34:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170404_073439.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-03T23:00:00.0Z"),
  "ngaygioxuat_1": "04/04/2017 07:32:20",
  "madan": "17316",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "3817",
  "sogiaykiemdichthusong": "3817",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.304Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66573"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17077-405-1222162",
  "TRANSFER_DATE": "2017/04/04 17:10:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170404_171039.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-03T23:00:00.0Z"),
  "ngaygioxuat_1": "04/04/2017 17:09:33",
  "madan": "17077",
  "soluong": NumberLong(8),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 00109",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.305Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66574"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17316-406-1222173",
  "TRANSFER_DATE": "2017/04/05 07:24:41",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170405_072441.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-04T23:00:00.0Z"),
  "ngaygioxuat_1": "05/04/2017 07:22:43",
  "madan": "17316",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "3821 & 3822",
  "sogiaykiemdichthusong": "3821 & 3822",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.307Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66575"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17316-407-1222497",
  "TRANSFER_DATE": "2017/04/06 07:40:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170406_074039.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-05T23:00:00.0Z"),
  "ngaygioxuat_1": "06/04/2017 07:38:34",
  "madan": "17316",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "3826 & 3827",
  "sogiaykiemdichthusong": "3826 & 3827",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.308Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66576"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17077-411-1224697",
  "TRANSFER_DATE": "2017/04/11 07:18:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170411_071838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-31T23:00:00.0Z"),
  "ngaygioxuat_1": "11/04/2017 07:17:11",
  "madan": "17077",
  "soluong": NumberLong(89),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "3844 & 3845",
  "sogiaykiemdichthusong": "3844 & 3845",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.310Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66577"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17077-412-1224698",
  "TRANSFER_DATE": "2017/04/11 07:56:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170411_075638.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-31T23:00:00.0Z"),
  "ngaygioxuat_1": "11/04/2017 07:54:31",
  "madan": "17077",
  "soluong": NumberLong(45),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11489",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.312Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66578"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17076-414-1225059",
  "TRANSFER_DATE": "2017/04/12 07:48:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170412_074838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-01T23:00:00.0Z"),
  "ngaygioxuat_1": "12/04/2017 07:47:24",
  "madan": "17076",
  "soluong": NumberLong(2),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "3847 & 3848",
  "sogiaykiemdichthusong": "3847 & 3848",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.314Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66579"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17316-415-1225060",
  "TRANSFER_DATE": "2017/04/12 07:50:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170412_075038.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-01T23:00:00.0Z"),
  "ngaygioxuat_1": "12/04/2017 07:49:28",
  "madan": "17316",
  "soluong": NumberLong(71),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "3847 & 3848",
  "sogiaykiemdichthusong": "3847 & 3848",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.315Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f6657a"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17077-415-1225060",
  "TRANSFER_DATE": "2017/04/12 07:50:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170412_075038.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-01T23:00:00.0Z"),
  "ngaygioxuat_1": "12/04/2017 07:49:28",
  "madan": "17077",
  "soluong": NumberLong(16),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "3847 & 3848",
  "sogiaykiemdichthusong": "3847 & 3848",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.316Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f6657b"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17316-416-1225061",
  "TRANSFER_DATE": "2017/04/12 08:08:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170412_080838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-01T23:00:00.0Z"),
  "ngaygioxuat_1": "12/04/2017 08:08:03",
  "madan": "17316",
  "soluong": NumberLong(19),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.317Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f6657c"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17433-416-1225061",
  "TRANSFER_DATE": "2017/04/12 08:08:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170412_080838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-01T23:00:00.0Z"),
  "ngaygioxuat_1": "12/04/2017 08:08:03",
  "madan": "17433",
  "soluong": NumberLong(26),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.318Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f6657d"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17316-417-1225113",
  "TRANSFER_DATE": "2017/04/12 09:22:41",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170412_092241.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-01T23:00:00.0Z"),
  "ngaygioxuat_1": "12/04/2017 09:20:46",
  "madan": "17316",
  "soluong": NumberLong(60),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 15326",
  "tentaixe": "3849",
  "sogiaykiemdichthusong": "3849",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.320Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f6657e"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17433-418-1225426",
  "TRANSFER_DATE": "2017/04/13 07:54:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170413_075438.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-02T23:00:00.0Z"),
  "ngaygioxuat_1": "13/04/2017 07:52:59",
  "madan": "17433",
  "soluong": NumberLong(81),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "3851 & 3852",
  "sogiaykiemdichthusong": "3851 & 3852",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.321Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f6657f"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17433-419-1225428",
  "TRANSFER_DATE": "2017/04/13 08:14:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170413_081439.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-02T23:00:00.0Z"),
  "ngaygioxuat_1": "13/04/2017 08:14:11",
  "madan": "17433",
  "soluong": NumberLong(53),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.322Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66580"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-18820-420-1226160",
  "TRANSFER_DATE": "2017/04/15 09:40:40",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170415_094040.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-04T23:00:00.0Z"),
  "ngaygioxuat_1": "15/04/2017 09:39:25",
  "madan": "18820",
  "soluong": NumberLong(80),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 10816",
  "tentaixe": "3864",
  "sogiaykiemdichthusong": "3864",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.324Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66581"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17433-421-1228486",
  "TRANSFER_DATE": "2017/04/20 07:52:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170420_075239.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-30T23:00:00.0Z"),
  "ngaygioxuat_1": "20/04/2017 07:51:50",
  "madan": "17433",
  "soluong": NumberLong(80),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60 13439",
  "tentaixe": "3874",
  "sogiaykiemdichthusong": "3874",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.325Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66582"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17433-422-1228490",
  "TRANSFER_DATE": "2017/04/20 07:56:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170420_075638.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-30T23:00:00.0Z"),
  "ngaygioxuat_1": "20/04/2017 07:55:36",
  "madan": "17433",
  "soluong": NumberLong(75),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 03676",
  "tentaixe": "3875",
  "sogiaykiemdichthusong": "3875",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.327Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66583"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17077-424-1228806",
  "TRANSFER_DATE": "2017/04/21 07:22:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170421_072239.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-31T23:00:00.0Z"),
  "ngaygioxuat_1": "21/04/2017 07:21:04",
  "madan": "17077",
  "soluong": NumberLong(3),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "3879 & 3880",
  "sogiaykiemdichthusong": "3879 & 3880",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.328Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66584"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17316-424-1228806",
  "TRANSFER_DATE": "2017/04/21 07:28:41",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170421_072841.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-31T23:00:00.0Z"),
  "ngaygioxuat_1": "21/04/2017 07:21:04",
  "madan": "17316",
  "soluong": NumberLong(77),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "3879 & 3880",
  "sogiaykiemdichthusong": "3879 & 3880",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.329Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66585"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17316-425-1229045",
  "TRANSFER_DATE": "2017/04/21 15:32:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170421_153238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-31T23:00:00.0Z"),
  "ngaygioxuat_1": "21/04/2017 15:31:41",
  "madan": "17316",
  "soluong": NumberLong(3),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 00109",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.563Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66586"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17077-425-1229045",
  "TRANSFER_DATE": "2017/04/21 15:32:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170421_153238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-03-31T23:00:00.0Z"),
  "ngaygioxuat_1": "21/04/2017 15:31:41",
  "madan": "17077",
  "soluong": NumberLong(5),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 00109",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.564Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66587"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17433-426-1229100",
  "TRANSFER_DATE": "2017/04/22 07:18:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170422_071838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-01T23:00:00.0Z"),
  "ngaygioxuat_1": "22/04/2017 07:17:07",
  "madan": "17433",
  "soluong": NumberLong(41),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11489",
  "tentaixe": "3883 & 3884",
  "sogiaykiemdichthusong": "3883 & 3884",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.566Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66588"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17077-426-1229100",
  "TRANSFER_DATE": "2017/04/22 07:18:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170422_071838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-01T23:00:00.0Z"),
  "ngaygioxuat_1": "22/04/2017 07:17:07",
  "madan": "17077",
  "soluong": NumberLong(30),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11489",
  "tentaixe": "3883 & 3884",
  "sogiaykiemdichthusong": "3883 & 3884",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.567Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f66589"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17499-429-1231403",
  "TRANSFER_DATE": "2017/04/26 13:16:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170426_131639.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-05T23:00:00.0Z"),
  "ngaygioxuat_1": "26/04/2017 13:15:32",
  "madan": "17499",
  "soluong": NumberLong(90),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 34209",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.568Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f6658a"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17499-430-1231404",
  "TRANSFER_DATE": "2017/04/26 13:46:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170426_134638.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-05T23:00:00.0Z"),
  "ngaygioxuat_1": "26/04/2017 13:45:45",
  "madan": "17499",
  "soluong": NumberLong(62),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "70C 07806",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.569Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f6658b"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17316-430-1231404",
  "TRANSFER_DATE": "2017/04/26 13:48:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170426_134838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-05T23:00:00.0Z"),
  "ngaygioxuat_1": "26/04/2017 13:45:45",
  "madan": "17316",
  "soluong": NumberLong(3),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "70C 07806",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.571Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f6658c"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17077-430-1231404",
  "TRANSFER_DATE": "2017/04/26 13:48:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170426_134838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-05T23:00:00.0Z"),
  "ngaygioxuat_1": "26/04/2017 13:45:45",
  "madan": "17077",
  "soluong": NumberLong(25),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "70C 07806",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.571Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6fc12583e352f6658d"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-17316-432-1232000",
  "TRANSFER_DATE": "2017/04/28 07:34:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170428_073439.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-04-07T23:00:00.0Z"),
  "ngaygioxuat_1": "28/04/2017 07:33:52",
  "madan": "17316",
  "soluong": NumberLong(34),
  "nhamaycungcapthucan": "CHI NHÁNH ĐỒNG NAI - CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:07.573Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("593a731bc12583ed45b9175f"),
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f6608a"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-06-08T23:00:00.0Z"),
  "madan": "12345",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Nguyễn Văn A",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:06:19.514Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f65fe5"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-89-1146866",
  "TRANSFER_DATE": "2016/11/18 01:47:31",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161118_014731.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-10-31T00:00:00.0Z"),
  "ngaygioxuat_1": "10/11/2016 17:00:02",
  "madan": "15204",
  "soluong": NumberLong(10),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.125Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f65fe6"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15814-96-1147872",
  "TRANSFER_DATE": "2016/11/18 01:47:31",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161118_014731.csv",
  "CREATED_BY": "THUYNT",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-11-05T00:00:00.0Z"),
  "ngaygioxuat_1": "15/11/2016 09:41:10",
  "madan": "15814",
  "soluong": NumberLong(2),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "Số xe 96",
  "tentaixe": "Giấy kiểm dịch 96",
  "sogiaykiemdichthusong": "Giấy kiểm dịch 96",
  "nhanvienkiemdich": "NV kiểm dịch 96",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.126Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f65fe7"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15814-92-1147867",
  "TRANSFER_DATE": "2016/11/18 01:47:31",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161118_014731.csv",
  "CREATED_BY": "THUYNT",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-11-04T00:00:00.0Z"),
  "ngaygioxuat_1": "14/11/2016 15:58:38",
  "madan": "15814",
  "soluong": NumberLong(2),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "Xe vận chuyển 92",
  "tentaixe": "Giấy Kiểm Dịch 92",
  "sogiaykiemdichthusong": "Giấy Kiểm Dịch 92",
  "nhanvienkiemdich": "NV kiểm dịch 92",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.126Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f65fe8"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-92-1147867",
  "TRANSFER_DATE": "2016/11/18 01:47:31",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161118_014731.csv",
  "CREATED_BY": "NTKY",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-11-04T00:00:00.0Z"),
  "ngaygioxuat_1": "14/11/2016 15:58:38",
  "madan": "15204",
  "soluong": NumberLong(3),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "Xe vận chuyển 92",
  "tentaixe": "Giấy Kiểm Dịch 92",
  "sogiaykiemdichthusong": "Giấy Kiểm Dịch 92",
  "nhanvienkiemdich": "NV kiểm dịch 92",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.127Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66001"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-90-1147865",
  "TRANSFER_DATE": "2016/11/18 01:47:31",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161118_014731.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-11-04T00:00:00.0Z"),
  "ngaygioxuat_1": "14/11/2016 15:21:54",
  "madan": "15204",
  "soluong": NumberLong(10),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "4567ABC",
  "tentaixe": "GKD001",
  "sogiaykiemdichthusong": "GKD001",
  "nhanvienkiemdich": "LE VAN CON",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.141Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66002"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15342-95-1147870",
  "TRANSFER_DATE": "2016/11/18 01:47:31",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161118_014731.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-11-05T00:00:00.0Z"),
  "ngaygioxuat_1": "15/11/2016 08:25:58",
  "madan": "15342",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.142Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66003"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "TEST",
  "TRANSFER_DATE": "2016/11/18 01:47:31",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161118_014731.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-07-07T23:00:00.0Z"),
  "ngaygioxuat_1": "28/07/2016 14:06:15",
  "madan": "15341",
  "soluong": NumberLong(50),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.143Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66005"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15342-93-1147868",
  "TRANSFER_DATE": "2016/11/18 01:47:31",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161118_014731.csv",
  "CREATED_BY": "THUYNT",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-11-04T00:00:00.0Z"),
  "ngaygioxuat_1": "14/11/2016 16:01:16",
  "madan": "15342",
  "soluong": NumberLong(2),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "Số Xe 93",
  "tentaixe": "Giấy kiểm dịch 93",
  "sogiaykiemdichthusong": "Giấy kiểm dịch 93",
  "nhanvienkiemdich": "NV kiểm 93",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.144Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66006"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15814-95-1147870",
  "TRANSFER_DATE": "2016/11/18 01:47:31",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161118_014731.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-11-05T00:00:00.0Z"),
  "ngaygioxuat_1": "15/11/2016 08:25:58",
  "madan": "15814",
  "soluong": NumberLong(2),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.145Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66008"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15342-96-1147872",
  "TRANSFER_DATE": "2016/11/18 01:47:31",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161118_014731.csv",
  "CREATED_BY": "THUYNT",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-11-05T00:00:00.0Z"),
  "ngaygioxuat_1": "15/11/2016 09:41:10",
  "madan": "15342",
  "soluong": NumberLong(2),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "Số xe 96",
  "tentaixe": "Giấy kiểm dịch 96",
  "sogiaykiemdichthusong": "Giấy kiểm dịch 96",
  "nhanvienkiemdich": "NV kiểm dịch 96",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.146Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f6605f"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15341-55-1118707-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-08-04T23:00:00.0Z"),
  "ngaygioxuat_1": "05/08/2016 09:40:18",
  "madan": "15341",
  "soluong": NumberLong(50),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.252Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66060"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15578-63-1124684-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-07-30T23:00:00.0Z"),
  "ngaygioxuat_1": "30/08/2016 11:31:14",
  "madan": "15578",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.253Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66061"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15576-64-1125153-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-07-31T23:00:00.0Z"),
  "ngaygioxuat_1": "31/08/2016 11:22:45",
  "madan": "15576",
  "soluong": NumberLong(240),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.254Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66062"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15294-77-1139338-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-09-08T23:00:00.0Z"),
  "ngaygioxuat_1": "29/09/2016 14:43:33",
  "madan": "15294",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.254Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66063"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15135-52-1118648-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd9"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-08-06T23:00:00.0Z"),
  "ngaygioxuat_1": "17/08/2016 16:29:38",
  "madan": "15135",
  "soluong": NumberLong(2),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.255Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66064"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15494-36-1108310-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-07-07T23:00:00.0Z"),
  "ngaygioxuat_1": "28/07/2016 14:06:15",
  "madan": "15494",
  "soluong": NumberLong(300),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.269Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66065"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15341-54-1118705-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-08-01T23:00:00.0Z"),
  "ngaygioxuat_1": "02/08/2016 09:31:18",
  "madan": "15341",
  "soluong": NumberLong(90),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.273Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66066"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15494-55-1118707-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-08-04T23:00:00.0Z"),
  "ngaygioxuat_1": "05/08/2016 09:40:18",
  "madan": "15494",
  "soluong": NumberLong(270),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.274Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66067"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-87-1145903-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-10-03T23:00:00.0Z"),
  "ngaygioxuat_1": "14/10/2016 14:15:13",
  "madan": "15204",
  "soluong": NumberLong(73),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.275Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66068"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-87-1145902-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-10-03T23:00:00.0Z"),
  "ngaygioxuat_1": "14/10/2016 14:14:41",
  "madan": "15204",
  "soluong": NumberLong(86),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.276Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66069"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-87-1145904-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-10-03T23:00:00.0Z"),
  "ngaygioxuat_1": "14/10/2016 14:15:26",
  "madan": "15204",
  "soluong": NumberLong(25),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.277Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f6606a"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-87-1145901-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-10-03T23:00:00.0Z"),
  "ngaygioxuat_1": "14/10/2016 14:13:55",
  "madan": "15204",
  "soluong": NumberLong(68),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.278Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f6606b"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15341-33-1104852-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-07-01T23:00:00.0Z"),
  "ngaygioxuat_1": "22/07/2016 11:21:13",
  "madan": "15341",
  "soluong": NumberLong(52),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.279Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f6606c"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15494-39-1110971-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-08-01T23:00:00.0Z"),
  "ngaygioxuat_1": "02/08/2016 15:21:42",
  "madan": "15494",
  "soluong": NumberLong(130),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.279Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f6606d"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15576-58-1122116-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-08-02T23:00:00.0Z"),
  "ngaygioxuat_1": "23/08/2016 10:05:53",
  "madan": "15576",
  "soluong": NumberLong(250),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.280Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f6606e"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15814-72-1134418-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-08-30T23:00:00.0Z"),
  "ngaygioxuat_1": "20/09/2016 10:31:23",
  "madan": "15814",
  "soluong": NumberLong(150),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.281Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f6606f"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15576-77-1139338-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-09-08T23:00:00.0Z"),
  "ngaygioxuat_1": "29/09/2016 14:43:33",
  "madan": "15576",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.282Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66070"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-90-1147865-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-11-04T00:00:00.0Z"),
  "ngaygioxuat_1": "14/11/2016 15:21:54",
  "madan": "15204",
  "soluong": NumberLong(10),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "4567ABC",
  "tentaixe": "GKD001",
  "sogiaykiemdichthusong": "GKD001",
  "nhanvienkiemdich": "LE VAN CON",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.282Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66071"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15342-95-1147870-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-11-05T00:00:00.0Z"),
  "ngaygioxuat_1": "15/11/2016 08:25:58",
  "madan": "15342",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.283Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66072"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "TEST-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-07-07T23:00:00.0Z"),
  "ngaygioxuat_1": "28/07/2016 14:06:15",
  "madan": "15341",
  "soluong": NumberLong(50),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.284Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66073"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15341-36-1108310-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-07-07T23:00:00.0Z"),
  "ngaygioxuat_1": "28/07/2016 14:06:15",
  "madan": "15341",
  "soluong": NumberLong(50),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "ABC124",
  "tentaixe": "GKD1",
  "sogiaykiemdichthusong": "GKD1",
  "nhanvienkiemdich": "LE VAN SY",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.285Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66074"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15342-93-1147868-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "THUYNT",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-11-04T00:00:00.0Z"),
  "ngaygioxuat_1": "14/11/2016 16:01:16",
  "madan": "15342",
  "soluong": NumberLong(2),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "Số Xe 93",
  "tentaixe": "Giấy kiểm dịch 93",
  "sogiaykiemdichthusong": "Giấy kiểm dịch 93",
  "nhanvienkiemdich": "NV kiểm 93",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.286Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66075"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15814-95-1147870-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-11-05T00:00:00.0Z"),
  "ngaygioxuat_1": "15/11/2016 08:25:58",
  "madan": "15814",
  "soluong": NumberLong(2),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.286Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66076"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15341-44-1112360-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-08-04T23:00:00.0Z"),
  "ngaygioxuat_1": "05/08/2016 13:34:58",
  "madan": "15341",
  "soluong": NumberLong(50),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "12345ABC",
  "tentaixe": "888888",
  "sogiaykiemdichthusong": "888888",
  "nhanvienkiemdich": "thiu le",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.287Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66077"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15342-96-1147872-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "THUYNT",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-11-05T00:00:00.0Z"),
  "ngaygioxuat_1": "15/11/2016 09:41:10",
  "madan": "15342",
  "soluong": NumberLong(2),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "Số xe 96",
  "tentaixe": "Giấy kiểm dịch 96",
  "sogiaykiemdichthusong": "Giấy kiểm dịch 96",
  "nhanvienkiemdich": "NV kiểm dịch 96",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.288Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66078"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15576-60-1123120-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-08-05T23:00:00.0Z"),
  "ngaygioxuat_1": "26/08/2016 13:02:54",
  "madan": "15576",
  "soluong": NumberLong(200),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.289Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66079"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15204-74-1135439-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-08-31T23:00:00.0Z"),
  "ngaygioxuat_1": "21/09/2016 11:47:29",
  "madan": "15204",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.290Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f6607a"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15077-34-1108162-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd9"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-07-06T23:00:00.0Z"),
  "ngaygioxuat_1": "27/07/2016 09:03:50",
  "madan": "15077",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.290Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f6607b"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15496-53-1118704-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-08-06T23:00:00.0Z"),
  "ngaygioxuat_1": "17/08/2016 09:21:49",
  "madan": "15496",
  "soluong": NumberLong(135),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.292Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f6607c"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15576-62-1124252-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-08-06T23:00:00.0Z"),
  "ngaygioxuat_1": "27/08/2016 14:45:21",
  "madan": "15576",
  "soluong": NumberLong(250),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.293Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f6607d"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15578-66-1127728-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-09-04T23:00:00.0Z"),
  "ngaygioxuat_1": "05/09/2016 12:34:11",
  "madan": "15578",
  "soluong": NumberLong(230),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.294Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f6607e"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15341-39-1110971-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-08-01T23:00:00.0Z"),
  "ngaygioxuat_1": "02/08/2016 15:21:42",
  "madan": "15341",
  "soluong": NumberLong(90),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.295Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f6607f"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15494-44-1112360-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-08-04T23:00:00.0Z"),
  "ngaygioxuat_1": "05/08/2016 13:34:58",
  "madan": "15494",
  "soluong": NumberLong(270),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.297Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66080"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15494-46-1115962-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-08-01T23:00:00.0Z"),
  "ngaygioxuat_1": "12/08/2016 12:43:10",
  "madan": "15494",
  "soluong": NumberLong(180),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.298Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66081"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15576-53-1118704-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-08-06T23:00:00.0Z"),
  "ngaygioxuat_1": "17/08/2016 09:21:49",
  "madan": "15576",
  "soluong": NumberLong(125),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.300Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66082"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-89-1146866-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-10-31T00:00:00.0Z"),
  "ngaygioxuat_1": "10/11/2016 17:00:02",
  "madan": "15204",
  "soluong": NumberLong(10),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.301Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66083"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15814-96-1147872-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "THUYNT",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-11-05T00:00:00.0Z"),
  "ngaygioxuat_1": "15/11/2016 09:41:10",
  "madan": "15814",
  "soluong": NumberLong(2),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "Số xe 96",
  "tentaixe": "Giấy kiểm dịch 96",
  "sogiaykiemdichthusong": "Giấy kiểm dịch 96",
  "nhanvienkiemdich": "NV kiểm dịch 96",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.303Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66084"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15814-92-1147867-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "THUYNT",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-11-04T00:00:00.0Z"),
  "ngaygioxuat_1": "14/11/2016 15:58:38",
  "madan": "15814",
  "soluong": NumberLong(2),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "Xe vận chuyển 92",
  "tentaixe": "Giấy Kiểm Dịch 92",
  "sogiaykiemdichthusong": "Giấy Kiểm Dịch 92",
  "nhanvienkiemdich": "NV kiểm dịch 92",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.304Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66085"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-92-1147867-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NTKY",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-11-04T00:00:00.0Z"),
  "ngaygioxuat_1": "14/11/2016 15:58:38",
  "madan": "15204",
  "soluong": NumberLong(3),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "Xe vận chuyển 92",
  "tentaixe": "Giấy Kiểm Dịch 92",
  "sogiaykiemdichthusong": "Giấy Kiểm Dịch 92",
  "nhanvienkiemdich": "NV kiểm dịch 92",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.306Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66086"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15496-48-1117704-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-08-05T23:00:00.0Z"),
  "ngaygioxuat_1": "16/08/2016 14:13:12",
  "madan": "15496",
  "soluong": NumberLong(240),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.307Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66087"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15494-33-1104852-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-07-01T23:00:00.0Z"),
  "ngaygioxuat_1": "22/07/2016 11:21:13",
  "madan": "15494",
  "soluong": NumberLong(148),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.309Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66088"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15496-46-1115962-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-08-01T23:00:00.0Z"),
  "ngaygioxuat_1": "12/08/2016 12:43:10",
  "madan": "15496",
  "soluong": NumberLong(170),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.310Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c69c12583e352f66089"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15494-54-1118705-2",
  "TRANSFER_DATE": "2016/11/21 17:36:44",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161121_173644.csv",
  "CREATED_BY": "NHANNH",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "VietGAP",
  "ngaygioxuat": ISODate("2016-08-01T23:00:00.0Z"),
  "ngaygioxuat_1": "02/08/2016 09:31:18",
  "madan": "15494",
  "soluong": NumberLong(130),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:01.312Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6ac12583e352f6612b"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15342-1111-1345678",
  "TRANSFER_DATE": "2016/11/30 16:20:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161130_162038.csv",
  "CREATED_BY": "NTKY",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "Global Gap",
  "ngaygioxuat": ISODate("2016-10-31T00:00:00.0Z"),
  "ngaygioxuat_1": "30/11/2016 00:00:00",
  "madan": "15342",
  "soluong": NumberLong(20),
  "nhamaycungcapthucan": "Anova Feed",
  "soxevanchuyen": "43A 1234567",
  "tentaixe": "12345678",
  "sogiaykiemdichthusong": "12345678",
  "nhanvienkiemdich": "Nguyễn Văn B",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:02.249Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66414"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-87-1147048",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-06T23:00:00.0Z"),
  "ngaygioxuat_1": "17/10/2016 14:53:42",
  "madan": "15204",
  "soluong": NumberLong(40),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.106Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66415"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-16364-109-1156073",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-04T00:00:00.0Z"),
  "ngaygioxuat_1": "04/11/2016 13:28:13",
  "madan": "16364",
  "soluong": NumberLong(10),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C-20861",
  "tentaixe": "10763",
  "sogiaykiemdichthusong": "10763",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.107Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66416"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-16721-135-1163090",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-01T00:00:00.0Z"),
  "ngaygioxuat_1": "21/11/2016 14:19:52",
  "madan": "16721",
  "soluong": NumberLong(180),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.108Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66417"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15341-139-1163923",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-03T00:00:00.0Z"),
  "ngaygioxuat_1": "23/11/2016 09:26:15",
  "madan": "15341",
  "soluong": NumberLong(78),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "0010766",
  "sogiaykiemdichthusong": "0010766",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.110Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66418"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15341-142-1164712",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-05T00:00:00.0Z"),
  "ngaygioxuat_1": "25/11/2016 07:42:38",
  "madan": "15341",
  "soluong": NumberLong(59),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "0010773",
  "sogiaykiemdichthusong": "0010773",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.112Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66419"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15341-146-1165865",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-07T00:00:00.0Z"),
  "ngaygioxuat_1": "27/11/2016 07:23:52",
  "madan": "15341",
  "soluong": NumberLong(83),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "0010783",
  "sogiaykiemdichthusong": "0010783",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.113Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6641a"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-16956-160-1171075",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-05T00:00:00.0Z"),
  "ngaygioxuat_1": "05/12/2016 11:21:41",
  "madan": "16956",
  "soluong": NumberLong(110),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 10816",
  "tentaixe": "0011406",
  "sogiaykiemdichthusong": "0011406",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.115Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6641b"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-16956-166-1172554",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-08T00:00:00.0Z"),
  "ngaygioxuat_1": "08/12/2016 11:41:46",
  "madan": "16956",
  "soluong": NumberLong(210),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20861",
  "tentaixe": "0011415",
  "sogiaykiemdichthusong": "0011415",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.117Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6641c"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15465-180-1174323",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-02T00:00:00.0Z"),
  "ngaygioxuat_1": "12/12/2016 16:28:32",
  "madan": "15465",
  "soluong": NumberLong(3),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 06569",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.118Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6641d"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15496-184-1176020",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-06T00:00:00.0Z"),
  "ngaygioxuat_1": "16/12/2016 06:52:19",
  "madan": "15496",
  "soluong": NumberLong(15),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "0011437",
  "sogiaykiemdichthusong": "0011437",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.120Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6641e"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15494-33-1104852",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-07-01T23:00:00.0Z"),
  "ngaygioxuat_1": "22/07/2016 11:21:13",
  "madan": "15494",
  "soluong": NumberLong(148),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.122Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6641f"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15496-46-1115962",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-08-01T23:00:00.0Z"),
  "ngaygioxuat_1": "12/08/2016 12:43:10",
  "madan": "15496",
  "soluong": NumberLong(170),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.123Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66420"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15494-54-1118705",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-08-01T23:00:00.0Z"),
  "ngaygioxuat_1": "02/08/2016 09:31:18",
  "madan": "15494",
  "soluong": NumberLong(130),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.125Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66421"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15341-55-1118707",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-08-04T23:00:00.0Z"),
  "ngaygioxuat_1": "05/08/2016 09:40:18",
  "madan": "15341",
  "soluong": NumberLong(50),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.127Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66422"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-13778-1-1017168",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6609f"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-01-02T00:00:00.0Z"),
  "ngaygioxuat_1": "12/01/2016 15:20:56",
  "madan": "13778",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.128Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66423"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15494-36-1108310",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-07-07T23:00:00.0Z"),
  "ngaygioxuat_1": "28/07/2016 14:06:15",
  "madan": "15494",
  "soluong": NumberLong(300),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.129Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66424"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15341-54-1118705",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-08-01T23:00:00.0Z"),
  "ngaygioxuat_1": "02/08/2016 09:31:18",
  "madan": "15341",
  "soluong": NumberLong(90),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.131Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66425"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15494-55-1118707",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-08-04T23:00:00.0Z"),
  "ngaygioxuat_1": "05/08/2016 09:40:18",
  "madan": "15494",
  "soluong": NumberLong(270),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.134Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66426"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15205-89-1147858",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-08T23:00:00.0Z"),
  "ngaygioxuat_1": "19/10/2016 12:08:08",
  "madan": "15205",
  "soluong": NumberLong(80),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.136Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66427"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15205-90-1147860",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-08T23:00:00.0Z"),
  "ngaygioxuat_1": "19/10/2016 12:11:07",
  "madan": "15205",
  "soluong": NumberLong(2),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.137Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66428"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-90-1147860",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-08T23:00:00.0Z"),
  "ngaygioxuat_1": "19/10/2016 12:11:07",
  "madan": "15204",
  "soluong": NumberLong(66),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.139Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66429"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15204-99-1148442",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-08T23:00:00.0Z"),
  "ngaygioxuat_1": "19/10/2016 16:56:10",
  "madan": "15204",
  "soluong": NumberLong(10),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.141Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6642a"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15294-110-1156179",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-05T00:00:00.0Z"),
  "ngaygioxuat_1": "05/11/2016 16:12:22",
  "madan": "15294",
  "soluong": NumberLong(85),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.142Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6642b"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15294-114-1156197",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-07T00:00:00.0Z"),
  "ngaygioxuat_1": "07/11/2016 16:29:55",
  "madan": "15294",
  "soluong": NumberLong(85),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C-20861",
  "tentaixe": "10763",
  "sogiaykiemdichthusong": "10763",
  "nhanvienkiemdich": "Nguyễn Thị bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.144Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6642c"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15341-118-1156573",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-08T00:00:00.0Z"),
  "ngaygioxuat_1": "08/11/2016 14:15:12",
  "madan": "15341",
  "soluong": NumberLong(7),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C-20861",
  "tentaixe": "10763",
  "sogiaykiemdichthusong": "10763",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.146Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6642d"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15295-136-1163685",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-02T00:00:00.0Z"),
  "ngaygioxuat_1": "22/11/2016 15:28:51",
  "madan": "15295",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.147Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6642e"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15814-137-1163687",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-02T00:00:00.0Z"),
  "ngaygioxuat_1": "22/11/2016 15:31:18",
  "madan": "15814",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.149Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6642f"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15341-141-1164711",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-05T00:00:00.0Z"),
  "ngaygioxuat_1": "25/11/2016 07:27:14",
  "madan": "15341",
  "soluong": NumberLong(72),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "0010772",
  "sogiaykiemdichthusong": "0010772",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.150Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66430"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15341-147-1165866",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-07T00:00:00.0Z"),
  "ngaygioxuat_1": "27/11/2016 07:42:32",
  "madan": "15341",
  "soluong": NumberLong(50),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "0010782",
  "sogiaykiemdichthusong": "0010782",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.152Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66431"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15294-119-1156943",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-09T00:00:00.0Z"),
  "ngaygioxuat_1": "09/11/2016 13:47:47",
  "madan": "15294",
  "soluong": NumberLong(80),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.154Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66432"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15294-120-1156945",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-09T00:00:00.0Z"),
  "ngaygioxuat_1": "09/11/2016 13:50:24",
  "madan": "15294",
  "soluong": NumberLong(70),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.155Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66433"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15294-125-1157599",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-01T00:00:00.0Z"),
  "ngaygioxuat_1": "11/11/2016 10:53:26",
  "madan": "15294",
  "soluong": NumberLong(75),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.157Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66434"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-16364-129-1163028",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-08T00:00:00.0Z"),
  "ngaygioxuat_1": "18/11/2016 13:56:46",
  "madan": "16364",
  "soluong": NumberLong(150),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.158Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66435"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15496-156-1169655",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-03T00:00:00.0Z"),
  "ngaygioxuat_1": "03/12/2016 07:15:33",
  "madan": "15496",
  "soluong": NumberLong(40),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "0010795 (25con) và 0010796 (15con)",
  "sogiaykiemdichthusong": "0010795 (25con) và 0010796 (15con)",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.160Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66436"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15576-177-1173191",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-09T00:00:00.0Z"),
  "ngaygioxuat_1": "09/12/2016 17:10:51",
  "madan": "15576",
  "soluong": NumberLong(15),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 00109",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.162Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66437"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15578-179-1174212",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-02T00:00:00.0Z"),
  "ngaygioxuat_1": "12/12/2016 15:01:18",
  "madan": "15578",
  "soluong": NumberLong(2),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 06569",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.163Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66438"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15465-184-1176020",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-06T00:00:00.0Z"),
  "ngaygioxuat_1": "16/12/2016 06:52:19",
  "madan": "15465",
  "soluong": NumberLong(40),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "0011437",
  "sogiaykiemdichthusong": "0011437",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.165Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66439"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15465-186-1176329",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-06T00:00:00.0Z"),
  "ngaygioxuat_1": "16/12/2016 15:11:29",
  "madan": "15465",
  "soluong": NumberLong(14),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 00109",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.166Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6643a"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15494-170-1172740",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-08T00:00:00.0Z"),
  "ngaygioxuat_1": "08/12/2016 17:07:32",
  "madan": "15494",
  "soluong": NumberLong(5),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 00109",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.168Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6643b"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15576-170-1172740",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-08T00:00:00.0Z"),
  "ngaygioxuat_1": "08/12/2016 17:07:32",
  "madan": "15576",
  "soluong": NumberLong(10),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 00109",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.170Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6643c"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15579-179-1174212",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-02T00:00:00.0Z"),
  "ngaygioxuat_1": "12/12/2016 15:01:18",
  "madan": "15579",
  "soluong": NumberLong(4),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 06569",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.171Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6643d"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15342-181-1174324",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-02T00:00:00.0Z"),
  "ngaygioxuat_1": "12/12/2016 16:35:26",
  "madan": "15342",
  "soluong": NumberLong(3),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 06569",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.173Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6643e"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15576-183-1174284",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-02T00:00:00.0Z"),
  "ngaygioxuat_1": "12/12/2016 15:58:43",
  "madan": "15576",
  "soluong": NumberLong(10),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 00109",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.175Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6643f"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15465-191-1176496",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-07T00:00:00.0Z"),
  "ngaygioxuat_1": "17/12/2016 06:51:26",
  "madan": "15465",
  "soluong": NumberLong(28),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "0011441",
  "sogiaykiemdichthusong": "0011441",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.176Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66440"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-13468-1-1017168",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6609f"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-01-02T00:00:00.0Z"),
  "ngaygioxuat_1": "12/01/2016 15:20:56",
  "madan": "13468",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.178Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66441"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15341-33-1104852",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-07-01T23:00:00.0Z"),
  "ngaygioxuat_1": "22/07/2016 11:21:13",
  "madan": "15341",
  "soluong": NumberLong(52),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.179Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66442"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15494-39-1110971",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-08-01T23:00:00.0Z"),
  "ngaygioxuat_1": "02/08/2016 15:21:42",
  "madan": "15494",
  "soluong": NumberLong(130),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.181Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66443"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15576-58-1122116",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-08-02T23:00:00.0Z"),
  "ngaygioxuat_1": "23/08/2016 10:05:53",
  "madan": "15576",
  "soluong": NumberLong(250),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.184Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66444"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15814-72-1134418",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-08-30T23:00:00.0Z"),
  "ngaygioxuat_1": "20/09/2016 10:31:23",
  "madan": "15814",
  "soluong": NumberLong(150),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.186Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66445"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15576-77-1139338",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-09-08T23:00:00.0Z"),
  "ngaygioxuat_1": "29/09/2016 14:43:33",
  "madan": "15576",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.188Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66446"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15205-97-1148439",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-08T23:00:00.0Z"),
  "ngaygioxuat_1": "19/10/2016 15:45:10",
  "madan": "15205",
  "soluong": NumberLong(2),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.190Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66447"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15294-108-1155237",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-04T00:00:00.0Z"),
  "ngaygioxuat_1": "04/11/2016 13:48:19",
  "madan": "15294",
  "soluong": NumberLong(82),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C-20861",
  "tentaixe": "10763",
  "sogiaykiemdichthusong": "10763",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.192Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66448"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15294-115-1156201",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-07T00:00:00.0Z"),
  "ngaygioxuat_1": "07/11/2016 16:34:44",
  "madan": "15294",
  "soluong": NumberLong(70),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C-20861",
  "tentaixe": "10763",
  "sogiaykiemdichthusong": "10763",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.194Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66449"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15578-63-1124684",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-07-30T23:00:00.0Z"),
  "ngaygioxuat_1": "30/08/2016 11:31:14",
  "madan": "15578",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.195Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6644a"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15576-64-1125153",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-07-31T23:00:00.0Z"),
  "ngaygioxuat_1": "31/08/2016 11:22:45",
  "madan": "15576",
  "soluong": NumberLong(240),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.197Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6644b"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15294-77-1139338",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-09-08T23:00:00.0Z"),
  "ngaygioxuat_1": "29/09/2016 14:43:33",
  "madan": "15294",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.199Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6644c"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-87-1145902",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-03T23:00:00.0Z"),
  "ngaygioxuat_1": "14/10/2016 14:14:41",
  "madan": "15204",
  "soluong": NumberLong(86),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.200Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6644d"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-87-1145904",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-03T23:00:00.0Z"),
  "ngaygioxuat_1": "14/10/2016 14:15:26",
  "madan": "15204",
  "soluong": NumberLong(25),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.202Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6644e"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-87-1147487",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-07T23:00:00.0Z"),
  "ngaygioxuat_1": "18/10/2016 14:22:21",
  "madan": "15204",
  "soluong": NumberLong(83),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.204Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6644f"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-87-1147047",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-06T23:00:00.0Z"),
  "ngaygioxuat_1": "17/10/2016 14:53:18",
  "madan": "15204",
  "soluong": NumberLong(80),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.205Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66450"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-87-1147050",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-06T23:00:00.0Z"),
  "ngaygioxuat_1": "17/10/2016 14:54:14",
  "madan": "15204",
  "soluong": NumberLong(81),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.207Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66451"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15294-124-1157597",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-01T00:00:00.0Z"),
  "ngaygioxuat_1": "11/11/2016 10:49:48",
  "madan": "15294",
  "soluong": NumberLong(65),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.209Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66452"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-16364-134-1163086",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-08T00:00:00.0Z"),
  "ngaygioxuat_1": "18/11/2016 14:12:23",
  "madan": "16364",
  "soluong": NumberLong(200),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.210Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66453"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15465-137-1163687",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-02T00:00:00.0Z"),
  "ngaygioxuat_1": "22/11/2016 15:31:18",
  "madan": "15465",
  "soluong": NumberLong(2),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.212Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66454"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15341-144-1165192",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-06T00:00:00.0Z"),
  "ngaygioxuat_1": "26/11/2016 06:58:07",
  "madan": "15341",
  "soluong": NumberLong(36),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "0010780",
  "sogiaykiemdichthusong": "0010780",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.213Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66455"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15341-145-1165193",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-06T00:00:00.0Z"),
  "ngaygioxuat_1": "26/11/2016 07:31:10",
  "madan": "15341",
  "soluong": NumberLong(64),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "0010779",
  "sogiaykiemdichthusong": "0010779",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.215Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66456"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15494-164-1172379",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-08T00:00:00.0Z"),
  "ngaygioxuat_1": "08/12/2016 07:25:39",
  "madan": "15494",
  "soluong": NumberLong(31),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "0011412",
  "sogiaykiemdichthusong": "0011412",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.217Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66457"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15576-179-1174212",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-02T00:00:00.0Z"),
  "ngaygioxuat_1": "12/12/2016 15:01:18",
  "madan": "15576",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 06569",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.218Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66458"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15576-180-1174323",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-02T00:00:00.0Z"),
  "ngaygioxuat_1": "12/12/2016 16:28:32",
  "madan": "15576",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 06569",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.220Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66459"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15576-182-1174278",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-02T00:00:00.0Z"),
  "ngaygioxuat_1": "12/12/2016 15:54:22",
  "madan": "15576",
  "soluong": NumberLong(15),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13568",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.222Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6645a"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-14043-1-1017168",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6609f"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-01-02T00:00:00.0Z"),
  "ngaygioxuat_1": "12/01/2016 15:20:56",
  "madan": "14043",
  "soluong": NumberLong(2),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.223Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6645b"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15135-52-1118648",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6609f"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-08-06T23:00:00.0Z"),
  "ngaygioxuat_1": "17/08/2016 16:29:38",
  "madan": "15135",
  "soluong": NumberLong(2),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.225Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6645c"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-87-1145901",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-03T23:00:00.0Z"),
  "ngaygioxuat_1": "14/10/2016 14:13:55",
  "madan": "15204",
  "soluong": NumberLong(68),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.226Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6645d"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-87-1147818",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-08T23:00:00.0Z"),
  "ngaygioxuat_1": "19/10/2016 12:02:56",
  "madan": "15204",
  "soluong": NumberLong(50),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.228Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6645e"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-87-1147485",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-07T23:00:00.0Z"),
  "ngaygioxuat_1": "18/10/2016 14:20:28",
  "madan": "15204",
  "soluong": NumberLong(45),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.230Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6645f"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-87-1147042",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-04T23:00:00.0Z"),
  "ngaygioxuat_1": "15/10/2016 12:25:29",
  "madan": "15204",
  "soluong": NumberLong(80),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.231Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66460"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-87-1147045",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-05T23:00:00.0Z"),
  "ngaygioxuat_1": "16/10/2016 14:51:21",
  "madan": "15204",
  "soluong": NumberLong(66),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.233Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66461"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-16292-100-1150165",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-09-30T23:00:00.0Z"),
  "ngaygioxuat_1": "21/10/2016 15:38:49",
  "madan": "16292",
  "soluong": NumberLong(200),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C-20861",
  "tentaixe": "10763",
  "sogiaykiemdichthusong": "10763",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.234Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66462"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15341-104-1154114",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-07T23:00:00.0Z"),
  "ngaygioxuat_1": "28/10/2016 14:08:00",
  "madan": "15341",
  "soluong": NumberLong(2),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C-20861",
  "tentaixe": "10763",
  "sogiaykiemdichthusong": "10763",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.350Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66463"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-16292-109-1156073",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-04T00:00:00.0Z"),
  "ngaygioxuat_1": "04/11/2016 13:28:13",
  "madan": "16292",
  "soluong": NumberLong(150),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C-20861",
  "tentaixe": "10763",
  "sogiaykiemdichthusong": "10763",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.352Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66464"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15294-111-1156189",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-05T00:00:00.0Z"),
  "ngaygioxuat_1": "05/11/2016 16:16:03",
  "madan": "15294",
  "soluong": NumberLong(71),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.354Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66465"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15294-112-1156192",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-06T00:00:00.0Z"),
  "ngaygioxuat_1": "06/11/2016 16:21:07",
  "madan": "15294",
  "soluong": NumberLong(80),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C-20861",
  "tentaixe": "10763",
  "sogiaykiemdichthusong": "10763",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.356Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66466"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15294-113-1156194",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-06T00:00:00.0Z"),
  "ngaygioxuat_1": "06/11/2016 16:24:36",
  "madan": "15294",
  "soluong": NumberLong(76),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C-20861",
  "tentaixe": "10763",
  "sogiaykiemdichthusong": "10763",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.357Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66467"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15295-122-1157279",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-31T00:00:00.0Z"),
  "ngaygioxuat_1": "10/11/2016 11:53:55",
  "madan": "15295",
  "soluong": NumberLong(65),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.359Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66468"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15576-137-1163687",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-02T00:00:00.0Z"),
  "ngaygioxuat_1": "22/11/2016 15:31:18",
  "madan": "15576",
  "soluong": NumberLong(2),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.361Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66469"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15341-140-1163926",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-03T00:00:00.0Z"),
  "ngaygioxuat_1": "23/11/2016 09:35:40",
  "madan": "15341",
  "soluong": NumberLong(61),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "0010767",
  "sogiaykiemdichthusong": "0010767",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.362Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6646a"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15578-155-1169654",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-03T00:00:00.0Z"),
  "ngaygioxuat_1": "03/12/2016 07:00:47",
  "madan": "15578",
  "soluong": NumberLong(50),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "0010794",
  "sogiaykiemdichthusong": "0010794",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.364Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6646b"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-16956-161-1171091",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-05T00:00:00.0Z"),
  "ngaygioxuat_1": "05/12/2016 11:43:48",
  "madan": "16956",
  "soluong": NumberLong(210),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20861",
  "tentaixe": "0011405",
  "sogiaykiemdichthusong": "0011405",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.365Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6646c"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15576-165-1172380",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-08T00:00:00.0Z"),
  "ngaygioxuat_1": "08/12/2016 07:41:21",
  "madan": "15576",
  "soluong": NumberLong(6),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "0011413 và 0011414",
  "sogiaykiemdichthusong": "0011413 và 0011414",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.367Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6646d"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15578-165-1172380",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-08T00:00:00.0Z"),
  "ngaygioxuat_1": "08/12/2016 07:41:21",
  "madan": "15578",
  "soluong": NumberLong(30),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "0011413 và 0011414",
  "sogiaykiemdichthusong": "0011413 và 0011414",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.369Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6646e"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-16956-167-1172557",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-08T00:00:00.0Z"),
  "ngaygioxuat_1": "08/12/2016 12:03:24",
  "madan": "16956",
  "soluong": NumberLong(150),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 10816",
  "tentaixe": "0011416",
  "sogiaykiemdichthusong": "0011416",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.370Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6646f"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15576-171-1172743",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-08T00:00:00.0Z"),
  "ngaygioxuat_1": "08/12/2016 17:10:53",
  "madan": "15576",
  "soluong": NumberLong(15),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 06520",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.372Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66470"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15578-175-1172774",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-09T00:00:00.0Z"),
  "ngaygioxuat_1": "09/12/2016 07:11:54",
  "madan": "15578",
  "soluong": NumberLong(71),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "0011422",
  "sogiaykiemdichthusong": "0011422",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.373Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66471"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15576-176-1173187",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-09T00:00:00.0Z"),
  "ngaygioxuat_1": "09/12/2016 17:07:33",
  "madan": "15576",
  "soluong": NumberLong(15),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 06520",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.375Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66472"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15496-179-1174212",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-02T00:00:00.0Z"),
  "ngaygioxuat_1": "12/12/2016 15:01:18",
  "madan": "15496",
  "soluong": NumberLong(5),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 06569",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.376Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66473"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15465-190-1176495",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-07T00:00:00.0Z"),
  "ngaygioxuat_1": "17/12/2016 06:45:49",
  "madan": "15465",
  "soluong": NumberLong(72),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "0011442",
  "sogiaykiemdichthusong": "0011442",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.378Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66474"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15465-192-1177079",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-08T00:00:00.0Z"),
  "ngaygioxuat_1": "18/12/2016 07:14:39",
  "madan": "15465",
  "soluong": NumberLong(65),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "0011445",
  "sogiaykiemdichthusong": "0011445",
  "nhanvienkiemdich": "Ngiuyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.379Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66475"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15341-36-1108310",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-07-07T23:00:00.0Z"),
  "ngaygioxuat_1": "28/07/2016 14:06:15",
  "madan": "15341",
  "soluong": NumberLong(50),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.381Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66476"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15341-44-1112360",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-08-04T23:00:00.0Z"),
  "ngaygioxuat_1": "05/08/2016 13:34:58",
  "madan": "15341",
  "soluong": NumberLong(50),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.382Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66477"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15576-60-1123120",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-08-05T23:00:00.0Z"),
  "ngaygioxuat_1": "26/08/2016 13:02:54",
  "madan": "15576",
  "soluong": NumberLong(200),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.384Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66478"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15204-74-1135439",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-08-31T23:00:00.0Z"),
  "ngaygioxuat_1": "21/09/2016 11:47:29",
  "madan": "15204",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.385Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66479"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-87-1145903",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-03T23:00:00.0Z"),
  "ngaygioxuat_1": "14/10/2016 14:15:13",
  "madan": "15204",
  "soluong": NumberLong(73),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.387Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6647a"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15205-96-1148438",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-08T23:00:00.0Z"),
  "ngaygioxuat_1": "19/10/2016 16:51:32",
  "madan": "15205",
  "soluong": NumberLong(80),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.388Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6647b"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-98-1148441",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-08T23:00:00.0Z"),
  "ngaygioxuat_1": "19/10/2016 15:47:43",
  "madan": "15204",
  "soluong": NumberLong(66),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.390Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6647c"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-16292-102-1150167",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-01T23:00:00.0Z"),
  "ngaygioxuat_1": "22/10/2016 15:43:14",
  "madan": "16292",
  "soluong": NumberLong(110),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C-20861",
  "tentaixe": "10763",
  "sogiaykiemdichthusong": "10763",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.391Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6647d"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15494-104-1154114",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-07T23:00:00.0Z"),
  "ngaygioxuat_1": "28/10/2016 14:08:00",
  "madan": "15494",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C-20861",
  "tentaixe": "10763",
  "sogiaykiemdichthusong": "10763",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.393Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6647e"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15496-104-1154114",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-07T23:00:00.0Z"),
  "ngaygioxuat_1": "28/10/2016 14:08:00",
  "madan": "15496",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C-20861",
  "tentaixe": "10763",
  "sogiaykiemdichthusong": "10763",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.395Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6647f"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15578-118-1156573",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-08T00:00:00.0Z"),
  "ngaygioxuat_1": "08/11/2016 14:15:12",
  "madan": "15578",
  "soluong": NumberLong(2),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C-20861",
  "tentaixe": "10763",
  "sogiaykiemdichthusong": "10763",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.396Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66480"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15576-164-1172379",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-08T00:00:00.0Z"),
  "ngaygioxuat_1": "08/12/2016 07:25:39",
  "madan": "15576",
  "soluong": NumberLong(54),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "0011412",
  "sogiaykiemdichthusong": "0011412",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.398Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66481"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-16956-168-1172566",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-08T00:00:00.0Z"),
  "ngaygioxuat_1": "08/12/2016 13:08:59",
  "madan": "16956",
  "soluong": NumberLong(170),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21040",
  "tentaixe": "0011417",
  "sogiaykiemdichthusong": "0011417",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.399Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66482"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15576-184-1176020",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-06T00:00:00.0Z"),
  "ngaygioxuat_1": "16/12/2016 06:52:19",
  "madan": "15576",
  "soluong": NumberLong(25),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "0011437",
  "sogiaykiemdichthusong": "0011437",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.401Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66483"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15465-187-1176334",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-06T00:00:00.0Z"),
  "ngaygioxuat_1": "16/12/2016 15:16:21",
  "madan": "15465",
  "soluong": NumberLong(16),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 06520",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.402Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66484"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15465-193-1177080",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-08T00:00:00.0Z"),
  "ngaygioxuat_1": "18/12/2016 07:22:39",
  "madan": "15465",
  "soluong": NumberLong(35),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "0011444",
  "sogiaykiemdichthusong": "0011444",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.404Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66485"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-14514-3-1052648",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6609f"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-04-03T23:00:00.0Z"),
  "ngaygioxuat_1": "14/04/2016 14:29:23",
  "madan": "14514",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.406Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66486"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15077-34-1108162",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6609f"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-07-06T23:00:00.0Z"),
  "ngaygioxuat_1": "27/07/2016 09:03:50",
  "madan": "15077",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.407Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66487"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15496-53-1118704",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-08-06T23:00:00.0Z"),
  "ngaygioxuat_1": "17/08/2016 09:21:49",
  "madan": "15496",
  "soluong": NumberLong(135),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.408Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66488"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15576-62-1124252",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-08-06T23:00:00.0Z"),
  "ngaygioxuat_1": "27/08/2016 14:45:21",
  "madan": "15576",
  "soluong": NumberLong(250),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.410Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66489"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15578-66-1127728",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-09-04T23:00:00.0Z"),
  "ngaygioxuat_1": "05/09/2016 12:34:11",
  "madan": "15578",
  "soluong": NumberLong(230),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.412Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6648a"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-87-1147046",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-05T23:00:00.0Z"),
  "ngaygioxuat_1": "16/10/2016 12:16:04",
  "madan": "15204",
  "soluong": NumberLong(60),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.413Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6648b"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15294-104-1154114",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-07T23:00:00.0Z"),
  "ngaygioxuat_1": "28/10/2016 14:08:00",
  "madan": "15294",
  "soluong": NumberLong(3),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C-20861",
  "tentaixe": "10763",
  "sogiaykiemdichthusong": "10763",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.415Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6648c"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15294-107-1155229",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-04T00:00:00.0Z"),
  "ngaygioxuat_1": "04/11/2016 13:43:36",
  "madan": "15294",
  "soluong": NumberLong(88),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C-20861",
  "tentaixe": "10763",
  "sogiaykiemdichthusong": "10763",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.416Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6648d"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15576-118-1156573",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-08T00:00:00.0Z"),
  "ngaygioxuat_1": "08/11/2016 14:15:12",
  "madan": "15576",
  "soluong": NumberLong(6),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C-20861",
  "tentaixe": "10763",
  "sogiaykiemdichthusong": "10763",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.418Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6648e"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15294-116-1156496",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-08T00:00:00.0Z"),
  "ngaygioxuat_1": "08/11/2016 11:10:01",
  "madan": "15294",
  "soluong": NumberLong(85),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C-20861",
  "tentaixe": "10763",
  "sogiaykiemdichthusong": "10763",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.420Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6648f"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-16364-130-1163029",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-08T00:00:00.0Z"),
  "ngaygioxuat_1": "18/11/2016 14:05:02",
  "madan": "16364",
  "soluong": NumberLong(170),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.421Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66490"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15342-136-1163685",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-02T00:00:00.0Z"),
  "ngaygioxuat_1": "22/11/2016 15:28:51",
  "madan": "15342",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.423Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66491"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15494-152-1169327",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-02T00:00:00.0Z"),
  "ngaygioxuat_1": "02/12/2016 07:35:40",
  "madan": "15494",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "0010791",
  "sogiaykiemdichthusong": "0010791",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.424Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66492"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15496-155-1169654",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-03T00:00:00.0Z"),
  "ngaygioxuat_1": "03/12/2016 07:00:47",
  "madan": "15496",
  "soluong": NumberLong(10),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "0010794",
  "sogiaykiemdichthusong": "0010794",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.425Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66493"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15578-157-1170865",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-04T00:00:00.0Z"),
  "ngaygioxuat_1": "04/12/2016 06:57:46",
  "madan": "15578",
  "soluong": NumberLong(66),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "0011401",
  "sogiaykiemdichthusong": "0011401",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.427Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66494"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15578-158-1170866",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-04T00:00:00.0Z"),
  "ngaygioxuat_1": "04/12/2016 07:11:29",
  "madan": "15578",
  "soluong": NumberLong(34),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "0011402 và 0011403",
  "sogiaykiemdichthusong": "0011402 và 0011403",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.429Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66495"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15341-39-1110971",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-08-01T23:00:00.0Z"),
  "ngaygioxuat_1": "02/08/2016 15:21:42",
  "madan": "15341",
  "soluong": NumberLong(90),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.430Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66496"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15494-44-1112360",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-08-04T23:00:00.0Z"),
  "ngaygioxuat_1": "05/08/2016 13:34:58",
  "madan": "15494",
  "soluong": NumberLong(270),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.431Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66497"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15494-46-1115962",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-08-01T23:00:00.0Z"),
  "ngaygioxuat_1": "12/08/2016 12:43:10",
  "madan": "15494",
  "soluong": NumberLong(180),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.433Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66498"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15576-53-1118704",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-08-06T23:00:00.0Z"),
  "ngaygioxuat_1": "17/08/2016 09:21:49",
  "madan": "15576",
  "soluong": NumberLong(125),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.434Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f66499"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-87-1147043",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-04T23:00:00.0Z"),
  "ngaygioxuat_1": "15/10/2016 12:29:24",
  "madan": "15204",
  "soluong": NumberLong(38),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.436Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6649a"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-87-1147044",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-05T23:00:00.0Z"),
  "ngaygioxuat_1": "16/10/2016 14:50:36",
  "madan": "15204",
  "soluong": NumberLong(76),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.438Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6649b"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15294-118-1156573",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-08T00:00:00.0Z"),
  "ngaygioxuat_1": "08/11/2016 14:15:12",
  "madan": "15294",
  "soluong": NumberLong(5),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C-20861",
  "tentaixe": "10763",
  "sogiaykiemdichthusong": "10763",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.439Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6649c"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15496-118-1156573",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-08T00:00:00.0Z"),
  "ngaygioxuat_1": "08/11/2016 14:15:12",
  "madan": "15496",
  "soluong": NumberLong(2),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C-20861",
  "tentaixe": "10763",
  "sogiaykiemdichthusong": "10763",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.441Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6649d"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15294-117-1156500",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-08T00:00:00.0Z"),
  "ngaygioxuat_1": "08/11/2016 11:12:29",
  "madan": "15294",
  "soluong": NumberLong(65),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C-20861",
  "tentaixe": "10763",
  "sogiaykiemdichthusong": "10763",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.442Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6649e"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15294-121-1157277",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-31T00:00:00.0Z"),
  "ngaygioxuat_1": "10/11/2016 10:57:24",
  "madan": "15294",
  "soluong": NumberLong(80),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.444Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f6649f"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-16364-128-1163027",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-08T00:00:00.0Z"),
  "ngaygioxuat_1": "18/11/2016 13:44:22",
  "madan": "16364",
  "soluong": NumberLong(200),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.445Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664a0"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15494-137-1163687",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-02T00:00:00.0Z"),
  "ngaygioxuat_1": "22/11/2016 15:31:18",
  "madan": "15494",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.447Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664a1"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15578-137-1163687",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-02T00:00:00.0Z"),
  "ngaygioxuat_1": "22/11/2016 15:31:18",
  "madan": "15578",
  "soluong": NumberLong(4),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.449Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664a2"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15342-143-1166934",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-06T00:00:00.0Z"),
  "ngaygioxuat_1": "26/11/2016 09:23:59",
  "madan": "15342",
  "soluong": NumberLong(36),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "0010780",
  "sogiaykiemdichthusong": "0010780",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.450Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664a3"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15494-162-1172353",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-07T00:00:00.0Z"),
  "ngaygioxuat_1": "07/12/2016 16:57:38",
  "madan": "15494",
  "soluong": NumberLong(19),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 00109",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.451Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664a4"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15494-163-1172355",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-07T00:00:00.0Z"),
  "ngaygioxuat_1": "07/12/2016 17:04:03",
  "madan": "15494",
  "soluong": NumberLong(16),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13568",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.456Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664a5"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15495-173-1172772",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-09T00:00:00.0Z"),
  "ngaygioxuat_1": "09/12/2016 06:43:41",
  "madan": "15495",
  "soluong": NumberLong(39),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "0011423",
  "sogiaykiemdichthusong": "0011423",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.457Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664a6"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15578-174-1172773",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-09T00:00:00.0Z"),
  "ngaygioxuat_1": "09/12/2016 06:59:25",
  "madan": "15578",
  "soluong": NumberLong(49),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "0011423",
  "sogiaykiemdichthusong": "0011423",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.459Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664a7"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15814-180-1174323",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-02T00:00:00.0Z"),
  "ngaygioxuat_1": "12/12/2016 16:28:32",
  "madan": "15814",
  "soluong": NumberLong(6),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 06569",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.461Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664a8"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15465-185-1176021",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-06T00:00:00.0Z"),
  "ngaygioxuat_1": "16/12/2016 07:16:43",
  "madan": "15465",
  "soluong": NumberLong(60),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "0011436",
  "sogiaykiemdichthusong": "0011436",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.462Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664a9"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-13468-2-1019158",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6609f"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-01-09T00:00:00.0Z"),
  "ngaygioxuat_1": "19/01/2016 14:16:10",
  "madan": "13468",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.464Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664aa"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-14609-3-1052648",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6609f"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-04-03T23:00:00.0Z"),
  "ngaygioxuat_1": "14/04/2016 14:29:23",
  "madan": "14609",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.465Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664ab"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-15496-48-1117704",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-08-05T23:00:00.0Z"),
  "ngaygioxuat_1": "16/08/2016 14:13:12",
  "madan": "15496",
  "soluong": NumberLong(240),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.467Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664ac"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-87-1147041",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-04T23:00:00.0Z"),
  "ngaygioxuat_1": "15/10/2016 12:24:34",
  "madan": "15204",
  "soluong": NumberLong(84),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.468Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664ad"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15204-87-1147486",
  "TRANSFER_DATE": "2016/12/19 20:06:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161219_200639.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-10-07T23:00:00.0Z"),
  "ngaygioxuat_1": "18/10/2016 14:21:29",
  "madan": "15204",
  "soluong": NumberLong(72),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.470Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664ae"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17077-194-1177875",
  "TRANSFER_DATE": "2016/12/20 10:04:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161220_100438.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6608d"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-30T00:00:00.0Z"),
  "ngaygioxuat_1": "20/12/2016 10:03:54",
  "madan": "17077",
  "soluong": NumberLong(200),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20861",
  "tentaixe": "0011450",
  "sogiaykiemdichthusong": "0011450",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.491Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664af"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17077-195-1177896",
  "TRANSFER_DATE": "2016/12/20 10:42:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161220_104239.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd5"),
  "tieuchuan": "Viet G.A.P.",
  "ngaygioxuat": ISODate("2016-11-30T00:00:00.0Z"),
  "ngaygioxuat_1": "20/12/2016 10:42:16",
  "madan": "17077",
  "soluong": NumberLong(150),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 10816",
  "tentaixe": "0011451",
  "sogiaykiemdichthusong": "0011451",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.590Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664b0"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15465-196-1178229",
  "TRANSFER_DATE": "2016/12/20 16:08:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161220_160839.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-30T00:00:00.0Z"),
  "ngaygioxuat_1": "20/12/2016 16:06:04",
  "madan": "15465",
  "soluong": NumberLong(17),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 00109",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.638Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664b1"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15465-197-1178230",
  "TRANSFER_DATE": "2016/12/20 16:16:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161220_161639.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-11-30T00:00:00.0Z"),
  "ngaygioxuat_1": "20/12/2016 16:15:48",
  "madan": "15465",
  "soluong": NumberLong(18),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 06520",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.674Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664b2"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17077-198-1179474",
  "TRANSFER_DATE": "2016/12/22 13:14:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161222_131438.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-02T00:00:00.0Z"),
  "ngaygioxuat_1": "22/12/2016 13:08:49",
  "madan": "17077",
  "soluong": NumberLong(200),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20861",
  "tentaixe": "0011457",
  "sogiaykiemdichthusong": "0011457",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.679Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664b3"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15465-199-1179994",
  "TRANSFER_DATE": "2016/12/23 10:08:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161223_100838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-03T00:00:00.0Z"),
  "ngaygioxuat_1": "23/12/2016 10:07:14",
  "madan": "15465",
  "soluong": NumberLong(17),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 00109",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.717Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664b4"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15465-200-1180003",
  "TRANSFER_DATE": "2016/12/23 10:12:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161223_101238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGap",
  "ngaygioxuat": ISODate("2016-12-03T00:00:00.0Z"),
  "ngaygioxuat_1": "23/12/2016 10:11:54",
  "madan": "15465",
  "soluong": NumberLong(18),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 06520",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.724Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664c1"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15496-202-1182749",
  "TRANSFER_DATE": "2016/12/27 12:06:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161227_120638.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2016-12-07T00:00:00.0Z"),
  "ngaygioxuat_1": "27/12/2016 06:57:28",
  "madan": "15496",
  "soluong": NumberLong(25),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11489",
  "tentaixe": "11467",
  "sogiaykiemdichthusong": "11467",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.738Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664c2"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15578-203-1182750",
  "TRANSFER_DATE": "2016/12/27 12:06:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161227_120638.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2016-12-07T00:00:00.0Z"),
  "ngaygioxuat_1": "27/12/2016 07:22:49",
  "madan": "15578",
  "soluong": NumberLong(8),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "11468",
  "sogiaykiemdichthusong": "11468",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.739Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664c3"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15494-202-1182749",
  "TRANSFER_DATE": "2016/12/27 12:06:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161227_120638.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2016-12-07T00:00:00.0Z"),
  "ngaygioxuat_1": "27/12/2016 06:57:28",
  "madan": "15494",
  "soluong": NumberLong(10),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11489",
  "tentaixe": "11467",
  "sogiaykiemdichthusong": "11467",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.740Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664c4"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15578-202-1182749",
  "TRANSFER_DATE": "2016/12/27 12:06:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161227_120638.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2016-12-07T00:00:00.0Z"),
  "ngaygioxuat_1": "27/12/2016 06:57:28",
  "madan": "15578",
  "soluong": NumberLong(40),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11489",
  "tentaixe": "11467",
  "sogiaykiemdichthusong": "11467",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.742Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664c5"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15814-203-1182750",
  "TRANSFER_DATE": "2016/12/27 12:06:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161227_120638.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2016-12-07T00:00:00.0Z"),
  "ngaygioxuat_1": "27/12/2016 07:22:49",
  "madan": "15814",
  "soluong": NumberLong(30),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "11468",
  "sogiaykiemdichthusong": "11468",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.743Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664c6"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15576-203-1182750",
  "TRANSFER_DATE": "2016/12/27 12:06:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161227_120638.csv",
  "CREATED_BY": "NKHANG",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2016-12-07T00:00:00.0Z"),
  "ngaygioxuat_1": "27/12/2016 07:22:49",
  "madan": "15576",
  "soluong": NumberLong(7),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "11468",
  "sogiaykiemdichthusong": "11468",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.744Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664c7"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15814-204-1183121",
  "TRANSFER_DATE": "2016/12/27 16:46:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161227_164639.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2016-12-07T00:00:00.0Z"),
  "ngaygioxuat_1": "27/12/2016 16:45:59",
  "madan": "15814",
  "soluong": NumberLong(14),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 00109",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.773Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664c8"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15814-205-1183126",
  "TRANSFER_DATE": "2016/12/27 16:48:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161227_164839.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2016-12-07T00:00:00.0Z"),
  "ngaygioxuat_1": "27/12/2016 16:48:21",
  "madan": "15814",
  "soluong": NumberLong(16),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 01619",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.843Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664c9"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15814-206-1183196",
  "TRANSFER_DATE": "2016/12/28 06:40:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161228_064039.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2016-12-08T00:00:00.0Z"),
  "ngaygioxuat_1": "28/12/2016 06:36:58",
  "madan": "15814",
  "soluong": NumberLong(75),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "11470",
  "sogiaykiemdichthusong": "11470",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.889Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664ca"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15814-207-1183197",
  "TRANSFER_DATE": "2016/12/28 06:56:41",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161228_065641.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2016-12-08T00:00:00.0Z"),
  "ngaygioxuat_1": "28/12/2016 06:54:46",
  "madan": "15814",
  "soluong": NumberLong(60),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "11469",
  "sogiaykiemdichthusong": "11469",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.891Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664cb"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15814-208-1183722",
  "TRANSFER_DATE": "2016/12/29 08:52:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161229_085238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2016-12-09T00:00:00.0Z"),
  "ngaygioxuat_1": "29/12/2016 08:50:01",
  "madan": "15814",
  "soluong": NumberLong(75),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "11471",
  "sogiaykiemdichthusong": "11471",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.953Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664cc"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15814-209-1183731",
  "TRANSFER_DATE": "2016/12/29 09:14:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161229_091438.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2016-12-09T00:00:00.0Z"),
  "ngaygioxuat_1": "29/12/2016 09:13:08",
  "madan": "15814",
  "soluong": NumberLong(60),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 03676",
  "tentaixe": "11472",
  "sogiaykiemdichthusong": "11472",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.988Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664cd"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15814-211-1184225",
  "TRANSFER_DATE": "2016/12/30 07:18:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161230_071838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2016-11-30T00:00:00.0Z"),
  "ngaygioxuat_1": "30/12/2016 07:18:03",
  "madan": "15814",
  "soluong": NumberLong(75),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11489",
  "tentaixe": "11475",
  "sogiaykiemdichthusong": "11475",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.992Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664ce"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15814-212-1184226",
  "TRANSFER_DATE": "2016/12/30 07:56:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161230_075639.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2016-11-30T00:00:00.0Z"),
  "ngaygioxuat_1": "30/12/2016 07:56:07",
  "madan": "15814",
  "soluong": NumberLong(60),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 03676",
  "tentaixe": "11476",
  "sogiaykiemdichthusong": "11476",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:04.994Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6cc12583e352f664cf"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15814-214-1184454",
  "TRANSFER_DATE": "2016/12/30 16:16:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161230_161639.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2016-11-30T00:00:00.0Z"),
  "ngaygioxuat_1": "30/12/2016 16:14:20",
  "madan": "15814",
  "soluong": NumberLong(14),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 00109",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.1Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664d0"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15814-215-1184459",
  "TRANSFER_DATE": "2016/12/30 16:18:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161230_161839.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2016-11-30T00:00:00.0Z"),
  "ngaygioxuat_1": "30/12/2016 16:16:26",
  "madan": "15814",
  "soluong": NumberLong(16),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "72C 06520",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.5Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664d1"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15814-216-1184565",
  "TRANSFER_DATE": "2016/12/31 07:30:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161231_073039.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2016-12-01T00:00:00.0Z"),
  "ngaygioxuat_1": "31/12/2016 07:28:02",
  "madan": "15814",
  "soluong": NumberLong(85),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "11487",
  "sogiaykiemdichthusong": "11487",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.7Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664d2"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15814-217-1184566",
  "TRANSFER_DATE": "2016/12/31 08:04:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161231_080438.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2016-12-01T00:00:00.0Z"),
  "ngaygioxuat_1": "31/12/2016 08:03:23",
  "madan": "15814",
  "soluong": NumberLong(50),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 03676",
  "tentaixe": "11488",
  "sogiaykiemdichthusong": "11488",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.30Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664d3"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17316-218-1184628",
  "TRANSFER_DATE": "2016/12/31 10:14:41",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20161231_101441.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2016-12-01T00:00:00.0Z"),
  "ngaygioxuat_1": "31/12/2016 10:13:50",
  "madan": "17316",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 10816",
  "tentaixe": "11481",
  "sogiaykiemdichthusong": "11481",
  "nhanvienkiemdich": "Nguyễn Thị Bác Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.31Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664d4"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15494-222-1184869",
  "TRANSFER_DATE": "2017/01/02 08:08:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170102_080838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-02T00:00:00.0Z"),
  "ngaygioxuat_1": "02/01/2017 08:06:36",
  "madan": "15494",
  "soluong": NumberLong(10),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "11489",
  "sogiaykiemdichthusong": "11489",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.44Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664d5"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15814-223-1184870",
  "TRANSFER_DATE": "2017/01/02 08:10:40",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170102_081040.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-02T00:00:00.0Z"),
  "ngaygioxuat_1": "02/01/2017 08:09:00",
  "madan": "15814",
  "soluong": NumberLong(40),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 03676",
  "tentaixe": "11491",
  "sogiaykiemdichthusong": "11491",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.45Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664d6"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15576-222-1184869",
  "TRANSFER_DATE": "2017/01/02 08:18:41",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170102_081841.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-02T00:00:00.0Z"),
  "ngaygioxuat_1": "02/01/2017 08:06:36",
  "madan": "15576",
  "soluong": NumberLong(4),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "11489",
  "sogiaykiemdichthusong": "11489",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.65Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664d7"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15496-222-1184869",
  "TRANSFER_DATE": "2017/01/02 08:18:41",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170102_081841.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-02T00:00:00.0Z"),
  "ngaygioxuat_1": "02/01/2017 08:06:36",
  "madan": "15496",
  "soluong": NumberLong(5),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "11489",
  "sogiaykiemdichthusong": "11489",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.66Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664d8"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15578-222-1184869",
  "TRANSFER_DATE": "2017/01/02 08:18:41",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170102_081841.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-02T00:00:00.0Z"),
  "ngaygioxuat_1": "02/01/2017 08:06:36",
  "madan": "15578",
  "soluong": NumberLong(6),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "11489",
  "sogiaykiemdichthusong": "11489",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.67Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664d9"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15814-222-1184869",
  "TRANSFER_DATE": "2017/01/02 08:18:41",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170102_081841.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-02T00:00:00.0Z"),
  "ngaygioxuat_1": "02/01/2017 08:06:36",
  "madan": "15814",
  "soluong": NumberLong(62),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "11489",
  "sogiaykiemdichthusong": "11489",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.68Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664da"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15924-225-1185305",
  "TRANSFER_DATE": "2017/01/04 06:52:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170104_065238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-04T00:00:00.0Z"),
  "ngaygioxuat_1": "04/01/2017 06:50:46",
  "madan": "15924",
  "soluong": NumberLong(40),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "11494",
  "sogiaykiemdichthusong": "11494",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.82Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664db"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15465-225-1185305",
  "TRANSFER_DATE": "2017/01/04 06:52:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170104_065238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-04T00:00:00.0Z"),
  "ngaygioxuat_1": "04/01/2017 06:50:46",
  "madan": "15465",
  "soluong": NumberLong(45),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "11494",
  "sogiaykiemdichthusong": "11494",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.83Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664dc"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15814-226-1185306",
  "TRANSFER_DATE": "2017/01/04 07:02:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170104_070238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-04T00:00:00.0Z"),
  "ngaygioxuat_1": "04/01/2017 07:01:09",
  "madan": "15814",
  "soluong": NumberLong(10),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "11495",
  "sogiaykiemdichthusong": "11495",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.85Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664dd"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15924-226-1185306",
  "TRANSFER_DATE": "2017/01/04 07:02:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170104_070238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-04T00:00:00.0Z"),
  "ngaygioxuat_1": "04/01/2017 07:01:09",
  "madan": "15924",
  "soluong": NumberLong(25),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "11495",
  "sogiaykiemdichthusong": "11495",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.86Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664de"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15465-227-1185788",
  "TRANSFER_DATE": "2017/01/05 06:58:40",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170105_065840.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-05T00:00:00.0Z"),
  "ngaygioxuat_1": "05/01/2017 06:58:12",
  "madan": "15465",
  "soluong": NumberLong(80),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "11497",
  "sogiaykiemdichthusong": "11497",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.87Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664df"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15465-228-1185789",
  "TRANSFER_DATE": "2017/01/05 07:10:41",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170105_071041.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-05T00:00:00.0Z"),
  "ngaygioxuat_1": "05/01/2017 07:09:10",
  "madan": "15465",
  "soluong": NumberLong(40),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "11498",
  "sogiaykiemdichthusong": "11498",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.95Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664e0"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17316-229-1185869",
  "TRANSFER_DATE": "2017/01/05 09:38:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170105_093839.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-05T00:00:00.0Z"),
  "ngaygioxuat_1": "05/01/2017 09:37:49",
  "madan": "17316",
  "soluong": NumberLong(200),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20861",
  "tentaixe": "11499",
  "sogiaykiemdichthusong": "11499",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.96Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664e1"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15579-230-1186150",
  "TRANSFER_DATE": "2017/01/06 07:12:40",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170106_071240.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-06T00:00:00.0Z"),
  "ngaygioxuat_1": "06/01/2017 07:08:56",
  "madan": "15579",
  "soluong": NumberLong(80),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "12801",
  "sogiaykiemdichthusong": "12801",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.97Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664e2"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15579-231-1186151",
  "TRANSFER_DATE": "2017/01/06 07:14:40",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170106_071440.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-06T00:00:00.0Z"),
  "ngaygioxuat_1": "06/01/2017 07:13:55",
  "madan": "15579",
  "soluong": NumberLong(19),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "12802",
  "sogiaykiemdichthusong": "12802",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.99Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664e3"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15465-231-1186151",
  "TRANSFER_DATE": "2017/01/06 07:14:40",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170106_071440.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-06T00:00:00.0Z"),
  "ngaygioxuat_1": "06/01/2017 07:13:55",
  "madan": "15465",
  "soluong": NumberLong(21),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "12802",
  "sogiaykiemdichthusong": "12802",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.99Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664e4"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17316-232-1186271",
  "TRANSFER_DATE": "2017/01/06 11:36:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170106_113638.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-06T00:00:00.0Z"),
  "ngaygioxuat_1": "06/01/2017 11:35:15",
  "madan": "17316",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21040",
  "tentaixe": "11500",
  "sogiaykiemdichthusong": "11500",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.101Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664e5"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15579-233-1187843",
  "TRANSFER_DATE": "2017/01/11 08:26:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170111_082638.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-01T00:00:00.0Z"),
  "ngaygioxuat_1": "11/01/2017 08:25:24",
  "madan": "15579",
  "soluong": NumberLong(80),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "12807",
  "sogiaykiemdichthusong": "12807",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.102Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664e6"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15579-234-1187844",
  "TRANSFER_DATE": "2017/01/11 08:56:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170111_085638.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-01T00:00:00.0Z"),
  "ngaygioxuat_1": "11/01/2017 08:54:41",
  "madan": "15579",
  "soluong": NumberLong(40),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "12808",
  "sogiaykiemdichthusong": "12808",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.103Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664e7"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17433-235-1188163",
  "TRANSFER_DATE": "2017/01/11 14:42:40",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170111_144240.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-01T00:00:00.0Z"),
  "ngaygioxuat_1": "11/01/2017 14:41:31",
  "madan": "17433",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20861",
  "tentaixe": "12809",
  "sogiaykiemdichthusong": "12809",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.105Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664e8"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15579-238-1189071",
  "TRANSFER_DATE": "2017/01/13 07:22:40",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170113_072240.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-03T00:00:00.0Z"),
  "ngaygioxuat_1": "13/01/2017 07:18:27",
  "madan": "15579",
  "soluong": NumberLong(79),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "12818",
  "sogiaykiemdichthusong": "12818",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.106Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664e9"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15814-238-1189071",
  "TRANSFER_DATE": "2017/01/13 07:32:41",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170113_073241.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-03T00:00:00.0Z"),
  "ngaygioxuat_1": "13/01/2017 07:18:27",
  "madan": "15814",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11637",
  "tentaixe": "12818",
  "sogiaykiemdichthusong": "12818",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.135Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664ea"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15814-239-1189072",
  "TRANSFER_DATE": "2017/01/13 07:50:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170113_075038.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-03T00:00:00.0Z"),
  "ngaygioxuat_1": "13/01/2017 07:49:48",
  "madan": "15814",
  "soluong": NumberLong(68),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "12813",
  "sogiaykiemdichthusong": "12813",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.137Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664eb"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17433-240-1189135",
  "TRANSFER_DATE": "2017/01/13 09:56:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170113_095638.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-03T00:00:00.0Z"),
  "ngaygioxuat_1": "13/01/2017 09:54:47",
  "madan": "17433",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 10816",
  "tentaixe": "12816",
  "sogiaykiemdichthusong": "12816",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.138Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664ec"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17433-241-1189136",
  "TRANSFER_DATE": "2017/01/13 10:34:40",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170113_103440.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-03T00:00:00.0Z"),
  "ngaygioxuat_1": "13/01/2017 10:32:58",
  "madan": "17433",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21040",
  "tentaixe": "12817",
  "sogiaykiemdichthusong": "12817",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.139Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664ed"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15579-237-1188419",
  "TRANSFER_DATE": "2017/01/13 10:36:40",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170113_103640.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-02T00:00:00.0Z"),
  "ngaygioxuat_1": "12/01/2017 08:34:18",
  "madan": "15579",
  "soluong": NumberLong(90),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "12814, 12812",
  "sogiaykiemdichthusong": "12814, 12812",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.141Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664ee"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15924-244-1189399",
  "TRANSFER_DATE": "2017/01/14 07:18:42",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170114_071842.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-04T00:00:00.0Z"),
  "ngaygioxuat_1": "14/01/2017 07:17:20",
  "madan": "15924",
  "soluong": NumberLong(80),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13439",
  "tentaixe": "12823 & 12825",
  "sogiaykiemdichthusong": "12823 & 12825",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.142Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664ef"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17433-245-1189865",
  "TRANSFER_DATE": "2017/01/15 10:54:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170115_105438.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-05T00:00:00.0Z"),
  "ngaygioxuat_1": "15/01/2017 10:54:06",
  "madan": "17433",
  "soluong": NumberLong(200),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20861",
  "tentaixe": "12827",
  "sogiaykiemdichthusong": "12827",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.163Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664f0"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15924-246-1189866",
  "TRANSFER_DATE": "2017/01/16 06:52:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170116_065238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-06T00:00:00.0Z"),
  "ngaygioxuat_1": "16/01/2017 06:50:52",
  "madan": "15924",
  "soluong": NumberLong(80),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11489",
  "tentaixe": "12829",
  "sogiaykiemdichthusong": "12829",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.164Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664f1"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15924-248-1190342",
  "TRANSFER_DATE": "2017/01/17 06:44:41",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170117_064441.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-07T00:00:00.0Z"),
  "ngaygioxuat_1": "17/01/2017 06:41:52",
  "madan": "15924",
  "soluong": NumberLong(80),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 09202",
  "tentaixe": "12833",
  "sogiaykiemdichthusong": "12833",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.166Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664f2"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17499-249-1190409",
  "TRANSFER_DATE": "2017/01/17 09:48:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170117_094838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-07T00:00:00.0Z"),
  "ngaygioxuat_1": "17/01/2017 09:47:15",
  "madan": "17499",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 10816",
  "tentaixe": "12831",
  "sogiaykiemdichthusong": "12831",
  "nhanvienkiemdich": "Nguyễn Thị bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.167Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664f3"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17499-250-1190483",
  "TRANSFER_DATE": "2017/01/17 11:04:40",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170117_110440.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-07T00:00:00.0Z"),
  "ngaygioxuat_1": "17/01/2017 11:04:04",
  "madan": "17499",
  "soluong": NumberLong(170),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 29471",
  "tentaixe": "12832",
  "sogiaykiemdichthusong": "12832",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.168Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664f4"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17499-251-1190626",
  "TRANSFER_DATE": "2017/01/17 15:08:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170117_150839.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-07T00:00:00.0Z"),
  "ngaygioxuat_1": "17/01/2017 15:06:39",
  "madan": "17499",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 10816",
  "tentaixe": "12835",
  "sogiaykiemdichthusong": "12835",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.170Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664f5"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17433-252-1190887",
  "TRANSFER_DATE": "2017/01/18 09:00:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170118_090038.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-08T00:00:00.0Z"),
  "ngaygioxuat_1": "18/01/2017 08:59:07",
  "madan": "17433",
  "soluong": NumberLong(150),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 10816",
  "tentaixe": "1552",
  "sogiaykiemdichthusong": "1552",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.171Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664f6"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17499-253-1191013",
  "TRANSFER_DATE": "2017/01/18 10:56:40",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170118_105640.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-08T00:00:00.0Z"),
  "ngaygioxuat_1": "18/01/2017 10:55:18",
  "madan": "17499",
  "soluong": NumberLong(180),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 29471",
  "tentaixe": "1551",
  "sogiaykiemdichthusong": "1551",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.172Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664f7"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17433-253-1191013",
  "TRANSFER_DATE": "2017/01/18 10:56:40",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170118_105640.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-08T00:00:00.0Z"),
  "ngaygioxuat_1": "18/01/2017 10:55:18",
  "madan": "17433",
  "soluong": NumberLong(50),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 29471",
  "tentaixe": "1551",
  "sogiaykiemdichthusong": "1551",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.173Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664f8"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17499-254-1191120",
  "TRANSFER_DATE": "2017/01/18 14:28:40",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170118_142840.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-08T00:00:00.0Z"),
  "ngaygioxuat_1": "18/01/2017 14:26:54",
  "madan": "17499",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 05950",
  "tentaixe": "1554",
  "sogiaykiemdichthusong": "1554",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.174Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664f9"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15924-255-1191430",
  "TRANSFER_DATE": "2017/01/19 12:44:41",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170119_124441.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-09T00:00:00.0Z"),
  "ngaygioxuat_1": "19/01/2017 12:44:04",
  "madan": "15924",
  "soluong": NumberLong(65),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "61C 16766",
  "tentaixe": "1555",
  "sogiaykiemdichthusong": "1555",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.176Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664fa"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15924-256-1191431",
  "TRANSFER_DATE": "2017/01/19 12:46:41",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170119_124641.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-09T00:00:00.0Z"),
  "ngaygioxuat_1": "19/01/2017 12:45:41",
  "madan": "15924",
  "soluong": NumberLong(140),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "61C 11637",
  "tentaixe": "1556",
  "sogiaykiemdichthusong": "1556",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.177Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664fb"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15924-257-1191647",
  "TRANSFER_DATE": "2017/01/20 08:12:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170120_081238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2016-12-31T00:00:00.0Z"),
  "ngaygioxuat_1": "20/01/2017 08:11:15",
  "madan": "15924",
  "soluong": NumberLong(110),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "61C 18151",
  "tentaixe": "1557",
  "sogiaykiemdichthusong": "1557",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.179Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664fc"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15924-259-1191723",
  "TRANSFER_DATE": "2017/01/20 09:16:40",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170120_091640.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2016-12-31T00:00:00.0Z"),
  "ngaygioxuat_1": "20/01/2017 09:16:00",
  "madan": "15924",
  "soluong": NumberLong(95),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "61C 13132",
  "tentaixe": "1563",
  "sogiaykiemdichthusong": "1563",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.246Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664fd"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16019-260-1191813",
  "TRANSFER_DATE": "2017/01/20 12:40:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170120_124039.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2016-12-31T00:00:00.0Z"),
  "ngaygioxuat_1": "20/01/2017 12:38:35",
  "madan": "16019",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21550",
  "tentaixe": "1560",
  "sogiaykiemdichthusong": "1560",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.248Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664fe"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16019-261-1191814",
  "TRANSFER_DATE": "2017/01/20 13:10:41",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170120_131041.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2016-12-31T00:00:00.0Z"),
  "ngaygioxuat_1": "20/01/2017 13:08:36",
  "madan": "16019",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 19018",
  "tentaixe": "1559",
  "sogiaykiemdichthusong": "1559",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.250Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f664ff"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16019-262-1191830",
  "TRANSFER_DATE": "2017/01/20 13:38:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170120_133838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2016-12-31T00:00:00.0Z"),
  "ngaygioxuat_1": "20/01/2017 13:37:08",
  "madan": "16019",
  "soluong": NumberLong(67),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11490",
  "tentaixe": "1561",
  "sogiaykiemdichthusong": "1561",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.251Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66500"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17499-265-1192141",
  "TRANSFER_DATE": "2017/01/21 08:42:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170121_084239.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-01T00:00:00.0Z"),
  "ngaygioxuat_1": "21/01/2017 08:41:34",
  "madan": "17499",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 12318",
  "tentaixe": "1569",
  "sogiaykiemdichthusong": "1569",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.253Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66501"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16019-266-1192299",
  "TRANSFER_DATE": "2017/01/21 11:16:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170121_111638.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-01T00:00:00.0Z"),
  "ngaygioxuat_1": "21/01/2017 11:15:01",
  "madan": "16019",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 21550",
  "tentaixe": "1572",
  "sogiaykiemdichthusong": "1572",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.362Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66502"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16019-267-1192316",
  "TRANSFER_DATE": "2017/01/21 12:08:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170121_120839.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-01T00:00:00.0Z"),
  "ngaygioxuat_1": "21/01/2017 12:07:39",
  "madan": "16019",
  "soluong": NumberLong(60),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11490",
  "tentaixe": "1573",
  "sogiaykiemdichthusong": "1573",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.365Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66503"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15924-269-1192383",
  "TRANSFER_DATE": "2017/01/21 13:44:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170121_134438.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-01T00:00:00.0Z"),
  "ngaygioxuat_1": "21/01/2017 13:43:55",
  "madan": "15924",
  "soluong": NumberLong(60),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 16766",
  "tentaixe": "1571",
  "sogiaykiemdichthusong": "1571",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.367Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66504"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15924-270-1192414",
  "TRANSFER_DATE": "2017/01/21 14:22:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170121_142238.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-01T00:00:00.0Z"),
  "ngaygioxuat_1": "21/01/2017 14:21:00",
  "madan": "15924",
  "soluong": NumberLong(150),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "61C 18151",
  "tentaixe": "1570",
  "sogiaykiemdichthusong": "1570",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.369Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66505"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16019-271-1192965",
  "TRANSFER_DATE": "2017/01/22 10:34:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170122_103439.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-02T00:00:00.0Z"),
  "ngaygioxuat_1": "22/01/2017 10:29:55",
  "madan": "16019",
  "soluong": NumberLong(71),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 19018",
  "tentaixe": "1577",
  "sogiaykiemdichthusong": "1577",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.371Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66506"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-15924-271-1192965",
  "TRANSFER_DATE": "2017/01/22 10:34:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170122_103439.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-02T00:00:00.0Z"),
  "ngaygioxuat_1": "22/01/2017 10:29:55",
  "madan": "15924",
  "soluong": NumberLong(29),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 19018",
  "tentaixe": "1577",
  "sogiaykiemdichthusong": "1577",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.372Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66507"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16019-272-1192966",
  "TRANSFER_DATE": "2017/01/22 11:08:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170122_110838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-02T00:00:00.0Z"),
  "ngaygioxuat_1": "22/01/2017 11:08:04",
  "madan": "16019",
  "soluong": NumberLong(60),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11490",
  "tentaixe": "1576",
  "sogiaykiemdichthusong": "1576",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.374Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66508"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16019-273-1193009",
  "TRANSFER_DATE": "2017/01/22 11:48:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170122_114839.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-02T00:00:00.0Z"),
  "ngaygioxuat_1": "22/01/2017 11:47:50",
  "madan": "16019",
  "soluong": NumberLong(50),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 13568",
  "tentaixe": "",
  "sogiaykiemdichthusong": "",
  "nhanvienkiemdich": "",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.448Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f66509"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17557-274-1193015",
  "TRANSFER_DATE": "2017/01/22 12:40:40",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170122_124040.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-02T00:00:00.0Z"),
  "ngaygioxuat_1": "22/01/2017 12:40:15",
  "madan": "17557",
  "soluong": NumberLong(150),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 12216",
  "tentaixe": "1580",
  "sogiaykiemdichthusong": "1580",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.450Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f6650a"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17557-275-1193017",
  "TRANSFER_DATE": "2017/01/22 13:32:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170122_133239.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-02T00:00:00.0Z"),
  "ngaygioxuat_1": "22/01/2017 13:30:14",
  "madan": "17557",
  "soluong": NumberLong(70),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 28876",
  "tentaixe": "1579",
  "sogiaykiemdichthusong": "1579",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.451Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f6650b"),
  "TYPE": "01",
  "SUB_TYPE": "SALES03",
  "CODE": "354-17499-275-1193017",
  "TRANSFER_DATE": "2017/01/22 13:32:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170122_133239.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-02T00:00:00.0Z"),
  "ngaygioxuat_1": "22/01/2017 13:30:14",
  "madan": "17499",
  "soluong": NumberLong(50),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 28876",
  "tentaixe": "1579",
  "sogiaykiemdichthusong": "1579",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.452Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f6650c"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16019-276-1193105",
  "TRANSFER_DATE": "2017/01/23 07:38:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170123_073838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-03T00:00:00.0Z"),
  "ngaygioxuat_1": "23/01/2017 07:38:06",
  "madan": "16019",
  "soluong": NumberLong(55),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 27175",
  "tentaixe": "1585",
  "sogiaykiemdichthusong": "1585",
  "nhanvienkiemdich": "Nguyễn Thị  Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.453Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f6650d"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16019-277-1193109",
  "TRANSFER_DATE": "2017/01/23 07:56:39",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170123_075639.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-03T00:00:00.0Z"),
  "ngaygioxuat_1": "23/01/2017 07:55:43",
  "madan": "16019",
  "soluong": NumberLong(150),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 20125",
  "tentaixe": "1584",
  "sogiaykiemdichthusong": "1584",
  "nhanvienkiemdich": "Nguyễn Thị Bắc Giang",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.459Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("591d6c6dc12583e352f6650e"),
  "TYPE": "01",
  "SUB_TYPE": "SALES01",
  "CODE": "354-16019-278-1193187",
  "TRANSFER_DATE": "2017/01/23 08:48:38",
  "TRANSFER_FILE_NAME": "NOVA_TRUYXUAT_20170123_084838.csv",
  "CREATED_BY": "PTHMY",
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VietGAP, An toàn dịch bệnh: Lở mồm long móng và Dịch tả heo Disease Free Certificate:FMD and Classical Swine Fever (CSF)",
  "ngaygioxuat": ISODate("2017-01-03T00:00:00.0Z"),
  "ngaygioxuat_1": "23/01/2017 08:47:23",
  "madan": "16019",
  "soluong": NumberLong(37),
  "nhamaycungcapthucan": "CÔNG TY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 19018",
  "tentaixe": "1586",
  "sogiaykiemdichthusong": "1586",
  "nhanvienkiemdich": "NGUYỄN THỊ BẮC GIANG",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-18T09:42:05.461Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("593a7453c12583df43b91760"),
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f6608a"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-06-08T23:00:00.0Z"),
  "madan": "12345",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Nguyễn Văn A",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:11:31.479Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("593a7498c12583a641b91762"),
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f6608a"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-06-08T23:00:00.0Z"),
  "madan": "12345",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Nguyễn Văn A",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:12:40.657Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("593a74fcc125834a47b9175f"),
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f6608a"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-06-08T23:00:00.0Z"),
  "madan": "12345",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Nguyễn Văn A",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:14:20.744Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("593a7c19c125837449b91762"),
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-06-08T23:00:00.0Z"),
  "madan": "12345",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Trần Văn Ba",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:44:41.166Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("593a7cb6c125837c49b91762"),
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-06-08T23:00:00.0Z"),
  "madan": "12345",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Nguyễn Văn An",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:47:18.151Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("593a7d68c125837a49b91761"),
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-06-08T23:00:00.0Z"),
  "madan": "12345",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Nguyễn Văn An",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:50:16.692Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029"),
  "lock": NumberLong(0)
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("593a7e0ac125837a49b91762"),
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-06-08T23:00:00.0Z"),
  "madan": "12345",
  "soluong": NumberLong(1),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Trần Văn Ba",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:52:58.163Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029"),
  "lock": NumberLong(0)
});

/** nongtrairauqua records **/
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("59000d56835e6f5e063869f9"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-05-13T17:00:00.0Z"),
  "matruyxuatsanpham": "Caingot.0001",
  "soluong": NumberLong(200),
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-15T01:25:40.134Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("5900105e835e6f45063869f9"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-05-07T17:00:00.0Z"),
  "matruyxuatsanpham": "Bapcaithao.0001",
  "soluong": NumberLong(200),
  "soxevanchuyen": "5678",
  "tentaixe": "Trần Văn Ba",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:53:26.895Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("59004ab8835e6f37083869ff"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-05-13T17:00:00.0Z"),
  "matruyxuatsanpham": "Caithia.0001",
  "soluong": NumberLong(200),
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-15T01:27:20.949Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("59004b5f835e6f91083869f9"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-05-07T17:00:00.0Z"),
  "matruyxuatsanpham": "Boxoi.0001",
  "soluong": NumberLong(200),
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:52:45.302Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("59004bba835e6f60083869fb"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-05-07T17:00:00.0Z"),
  "matruyxuatsanpham": "Raumuong.0001",
  "soluong": NumberLong(200),
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:52:59.855Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("59004c17835e6f91083869fa"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-05-07T17:00:00.0Z"),
  "matruyxuatsanpham": "Rauden.0001",
  "soluong": NumberLong(200),
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:52:12.680Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("59004c6a835e6f3708386a03"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-05-07T17:00:00.0Z"),
  "matruyxuatsanpham": "Mongtoi.0001",
  "soluong": NumberLong(200),
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:52:53.169Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("59004cea835e6f80083869fd"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "359-16/HHD/CTCB; VIETGAP-TT 13-09-68-0096",
  "ngaythuhoach": ISODate("2017-05-10T17:00:00.0Z"),
  "matruyxuatsanpham": "Xalachlolo.0001",
  "soluong": NumberLong(200),
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-11T07:25:49.961Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("59004f42835e6f60083869ff"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-05-07T17:00:00.0Z"),
  "matruyxuatsanpham": "Bapcai.0001",
  "soluong": NumberLong(200),
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:53:35.390Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("59004fc8835e6fff06386a01"),
  "id_dmnongtrai": ObjectId("591ed7a1c1258380523ae568"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-05-12T23:00:00.0Z"),
  "matruyxuatsanpham": "Cachua.0001",
  "soluong": NumberLong(200),
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-01T13:39:43.880Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("5900501f835e6f87083869fa"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-05-07T17:00:00.0Z"),
  "matruyxuatsanpham": "Bausao.0001",
  "soluong": NumberLong(200),
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:53:42.727Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("5900506e835e6f9c083869fb"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-05-07T17:00:00.0Z"),
  "matruyxuatsanpham": "Carot.0001",
  "soluong": NumberLong(200),
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:52:22.640Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("590050bd835e6f80083869ff"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "359-16/HHD/CTCB; VIETGAP-TT 13-09-68-0096",
  "ngaythuhoach": ISODate("2017-05-10T17:00:00.0Z"),
  "matruyxuatsanpham": "Khoaitay.0001",
  "soluong": NumberLong(200),
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-11T07:25:25.587Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("59005135835e6f87083869fb"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-05-07T17:00:00.0Z"),
  "matruyxuatsanpham": "Hanhtay.0001",
  "soluong": NumberLong(200),
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:53:09.227Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("5913e0e6835e6f69188b4567"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "GLOBALGAP",
  "sochungnhantieuchuan": "BIOCERT FV-VIET-1007, GGN: 4056186928917",
  "ngaythuhoach": ISODate("2017-05-10T17:00:00.0Z"),
  "matruyxuatsanpham": "Thanhlong.0001",
  "soluong": NumberLong(200),
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-11T07:43:27.449Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("58fdc3d1835e6f566f1ef938"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "Viet G.A.P",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-05-07T17:00:00.0Z"),
  "matruyxuatsanpham": "BiXanh.0001",
  "soluong": NumberLong(100),
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Nguyễn văn Bình",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:52:35.780Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("58fdc575835e6fea701ef94d"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-05-07T17:00:00.0Z"),
  "matruyxuatsanpham": "Caibexanh.0001",
  "soluong": NumberLong(200),
  "soxevanchuyen": "49T-4567",
  "tentaixe": "Nguyễn văn Bình",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:30:50.215Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("591ed80bc12583d05a3ae568"),
  "id_dmnongtrai": ObjectId("591ed7a1c1258380523ae568"),
  "tieuchuan": "N/A",
  "sochungnhantieuchuan": "N/A",
  "ngaythuhoach": ISODate("2017-05-18T23:00:00.0Z"),
  "matruyxuatsanpham": "190517001",
  "soluong": NumberLong(1),
  "soxevanchuyen": "N/A",
  "tentaixe": "N/A",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-01T13:34:03.633Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("592eeaf8c1258381264556c2"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-05-30T23:00:00.0Z"),
  "matruyxuatsanpham": "Boxoi.0002",
  "soluong": NumberLong(10),
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-31T16:11:22.131Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("593a718bc12583d943b9175f"),
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f6608a"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-06-08T23:00:00.0Z"),
  "matruyxuatsanpham": "Boxoi.0001",
  "soluong": NumberLong(1),
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Trần Văn Ba",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T09:59:39.528Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("593a71f6c12583ae3fb91762"),
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f6608a"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-06-08T23:00:00.0Z"),
  "matruyxuatsanpham": "Bapcai.0001",
  "soluong": NumberLong(1),
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Trần Văn Ba",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:01:26.145Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("593a7230c12583df43b9175f"),
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f6608a"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-06-08T23:00:00.0Z"),
  "matruyxuatsanpham": "Khoaitay.0001",
  "soluong": NumberLong(1),
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Trần Văn Ba",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:02:24.800Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("593a728bc125839741b91761"),
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f6608a"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-06-08T23:00:00.0Z"),
  "matruyxuatsanpham": "Bapcaithao.0001",
  "soluong": NumberLong(1),
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Trần Văn Ba",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:03:55.989Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("593a72cac125839741b91762"),
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f6608a"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-06-08T23:00:00.0Z"),
  "matruyxuatsanpham": "Caingot.0001",
  "soluong": NumberLong(1),
  "soxevanchuyen": "1234",
  "tentaixe": "Trần Văn Ba",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:04:58.880Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("593a7960c12583d247b91760"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-06-08T23:00:00.0Z"),
  "matruyxuatsanpham": "Caithia.0001",
  "soluong": NumberLong(1),
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:33:04.560Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("593a7b23c125837c49b91760"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-06-08T23:00:00.0Z"),
  "matruyxuatsanpham": "Mongtoi.0001",
  "soluong": NumberLong(1),
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:40:35.259Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("593a7b98c125837c49b91761"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-06-08T23:00:00.0Z"),
  "matruyxuatsanpham": "Rauden.0001",
  "soluong": NumberLong(1),
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:42:32.66Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("593a7bc7c12583df43b91761"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-06-08T23:00:00.0Z"),
  "matruyxuatsanpham": "Raumuong.0001",
  "soluong": NumberLong(1),
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:43:27.191Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});

/** nongtraitrung records **/
db.getCollection("nongtraitrung").insert({
  "_id": ObjectId("58f72d80d89398e40f00002a"),
  "id_dmnongtrai": ObjectId("58f081fcd89398440b00002c"),
  "tieuchuan": "Viet GAP",
  "sochungnhantieuchuan": "001899",
  "madan": "TG001",
  "soluong": NumberLong(6),
  "ngaythuhoach": ISODate("2017-04-23T17:00:00.0Z"),
  "nhamaycungcapthucan": "CTY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "60C 11489 ",
  "tentaixe": "VŨ VIỆT CƯỜNG ",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-24T10:14:09.542Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58f074f8d893983c0b000029"),
  "lock": NumberLong(0)
});
db.getCollection("nongtraitrung").insert({
  "_id": ObjectId("591ed392c1258390533ae568"),
  "id_dmnongtrai": ObjectId("591ed31cc12583ab4d3ae568"),
  "tieuchuan": "N/A",
  "sochungnhantieuchuan": "N/A",
  "madan": "N/A",
  "soluong": NumberLong(1),
  "ngaythuhoach": ISODate("2017-05-18T23:00:00.0Z"),
  "nhamaycungcapthucan": "N/A",
  "soxevanchuyen": "N/A",
  "tentaixe": "N/A",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-25T15:40:41.67Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtraitrung").insert({
  "_id": ObjectId("592ec62cc12583f4244556c2"),
  "id_dmnongtrai": ObjectId("591ed7a1c1258380523ae568"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "12345",
  "madan": "12345",
  "soluong": NumberLong(10),
  "ngaythuhoach": ISODate("2017-05-30T23:00:00.0Z"),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-31T13:33:32.130Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtraitrung").insert({
  "_id": ObjectId("592fe355c12583d31d95002f"),
  "id_dmnongtrai": ObjectId("592fe2aac12583491d95002f"),
  "tieuchuan": "3M",
  "sochungnhantieuchuan": "998/GCN",
  "madan": "BOUC/0001",
  "soluong": NumberLong(100),
  "ngaythuhoach": ISODate("2017-05-31T23:00:00.0Z"),
  "nhamaycungcapthucan": "ANOVA FARM",
  "soxevanchuyen": "59/KK",
  "tentaixe": "ĐỖ THỊ MẾN",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-01T09:50:59.806Z"),
  "id_user": ObjectId("592fe146c125838e1a950031"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "lock": NumberLong(0)
});
db.getCollection("nongtraitrung").insert({
  "_id": ObjectId("593a659cc125835904b9175f"),
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f6608a"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "madan": "12345",
  "soluong": NumberLong(1),
  "ngaythuhoach": ISODate("2017-06-08T23:00:00.0Z"),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T09:11:00.984Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b"),
  "lock": NumberLong(0)
});
db.getCollection("nongtraitrung").insert({
  "_id": ObjectId("593a6759c125836740b9175f"),
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f6608a"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "madan": "12345",
  "soluong": NumberLong(1),
  "ngaythuhoach": ISODate("2017-06-08T23:00:00.0Z"),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T09:16:09.229Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b"),
  "lock": NumberLong(0)
});
db.getCollection("nongtraitrung").insert({
  "_id": ObjectId("593a67afc125836440b9175f"),
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f6608a"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "madan": "56789",
  "soluong": NumberLong(1),
  "ngaythuhoach": ISODate("2017-06-08T23:00:00.0Z"),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T09:17:35.935Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b"),
  "lock": NumberLong(0)
});
db.getCollection("nongtraitrung").insert({
  "_id": ObjectId("593a67e4c12583af3fb91761"),
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f6608a"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "madan": "56789",
  "soluong": NumberLong(1),
  "ngaythuhoach": ISODate("2017-06-08T23:00:00.0Z"),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T09:18:28.722Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b"),
  "lock": NumberLong(0)
});
db.getCollection("nongtraitrung").insert({
  "_id": ObjectId("593a6816c12583ac3fb91761"),
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f6608a"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "madan": "01234",
  "soluong": NumberLong(1),
  "ngaythuhoach": ISODate("2017-06-08T23:00:00.0Z"),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T09:19:18.470Z"),
  "id_user": ObjectId("592ea24ec125832a4b4556fb"),
  "id_congty": ObjectId("591d6c69c12583e352f6608b"),
  "lock": NumberLong(0)
});
db.getCollection("nongtraitrung").insert({
  "_id": ObjectId("593a69d5c125839741b9175f"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "madan": "12345",
  "soluong": NumberLong(1),
  "ngaythuhoach": ISODate("2017-06-08T23:00:00.0Z"),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T09:26:45.57Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029"),
  "lock": NumberLong(0)
});
db.getCollection("nongtraitrung").insert({
  "_id": ObjectId("593a75ecc12583a641b91765"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "madan": "12345",
  "soluong": NumberLong(1),
  "ngaythuhoach": ISODate("2017-06-08T23:00:00.0Z"),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:18:20.274Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029"),
  "lock": NumberLong(0)
});
db.getCollection("nongtraitrung").insert({
  "_id": ObjectId("593a762dc12583d247b9175f"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "madan": "12345",
  "soluong": NumberLong(1),
  "ngaythuhoach": ISODate("2017-06-08T23:00:00.0Z"),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-09T10:19:25.662Z"),
  "id_user": ObjectId("590d9e33835e6fcc6d6c8560"),
  "id_congty": ObjectId("58f074f8d893983c0b000029"),
  "lock": NumberLong(0)
});
db.getCollection("nongtraitrung").insert({
  "_id": ObjectId("593a7654c125839741b91765"),
  "id_dmnongtrai": ObjectId("592fe2aac12583491d95002f"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "madan": "12345",
  "soluong": NumberLong(1),
  "ngaythuhoach": ISODate("2017-06-08T23:00:00.0Z"),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-06-12T10:45:54.741Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "lock": NumberLong(0)
});
db.getCollection("nongtraitrung").insert({
  "_id": ObjectId("5a466b39c809de0a36d3b71e"),
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6609f"),
  "tieuchuan": "glob",
  "sochungnhantieuchuan": "GAP01",
  "madan": "12345678",
  "soluong": NumberLong(2),
  "ngaythuhoach": ISODate("2017-12-28T17:00:00.0Z"),
  "nhamaycungcapthucan": "feed",
  "soxevanchuyen": "51M4554",
  "tentaixe": "Tài xe 1",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-12-29T16:20:09.10Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("nongtraitrung").insert({
  "_id": ObjectId("5a4b4767c809de371556198a"),
  "id_dmnongtrai": ObjectId("591d6c6ac12583e352f6609f"),
  "tieuchuan": "GLOB",
  "sochungnhantieuchuan": "GLOB.01",
  "madan": "DAN.0001",
  "soluong": NumberLong(100),
  "ngaythuhoach": ISODate("2018-01-05T17:00:00.0Z"),
  "nhamaycungcapthucan": "Feed",
  "soxevanchuyen": "51M-123456",
  "tentaixe": "Nguyễn văn Tài",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2018-01-02T08:48:39.324Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});
db.getCollection("nongtraitrung").insert({
  "_id": ObjectId("5a4b5454c809de4b1456198a"),
  "id_dmnongtrai": ObjectId("591d6c69c12583e352f65fd9"),
  "tieuchuan": "Global Gap",
  "sochungnhantieuchuan": "123",
  "madan": "0011",
  "soluong": NumberLong(100),
  "ngaythuhoach": ISODate("2018-01-01T17:00:00.0Z"),
  "nhamaycungcapthucan": "Tân Thắng",
  "soxevanchuyen": "12345",
  "tentaixe": "Nguyễn Văn A",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2018-01-02T09:43:48.435Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});

/** sessions records **/
db.getCollection("sessions").insert({
  "_id": ObjectId("59fc2cc8254b725d91939d88"),
  "session_id": "c39upivv4id7g6dkm3cc7p58e3",
  "data": "",
  "timedout_at": NumberLong(1509704760),
  "expired_at": NumberLong(1509734760)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59fc2cc8254b725d91939d8f"),
  "session_id": "bftf6sdhg2kdpm3a0bicvqihl7",
  "data": "",
  "timedout_at": NumberLong(1509704760),
  "expired_at": NumberLong(1509734760)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59fc2cc8254b725d91939d98"),
  "session_id": "4jp5e5n349chiglklianc2rti6",
  "data": "",
  "timedout_at": NumberLong(1509704760),
  "expired_at": NumberLong(1509734760)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59fc2cc8254b725d91939da0"),
  "session_id": "eo7j1i2h8mr00a3ap3n7arqn72",
  "data": "",
  "timedout_at": NumberLong(1509704760),
  "expired_at": NumberLong(1509734760)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59fc2cc8254b725d91939da6"),
  "session_id": "m7vtu44hgbejgdggpcbumn5o33",
  "data": "",
  "timedout_at": NumberLong(1509704760),
  "expired_at": NumberLong(1509734760)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59fc2cc9254b725d91939da9"),
  "session_id": "ikv1nc5guvvm3jvrbl2cl2cn16",
  "data": "",
  "timedout_at": NumberLong(1509704761),
  "expired_at": NumberLong(1509734761)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59fc2cc9254b725d91939dc7"),
  "session_id": "kmncgvujk8tu4e5tmuqfbg0765",
  "data": "",
  "timedout_at": NumberLong(1509704761),
  "expired_at": NumberLong(1509734761)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59fc2cca254b725d91939f93"),
  "session_id": "v507ef0tmcpsb4toqg8cji1sj7",
  "data": "",
  "timedout_at": NumberLong(1509704762),
  "expired_at": NumberLong(1509734762)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59fca459254b725d919d1a2e"),
  "session_id": "d1ibsg1rffat2j0t6s26q2kc26",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"591d6c69c12583e352f65fd6\";roles|i:31;",
  "timedout_at": NumberLong(1509735377),
  "expired_at": NumberLong(1509765369)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5a058cc5254b725d9151546b"),
  "session_id": "fj5h7dv2aesofeiappa3gaed80",
  "data": "",
  "timedout_at": NumberLong(1510319157),
  "expired_at": NumberLong(1510349157)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5a058cdf254b725d91515de8"),
  "session_id": "1j031rsif7h6qq2n976e9erff7",
  "data": "",
  "timedout_at": NumberLong(1510319183),
  "expired_at": NumberLong(1510349183)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5a142945254b725d9178a9a1"),
  "session_id": "ls4cnlibn5nvml11tajl9amat5",
  "data": "",
  "timedout_at": NumberLong(1511276725),
  "expired_at": NumberLong(1511306725)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5a159efd254b725d919628c7"),
  "session_id": "chn04nvpiqaa4pvr6d64dlh933",
  "data": "",
  "timedout_at": NumberLong(1511372397),
  "expired_at": NumberLong(1511402397)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5a1c4011254b725d911c2b88"),
  "session_id": "9221ogohj2tfs7tpldruq8v1v2",
  "data": "",
  "timedout_at": NumberLong(1511806856),
  "expired_at": NumberLong(1511836849)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5a1ede36254b725d91511813"),
  "session_id": "ao71spspfr75iabbeus2c23es2",
  "data": "",
  "timedout_at": NumberLong(1511978406),
  "expired_at": NumberLong(1512008406)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5a200403254b725d916842a9"),
  "session_id": "3j735jidlu48mono9h359aq6j5",
  "data": "",
  "timedout_at": NumberLong(1512053620),
  "expired_at": NumberLong(1512083619)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5a211699254b725d917df25e"),
  "session_id": "jaebv2me8kt9ece614t6thlpt6",
  "data": "",
  "timedout_at": NumberLong(1512123913),
  "expired_at": NumberLong(1512153913)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5a211699254b725d917df260"),
  "session_id": "994tqirbidph3olrlqlfrpjm93",
  "data": "",
  "timedout_at": NumberLong(1512123913),
  "expired_at": NumberLong(1512153913)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5a27b2ed254b725d91038cb0"),
  "session_id": "0ppap1q73m9ukd89eets549nu2",
  "data": "",
  "timedout_at": NumberLong(1512557150),
  "expired_at": NumberLong(1512587149)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5a33a0c3de2f2c19d32a9aca"),
  "session_id": "ujkb0i6t7ufvn2idmavqqtfmn2",
  "data": "",
  "timedout_at": NumberLong(1513341281),
  "expired_at": NumberLong(1513368931)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5a33a222de2f2c19d32ab753"),
  "session_id": "r9cc96grr78bnstlgbonlsf715",
  "data": "",
  "timedout_at": NumberLong(1513339282),
  "expired_at": NumberLong(1513369282)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5a40b5f4de2f2c19d33301b6"),
  "session_id": "n3aqqup94uaku6akitp0o0jko5",
  "data": "",
  "timedout_at": NumberLong(1514196325),
  "expired_at": NumberLong(1514226324)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5a464e76de2f2c19d3a418d0"),
  "session_id": "esvic5l54bn5iidtnr085g9nt5",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"591d6c69c12583e352f65fd6\";roles|i:31;",
  "timedout_at": NumberLong(1514563097),
  "expired_at": NumberLong(1514593046)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5a464eb2de2f2c19d3a4227f"),
  "session_id": "i85ruk007dsdgg9mft6ut4rj55",
  "data": "",
  "timedout_at": NumberLong(1514563106),
  "expired_at": NumberLong(1514593106)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5a464eb2de2f2c19d3a42283"),
  "session_id": "da53rsacg86tan2lcb2mf56bb7",
  "data": "",
  "timedout_at": NumberLong(1514563106),
  "expired_at": NumberLong(1514593106)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5a466a17de2f2c19d3a647f6"),
  "session_id": "r4b2sgvm5djqh8ujfg1rt5ecv1",
  "data": "",
  "timedout_at": NumberLong(1514570119),
  "expired_at": NumberLong(1514600119)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5a466a17de2f2c19d3a647fb"),
  "session_id": "uuj2g26u14ucj6cg4414hj3pd7",
  "data": "",
  "timedout_at": NumberLong(1514570119),
  "expired_at": NumberLong(1514600119)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5a466a1ede2f2c19d3a64800"),
  "session_id": "aa3qebheb0tu3lljgrl6mf00v0",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"591d6c69c12583e352f65fd6\";roles|i:31;",
  "timedout_at": NumberLong(1514570935),
  "expired_at": NumberLong(1514600126)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5a4b4681de2f2c19d3088890"),
  "session_id": "oiehejatgr9nftgdljk8t3nif6",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"591d6c69c12583e352f65fd6\";roles|i:31;",
  "timedout_at": NumberLong(1514892520),
  "expired_at": NumberLong(1514918689)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5a4b46dade2f2c19d3089227"),
  "session_id": "94kdp27ph4fa3h0ea8c175m3n4",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"591d6c69c12583e352f65fd6\";roles|i:31;",
  "timedout_at": NumberLong(1514889087),
  "expired_at": NumberLong(1514918778)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5a4f8272de2f2c19d35e19ed"),
  "session_id": "ajo1gq2gn0bel4avelkcf8j5k7",
  "data": "",
  "timedout_at": NumberLong(1515166184),
  "expired_at": NumberLong(1515196178)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("594399237f113e0394f75649"),
  "session_id": "n8e1p29quh5mg2mnqg75t80nb5",
  "data": "",
  "timedout_at": NumberLong(1497645758),
  "expired_at": NumberLong(1497675754)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59442bff7f113e0394f7564e"),
  "session_id": "id24u0bo4pndgp62q2h814qt36",
  "data": "",
  "timedout_at": NumberLong(1497645935),
  "expired_at": NumberLong(1497675935)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59442c007f113e0394f7564f"),
  "session_id": "sqbre2n6sfcq0ui0om6i6hkdd2",
  "data": "",
  "timedout_at": NumberLong(1497645936),
  "expired_at": NumberLong(1497675936)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59442c017f113e0394f75650"),
  "session_id": "3jv04k993bavubj0nmpcsmmr74",
  "data": "",
  "timedout_at": NumberLong(1497645937),
  "expired_at": NumberLong(1497675937)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59444ab47f113e0394f75651"),
  "session_id": "u5l2a2mialkdhm17pjtirnqak6",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"591d6c69c12583e352f65fd6\";roles|i:31;",
  "timedout_at": NumberLong(1497656551),
  "expired_at": NumberLong(1497683796)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5944ca11ead95304ed060794"),
  "session_id": "d2aqg5riov3frpg06ke4prgt20",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"591d6c69c12583e352f65fd6\";roles|i:31;",
  "timedout_at": NumberLong(1497686481),
  "expired_at": NumberLong(1497716401)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5944cb40ead95304ed06261f"),
  "session_id": "0t4cqkeg6r15skul7s72vsdp03",
  "data": "",
  "timedout_at": NumberLong(1497686704),
  "expired_at": NumberLong(1497716704)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59453039ead95304ed0e1acc"),
  "session_id": "uk117qlvma4k24rc3cbg0ki7k2",
  "data": "",
  "timedout_at": NumberLong(1497712554),
  "expired_at": NumberLong(1497742553)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59454766ead95304ed0ff51c"),
  "session_id": "eh48628mdviqld8tja3q4664a4",
  "data": "",
  "timedout_at": NumberLong(1497718487),
  "expired_at": NumberLong(1497748486)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59479065ead95304ed3e2317"),
  "session_id": "qcmgud94bpf7dsqkrib3qja0d4",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"591d6c69c12583e352f65fd6\";roles|i:31;",
  "timedout_at": NumberLong(1497868438),
  "expired_at": NumberLong(1497898245)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("594796abead95304ed3e9ed1"),
  "session_id": "aiithnd2t98o4qopo5m7vabfk3",
  "data": "",
  "timedout_at": NumberLong(1497869851),
  "expired_at": NumberLong(1497899851)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("594796abead95304ed3e9ed3"),
  "session_id": "gv36bei5d37hg8vphg05vrp875",
  "data": "",
  "timedout_at": NumberLong(1497869851),
  "expired_at": NumberLong(1497899851)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("594796adead95304ed3e9ed7"),
  "session_id": "5dba92vlrb3bsqhvoimk4pjuj6",
  "data": "",
  "timedout_at": NumberLong(1497869853),
  "expired_at": NumberLong(1497899853)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5947a4b4ead95304ed3fbb2f"),
  "session_id": "iv9u1bt72qolhpsra0mrc0cm76",
  "data": "",
  "timedout_at": NumberLong(1497873444),
  "expired_at": NumberLong(1497903444)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5948e3ffead95304ed58ee44"),
  "session_id": "u6sergbhdvv8ih4uq0v3v877e1",
  "data": "",
  "timedout_at": NumberLong(1497962838),
  "expired_at": NumberLong(1497992838)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5948e414ead95304ed58f7d8"),
  "session_id": "928dj285phvopesf9s1k5823t2",
  "data": "",
  "timedout_at": NumberLong(1497955208),
  "expired_at": NumberLong(1497985204)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5948e52fead95304ed590ead"),
  "session_id": "aup1u1uc7jo77hrattsu623m51",
  "data": "",
  "timedout_at": NumberLong(1497956001),
  "expired_at": NumberLong(1497985487)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5948e52fead95304ed590eb1"),
  "session_id": "megnagdpr65c36nr4v3s5mcv85",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"591d6c69c12583e352f65fd6\";roles|i:31;",
  "timedout_at": NumberLong(1497955685),
  "expired_at": NumberLong(1497985487)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5948e5deead95304ed591858"),
  "session_id": "1ei4pm7ufe7hacsjjvviec2pr2",
  "data": "",
  "timedout_at": NumberLong(1497955699),
  "expired_at": NumberLong(1497985662)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5948e760ead95304ed593e53"),
  "session_id": "1ikas77js4vgb9m0u8rldnqo61",
  "data": "",
  "timedout_at": NumberLong(1497956055),
  "expired_at": NumberLong(1497986048)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("594f78d7ead95304edddfa22"),
  "session_id": "tt39necd82a2gn3tnnseh2esr0",
  "data": "",
  "timedout_at": NumberLong(1498386503),
  "expired_at": NumberLong(1498416503)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("594f78d7ead95304edddfa24"),
  "session_id": "ijb5gudjprv12b5k26fe232u93",
  "data": "",
  "timedout_at": NumberLong(1498386503),
  "expired_at": NumberLong(1498416503)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("594f78d9ead95304edddfa29"),
  "session_id": "983ti30igk1pci90j3khq0mri6",
  "data": "",
  "timedout_at": NumberLong(1498386505),
  "expired_at": NumberLong(1498416505)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59539f32ead95304ed31d3c6"),
  "session_id": "27ih6amb7n87d4mn48tueovpc2",
  "data": "",
  "timedout_at": NumberLong(1498658631),
  "expired_at": NumberLong(1498688466)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5953af4dead95304ed3315e2"),
  "session_id": "rfjrmc1452ci3b8vunl8ip4cm1",
  "data": "",
  "timedout_at": NumberLong(1498662616),
  "expired_at": NumberLong(1498692589)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5953b7e1ead95304ed33c9f3"),
  "session_id": "tr425fmeb1kft044af9v55bhc1",
  "data": "",
  "timedout_at": NumberLong(1513880751),
  "expired_at": NumberLong(1513910751)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5953c3e8ead95304ed34b6d8"),
  "session_id": "7jc6i7fvt6g556viivuehfusv3",
  "data": "",
  "timedout_at": NumberLong(1498668161),
  "expired_at": NumberLong(1498697864)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5954f748ead95304ed4cfd28"),
  "session_id": "ercm0uuqej12n81r2jft820gl7",
  "data": "",
  "timedout_at": NumberLong(1498746552),
  "expired_at": NumberLong(1498776552)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5955266aead95304ed50b9ef"),
  "session_id": "ocb35ghn9m2josv7u4coevapn4",
  "data": "",
  "timedout_at": NumberLong(1498758618),
  "expired_at": NumberLong(1498788618)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("595b55ffead95304edcdacd7"),
  "session_id": "28je2f26f8pims3jm5cqjbkks3",
  "data": "",
  "timedout_at": NumberLong(1499164022),
  "expired_at": NumberLong(1499194015)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("595ca4f5ead95304ede822bc"),
  "session_id": "53rh1ttecv0tq8phtb0u5uq110",
  "data": "",
  "timedout_at": NumberLong(1499251516),
  "expired_at": NumberLong(1499279765)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59639cf4ead95304ed74efed"),
  "session_id": "e0jm7i3gi78ls5h1pneca2rvu1",
  "data": "",
  "timedout_at": NumberLong(1499706470),
  "expired_at": NumberLong(1499736468)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5964986bead95304ed88d140"),
  "session_id": "gtjeoplfn35lllttldrst8bjd6",
  "data": "",
  "timedout_at": NumberLong(1499770844),
  "expired_at": NumberLong(1499800843)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5964df5aead95304ed8e694c"),
  "session_id": "5auo41k7t7f26uunfjqihfmf53",
  "data": "",
  "timedout_at": NumberLong(1499789003),
  "expired_at": NumberLong(1499819002)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5964e453ead95304ed8ed2b1"),
  "session_id": "7rubbtglb3lrqenrva80uh3fi1",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"591d6c69c12583e352f65fd6\";roles|i:31;",
  "timedout_at": NumberLong(1499790379),
  "expired_at": NumberLong(1499820275)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5966a28aead95304edb21142"),
  "session_id": "2i9tmjmahb2i9r99u7rlghchu2",
  "data": "",
  "timedout_at": NumberLong(1499904506),
  "expired_at": NumberLong(1499934506)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5968f66aead95304ede11d02"),
  "session_id": "odalabtop8qkhj9cacghkqopd1",
  "data": "",
  "timedout_at": NumberLong(1500057050),
  "expired_at": NumberLong(1500087050)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("596c8c1cead95304ed2991c7"),
  "session_id": "0uraic95e6uegjftgdhbu2jdi3",
  "data": "",
  "timedout_at": NumberLong(1500291980),
  "expired_at": NumberLong(1500321980)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("596c9620ead95304ed2a5984"),
  "session_id": "ledj9d2h8dei28mb10kipfbcm2",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"591d6c69c12583e352f65fd6\";roles|i:31;",
  "timedout_at": NumberLong(1500294598),
  "expired_at": NumberLong(1500324544)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5970cf57ead95304ed7fbcda"),
  "session_id": "20ie7lfb38rjctf7bpjamju3n0",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"591d6c69c12583e352f65fd6\";roles|i:31;",
  "timedout_at": NumberLong(1500572547),
  "expired_at": NumberLong(1500601335)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59771575ead95304edfe885f"),
  "session_id": "5j0u53ue1f2sir39a16901e9g6",
  "data": "user_id|s:24:\"590d9e33835e6fcc6d6c8560\";id_congty|s:24:\"58f074f8d893983c0b000029\";roles|i:30;",
  "timedout_at": NumberLong(1500983437),
  "expired_at": NumberLong(1501012501)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("597718b9ead95304edfecaef"),
  "session_id": "afkrv03g9jruli8557hftvidk2",
  "data": "",
  "timedout_at": NumberLong(1500983337),
  "expired_at": NumberLong(1501013337)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("597a1032ead95304ed3ab258"),
  "session_id": "pqtspajd5863b34qgp8csific1",
  "data": "",
  "timedout_at": NumberLong(1501177762),
  "expired_at": NumberLong(1501207762)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5984ab91ead95304ed110f8f"),
  "session_id": "gio3c7fd22jb3fh3il9bin8836",
  "data": "",
  "timedout_at": NumberLong(1501872897),
  "expired_at": NumberLong(1501902897)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59864753ead95304ed318cc3"),
  "session_id": "r3ssnmr5a149954rde4udh75c6",
  "data": "",
  "timedout_at": NumberLong(1501978307),
  "expired_at": NumberLong(1502008307)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5996fe35ead95304ed835d0f"),
  "session_id": "sqds5qd1oivf0ndn4bq7nr4cu0",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"591d6c69c12583e352f65fd6\";roles|i:31;",
  "timedout_at": NumberLong(1503074266),
  "expired_at": NumberLong(1503103701)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("599f06d3ead95304ed25ad1f"),
  "session_id": "3ipf8tqee7i2juev87orsb9376",
  "data": "",
  "timedout_at": NumberLong(1503600226),
  "expired_at": NumberLong(1503630195)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59e5c03bead95304edbab143"),
  "session_id": "nmpkfatt72brs9is3nvvj0a7l0",
  "data": "",
  "timedout_at": NumberLong(1508235180),
  "expired_at": NumberLong(1508265179)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59e5c126ead95304edbac450"),
  "session_id": "428qjnucmr7plfm20lclk93e13",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"591d6c69c12583e352f65fd6\";roles|i:31;",
  "timedout_at": NumberLong(1508238819),
  "expired_at": NumberLong(1508265414)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59e5c1efead95304edbad763"),
  "session_id": "51ip5pn6okq4kv4dqkpqv72ma1",
  "data": "",
  "timedout_at": NumberLong(1508236673),
  "expired_at": NumberLong(1508265615)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59e5c545ead95304edbb19b9"),
  "session_id": "b6f5qqtf9jdmjcc11klro3vu42",
  "data": "",
  "timedout_at": NumberLong(1508236469),
  "expired_at": NumberLong(1508266469)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59e5c545ead95304edbb19bb"),
  "session_id": "phnm2oe5vj1anj1hn7f96ec3f5",
  "data": "",
  "timedout_at": NumberLong(1508236469),
  "expired_at": NumberLong(1508266469)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59e5c547ead95304edbb19bf"),
  "session_id": "1ft32cnam4qj3r5le77m2vou61",
  "data": "",
  "timedout_at": NumberLong(1508236471),
  "expired_at": NumberLong(1508266471)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59e5c547ead95304edbb19c1"),
  "session_id": "pghi64tp407eklo3h3977pqv13",
  "data": "",
  "timedout_at": NumberLong(1508236471),
  "expired_at": NumberLong(1508266471)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59e5c568ead95304edbb19c9"),
  "session_id": "9e4brh04h7dvhpm85ssj2bevb1",
  "data": "",
  "timedout_at": NumberLong(1508236504),
  "expired_at": NumberLong(1508266504)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59e5c568ead95304edbb19cb"),
  "session_id": "l9o66gilq8rmu0cn30g7cq70j3",
  "data": "",
  "timedout_at": NumberLong(1508236504),
  "expired_at": NumberLong(1508266504)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59e5c569ead95304edbb19d0"),
  "session_id": "7hbok1oj0425afp8m3bmncu4v7",
  "data": "",
  "timedout_at": NumberLong(1508236506),
  "expired_at": NumberLong(1508266505)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59e5c56aead95304edbb19d8"),
  "session_id": "jt2l97skudh3vml1fpapc69og6",
  "data": "",
  "timedout_at": NumberLong(1508236506),
  "expired_at": NumberLong(1508266506)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59e5c56aead95304edbb19da"),
  "session_id": "1ear3psnloil1vc623ic0hegk7",
  "data": "",
  "timedout_at": NumberLong(1508236506),
  "expired_at": NumberLong(1508266506)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59e5c636ead95304edbb2d08"),
  "session_id": "15tv3a7ett80memccshsdttth7",
  "data": "",
  "timedout_at": NumberLong(1508236710),
  "expired_at": NumberLong(1508266710)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59e5c735ead95304edbb4000"),
  "session_id": "8o98lt5ju0iq4gmngudm0oebm4",
  "data": "",
  "timedout_at": NumberLong(1508236966),
  "expired_at": NumberLong(1508266965)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59e75c9fead95304eddb5087"),
  "session_id": "mgvi4v6j2ect28m35421820ql6",
  "data": "",
  "timedout_at": NumberLong(1508853638),
  "expired_at": NumberLong(1508883638)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59ef2fe5ead95304ed79818b"),
  "session_id": "l0r56j5alu0mcbsu8h2vk2b1r4",
  "data": "",
  "timedout_at": NumberLong(1508853603),
  "expired_at": NumberLong(1508883589)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59f310f2254b725d91db833d"),
  "session_id": "779iddl3am9buhh98pokgpg4q6",
  "data": "",
  "timedout_at": NumberLong(1509107811),
  "expired_at": NumberLong(1509137810)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59fb332e254b725d917fedbc"),
  "session_id": "3krta7ikemjo30r2gqsu68qlq6",
  "data": "",
  "timedout_at": NumberLong(1509640862),
  "expired_at": NumberLong(1509670862)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59fc2c73254b725d91939d69"),
  "session_id": "mn8r0jkjbj65a9s7er4dc7kk90",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"591d6c69c12583e352f65fd6\";roles|i:31;",
  "timedout_at": NumberLong(1509704744),
  "expired_at": NumberLong(1509734675)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59fc2cc7254b725d91939d81"),
  "session_id": "gqiqoromeik83foi74t3ns4j06",
  "data": "",
  "timedout_at": NumberLong(1509704759),
  "expired_at": NumberLong(1509734759)
});

/** system.indexes records **/
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "anova_farm.sessions"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "anova_farm.banle"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "anova_farm.banlerauqua"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "anova_farm.banletrung"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "anova_farm.danhmucbanle"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "anova_farm.danhmuccongty"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "anova_farm.danhmucnhamay"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "anova_farm.danhmucnongtrai"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "anova_farm.donggoi"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "anova_farm.donggoirauqua"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "anova_farm.donggoitrung"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "anova_farm.fs.chunks"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "unique": true,
  "key": {
    "files_id": NumberLong(1),
    "n": NumberLong(1)
  },
  "name": "files_id_1_n_1",
  "ns": "anova_farm.fs.chunks"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "anova_farm.fs.files"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "anova_farm.nhamay"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "anova_farm.nhamayrauqua"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "anova_farm.nongtrai"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "anova_farm.nongtrairauqua"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "anova_farm.nongtraitrung"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "anova_farm.users"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "anova_farm.hienthi"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "anova_farm.config"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_fts": "text",
    "_ftsx": NumberInt(1)
  },
  "name": "tentaixe_text_nhanvienkiemdich_text_tieuchuan_text",
  "ns": "anova_farm.nongtrai",
  "weights": {
    "nhanvienkiemdich": NumberInt(1),
    "tentaixe": NumberInt(1),
    "tieuchuan": NumberInt(1)
  },
  "default_language": "english",
  "language_override": "language",
  "textIndexVersion": NumberInt(3)
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_fts": "text",
    "_ftsx": NumberInt(1)
  },
  "name": "ten_text_diachi_text",
  "ns": "anova_farm.danhmucnongtrai",
  "weights": {
    "diachi": NumberInt(1),
    "ten": NumberInt(1)
  },
  "default_language": "english",
  "language_override": "language",
  "textIndexVersion": NumberInt(3)
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_fts": "text",
    "_ftsx": NumberInt(1)
  },
  "name": "ten_text_diachi_text",
  "ns": "anova_farm.danhmucnhamay",
  "weights": {
    "diachi": NumberInt(1),
    "ten": NumberInt(1)
  },
  "default_language": "english",
  "language_override": "language",
  "textIndexVersion": NumberInt(3)
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_fts": "text",
    "_ftsx": NumberInt(1)
  },
  "name": "tensanpham_text_quicachdonggoi_text_tieuchuan_text_sochungnhantieuchuan_text_hansudung_text",
  "ns": "anova_farm.donggoi",
  "weights": {
    "hansudung": NumberInt(1),
    "quicachdonggoi": NumberInt(1),
    "sochungnhantieuchuan": NumberInt(1),
    "tensanpham": NumberInt(1),
    "tieuchuan": NumberInt(1)
  },
  "default_language": "english",
  "language_override": "language",
  "textIndexVersion": NumberInt(3)
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_fts": "text",
    "_ftsx": NumberInt(1)
  },
  "name": "ten_text_diachi_text",
  "ns": "anova_farm.danhmucbanle",
  "weights": {
    "diachi": NumberInt(1),
    "ten": NumberInt(1)
  },
  "default_language": "english",
  "language_override": "language",
  "textIndexVersion": NumberInt(3)
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_fts": "text",
    "_ftsx": NumberInt(1)
  },
  "name": "nhamaycungcapthucan_text_tentaixe_text_tieuchuan_text",
  "ns": "anova_farm.nongtraitrung",
  "weights": {
    "nhamaycungcapthucan": NumberInt(1),
    "tentaixe": NumberInt(1),
    "tieuchuan": NumberInt(1)
  },
  "default_language": "english",
  "language_override": "language",
  "textIndexVersion": NumberInt(3)
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_fts": "text",
    "_ftsx": NumberInt(1)
  },
  "name": "tensanpham_text_quicachdonggoi_text_tieuchuan_text_sochungnhantieuchuan_text_hansudung_text",
  "ns": "anova_farm.donggoitrung",
  "weights": {
    "hansudung": NumberInt(1),
    "quicachdonggoi": NumberInt(1),
    "sochungnhantieuchuan": NumberInt(1),
    "tensanpham": NumberInt(1),
    "tieuchuan": NumberInt(1)
  },
  "default_language": "english",
  "language_override": "language",
  "textIndexVersion": NumberInt(3)
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_fts": "text",
    "_ftsx": NumberInt(1)
  },
  "name": "tentaixe_text_soxevanchuyen_text_tieuchuan_text",
  "ns": "anova_farm.nongtrairauqua",
  "weights": {
    "soxevanchuyen": NumberInt(1),
    "tentaixe": NumberInt(1),
    "tieuchuan": NumberInt(1)
  },
  "default_language": "english",
  "language_override": "language",
  "textIndexVersion": NumberInt(3)
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_fts": "text",
    "_ftsx": NumberInt(1)
  },
  "name": "tensanpham_text_quicachdonggoi_text_tieuchuan_text_sochungnhantieuchuan_text_hansudung_text",
  "ns": "anova_farm.donggoirauqua",
  "weights": {
    "hansudung": NumberInt(1),
    "quicachdonggoi": NumberInt(1),
    "sochungnhantieuchuan": NumberInt(1),
    "tensanpham": NumberInt(1),
    "tieuchuan": NumberInt(1)
  },
  "default_language": "english",
  "language_override": "language",
  "textIndexVersion": NumberInt(3)
});

/** users records **/
db.getCollection("users").insert({
  "_id": ObjectId("58e4aa6a835e6f64038b4567"),
  "username": "retail",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "roles": NumberLong(4),
  "person": "Retail",
  "hinhanh": "58f9bf8a835e6fe54f8b4567",
  "id_congty": ObjectId("58f074f8d893983c0b000029"),
  "logs": [
    {
      "in": ISODate("2017-04-21T08:12:31.760Z")
    },
    {
      "out": ISODate("2017-04-21T08:14:33.298Z")
    },
    {
      "in": ISODate("2017-04-21T08:15:20.979Z")
    },
    {
      "out": ISODate("2017-04-21T09:23:42.733Z")
    },
    {
      "in": ISODate("2017-05-24T16:48:17.304Z")
    },
    {
      "out": ISODate("2017-05-24T16:49:18.906Z")
    },
    {
      "in": ISODate("2017-05-26T16:46:50.781Z")
    },
    {
      "out": ISODate("2017-05-26T16:49:12.750Z")
    },
    {
      "in": ISODate("2017-05-31T11:31:47.24Z")
    },
    {
      "out": ISODate("2017-05-31T11:41:31.407Z")
    },
    {
      "in": ISODate("2017-05-31T14:24:50.525Z")
    },
    {
      "out": ISODate("2017-05-31T14:27:23.399Z")
    },
    {
      "in": ISODate("2017-05-31T15:00:40.119Z")
    }
  ]
});
db.getCollection("users").insert({
  "_id": ObjectId("58e4aa5c835e6f67038b4567"),
  "username": "factory",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "roles": NumberInt(2),
  "person": "Factory",
  "logs": [
    {
      "in": ISODate("2017-04-09T05:18:05.0Z")
    },
    {
      "out": ISODate("2017-04-09T05:19:02.0Z")
    },
    {
      "in": ISODate("2017-04-19T08:15:13.0Z")
    },
    {
      "out": ISODate("2017-04-19T08:16:12.0Z")
    },
    {
      "in": ISODate("2017-04-19T08:16:43.0Z")
    },
    {
      "out": ISODate("2017-04-19T08:16:53.0Z")
    },
    {
      "in": ISODate("2017-05-26T16:40:17.277Z")
    },
    {
      "out": ISODate("2017-05-26T16:46:42.801Z")
    },
    {
      "in": ISODate("2017-05-31T11:29:48.573Z")
    },
    {
      "out": ISODate("2017-05-31T11:31:39.779Z")
    },
    {
      "in": ISODate("2017-05-31T14:20:23.913Z")
    },
    {
      "out": ISODate("2017-05-31T14:20:40.530Z")
    },
    {
      "in": ISODate("2017-05-31T14:23:51.889Z")
    },
    {
      "out": ISODate("2017-05-31T14:24:45.67Z")
    }
  ],
  "hinhanh": "",
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("users").insert({
  "_id": ObjectId("5926c05ec12583711a5874e0"),
  "username": "anovafeed",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "roles": NumberLong(8),
  "person": "anovafeed",
  "hinhanh": "",
  "id_congty": ObjectId("591d6c69c12583e352f65fd6"),
  "logs": [
    {
      "in": ISODate("2017-05-25T11:30:51.691Z")
    }
  ]
});
db.getCollection("users").insert({
  "_id": ObjectId("59285c82c125838c1fae9a53"),
  "username": "farm",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "roles": NumberLong(8),
  "person": "farm",
  "hinhanh": "",
  "id_congty": ObjectId("591ed2f4c12583ae4b3ae568"),
  "logs": [
    {
      "in": ISODate("2017-05-26T16:49:20.189Z")
    },
    {
      "in": ISODate("2017-06-01T13:36:12.361Z")
    }
  ]
});
db.getCollection("users").insert({
  "_id": ObjectId("592fe146c125838e1a950031"),
  "username": "ADMIN_ANOVAFARM",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "roles": NumberLong(24),
  "person": "ĐỖ THỊ MẾN",
  "hinhanh": "592fe145c125838e1a95002f",
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "logs": [
    {
      "in": ISODate("2017-06-01T09:41:52.183Z")
    },
    {
      "out": ISODate("2017-06-01T09:43:40.785Z")
    },
    {
      "in": ISODate("2017-06-01T09:44:22.845Z")
    },
    {
      "out": ISODate("2017-06-01T09:48:27.173Z")
    },
    {
      "in": ISODate("2017-06-01T09:48:41.455Z")
    },
    {
      "out": ISODate("2017-06-01T09:53:58.124Z")
    },
    {
      "in": ISODate("2017-06-01T09:54:10.142Z")
    },
    {
      "out": ISODate("2017-06-01T09:56:10.725Z")
    },
    {
      "in": ISODate("2017-06-01T09:56:20.317Z")
    },
    {
      "out": ISODate("2017-06-01T09:57:56.718Z")
    },
    {
      "in": ISODate("2017-06-01T09:58:07.140Z")
    }
  ]
});
db.getCollection("users").insert({
  "_id": ObjectId("592ea24ec125832a4b4556fb"),
  "username": "novasafefood",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "roles": NumberLong(30),
  "person": "novasafefood",
  "hinhanh": "592ea24ac125832a4b4556c1",
  "id_congty": ObjectId("591d6c69c12583e352f6608b"),
  "logs": [
    {
      "in": ISODate("2017-05-31T11:00:45.785Z")
    },
    {
      "out": ISODate("2017-05-31T11:03:01.847Z")
    },
    {
      "in": ISODate("2017-05-31T11:03:10.84Z")
    },
    {
      "out": ISODate("2017-05-31T11:11:23.417Z")
    },
    {
      "in": ISODate("2017-05-31T11:18:33.500Z")
    },
    {
      "out": ISODate("2017-05-31T11:19:52.869Z")
    },
    {
      "in": ISODate("2017-05-31T11:41:39.323Z")
    },
    {
      "out": ISODate("2017-05-31T11:42:52.19Z")
    },
    {
      "in": ISODate("2017-05-31T16:41:03.245Z")
    },
    {
      "out": ISODate("2017-05-31T16:41:38.367Z")
    },
    {
      "in": ISODate("2017-05-31T16:42:49.304Z")
    },
    {
      "in": ISODate("2017-06-08T16:41:18.661Z")
    },
    {
      "out": ISODate("2017-06-08T16:51:24.508Z")
    },
    {
      "in": ISODate("2017-06-09T09:07:49.527Z")
    },
    {
      "out": ISODate("2017-06-09T09:14:27.836Z")
    },
    {
      "in": ISODate("2017-06-09T09:15:15.505Z")
    },
    {
      "out": ISODate("2017-06-09T09:20:02.674Z")
    },
    {
      "in": ISODate("2017-06-09T09:59:02.572Z")
    },
    {
      "out": ISODate("2017-06-09T10:17:41.950Z")
    },
    {
      "in": ISODate("2017-06-12T10:48:10.659Z")
    },
    {
      "out": ISODate("2017-06-12T11:10:54.502Z")
    }
  ]
});
db.getCollection("users").insert({
  "_id": ObjectId("590d9e33835e6fcc6d6c8560"),
  "username": "anovafarm",
  "password": "ec705f9abe736346fc04409dc85c79d8",
  "roles": NumberLong(30),
  "person": "anovafarm",
  "hinhanh": "",
  "id_congty": ObjectId("58f074f8d893983c0b000029"),
  "logs": [
    {
      "in": ISODate("2017-05-06T09:58:30.675Z")
    },
    {
      "out": ISODate("2017-05-06T10:05:12.365Z")
    },
    {
      "in": ISODate("2017-05-18T10:12:13.127Z")
    },
    {
      "out": ISODate("2017-05-18T10:15:20.782Z")
    },
    {
      "in": ISODate("2017-05-18T10:15:29.844Z")
    },
    {
      "out": ISODate("2017-05-18T10:17:11.370Z")
    },
    {
      "in": ISODate("2017-05-18T10:17:39.646Z")
    },
    {
      "in": ISODate("2017-05-18T10:18:30.744Z")
    },
    {
      "in": ISODate("2017-05-18T10:18:42.590Z")
    },
    {
      "out": ISODate("2017-05-18T10:20:09.792Z")
    },
    {
      "in": ISODate("2017-05-18T10:20:11.273Z")
    },
    {
      "out": ISODate("2017-05-18T10:20:15.552Z")
    },
    {
      "out": ISODate("2017-05-18T10:21:27.730Z")
    },
    {
      "in": ISODate("2017-05-18T10:39:15.320Z")
    },
    {
      "in": ISODate("2017-05-18T13:15:30.781Z")
    },
    {
      "out": ISODate("2017-05-18T13:17:10.952Z")
    },
    {
      "in": ISODate("2017-05-18T13:59:29.999Z")
    },
    {
      "out": ISODate("2017-05-18T13:59:35.630Z")
    },
    {
      "in": ISODate("2017-05-19T08:51:28.285Z")
    },
    {
      "out": ISODate("2017-05-19T08:53:31.590Z")
    },
    {
      "in": ISODate("2017-05-19T09:02:31.510Z")
    },
    {
      "out": ISODate("2017-05-19T09:09:27.530Z")
    },
    {
      "in": ISODate("2017-05-19T09:09:36.179Z")
    },
    {
      "out": ISODate("2017-05-19T09:11:15.577Z")
    },
    {
      "in": ISODate("2017-05-19T09:11:27.140Z")
    },
    {
      "out": ISODate("2017-05-19T09:13:44.312Z")
    },
    {
      "in": ISODate("2017-05-19T09:13:51.958Z")
    },
    {
      "out": ISODate("2017-05-19T09:14:03.911Z")
    },
    {
      "in": ISODate("2017-05-19T09:14:14.317Z")
    },
    {
      "in": ISODate("2017-05-19T09:56:48.948Z")
    },
    {
      "out": ISODate("2017-05-19T10:39:51.397Z")
    },
    {
      "in": ISODate("2017-05-19T13:12:46.632Z")
    },
    {
      "out": ISODate("2017-05-19T13:13:44.943Z")
    },
    {
      "in": ISODate("2017-05-19T13:13:52.693Z")
    },
    {
      "out": ISODate("2017-05-19T13:18:07.762Z")
    },
    {
      "in": ISODate("2017-05-22T15:00:31.550Z")
    },
    {
      "out": ISODate("2017-05-22T16:22:52.607Z")
    },
    {
      "in": ISODate("2017-05-22T16:49:42.134Z")
    },
    {
      "out": ISODate("2017-05-22T17:39:29.430Z")
    },
    {
      "in": ISODate("2017-05-22T21:57:57.140Z")
    },
    {
      "out": ISODate("2017-05-22T22:01:23.330Z")
    },
    {
      "in": ISODate("2017-05-23T10:31:03.269Z")
    },
    {
      "out": ISODate("2017-05-23T10:59:38.568Z")
    },
    {
      "in": ISODate("2017-05-23T15:06:36.916Z")
    },
    {
      "out": ISODate("2017-05-23T16:15:01.422Z")
    },
    {
      "in": ISODate("2017-05-24T14:25:38.391Z")
    },
    {
      "out": ISODate("2017-05-24T14:49:46.959Z")
    },
    {
      "in": ISODate("2017-05-24T14:51:41.457Z")
    },
    {
      "in": ISODate("2017-05-24T15:14:09.739Z")
    },
    {
      "out": ISODate("2017-05-24T15:15:06.823Z")
    },
    {
      "out": ISODate("2017-05-24T15:15:54.42Z")
    },
    {
      "in": ISODate("2017-05-24T15:16:02.349Z")
    },
    {
      "in": ISODate("2017-05-24T16:24:22.289Z")
    },
    {
      "out": ISODate("2017-05-24T16:26:19.6Z")
    },
    {
      "in": ISODate("2017-05-24T16:26:36.503Z")
    },
    {
      "out": ISODate("2017-05-24T16:48:10.759Z")
    },
    {
      "in": ISODate("2017-05-24T16:49:27.171Z")
    },
    {
      "out": ISODate("2017-05-24T17:36:07.87Z")
    },
    {
      "in": ISODate("2017-05-25T11:28:23.782Z")
    },
    {
      "out": ISODate("2017-05-25T11:29:15.92Z")
    },
    {
      "in": ISODate("2017-05-25T11:29:21.465Z")
    },
    {
      "out": ISODate("2017-05-25T11:30:43.382Z")
    },
    {
      "in": ISODate("2017-05-25T15:24:43.829Z")
    },
    {
      "in": ISODate("2017-05-26T16:38:03.306Z")
    },
    {
      "out": ISODate("2017-05-26T16:38:26.517Z")
    },
    {
      "in": ISODate("2017-05-31T09:34:18.880Z")
    },
    {
      "out": ISODate("2017-05-31T09:35:10.280Z")
    },
    {
      "in": ISODate("2017-05-31T09:35:20.121Z")
    },
    {
      "out": ISODate("2017-05-31T11:00:37.321Z")
    },
    {
      "in": ISODate("2017-05-31T11:11:38.385Z")
    },
    {
      "out": ISODate("2017-05-31T11:18:19.890Z")
    },
    {
      "in": ISODate("2017-05-31T11:20:07.492Z")
    },
    {
      "out": ISODate("2017-05-31T11:29:39.49Z")
    },
    {
      "in": ISODate("2017-05-31T11:43:03.698Z")
    },
    {
      "in": ISODate("2017-05-31T13:37:55.107Z")
    },
    {
      "out": ISODate("2017-05-31T13:38:12.944Z")
    },
    {
      "in": ISODate("2017-05-31T13:38:38.450Z")
    },
    {
      "out": ISODate("2017-05-31T13:39:00.999Z")
    },
    {
      "in": ISODate("2017-05-31T13:41:10.346Z")
    },
    {
      "out": ISODate("2017-05-31T13:44:01.314Z")
    },
    {
      "in": ISODate("2017-05-31T13:50:16.19Z")
    },
    {
      "in": ISODate("2017-05-31T14:27:30.746Z")
    },
    {
      "out": ISODate("2017-05-31T14:58:22.33Z")
    },
    {
      "in": ISODate("2017-05-31T16:48:55.899Z")
    },
    {
      "out": ISODate("2017-05-31T16:49:43.11Z")
    },
    {
      "in": ISODate("2017-05-31T17:29:39.86Z")
    },
    {
      "out": ISODate("2017-05-31T17:32:43.787Z")
    },
    {
      "in": ISODate("2017-06-08T16:39:48.537Z")
    },
    {
      "out": ISODate("2017-06-08T16:40:02.242Z")
    },
    {
      "in": ISODate("2017-06-09T09:20:35.148Z")
    },
    {
      "out": ISODate("2017-06-09T09:21:08.532Z")
    },
    {
      "in": ISODate("2017-06-09T09:22:12.109Z")
    },
    {
      "out": ISODate("2017-06-09T09:22:30.830Z")
    },
    {
      "in": ISODate("2017-06-09T09:24:09.415Z")
    },
    {
      "out": ISODate("2017-06-09T09:57:25.61Z")
    },
    {
      "in": ISODate("2017-06-09T10:17:59.289Z")
    },
    {
      "in": ISODate("2017-06-12T11:01:38.552Z")
    },
    {
      "in": ISODate("2017-07-25T10:07:48.132Z")
    },
    {
      "out": ISODate("2017-07-25T10:08:57.772Z")
    },
    {
      "in": ISODate("2017-07-25T10:08:58.604Z")
    }
  ]
});
db.getCollection("users").insert({
  "_id": ObjectId("58e3072432341cfc09005d7e"),
  "username": "admin",
  "password": "e439b54306bc9144b9ca3bf05e3bab65",
  "roles": NumberLong(31),
  "person": "admin",
  "hinhanh": "591d5d3ec125835835f65fd7",
  "logs": [
    {
      "in": ISODate("2017-04-09T05:12:14.0Z")
    },
    {
      "out": ISODate("2017-04-09T05:18:00.0Z")
    },
    {
      "in": ISODate("2017-04-09T05:19:05.0Z")
    },
    {
      "in": ISODate("2017-04-10T01:29:20.0Z")
    },
    {
      "in": ISODate("2017-04-10T06:03:30.0Z")
    },
    {
      "in": ISODate("2017-04-10T15:24:56.0Z")
    },
    {
      "in": ISODate("2017-04-11T05:40:44.0Z")
    },
    {
      "in": ISODate("2017-04-11T05:40:59.0Z")
    },
    {
      "in": ISODate("2017-04-14T02:37:13.0Z")
    },
    {
      "in": ISODate("2017-04-14T06:18:55.0Z")
    },
    {
      "in": ISODate("2017-04-15T23:47:14.0Z")
    },
    {
      "in": ISODate("2017-04-16T02:30:45.0Z")
    },
    {
      "in": ISODate("2017-04-17T04:06:51.0Z")
    },
    {
      "in": ISODate("2017-04-17T06:24:55.0Z")
    },
    {
      "in": ISODate("2017-04-18T07:28:10.0Z")
    },
    {
      "in": ISODate("2017-04-19T06:41:44.0Z")
    },
    {
      "out": ISODate("2017-04-19T07:59:01.0Z")
    },
    {
      "in": ISODate("2017-04-19T07:59:03.0Z")
    },
    {
      "out": ISODate("2017-04-19T08:07:44.0Z")
    },
    {
      "in": ISODate("2017-04-19T08:07:45.0Z")
    },
    {
      "out": ISODate("2017-04-19T08:14:29.0Z")
    },
    {
      "in": ISODate("2017-04-19T08:14:43.0Z")
    },
    {
      "out": ISODate("2017-04-19T08:15:10.0Z")
    },
    {
      "in": ISODate("2017-04-19T08:16:14.0Z")
    },
    {
      "out": ISODate("2017-04-19T08:16:39.0Z")
    },
    {
      "in": ISODate("2017-04-19T08:16:55.0Z")
    },
    {
      "in": ISODate("2017-04-19T10:44:28.0Z")
    },
    {
      "in": ISODate("2017-04-19T13:42:03.0Z")
    },
    {
      "in": ISODate("2017-04-20T04:20:19.0Z")
    },
    {
      "in": ISODate("2017-04-20T05:37:29.0Z")
    },
    {
      "in": ISODate("2017-04-20T06:33:53.490Z")
    },
    {
      "in": ISODate("2017-04-20T06:39:14.453Z")
    },
    {
      "in": ISODate("2017-04-20T07:02:39.522Z")
    },
    {
      "in": ISODate("2017-04-20T07:06:37.425Z")
    },
    {
      "in": ISODate("2017-04-20T07:44:20.438Z")
    },
    {
      "in": ISODate("2017-04-20T07:44:20.828Z")
    },
    {
      "out": ISODate("2017-04-20T07:46:54.531Z")
    },
    {
      "in": ISODate("2017-04-20T07:48:10.963Z")
    },
    {
      "out": ISODate("2017-04-20T07:54:24.866Z")
    },
    {
      "out": ISODate("2017-04-20T09:49:59.626Z")
    },
    {
      "in": ISODate("2017-04-20T09:50:48.623Z")
    },
    {
      "in": ISODate("2017-04-20T09:51:26.144Z")
    },
    {
      "in": ISODate("2017-04-20T09:52:07.594Z")
    },
    {
      "out": ISODate("2017-04-20T09:57:38.710Z")
    },
    {
      "in": ISODate("2017-04-20T09:57:45.545Z")
    },
    {
      "in": ISODate("2017-04-20T09:58:15.394Z")
    },
    {
      "in": ISODate("2017-04-20T11:11:38.364Z")
    },
    {
      "in": ISODate("2017-04-20T21:19:46.479Z")
    },
    {
      "in": ISODate("2017-04-21T01:28:07.713Z")
    },
    {
      "in": ISODate("2017-04-21T02:01:43.925Z")
    },
    {
      "in": ISODate("2017-04-21T02:16:38.958Z")
    },
    {
      "in": ISODate("2017-04-21T02:28:22.899Z")
    },
    {
      "in": ISODate("2017-04-21T02:55:54.565Z")
    },
    {
      "in": ISODate("2017-04-21T02:56:13.963Z")
    },
    {
      "in": ISODate("2017-04-21T03:51:03.262Z")
    },
    {
      "in": ISODate("2017-04-21T04:07:03.402Z")
    },
    {
      "in": ISODate("2017-04-21T04:27:28.530Z")
    },
    {
      "in": ISODate("2017-04-21T04:31:50.831Z")
    },
    {
      "in": ISODate("2017-04-21T06:16:56.167Z")
    },
    {
      "in": ISODate("2017-04-21T06:26:33.232Z")
    },
    {
      "in": ISODate("2017-04-21T06:43:07.838Z")
    },
    {
      "in": ISODate("2017-04-21T06:46:58.616Z")
    },
    {
      "in": ISODate("2017-04-21T07:15:01.573Z")
    },
    {
      "out": ISODate("2017-04-21T08:12:24.790Z")
    },
    {
      "in": ISODate("2017-04-21T08:14:39.349Z")
    },
    {
      "out": ISODate("2017-04-21T08:15:13.216Z")
    },
    {
      "in": ISODate("2017-04-21T09:16:04.795Z")
    },
    {
      "in": ISODate("2017-04-21T09:23:58.195Z")
    },
    {
      "in": ISODate("2017-04-22T03:17:31.608Z")
    },
    {
      "in": ISODate("2017-04-22T03:17:39.269Z")
    },
    {
      "in": ISODate("2017-04-22T03:50:24.329Z")
    },
    {
      "in": ISODate("2017-04-22T08:50:29.267Z")
    },
    {
      "in": ISODate("2017-04-23T00:18:52.719Z")
    },
    {
      "in": ISODate("2017-04-23T02:38:27.443Z")
    },
    {
      "in": ISODate("2017-04-23T02:44:22.951Z")
    },
    {
      "out": ISODate("2017-04-23T02:47:33.794Z")
    },
    {
      "out": ISODate("2017-04-23T03:03:50.267Z")
    },
    {
      "in": ISODate("2017-04-23T03:12:17.468Z")
    },
    {
      "in": ISODate("2017-04-23T03:12:17.784Z")
    },
    {
      "in": ISODate("2017-04-23T09:33:52.118Z")
    },
    {
      "in": ISODate("2017-04-24T02:47:51.447Z")
    },
    {
      "in": ISODate("2017-04-24T03:12:26.810Z")
    },
    {
      "in": ISODate("2017-04-24T07:43:15.370Z")
    },
    {
      "in": ISODate("2017-04-24T07:50:11.879Z")
    },
    {
      "out": ISODate("2017-04-24T07:54:55.901Z")
    },
    {
      "in": ISODate("2017-04-24T08:22:45.990Z")
    },
    {
      "in": ISODate("2017-04-24T08:32:58.931Z")
    },
    {
      "in": ISODate("2017-04-24T09:08:24.487Z")
    },
    {
      "in": ISODate("2017-04-24T09:10:09.360Z")
    },
    {
      "out": ISODate("2017-04-24T10:09:53.642Z")
    },
    {
      "in": ISODate("2017-04-24T10:10:00.922Z")
    },
    {
      "in": ISODate("2017-04-24T10:27:11.294Z")
    },
    {
      "out": ISODate("2017-04-24T11:16:00.257Z")
    },
    {
      "in": ISODate("2017-04-24T12:49:16.244Z")
    },
    {
      "in": ISODate("2017-04-25T00:53:07.354Z")
    },
    {
      "out": ISODate("2017-04-25T00:58:05.161Z")
    },
    {
      "in": ISODate("2017-04-25T01:34:33.456Z")
    },
    {
      "in": ISODate("2017-04-25T01:38:11.315Z")
    },
    {
      "in": ISODate("2017-04-25T02:08:54.287Z")
    },
    {
      "in": ISODate("2017-04-25T06:42:31.132Z")
    },
    {
      "in": ISODate("2017-04-25T06:59:00.383Z")
    },
    {
      "in": ISODate("2017-04-25T07:38:32.200Z")
    },
    {
      "in": ISODate("2017-04-25T09:47:10.554Z")
    },
    {
      "in": ISODate("2017-04-25T11:15:24.441Z")
    },
    {
      "out": ISODate("2017-04-25T11:17:51.159Z")
    },
    {
      "in": ISODate("2017-04-26T01:32:27.528Z")
    },
    {
      "in": ISODate("2017-04-26T01:37:17.740Z")
    },
    {
      "in": ISODate("2017-04-26T01:57:58.577Z")
    },
    {
      "in": ISODate("2017-04-26T02:54:03.637Z")
    },
    {
      "out": ISODate("2017-04-26T03:19:06.574Z")
    },
    {
      "in": ISODate("2017-04-26T03:20:53.695Z")
    },
    {
      "in": ISODate("2017-04-26T03:21:44.561Z")
    },
    {
      "out": ISODate("2017-04-26T03:48:09.621Z")
    },
    {
      "in": ISODate("2017-04-26T03:48:10.548Z")
    },
    {
      "in": ISODate("2017-04-26T03:48:22.959Z")
    },
    {
      "out": ISODate("2017-04-26T03:53:56.625Z")
    },
    {
      "out": ISODate("2017-04-26T03:54:31.224Z")
    },
    {
      "in": ISODate("2017-04-26T03:54:37.575Z")
    },
    {
      "in": ISODate("2017-04-26T05:06:46.699Z")
    },
    {
      "in": ISODate("2017-04-26T05:07:01.433Z")
    },
    {
      "in": ISODate("2017-04-26T05:44:29.903Z")
    },
    {
      "in": ISODate("2017-04-26T06:13:14.801Z")
    },
    {
      "out": ISODate("2017-04-26T06:19:11.421Z")
    },
    {
      "in": ISODate("2017-04-26T06:19:19.110Z")
    },
    {
      "in": ISODate("2017-04-26T07:13:57.106Z")
    },
    {
      "out": ISODate("2017-04-26T07:20:22.119Z")
    },
    {
      "in": ISODate("2017-04-26T07:20:26.466Z")
    },
    {
      "in": ISODate("2017-04-26T08:22:44.362Z")
    },
    {
      "in": ISODate("2017-04-26T08:52:37.294Z")
    },
    {
      "in": ISODate("2017-04-26T09:24:26.898Z")
    },
    {
      "in": ISODate("2017-04-26T10:06:04.325Z")
    },
    {
      "in": ISODate("2017-04-27T01:17:45.963Z")
    },
    {
      "in": ISODate("2017-04-27T02:09:16.396Z")
    },
    {
      "in": ISODate("2017-04-27T02:54:06.727Z")
    },
    {
      "in": ISODate("2017-04-27T07:17:24.940Z")
    },
    {
      "out": ISODate("2017-04-27T07:24:04.885Z")
    },
    {
      "in": ISODate("2017-04-28T01:19:10.227Z")
    },
    {
      "in": ISODate("2017-04-28T01:30:06.100Z")
    },
    {
      "in": ISODate("2017-04-28T01:57:40.656Z")
    },
    {
      "in": ISODate("2017-04-28T08:47:03.800Z")
    },
    {
      "in": ISODate("2017-05-01T10:52:03.879Z")
    },
    {
      "in": ISODate("2017-05-03T02:07:39.265Z")
    },
    {
      "in": ISODate("2017-05-03T06:37:10.280Z")
    },
    {
      "in": ISODate("2017-05-03T06:47:48.324Z")
    },
    {
      "out": ISODate("2017-05-03T06:47:54.267Z")
    },
    {
      "in": ISODate("2017-05-04T02:01:41.165Z")
    },
    {
      "in": ISODate("2017-05-04T07:41:36.489Z")
    },
    {
      "in": ISODate("2017-05-04T07:42:36.340Z")
    },
    {
      "in": ISODate("2017-05-04T07:56:56.520Z")
    },
    {
      "in": ISODate("2017-05-05T06:14:07.963Z")
    },
    {
      "out": ISODate("2017-05-05T06:14:18.813Z")
    },
    {
      "in": ISODate("2017-05-05T07:04:59.885Z")
    },
    {
      "in": ISODate("2017-05-05T09:26:56.380Z")
    },
    {
      "in": ISODate("2017-05-05T09:47:53.168Z")
    },
    {
      "in": ISODate("2017-05-06T09:51:34.809Z")
    },
    {
      "out": ISODate("2017-05-06T09:58:22.736Z")
    },
    {
      "in": ISODate("2017-05-06T10:05:18.703Z")
    },
    {
      "in": ISODate("2017-05-07T01:01:56.269Z")
    },
    {
      "out": ISODate("2017-05-07T02:46:06.510Z")
    },
    {
      "in": ISODate("2017-05-07T07:51:10.184Z")
    },
    {
      "in": ISODate("2017-05-08T01:22:54.532Z")
    },
    {
      "in": ISODate("2017-05-08T01:41:37.854Z")
    },
    {
      "in": ISODate("2017-05-08T01:54:37.270Z")
    },
    {
      "in": ISODate("2017-05-08T01:56:11.248Z")
    },
    {
      "in": ISODate("2017-05-08T02:21:25.128Z")
    },
    {
      "out": ISODate("2017-05-08T04:15:27.310Z")
    },
    {
      "in": ISODate("2017-05-08T10:10:14.991Z")
    },
    {
      "in": ISODate("2017-05-08T10:16:35.287Z")
    },
    {
      "out": ISODate("2017-05-08T10:34:38.933Z")
    },
    {
      "in": ISODate("2017-05-08T10:34:46.169Z")
    },
    {
      "in": ISODate("2017-05-08T10:38:50.715Z")
    },
    {
      "out": ISODate("2017-05-08T10:40:01.958Z")
    },
    {
      "in": ISODate("2017-05-08T10:43:13.498Z")
    },
    {
      "out": ISODate("2017-05-08T10:56:16.202Z")
    },
    {
      "in": ISODate("2017-05-09T01:23:39.696Z")
    },
    {
      "in": ISODate("2017-05-09T02:07:27.737Z")
    },
    {
      "in": ISODate("2017-05-09T02:07:31.342Z")
    },
    {
      "in": ISODate("2017-05-09T03:10:10.820Z")
    },
    {
      "in": ISODate("2017-05-09T04:46:26.190Z")
    },
    {
      "in": ISODate("2017-05-10T07:52:35.616Z")
    },
    {
      "in": ISODate("2017-05-11T01:59:28.994Z")
    },
    {
      "in": ISODate("2017-05-11T03:47:22.410Z")
    },
    {
      "in": ISODate("2017-05-11T03:48:30.519Z")
    },
    {
      "in": ISODate("2017-05-11T04:10:11.934Z")
    },
    {
      "in": ISODate("2017-05-11T05:02:28.353Z")
    },
    {
      "in": ISODate("2017-05-11T07:01:03.629Z")
    },
    {
      "in": ISODate("2017-05-11T07:08:25.927Z")
    },
    {
      "in": ISODate("2017-05-12T08:02:29.421Z")
    },
    {
      "in": ISODate("2017-05-12T10:44:01.746Z")
    },
    {
      "out": ISODate("2017-05-12T10:58:01.114Z")
    },
    {
      "in": ISODate("2017-05-13T09:30:00.483Z")
    },
    {
      "out": ISODate("2017-05-13T09:50:48.696Z")
    },
    {
      "in": ISODate("2017-05-15T01:23:45.281Z")
    },
    {
      "in": ISODate("2017-05-15T02:38:31.227Z")
    },
    {
      "in": ISODate("2017-05-15T04:25:06.158Z")
    },
    {
      "out": ISODate("2017-05-15T06:29:35.800Z")
    },
    {
      "in": ISODate("2017-05-16T09:30:06.100Z")
    },
    {
      "out": ISODate("2017-05-16T09:33:15.485Z")
    },
    {
      "in": ISODate("2017-05-16T10:11:23.747Z")
    },
    {
      "in": ISODate("2017-05-16T16:26:18.280Z")
    },
    {
      "in": ISODate("2017-05-17T01:26:25.461Z")
    },
    {
      "out": ISODate("2017-05-17T01:43:03.221Z")
    },
    {
      "in": ISODate("2017-05-17T01:46:39.830Z")
    },
    {
      "in": ISODate("2017-05-17T01:51:13.359Z")
    },
    {
      "in": ISODate("2017-05-17T07:46:28.611Z")
    },
    {
      "in": ISODate("2017-05-17T07:52:01.167Z")
    },
    {
      "in": ISODate("2017-05-18T08:36:05.390Z")
    },
    {
      "in": ISODate("2017-05-18T09:40:10.956Z")
    },
    {
      "out": ISODate("2017-05-18T10:12:06.219Z")
    },
    {
      "in": ISODate("2017-05-18T10:17:17.167Z")
    },
    {
      "out": ISODate("2017-05-18T10:17:26.286Z")
    },
    {
      "out": ISODate("2017-05-18T10:18:15.352Z")
    },
    {
      "in": ISODate("2017-05-18T10:20:19.539Z")
    },
    {
      "out": ISODate("2017-05-18T10:39:08.868Z")
    },
    {
      "in": ISODate("2017-05-18T13:17:15.249Z")
    },
    {
      "in": ISODate("2017-05-18T13:59:39.371Z")
    },
    {
      "out": ISODate("2017-05-18T13:59:45.786Z")
    },
    {
      "out": ISODate("2017-05-18T14:08:15.580Z")
    },
    {
      "in": ISODate("2017-05-18T14:08:24.454Z")
    },
    {
      "in": ISODate("2017-05-18T14:22:13.352Z")
    },
    {
      "out": ISODate("2017-05-18T14:22:29.984Z")
    },
    {
      "out": ISODate("2017-05-18T14:23:15.942Z")
    },
    {
      "in": ISODate("2017-05-18T14:23:21.842Z")
    },
    {
      "in": ISODate("2017-05-18T15:18:48.633Z")
    },
    {
      "in": ISODate("2017-05-18T16:05:19.104Z")
    },
    {
      "in": ISODate("2017-05-19T08:47:24.790Z")
    },
    {
      "out": ISODate("2017-05-19T08:51:15.197Z")
    },
    {
      "in": ISODate("2017-05-19T08:53:37.354Z")
    },
    {
      "out": ISODate("2017-05-19T09:02:18.649Z")
    },
    {
      "in": ISODate("2017-05-19T09:07:21.701Z")
    },
    {
      "in": ISODate("2017-05-19T09:39:48.354Z")
    },
    {
      "out": ISODate("2017-05-19T09:56:42.717Z")
    },
    {
      "in": ISODate("2017-05-19T10:41:06.449Z")
    },
    {
      "in": ISODate("2017-05-19T10:43:29.485Z")
    },
    {
      "in": ISODate("2017-05-19T10:44:56.605Z")
    },
    {
      "out": ISODate("2017-05-19T11:23:57.425Z")
    },
    {
      "in": ISODate("2017-05-19T11:28:22.463Z")
    },
    {
      "in": ISODate("2017-05-19T12:37:54.434Z")
    },
    {
      "in": ISODate("2017-05-19T13:17:11.643Z")
    },
    {
      "in": ISODate("2017-05-19T13:47:58.614Z")
    },
    {
      "in": ISODate("2017-05-19T13:54:11.867Z")
    },
    {
      "in": ISODate("2017-05-22T09:56:17.770Z")
    },
    {
      "out": ISODate("2017-05-22T10:50:05.658Z")
    },
    {
      "in": ISODate("2017-05-22T13:56:05.600Z")
    },
    {
      "in": ISODate("2017-05-22T15:55:33.830Z")
    },
    {
      "out": ISODate("2017-05-22T16:49:30.812Z")
    },
    {
      "in": ISODate("2017-05-22T21:55:56.499Z")
    },
    {
      "out": ISODate("2017-05-22T21:57:50.693Z")
    },
    {
      "in": ISODate("2017-05-23T11:00:07.526Z")
    },
    {
      "in": ISODate("2017-05-23T14:03:43.735Z")
    },
    {
      "in": ISODate("2017-05-23T14:06:41.798Z")
    },
    {
      "out": ISODate("2017-05-23T15:06:29.292Z")
    },
    {
      "in": ISODate("2017-05-24T14:16:17.770Z")
    },
    {
      "out": ISODate("2017-05-24T14:16:58.891Z")
    },
    {
      "in": ISODate("2017-05-24T14:17:04.308Z")
    },
    {
      "in": ISODate("2017-05-24T14:19:24.865Z")
    },
    {
      "out": ISODate("2017-05-24T14:25:10.773Z")
    },
    {
      "in": ISODate("2017-05-24T14:49:59.304Z")
    },
    {
      "out": ISODate("2017-05-24T14:50:24.694Z")
    },
    {
      "in": ISODate("2017-05-24T14:50:40.655Z")
    },
    {
      "out": ISODate("2017-05-24T14:51:34.975Z")
    },
    {
      "in": ISODate("2017-05-24T15:15:15.704Z")
    },
    {
      "out": ISODate("2017-05-24T15:26:52.109Z")
    },
    {
      "in": ISODate("2017-05-24T15:26:57.866Z")
    },
    {
      "out": ISODate("2017-05-24T16:24:08.292Z")
    },
    {
      "in": ISODate("2017-05-24T16:46:39.249Z")
    },
    {
      "in": ISODate("2017-05-25T11:20:48.314Z")
    },
    {
      "out": ISODate("2017-05-25T11:47:38.640Z")
    },
    {
      "in": ISODate("2017-05-25T13:31:05.99Z")
    },
    {
      "out": ISODate("2017-05-25T15:23:52.390Z")
    },
    {
      "in": ISODate("2017-05-25T15:24:02.923Z")
    },
    {
      "out": ISODate("2017-05-25T15:24:33.203Z")
    },
    {
      "in": ISODate("2017-05-25T15:41:37.34Z")
    },
    {
      "in": ISODate("2017-05-26T15:38:58.455Z")
    },
    {
      "out": ISODate("2017-05-26T16:37:55.818Z")
    },
    {
      "in": ISODate("2017-05-26T16:38:34.259Z")
    },
    {
      "out": ISODate("2017-05-26T17:12:23.251Z")
    },
    {
      "in": ISODate("2017-05-26T19:53:20.954Z")
    },
    {
      "out": ISODate("2017-05-26T19:53:29.958Z")
    },
    {
      "in": ISODate("2017-05-30T15:00:47.742Z")
    },
    {
      "in": ISODate("2017-05-30T16:21:21.230Z")
    },
    {
      "in": ISODate("2017-05-30T16:25:07.51Z")
    },
    {
      "in": ISODate("2017-05-31T09:32:01.285Z")
    },
    {
      "in": ISODate("2017-05-31T13:26:13.467Z")
    },
    {
      "in": ISODate("2017-05-31T13:29:23.209Z")
    },
    {
      "out": ISODate("2017-05-31T13:37:36.341Z")
    },
    {
      "in": ISODate("2017-05-31T13:38:17.635Z")
    },
    {
      "out": ISODate("2017-05-31T13:38:33.854Z")
    },
    {
      "in": ISODate("2017-05-31T13:39:05.127Z")
    },
    {
      "in": ISODate("2017-05-31T13:40:31.21Z")
    },
    {
      "out": ISODate("2017-05-31T13:41:05.808Z")
    },
    {
      "in": ISODate("2017-05-31T13:44:07.367Z")
    },
    {
      "out": ISODate("2017-05-31T13:50:11.30Z")
    },
    {
      "in": ISODate("2017-05-31T14:20:44.972Z")
    },
    {
      "out": ISODate("2017-05-31T14:23:46.600Z")
    },
    {
      "in": ISODate("2017-05-31T14:58:26.876Z")
    },
    {
      "out": ISODate("2017-05-31T15:00:33.184Z")
    },
    {
      "in": ISODate("2017-05-31T15:59:15.324Z")
    },
    {
      "in": ISODate("2017-05-31T16:09:24.666Z")
    },
    {
      "out": ISODate("2017-05-31T16:40:45.918Z")
    },
    {
      "in": ISODate("2017-05-31T16:41:51.745Z")
    },
    {
      "in": ISODate("2017-05-31T16:48:44.821Z")
    },
    {
      "out": ISODate("2017-05-31T16:48:51.521Z")
    },
    {
      "in": ISODate("2017-05-31T16:49:46.759Z")
    },
    {
      "in": ISODate("2017-05-31T17:20:28.76Z")
    },
    {
      "out": ISODate("2017-05-31T17:29:23.112Z")
    },
    {
      "in": ISODate("2017-06-01T09:34:31.460Z")
    },
    {
      "out": ISODate("2017-06-01T09:41:42.642Z")
    },
    {
      "in": ISODate("2017-06-01T09:43:49.756Z")
    },
    {
      "in": ISODate("2017-06-01T13:03:20.249Z")
    },
    {
      "in": ISODate("2017-06-01T13:26:25.4Z")
    },
    {
      "in": ISODate("2017-06-01T15:25:57.101Z")
    },
    {
      "out": ISODate("2017-06-01T15:26:04.353Z")
    },
    {
      "in": ISODate("2017-06-01T15:28:38.756Z")
    },
    {
      "out": ISODate("2017-06-01T15:54:32.127Z")
    },
    {
      "in": ISODate("2017-06-05T13:20:16.38Z")
    },
    {
      "in": ISODate("2017-06-06T08:45:53.892Z")
    },
    {
      "in": ISODate("2017-06-06T13:05:30.535Z")
    },
    {
      "in": ISODate("2017-06-06T13:32:10.18Z")
    },
    {
      "in": ISODate("2017-06-06T15:39:42.595Z")
    },
    {
      "out": ISODate("2017-06-06T16:12:05.680Z")
    },
    {
      "in": ISODate("2017-06-08T16:35:18.810Z")
    },
    {
      "out": ISODate("2017-06-08T16:39:41.126Z")
    },
    {
      "in": ISODate("2017-06-08T16:40:07.715Z")
    },
    {
      "in": ISODate("2017-06-09T09:14:33.639Z")
    },
    {
      "out": ISODate("2017-06-09T09:15:08.908Z")
    },
    {
      "in": ISODate("2017-06-09T09:21:12.988Z")
    },
    {
      "out": ISODate("2017-06-09T09:22:06.381Z")
    },
    {
      "in": ISODate("2017-06-09T09:22:35.494Z")
    },
    {
      "out": ISODate("2017-06-09T09:24:04.675Z")
    },
    {
      "in": ISODate("2017-06-09T09:25:08.875Z")
    },
    {
      "in": ISODate("2017-06-12T10:39:07.526Z")
    },
    {
      "in": ISODate("2017-06-13T16:29:42.903Z")
    },
    {
      "out": ISODate("2017-06-13T16:56:47.111Z")
    },
    {
      "in": ISODate("2017-06-14T15:29:28.757Z")
    },
    {
      "out": ISODate("2017-06-14T15:29:47.593Z")
    },
    {
      "in": ISODate("2017-06-14T15:30:09.759Z")
    },
    {
      "out": ISODate("2017-06-14T15:30:11.778Z")
    },
    {
      "in": ISODate("2017-06-16T08:37:21.321Z")
    },
    {
      "out": ISODate("2017-06-16T08:38:59.813Z")
    },
    {
      "in": ISODate("2017-06-16T08:39:22.786Z")
    },
    {
      "in": ISODate("2017-06-16T13:06:12.184Z")
    },
    {
      "in": ISODate("2017-06-16T21:16:42.100Z")
    },
    {
      "in": ISODate("2017-06-17T06:20:12.664Z")
    },
    {
      "in": ISODate("2017-06-17T06:24:04.925Z")
    },
    {
      "out": ISODate("2017-06-17T06:25:04.765Z")
    },
    {
      "in": ISODate("2017-06-17T15:09:26.463Z")
    },
    {
      "out": ISODate("2017-06-17T15:09:48.266Z")
    },
    {
      "in": ISODate("2017-06-17T15:09:59.681Z")
    },
    {
      "out": ISODate("2017-06-17T15:10:31.158Z")
    },
    {
      "in": ISODate("2017-06-17T15:11:45.854Z")
    },
    {
      "out": ISODate("2017-06-17T15:14:27.930Z")
    },
    {
      "in": ISODate("2017-06-17T15:14:37.428Z")
    },
    {
      "out": ISODate("2017-06-17T15:14:46.962Z")
    },
    {
      "in": ISODate("2017-06-19T08:51:29.57Z")
    },
    {
      "in": ISODate("2017-06-19T09:17:43.90Z")
    },
    {
      "out": ISODate("2017-06-19T10:17:24.529Z")
    },
    {
      "in": ISODate("2017-06-20T08:59:49.724Z")
    },
    {
      "in": ISODate("2017-06-20T09:05:01.733Z")
    },
    {
      "in": ISODate("2017-07-11T09:20:17.651Z")
    },
    {
      "out": ISODate("2017-07-11T09:20:43.969Z")
    },
    {
      "in": ISODate("2017-07-11T14:44:43.298Z")
    },
    {
      "in": ISODate("2017-07-17T10:04:07.234Z")
    },
    {
      "out": ISODate("2017-07-17T10:04:50.181Z")
    },
    {
      "in": ISODate("2017-07-17T10:04:57.73Z")
    },
    {
      "out": ISODate("2017-07-17T10:06:20.635Z")
    },
    {
      "in": ISODate("2017-07-17T10:26:06.548Z")
    },
    {
      "out": ISODate("2017-07-17T10:49:04.303Z")
    },
    {
      "in": ISODate("2017-07-17T10:49:11.183Z")
    },
    {
      "in": ISODate("2017-07-20T15:42:24.345Z")
    },
    {
      "in": ISODate("2017-08-18T14:44:40.989Z")
    },
    {
      "out": ISODate("2017-08-18T14:48:21.101Z")
    },
    {
      "in": ISODate("2017-08-18T14:57:29.649Z")
    },
    {
      "in": ISODate("2017-10-17T08:37:00.458Z")
    },
    {
      "in": ISODate("2017-10-17T08:55:50.143Z")
    },
    {
      "out": ISODate("2017-10-17T09:02:45.977Z")
    },
    {
      "in": ISODate("2017-11-03T08:45:44.33Z")
    },
    {
      "in": ISODate("2017-11-03T17:16:17.776Z")
    },
    {
      "in": ISODate("2017-12-29T14:17:47.796Z")
    },
    {
      "in": ISODate("2017-12-29T16:15:51.181Z")
    },
    {
      "in": ISODate("2018-01-02T08:45:06.903Z")
    },
    {
      "in": ISODate("2018-01-02T08:46:23.357Z")
    }
  ],
  "id_congty": ObjectId("591d6c69c12583e352f65fd6")
});

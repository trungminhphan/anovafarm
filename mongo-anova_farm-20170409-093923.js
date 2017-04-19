
/** banle indexes **/
db.getCollection("banle").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** danhmucbanle indexes **/
db.getCollection("danhmucbanle").ensureIndex({
  "_id": NumberInt(1)
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

/** danhmucnongtrai indexes **/
db.getCollection("danhmucnongtrai").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** donggoi indexes **/
db.getCollection("donggoi").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** donggoitrung indexes **/
db.getCollection("donggoitrung").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** fs.chunks indexes **/
db.getCollection("fs.chunks").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** fs.chunks indexes **/
db.getCollection("fs.chunks").ensureIndex({
  "files_id": NumberInt(1),
  "n": NumberInt(1)
},{
  "unique": true
});

/** fs.files indexes **/
db.getCollection("fs.files").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** nhamay indexes **/
db.getCollection("nhamay").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** nongtrai indexes **/
db.getCollection("nongtrai").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** nongtraitrung indexes **/
db.getCollection("nongtraitrung").ensureIndex({
  "_id": NumberInt(1)
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
  "_id": ObjectId("58f71f59d89398d40d00002a"),
  "id_donggoi": ObjectId("58f71edad89398d40d000029"),
  "id_dmbanle": [
    "58f2e890d893986c0f00002b",
    "58f2e8d5d893986c0f00002c"
  ],
  "hienthi": "1",
  "date_post": ISODate("2017-04-19T08:27:05.0Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58f0801dd89398440b00002b")
});

/** danhmucbanle records **/
db.getCollection("danhmucbanle").insert({
  "_id": ObjectId("58f2e890d893986c0f00002b"),
  "ten": "ABC",
  "diachi": "ABC"
});
db.getCollection("danhmucbanle").insert({
  "_id": ObjectId("58f2e8d5d893986c0f00002c"),
  "ten": "Sạp A",
  "diachi": "Sạp A"
});

/** danhmuccongty records **/
db.getCollection("danhmuccongty").insert({
  "_id": ObjectId("58f074f8d893983c0b000029"),
  "ten": "ABC EF GH",
  "diachi": "Long Xuyên, An Giang"
});
db.getCollection("danhmuccongty").insert({
  "_id": ObjectId("58f0801dd89398440b00002b"),
  "ten": "Công ty nuôi trồng nông sản",
  "diachi": "TpHCM"
});

/** danhmucnhamay records **/
db.getCollection("danhmucnhamay").insert({
  "_id": ObjectId("58f07ffcd89398440b00002a"),
  "ten": "ABC",
  "diachi": "An Giang",
  "id_congty": ObjectId("58f0801dd89398440b00002b")
});

/** danhmucnongtrai records **/
db.getCollection("danhmucnongtrai").insert({
  "_id": ObjectId("58f081fcd89398440b00002c"),
  "ten": "Trại bưng biền",
  "diachi": "ABC ABC",
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("danhmucnongtrai").insert({
  "_id": ObjectId("58f0820ad89398440b00002d"),
  "ten": "Trại số 2",
  "diachi": "Long Xuyên, An Giang",
  "id_congty": ObjectId("58f0801dd89398440b00002b")
});

/** donggoi records **/
db.getCollection("donggoi").insert({
  "_id": ObjectId("58f71edad89398d40d000029"),
  "id_nhamay": ObjectId("58f71da4d89398f408000029"),
  "tensanpham": "ABC EFA ABC EFA",
  "quicachdonggoi": "ABC EFA",
  "solo": "123",
  "tieuchuan": "ViệtGAP",
  "sochungnhantieuchuan": "123",
  "ngaygiogietmo": ISODate("2017-04-19T08:08:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-04-19T10:24:00.0Z"),
  "hansudung": "3 ngày",
  "hienthi": NumberInt(1),
  "date_post": ISODate("2017-04-19T08:24:58.0Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58f0801dd89398440b00002b")
});

/** donggoitrung records **/
db.getCollection("donggoitrung").insert({
  "_id": ObjectId("58f736e0d89398d40d000041"),
  "id_nongtraitrung": ObjectId("58f72d80d89398e40f00002a"),
  "tensanpham": "Trứng ",
  "quicachdonggoi": "Trứng ",
  "solo": "Trứng ",
  "id_dmnhamay": ObjectId("58f07ffcd89398440b00002a"),
  "tieuchuan": "111",
  "sochungnhantieuchuan": "",
  "ngaydonggoi": ISODate("2017-04-19T00:00:00.0Z"),
  "hansudung": "111",
  "hienthi": NumberInt(1),
  "date_post": ISODate("2017-04-19T10:07:28.0Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58f0801dd89398440b00002b")
});

/** fs.chunks records **/
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("58f43f74d893986c0700002a"),
  "files_id": ObjectId("58f43f74d893986c07000029"),
  "n": NumberInt(0),
  "data": "<Mongo Binary Data>"
});

/** fs.files records **/
db.getCollection("fs.files").insert({
  "_id": ObjectId("58f43f74d893986c07000029"),
  "filename": "seafood.png",
  "filetype": "image/png",
  "caption": "seafood.png",
  "uploadDate": ISODate("2017-04-17T04:08:23.954Z"),
  "length": NumberInt(31587),
  "chunkSize": NumberInt(261120),
  "md5": "a717441ee1b8a87255bac4f73f17867b"
});

/** nhamay records **/
db.getCollection("nhamay").insert({
  "_id": ObjectId("58f71da4d89398f408000029"),
  "id_dmnhamay": ObjectId("58f07ffcd89398440b00002a"),
  "tieuchuan": "ViệtGAP",
  "solo": "123",
  "sogiaykiemdichthusong": "ABC",
  "giaychungnhan": "111",
  "nhanvienkiemsoat": "111",
  "ngaygiogietmo": ISODate("2017-04-19T08:17:00.0Z"),
  "id_nongtrai": ObjectId("58f719f8d89398e40f000029"),
  "hienthi": "1",
  "date_post": ISODate("2017-04-19T08:19:48.0Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58f0801dd89398440b00002b")
});

/** nongtrai records **/
db.getCollection("nongtrai").insert({
  "_id": ObjectId("58f719f8d89398e40f000029"),
  "id_dmnongtrai": ObjectId("58f0820ad89398440b00002d"),
  "tieuchuan": "ViệtGAP",
  "ngaygioxuat": ISODate("2017-04-19T08:03:00.0Z"),
  "madan": "100",
  "soluong": NumberInt(100),
  "nhamaycungcapthucan": "100",
  "soxevanchuyen": "100",
  "tentaixe": "100",
  "sogiaykiemdichthusong": "100",
  "nhanvienkiemdich": "1000",
  "hienthi": NumberInt(1),
  "date_post": ISODate("2017-04-19T08:04:08.0Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58f0801dd89398440b00002b")
});

/** nongtraitrung records **/
db.getCollection("nongtraitrung").insert({
  "_id": ObjectId("58f72d80d89398e40f00002a"),
  "id_dmnongtrai": ObjectId("58f0820ad89398440b00002d"),
  "tieuchuan": "Trứng1",
  "sochungnhantieuchuan": "Trứng1",
  "madan": "Trứng1",
  "soluong": NumberInt(101),
  "ngaythuhoach": ISODate("2017-04-20T00:00:00.0Z"),
  "nhamaycungcapthucan": "Trứng1",
  "soxevanchuyen": "Trứng1",
  "tentaixe": "Trứng1",
  "hienthi": NumberInt(1),
  "date_post": ISODate("2017-04-19T09:36:31.0Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58f0801dd89398440b00002b")
});

/** sessions records **/
db.getCollection("sessions").insert({
  "_id": ObjectId("58f71cf58677c260aa9889e9"),
  "session_id": "2nfkuuklfte8b2i4ssprdj7jq5",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58f0801dd89398440b00002b\";roles|i:31;",
  "timedout_at": NumberInt(1492602869),
  "expired_at": NumberInt(1492625813)
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
  "ns": "anova_farm.nhamay"
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
  "ns": "anova_farm.users"
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
    "files_id": NumberInt(1),
    "n": NumberInt(1)
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
  "ns": "anova_farm.donggoi"
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
  "ns": "anova_farm.danhmuccongty"
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
  "ns": "anova_farm.danhmucbanle"
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
  "ns": "anova_farm.donggoitrung"
});

/** users records **/
db.getCollection("users").insert({
  "_id": ObjectId("58e3072432341cfc09005d7e"),
  "username": "admin",
  "password": "ec705f9abe736346fc04409dc85c79d8",
  "roles": NumberInt(31),
  "person": "Phan Minh Trung",
  "hinhanh": "58f43f74d893986c07000029",
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
    }
  ],
  "id_congty": ObjectId("58f0801dd89398440b00002b")
});
db.getCollection("users").insert({
  "_id": ObjectId("58e4aa6a835e6f64038b4567"),
  "username": "retail",
  "password": "1c6e980e0eee73a9a9512439f56665c5",
  "roles": NumberInt(4),
  "person": "Retail",
  "hinhanh": "",
  "id_congty": ObjectId("58f0801dd89398440b00002b")
});
db.getCollection("users").insert({
  "_id": ObjectId("58e4aa5c835e6f67038b4567"),
  "username": "factory",
  "password": "9549dd6065d019211460c59a86dd6536",
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
    }
  ],
  "hinhanh": "",
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});

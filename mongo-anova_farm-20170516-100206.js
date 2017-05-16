
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

/** donggoirauqua indexes **/
db.getCollection("donggoirauqua").ensureIndex({
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

/** nongtrairauqua indexes **/
db.getCollection("nongtrairauqua").ensureIndex({
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
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-19T08:27:05.0Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("banle").insert({
  "_id": ObjectId("58f9a73e835e6f5a4f8b4567"),
  "id_donggoi": ObjectId("58f9788a835e6fb14c8b4573"),
  "id_dmbanle": [
    "58f9796e835e6f5a4d8b4567"
  ],
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-21T06:31:26.338Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
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
  "date_post": ISODate("2017-04-26T06:50:42.58Z"),
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
  "date_post": ISODate("2017-04-26T03:08:41.39Z"),
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
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});

/** danhmucbanle records **/
db.getCollection("danhmucbanle").insert({
  "_id": ObjectId("58f2e890d893986c0f00002b"),
  "ten": "Co.opmart Nguyễn Đình Chiểu",
  "diachi": "168 Nguyễn Đình Chiểu, P.6, Q.3, TPHCM"
});
db.getCollection("danhmucbanle").insert({
  "_id": ObjectId("58f2e8d5d893986c0f00002c"),
  "ten": "AEON MALL Bình Tân",
  "diachi": "Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM"
});
db.getCollection("danhmucbanle").insert({
  "_id": ObjectId("58f9796e835e6f5a4d8b4567"),
  "ten": "Co.opmart Nguyễn Kiệm",
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
  "ten": "CTY CỔ PHẦN NOVA SAFE FOODS",
  "diachi": "315 Nam Kỳ Khởi Nghĩa, P.7, Q.7, HCM"
});
db.getCollection("danhmuccongty").insert({
  "_id": ObjectId("58f0801dd89398440b00002b"),
  "ten": "CTY CỔ PHẦN CO-OP NOVA SAFE FOODS",
  "diachi": "căn hộ số 4.02, tầng 5(lầu 4), khối tháp V5 & V6, KCC Sunrise City, Khu South Towers- số 23 Nguyễn Hữu Thọ, P.Tân Hưng, Q.7, Tp.HCM"
});
db.getCollection("danhmuccongty").insert({
  "_id": ObjectId("58fd6e23835e6f186f1ef936"),
  "ten": "CÔNG TY CP ANOVA FARM",
  "diachi": "315 Nam Kỳ Khởi Nghĩa, F7, Q3, TP.HCM"
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
  "ten": "Hợp tác xã Nông nghiệp tổng hợp Anh Đào CO-OP",
  "diachi": "32 C Nguyễn Công Trứ - Phường 2 - Tp Đà Lạt - Lâm Đồng",
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("danhmucnhamay").insert({
  "_id": ObjectId("590009eb835e6ff4043869f9"),
  "ten": "ĐỒNG XANH FARM",
  "diachi": "P.7, Tp. Đà Lạt, Tỉnh Lâm Đồng",
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});

/** danhmucnongtrai records **/
db.getCollection("danhmucnongtrai").insert({
  "_id": ObjectId("58f081fcd89398440b00002c"),
  "ten": "Trại gà đẻ Ba Huân, Bình Dương",
  "diachi": "Bình Dương",
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("danhmucnongtrai").insert({
  "_id": ObjectId("58f0820ad89398440b00002d"),
  "ten": "Hợp tác xã Nông nghiệp tổng hợp Anh Đào CO-OP",
  "diachi": "32 C Nguyễn Công Trứ - Phường 2 - Tp Đà Lạt - Lâm Đồng",
  "id_congty": ObjectId("58f0801dd89398440b00002b")
});
db.getCollection("danhmucnongtrai").insert({
  "_id": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "ten": "Cty CP Anova Farm, Trại chăn nuôi Bảo Huy",
  "diachi": "Ấp 2, Xã Bưng Riềng, Huyện Xuyên Mộc, Tỉnh Bà Rịa – Vũng Tàu",
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("danhmucnongtrai").insert({
  "_id": ObjectId("58fef103835e6f027c3869f9"),
  "ten": "ĐỒNG XANH FARM",
  "diachi": "P.7, Tp. Đà Lạt, Tỉnh Lâm Đồng",
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});

/** donggoi records **/
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

/** donggoirauqua records **/
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
  "date_post": ISODate("2017-05-09T02:37:36.72Z"),
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
  "date_post": ISODate("2017-05-09T02:39:41.88Z"),
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
  "ngaydonggoi": ISODate("2017-05-04T17:00:00.0Z"),
  "hansudung": "02 ngày từ ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:39:52.444Z"),
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
  "id_congty": ObjectId("58f074f8d893983c0b000029")
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
  "_id": ObjectId("58fdd66f835e6f32731ef937"),
  "files_id": ObjectId("58fdd66f835e6f32731ef936"),
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
  "_id": ObjectId("58fdd66f835e6f32731ef936"),
  "filename": "default_logo.png",
  "filetype": "image/png",
  "caption": "default_logo.png",
  "uploadDate": ISODate("2017-04-24T10:41:51.632Z"),
  "length": NumberLong(95302),
  "chunkSize": NumberLong(261120),
  "md5": "173950c1099db9ed97ec7f3ebfff7f02"
});

/** nhamay records **/
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
  "date_post": ISODate("2017-04-26T05:54:40.20Z"),
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
  "date_post": ISODate("2017-04-26T06:51:52.42Z"),
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
  "date_post": ISODate("2017-04-26T07:11:23.60Z"),
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

/** nhamayrauqua records **/
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
  "date_post": ISODate("2017-05-09T02:50:08.11Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  " ngaysoche": ISODate("2017-05-07T17:00:00.0Z")
});
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
  "date_post": ISODate("2017-05-09T02:32:54.66Z"),
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
  "date_post": ISODate("2017-05-11T03:49:39.29Z"),
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
  "date_post": ISODate("2017-05-09T02:33:41.88Z"),
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
  "id_nongtrairauqua": ObjectId("59004fc8835e6fff06386a01"),
  "id_dmnhamay": ObjectId("590009eb835e6ff4043869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "matruyxuatsanpham": "Carot.0001",
  "ngaysoche": ISODate("2017-05-01T17:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-09T02:33:57.560Z"),
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

/** nongtrai records **/
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
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
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
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
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
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
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
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
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
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
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
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
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
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
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
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
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
  "date_post": ISODate("2017-04-26T06:56:17.26Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
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
  "date_post": ISODate("2017-04-26T06:58:57.89Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
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
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
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
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
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
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
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
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
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
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
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
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("590048f0835e6f37083869fe"),
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "VIETGAP",
  "ngaygioxuat": ISODate("2017-05-08T17:00:00.0Z"),
  "madan": "11117",
  "soluong": NumberLong(358),
  "nhamaycungcapthucan": "AnovaFeed",
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "sogiaykiemdichthusong": "1234",
  "nhanvienkiemdich": "Trần Thị Na",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-26T07:14:56.59Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});

/** nongtrairauqua records **/
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
  "date_post": ISODate("2017-05-09T02:52:35.78Z"),
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
  "date_post": ISODate("2017-05-09T02:53:35.39Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("59004fc8835e6fff06386a01"),
  "id_dmnongtrai": ObjectId("58fef103835e6f027c3869f9"),
  "tieuchuan": "VIETGAP",
  "sochungnhantieuchuan": "VietGAP-TT-13-09-68-0096",
  "ngaythuhoach": ISODate("2017-05-13T17:00:00.0Z"),
  "matruyxuatsanpham": "Cachua.0001",
  "soluong": NumberLong(200),
  "soxevanchuyen": "1234",
  "tentaixe": "Nguyễn Văn An",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-05-15T01:28:41.617Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
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
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});

/** sessions records **/
db.getCollection("sessions").insert({
  "_id": ObjectId("5913c5737d24b32fb9a77a7e"),
  "session_id": "5un8qoqpvpniodqr19rr5cr0l4",
  "data": "",
  "timedout_at": NumberLong(1494556196),
  "expired_at": NumberLong(1494586196)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5913deb17d24b32fb9a77af8"),
  "session_id": "a2pl86r3eqmvjc7udono5ck084",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58fd6e23835e6f186f1ef936\";roles|i:31;",
  "timedout_at": NumberLong(1494480442),
  "expired_at": NumberLong(1494510417)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5913df097d24b32fb9a77b12"),
  "session_id": "e1hbc85k7jsjfkl5rh5297nke5",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58fd6e23835e6f186f1ef936\";roles|i:31;",
  "timedout_at": NumberLong(1494495386),
  "expired_at": NumberLong(1494522053)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5913e41a7d24b32fb9a77bdb"),
  "session_id": "5r4kfkm0ekvqinnuilb5i1qfa3",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58fd6e23835e6f186f1ef936\";roles|i:31;",
  "timedout_at": NumberLong(1494482516),
  "expired_at": NumberLong(1494511802)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5913e4aa7d24b32fb9a77bee"),
  "session_id": "frdugvb1022rtbt5cqt0aphke2",
  "data": "",
  "timedout_at": NumberLong(1494481946),
  "expired_at": NumberLong(1494511946)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5913e4aa7d24b32fb9a77bf0"),
  "session_id": "545qojn8j1q6240qdc2lapa625",
  "data": "",
  "timedout_at": NumberLong(1494481946),
  "expired_at": NumberLong(1494511946)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5913e5067d24b32fb9a77bf9"),
  "session_id": "487hair00u2v0iunb14390eie7",
  "data": "",
  "timedout_at": NumberLong(1494482038),
  "expired_at": NumberLong(1494512038)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5913e5077d24b32fb9a77bfb"),
  "session_id": "ifu84hl8r7hqdvd6jmvpuha1c3",
  "data": "",
  "timedout_at": NumberLong(1494482039),
  "expired_at": NumberLong(1494512039)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5913e5457d24b32fb9a77c04"),
  "session_id": "t86u76ob72tvu98a6fu9iqces6",
  "data": "",
  "timedout_at": NumberLong(1494482101),
  "expired_at": NumberLong(1494512101)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5913e5457d24b32fb9a77c06"),
  "session_id": "d2cdk65feabnh6hfj6kdm8v320",
  "data": "",
  "timedout_at": NumberLong(1494482101),
  "expired_at": NumberLong(1494512101)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5913e9b67d24b32fb9a77c21"),
  "session_id": "r5i3eul4o3eu49cetueh2v3hf3",
  "data": "",
  "timedout_at": NumberLong(1494483238),
  "expired_at": NumberLong(1494513238)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5913e9b67d24b32fb9a77c23"),
  "session_id": "vqh4p3f5a2tan51cjp7s4th3k5",
  "data": "",
  "timedout_at": NumberLong(1494483238),
  "expired_at": NumberLong(1494513238)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5913e9b77d24b32fb9a77c27"),
  "session_id": "psmjjcknnc6id99svappv1b835",
  "data": "",
  "timedout_at": NumberLong(1494483239),
  "expired_at": NumberLong(1494513239)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5913e9b77d24b32fb9a77c29"),
  "session_id": "054e12m3saujc1rl79jnrf8fr7",
  "data": "",
  "timedout_at": NumberLong(1494483239),
  "expired_at": NumberLong(1494513239)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5913e9b77d24b32fb9a77c2b"),
  "session_id": "hli77fn1u1g6aefjokkvsf9940",
  "data": "",
  "timedout_at": NumberLong(1494483239),
  "expired_at": NumberLong(1494513239)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5913e9b77d24b32fb9a77c2d"),
  "session_id": "fqrr533d3kge6ek25p4j0a7o04",
  "data": "",
  "timedout_at": NumberLong(1494483239),
  "expired_at": NumberLong(1494513239)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5913f0577d24b32fb9a77c46"),
  "session_id": "tr6ggmua9utc3f4kn4vtrh14l1",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58fd6e23835e6f186f1ef936\";roles|i:31;",
  "timedout_at": NumberLong(1494484956),
  "expired_at": NumberLong(1494514935)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59142d3c7d24b32fb9a77f25"),
  "session_id": "erusdufd483lah1gvbl6rvpbj6",
  "data": "",
  "timedout_at": NumberLong(1494501521),
  "expired_at": NumberLong(1494530524)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5914438a7d24b32fb9a77fe1"),
  "session_id": "9t93ook497mqat70r3gdvn8oc2",
  "data": "",
  "timedout_at": NumberLong(1494506234),
  "expired_at": NumberLong(1494536234)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59156c0d7d24b32fb9a78651"),
  "session_id": "be6ufh59lcfk8f6r8thk2r79j0",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58fd6e23835e6f186f1ef936\";roles|i:31;",
  "timedout_at": NumberLong(1494582811),
  "expired_at": NumberLong(1494612141)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5915953a7d24b32fb9a78dbb"),
  "session_id": "rv0i7ks9hb6omgop9vm8bp0gh3",
  "data": "",
  "timedout_at": NumberLong(1494592682),
  "expired_at": NumberLong(1494622682)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5915c4c97d24b32fb9a78fc5"),
  "session_id": "c0g2ek8ndgna48nsr08jieo975",
  "data": "",
  "timedout_at": NumberLong(1494604857),
  "expired_at": NumberLong(1494634857)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5916d6f87d24b32fb9a79b9e"),
  "session_id": "uutbrnlgauf4lpfmtsmndnrha0",
  "data": "",
  "timedout_at": NumberLong(1494675048),
  "expired_at": NumberLong(1494705048)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("591902f97d24b32fb9a7b35e"),
  "session_id": "cjhn979vgn0crq2tghl70oj4t4",
  "data": "",
  "timedout_at": NumberLong(1494825413),
  "expired_at": NumberLong(1494855410)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59192d907d24b32fb9a7b990"),
  "session_id": "4qhfamrt824h9b28ssgs862sc5",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58fd6e23835e6f186f1ef936\";roles|i:31;",
  "timedout_at": NumberLong(1494829228),
  "expired_at": NumberLong(1494858288)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59194acf7d24b32fb9a7bc10"),
  "session_id": "hh3apg7v69qe3vh4l9tp4u8ne6",
  "data": "",
  "timedout_at": NumberLong(1494835775),
  "expired_at": NumberLong(1494865775)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("591958b57d24b32fb9a7bcf7"),
  "session_id": "1r6jl6sblsholp8eni9kn2bhu4",
  "data": "",
  "timedout_at": NumberLong(1494839333),
  "expired_at": NumberLong(1494869333)
});

/** users records **/
db.getCollection("users").insert({
  "_id": ObjectId("58e3072432341cfc09005d7e"),
  "username": "admin",
  "password": "ec705f9abe736346fc04409dc85c79d8",
  "roles": NumberLong(31),
  "person": "CTY CỔ PHẦN NOVA SAFE FOODS",
  "hinhanh": ObjectId("58fdd66f835e6f32731ef936"),
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
      "in": ISODate("2017-04-20T09:52:08.594Z")
    },
    {
      "out": ISODate("2017-04-20T09:57:38.71Z")
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
      "in": ISODate("2017-04-21T01:28:08.713Z")
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
      "in": ISODate("2017-04-21T04:27:28.53Z")
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
      "in": ISODate("2017-04-21T06:43:08.838Z")
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
      "in": ISODate("2017-04-24T03:12:26.81Z")
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
      "in": ISODate("2017-04-24T08:22:45.99Z")
    },
    {
      "in": ISODate("2017-04-24T08:32:58.931Z")
    },
    {
      "in": ISODate("2017-04-24T09:08:24.487Z")
    },
    {
      "in": ISODate("2017-04-24T09:10:09.36Z")
    },
    {
      "out": ISODate("2017-04-24T10:09:53.642Z")
    },
    {
      "in": ISODate("2017-04-24T10:10:01.922Z")
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
      "in": ISODate("2017-04-25T06:42:32.132Z")
    },
    {
      "in": ISODate("2017-04-25T06:59:00.383Z")
    },
    {
      "in": ISODate("2017-04-25T07:38:32.2Z")
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
      "in": ISODate("2017-04-26T01:37:17.74Z")
    },
    {
      "in": ISODate("2017-04-26T01:57:58.577Z")
    },
    {
      "in": ISODate("2017-04-26T02:54:04.637Z")
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
      "in": ISODate("2017-04-27T07:17:24.94Z")
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
      "in": ISODate("2017-05-01T10:52:04.879Z")
    },
    {
      "in": ISODate("2017-05-03T02:07:39.265Z")
    },
    {
      "in": ISODate("2017-05-03T06:37:10.28Z")
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
      "in": ISODate("2017-05-04T07:42:36.34Z")
    },
    {
      "in": ISODate("2017-05-04T07:56:56.52Z")
    },
    {
      "in": ISODate("2017-05-05T06:14:08.963Z")
    },
    {
      "out": ISODate("2017-05-05T06:14:18.813Z")
    },
    {
      "in": ISODate("2017-05-05T07:04:59.885Z")
    },
    {
      "in": ISODate("2017-05-05T09:26:56.38Z")
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
      "out": ISODate("2017-05-07T02:46:06.51Z")
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
      "in": ISODate("2017-05-09T04:46:26.19Z")
    },
    {
      "in": ISODate("2017-05-10T07:52:35.616Z")
    },
    {
      "in": ISODate("2017-05-11T01:59:28.994Z")
    },
    {
      "in": ISODate("2017-05-11T03:47:22.41Z")
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
      "out": ISODate("2017-05-12T10:58:02.114Z")
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
      "in": ISODate("2017-05-15T02:38:32.227Z")
    },
    {
      "in": ISODate("2017-05-15T04:25:06.158Z")
    },
    {
      "out": ISODate("2017-05-15T06:29:35.80Z")
    }
  ],
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936")
});
db.getCollection("users").insert({
  "_id": ObjectId("58e4aa6a835e6f64038b4567"),
  "username": "retail",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "roles": NumberLong(4),
  "person": "Retail",
  "hinhanh": ObjectId("58f9bf8a835e6fe54f8b4567"),
  "id_congty": ObjectId("58f074f8d893983c0b000029"),
  "logs": [
    {
      "in": ISODate("2017-04-21T08:12:31.76Z")
    },
    {
      "out": ISODate("2017-04-21T08:14:33.298Z")
    },
    {
      "in": ISODate("2017-04-21T08:15:20.979Z")
    },
    {
      "out": ISODate("2017-04-21T09:23:42.733Z")
    }
  ]
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
db.getCollection("users").insert({
  "_id": ObjectId("58fdad51835e6f73711ef936"),
  "username": "test1",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "roles": NumberLong(26),
  "person": "test",
  "hinhanh": "",
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "logs": [
    {
      "in": ISODate("2017-04-24T07:46:52.227Z")
    }
  ]
});
db.getCollection("users").insert({
  "_id": ObjectId("590d9e33835e6fcc6d6c8560"),
  "username": "anovafarm",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "roles": NumberLong(8),
  "person": "Truong Ngoc Bao Tran",
  "hinhanh": "",
  "id_congty": ObjectId("58fd6e23835e6f186f1ef936"),
  "logs": [
    {
      "in": ISODate("2017-05-06T09:58:30.675Z")
    },
    {
      "out": ISODate("2017-05-06T10:05:12.365Z")
    }
  ]
});

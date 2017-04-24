
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

/** donggoi records **/
db.getCollection("donggoi").insert({
  "_id": ObjectId("58f71edad89398d40d000029"),
  "id_nhamay": ObjectId("58f71da4d89398f408000029"),
  "tensanpham": "Nạc đùi",
  "quicachdonggoi": "500g/hộp",
  "solo": "123876",
  "tieuchuan": "HACCP",
  "sochungnhantieuchuan": "1239867",
  "ngaygiogietmo": ISODate("2017-04-18T17:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-04-19T17:00:00.0Z"),
  "hansudung": "3 ngày sau đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-19T08:24:58.0Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("donggoi").insert({
  "_id": ObjectId("58f9788a835e6fb14c8b4573"),
  "id_nhamay": ObjectId("58f71da4d89398f408000029"),
  "tensanpham": "Sườn non",
  "quicachdonggoi": "500g/gói",
  "solo": "CL5001",
  "tieuchuan": "HACCP",
  "sochungnhantieuchuan": "CNTC001",
  "ngaygiogietmo": ISODate("2017-04-18T17:00:00.0Z"),
  "ngaygiodonggoi": ISODate("2017-04-19T17:00:00.0Z"),
  "hansudung": "3 ngày sau ngày đóng gói",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-21T03:12:10.734Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});

/** donggoirauqua records **/
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("58fdc4f7835e6fea701ef94c"),
  "tensanpham": "Bí xanh",
  "quicachdonggoi": "1kg/gói",
  "solo": "000189",
  "id_nhamayrauqua": ObjectId("58fdc407835e6fd0711ef93e"),
  "id_dmnhamay": ObjectId("58fdc6e7835e6f71711ef93a"),
  "tieuchuan": "HACCP",
  "sochungnhantieuchuan": "0003987",
  "ngaydonggoi": ISODate("2017-04-23T17:00:00.0Z"),
  "hansudung": "27/04/2017",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-24T10:21:18.43Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("donggoirauqua").insert({
  "_id": ObjectId("58fdc5fb835e6f71711ef939"),
  "tensanpham": "Cải xanh",
  "quicachdonggoi": "1kg/gói",
  "solo": "00017887",
  "id_nhamayrauqua": ObjectId("58fdc407835e6fd0711ef93e"),
  "id_dmnhamay": ObjectId("58fdc6e7835e6f71711ef93a"),
  "tieuchuan": "HACCP",
  "sochungnhantieuchuan": "00069876",
  "ngaydonggoi": ISODate("2017-04-23T17:00:00.0Z"),
  "hansudung": "27/04/2017",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-24T10:21:28.707Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
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
  "solo": "100",
  "sogiaykiemdichthusong": "GKD0001",
  "giaychungnhan": "GCN001",
  "nhanvienkiemsoat": "NGUYÊN VĂN ANH",
  "ngaygiogietmo": ISODate("2017-04-18T17:00:00.0Z"),
  "id_nongtrai": ObjectId("58fd72ad835e6f0d6f1ef936"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-19T08:19:48.0Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("nhamay").insert({
  "_id": ObjectId("58fd7300835e6f756f1ef937"),
  "id_dmnhamay": ObjectId("58f770687247ae140f00002b"),
  "tieuchuan": "HACCP",
  "solo": "12345",
  "sogiaykiemdichthusong": "GKD5678",
  "giaychungnhan": "CN9876",
  "nhanvienkiemsoat": "Lại Văn Công",
  "ngaygiogietmo": ISODate("2017-04-19T03:36:00.0Z"),
  "id_nongtrai": ObjectId("58fd72ad835e6f0d6f1ef936"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-24T03:37:36.735Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});

/** nhamayrauqua records **/
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("58fdc407835e6fd0711ef93e"),
  "id_nongtrairauqua": ObjectId("58fdc3d1835e6f566f1ef938"),
  "id_dmnhamay": ObjectId("58fdc6e7835e6f71711ef93a"),
  "tieuchuan": "GLOBAL G.A.P",
  "sochungnhantieuchuan": "GLOBAL GAP-0002",
  "matruyxuatsanpham": "BiXanh.0001",
  "ngaysoche": ISODate("2017-04-23T17:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-24T10:02:43.803Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58f074f8d893983c0b000029"),
  " ngaysoche": ISODate("2017-04-23T17:00:00.0Z")
});
db.getCollection("nhamayrauqua").insert({
  "_id": ObjectId("58fdc5a0835e6f0f721ef936"),
  "id_nongtrairauqua": ObjectId("58fdc3d1835e6f566f1ef938"),
  "id_dmnhamay": ObjectId("58fdc6e7835e6f71711ef93a"),
  "tieuchuan": "GLOBAL G.A.P",
  "sochungnhantieuchuan": "GLOBAL GAP-0006",
  "matruyxuatsanpham": "CaiXanh.0001",
  "ngaysoche": ISODate("2017-04-23T17:00:00.0Z"),
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-24T10:02:53.409Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58f074f8d893983c0b000029"),
  " ngaysoche": ISODate("2017-04-23T17:00:00.0Z")
});

/** nongtrai records **/
db.getCollection("nongtrai").insert({
  "_id": ObjectId("58f9aae4835e6fc84f8b4567"),
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "Global G.A.P",
  "ngaygioxuat": ISODate("2017-04-21T06:45:00.0Z"),
  "madan": "13776",
  "soluong": NumberLong(100),
  "nhamaycungcapthucan": "CTY CỔ PHẦN ANOVA FEED",
  "soxevanchuyen": "RR3451",
  "tentaixe": "Huỳnh Văn Tiên",
  "sogiaykiemdichthusong": "GKD8757",
  "nhanvienkiemdich": "Cao Thị Ánh",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-21T06:47:00.154Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("nongtrai").insert({
  "_id": ObjectId("58fd72ad835e6f0d6f1ef936"),
  "id_dmnongtrai": ObjectId("58fd6e9e835e6fdc6e1ef937"),
  "tieuchuan": "GLOBAL G.A.P",
  "ngaygioxuat": ISODate("2017-04-24T03:34:00.0Z"),
  "madan": "13778",
  "soluong": NumberLong(20),
  "nhamaycungcapthucan": "CN ĐỒNG NAI ANOVA FEED",
  "soxevanchuyen": "09887777",
  "tentaixe": "Huỳnh Văn Tiên",
  "sogiaykiemdichthusong": "GKD9876",
  "nhanvienkiemdich": "Lại Văn A",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-24T03:36:13.132Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});

/** nongtrairauqua records **/
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("58fdc3d1835e6f566f1ef938"),
  "id_dmnongtrai": ObjectId("58f0820ad89398440b00002d"),
  "tieuchuan": "Viet G.A.P",
  "sochungnhantieuchuan": "00017895",
  "ngaythuhoach": ISODate("2017-04-23T17:00:00.0Z"),
  "matruyxuatsanpham": "BiXanh.0001",
  "soluong": NumberLong(100),
  "soxevanchuyen": "49M-1234",
  "tentaixe": "Nguyễn văn Bình",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-24T10:23:04.750Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});
db.getCollection("nongtrairauqua").insert({
  "_id": ObjectId("58fdc575835e6fea701ef94d"),
  "id_dmnongtrai": ObjectId("58f0820ad89398440b00002d"),
  "tieuchuan": "Viet G.A.P",
  "sochungnhantieuchuan": "00057845",
  "ngaythuhoach": ISODate("2017-04-23T17:00:00.0Z"),
  "matruyxuatsanpham": "CaiXanh.0001",
  "soluong": NumberLong(200),
  "soxevanchuyen": "49T-4567",
  "tentaixe": "Nguyễn văn Bình",
  "hienthi": NumberLong(1),
  "date_post": ISODate("2017-04-24T10:22:16.124Z"),
  "id_user": ObjectId("58e3072432341cfc09005d7e"),
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
  "id_congty": ObjectId("58f074f8d893983c0b000029")
});

/** sessions records **/
db.getCollection("sessions").insert({
  "_id": ObjectId("58f8578b7d24b32fb9a6fcf5"),
  "session_id": "20q02jush88s3r8i32n2ljdd70",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58f074f8d893983c0b000029\";roles|i:31;",
  "timedout_at": NumberLong(1493026432),
  "expired_at": NumberLong(1493055783)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58f925d67d24b32fb9a70209"),
  "session_id": "n3vsgd5mv6kmuv62b679fat0r7",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58f0801dd89398440b00002b\";roles|i:31;",
  "timedout_at": NumberLong(1492729257),
  "expired_at": NumberLong(1492759158)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58f9600e7d24b32fb9a70247"),
  "session_id": "6s7n6udia9tdbjesrfnqk89626",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58f0801dd89398440b00002b\";roles|i:31;",
  "timedout_at": NumberLong(1492755579),
  "expired_at": NumberLong(1492774062)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58f96b847d24b32fb9a70507"),
  "session_id": "02uok9k00ei8cf50sv842mpm61",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58f0801dd89398440b00002b\";roles|i:31;",
  "timedout_at": NumberLong(1492755364),
  "expired_at": NumberLong(1492784846)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58f96e3d7d24b32fb9a70586"),
  "session_id": "pn7iejaephqfk3dlipem12ggl2",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58f0801dd89398440b00002b\";roles|i:31;",
  "timedout_at": NumberLong(1492747764),
  "expired_at": NumberLong(1492777693)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58f974ac7d24b32fb9a705f9"),
  "session_id": "5p60qge1chh85h16oc460bf4k3",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58f074f8d893983c0b000029\";roles|i:31;",
  "timedout_at": NumberLong(1492763651),
  "expired_at": NumberLong(1492791403)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58f974c27d24b32fb9a70604"),
  "session_id": "75pi3otbaln5p6otpt792i9i12",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58f0801dd89398440b00002b\";roles|i:31;",
  "timedout_at": NumberLong(1492750999),
  "expired_at": NumberLong(1492779362)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58f97e477d24b32fb9a7087f"),
  "session_id": "o179b23ner72futoifn7bc6ku0",
  "data": "",
  "timedout_at": NumberLong(1492751799),
  "expired_at": NumberLong(1492781799)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58f97e477d24b32fb9a70881"),
  "session_id": "3aev772mk1oj6tsv4ine79frf4",
  "data": "",
  "timedout_at": NumberLong(1492751799),
  "expired_at": NumberLong(1492781799)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58f97ed67d24b32fb9a70888"),
  "session_id": "9ndhebjigc0ijqqhgl7gnn76l4",
  "data": "",
  "timedout_at": NumberLong(1492751942),
  "expired_at": NumberLong(1492781942)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58f9817e7d24b32fb9a708ab"),
  "session_id": "t6947egb7uoinrkmpaqojtmvg7",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58f0801dd89398440b00002b\";roles|i:31;",
  "timedout_at": NumberLong(1492752849),
  "expired_at": NumberLong(1492782622)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58f9840d7d24b32fb9a708e8"),
  "session_id": "5gbgjvtbf9qsnr9k6gnhg418g3",
  "data": "",
  "timedout_at": NumberLong(1492753302),
  "expired_at": NumberLong(1492783277)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58f988107d24b32fb9a70967"),
  "session_id": "0nq5bb2v7ef6rvmpu9bhcc9qa0",
  "data": "",
  "timedout_at": NumberLong(1492754304),
  "expired_at": NumberLong(1492784304)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58f98b2b7d24b32fb9a709df"),
  "session_id": "k41po175obotbkit57ate0sbs7",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58f074f8d893983c0b000029\";roles|i:31;",
  "timedout_at": NumberLong(1492755231),
  "expired_at": NumberLong(1492785099)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58f9a5d47d24b32fb9a70a5c"),
  "session_id": "9rgb4j8eb6o8lseg4j3iom7tv2",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58f074f8d893983c0b000029\";roles|i:31;",
  "timedout_at": NumberLong(1492763823),
  "expired_at": NumberLong(1492791924)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58f9aa4f7d24b32fb9a70b82"),
  "session_id": "n2ro9g1sqd5qo3tuonj6u68ho6",
  "data": "",
  "timedout_at": NumberLong(1492763071),
  "expired_at": NumberLong(1492793071)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58f9aa4f7d24b32fb9a70b84"),
  "session_id": "s9b5m0b1gq2j3uiqqt6madp9r5",
  "data": "",
  "timedout_at": NumberLong(1492763071),
  "expired_at": NumberLong(1492793071)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58f9aadd7d24b32fb9a70bc3"),
  "session_id": "sbai301fp7033kmeprak6l1rq2",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58f074f8d893983c0b000029\";roles|i:31;",
  "timedout_at": NumberLong(1492763482),
  "expired_at": NumberLong(1492793213)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58f9b1727d24b32fb9a70d6b"),
  "session_id": "862tn3a0p1gf136j6uskiu1hs7",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58f074f8d893983c0b000029\";roles|i:31;",
  "timedout_at": NumberLong(1492776561),
  "expired_at": NumberLong(1492794898)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58f9cf9e7d24b32fb9a710c7"),
  "session_id": "ue9e6ae9dqje6f3rpi77ai66k1",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58f074f8d893983c0b000029\";roles|i:31;",
  "timedout_at": NumberLong(1492772643),
  "expired_at": NumberLong(1492802622)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58f9d1e87d24b32fb9a710ff"),
  "session_id": "eu20jh9gj0movdvabc45mdofi6",
  "data": "",
  "timedout_at": NumberLong(1492773208),
  "expired_at": NumberLong(1492803208)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58fa1e0a7d24b32fb9a71187"),
  "session_id": "t10n2spp49flir4nkv9dbejph5",
  "data": "",
  "timedout_at": NumberLong(1492792698),
  "expired_at": NumberLong(1492822698)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58facb437d24b32fb9a7118e"),
  "session_id": "sgnfr9hfecacss58nmpf80mqb0",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58f074f8d893983c0b000029\";roles|i:31;",
  "timedout_at": NumberLong(1492837080),
  "expired_at": NumberLong(1492867043)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58fad2f87d24b32fb9a711ed"),
  "session_id": "b2gsqcndfc4mef6fjrtfukq8u0",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58f074f8d893983c0b000029\";roles|i:31;",
  "timedout_at": NumberLong(1492839245),
  "expired_at": NumberLong(1492869016)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58fb18eb7d24b32fb9a71301"),
  "session_id": "k371mqdmp9nt904q6vadebf4v7",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58f074f8d893983c0b000029\";roles|i:31;",
  "timedout_at": NumberLong(1492858516),
  "expired_at": NumberLong(1492886923)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58fbf2db7d24b32fb9a71566"),
  "session_id": "n3kucm84m5c6f32fp46h6so617",
  "data": "",
  "timedout_at": NumberLong(1492935399),
  "expired_at": NumberLong(1492965391)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58fc15c57d24b32fb9a716eb"),
  "session_id": "qlhva6ruqh3kd1n5kdek73h7u1",
  "data": "",
  "timedout_at": NumberLong(1492921653),
  "expired_at": NumberLong(1492951653)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58fc19967d24b32fb9a71725"),
  "session_id": "msvlk5g7f2drt57miomirbdgl5",
  "data": "",
  "timedout_at": NumberLong(1492922630),
  "expired_at": NumberLong(1492952630)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58fc1dc97d24b32fb9a7173e"),
  "session_id": "7nevq9jp6nhs6l39j1jlsin156",
  "data": "",
  "timedout_at": NumberLong(1492923705),
  "expired_at": NumberLong(1492953705)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58fc74f87d24b32fb9a717c0"),
  "session_id": "pdrk2vpea3fif4b2o10dp3d420",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58f074f8d893983c0b000029\";roles|i:31;",
  "timedout_at": NumberLong(1492946112),
  "expired_at": NumberLong(1492976024)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58fd6b037d24b32fb9a719ef"),
  "session_id": "kq78h3qg510dbpdhgree6m2bi6",
  "data": "",
  "timedout_at": NumberLong(1493009011),
  "expired_at": NumberLong(1493039011)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58fd6d0e7d24b32fb9a71a0b"),
  "session_id": "5ipvjjrjmksepmqlu5vi6kc6l4",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58f074f8d893983c0b000029\";roles|i:31;",
  "timedout_at": NumberLong(1493031342),
  "expired_at": NumberLong(1493060858)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58fdad5f7d24b32fb9a71c72"),
  "session_id": "0s6tpj8p5fslipa2fbkbuner00",
  "data": "user_id|s:24:\"58fdad51835e6f73711ef936\";id_congty|s:24:\"58fd6e23835e6f186f1ef936\";roles|i:26;",
  "timedout_at": NumberLong(1493026329),
  "expired_at": NumberLong(1493055999)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58fdaf4f7d24b32fb9a71d08"),
  "session_id": "p3qabeadv2v3k8ha92qng89jf7",
  "data": "",
  "timedout_at": NumberLong(1493026495),
  "expired_at": NumberLong(1493056495)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58fdb8317d24b32fb9a71d2c"),
  "session_id": "ijd3hbmtiods93ekg5louhgrd2",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58f074f8d893983c0b000029\";roles|i:31;",
  "timedout_at": NumberLong(1493030230),
  "expired_at": NumberLong(1493058769)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58fdc0527d24b32fb9a71e35"),
  "session_id": "i8nlr2pojts82gkh03q0267l23",
  "data": "",
  "timedout_at": NumberLong(1493030850),
  "expired_at": NumberLong(1493060850)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58fdc0dc7d24b32fb9a71ea8"),
  "session_id": "32c68ogjcgute1or7ui5bth5k2",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58f074f8d893983c0b000029\";roles|i:31;",
  "timedout_at": NumberLong(1493032344),
  "expired_at": NumberLong(1493060988)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58fdd2f77d24b32fb9a723c8"),
  "session_id": "fi3s77m404smt45gjf7djdr720",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58f074f8d893983c0b000029\";roles|i:31;",
  "timedout_at": NumberLong(1493036516),
  "expired_at": NumberLong(1493065623)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58fdde707d24b32fb9a7254b"),
  "session_id": "532b5297kipm8irgr895llqo36",
  "data": "",
  "timedout_at": NumberLong(1493038560),
  "expired_at": NumberLong(1493068560)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58fdf4447d24b32fb9a72572"),
  "session_id": "sj72s22p68kch312hjsb0bbtb5",
  "data": "user_id|s:24:\"58e3072432341cfc09005d7e\";id_congty|s:24:\"58fd6e23835e6f186f1ef936\";roles|i:31;",
  "timedout_at": NumberLong(1493044156),
  "expired_at": NumberLong(1493074148)
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

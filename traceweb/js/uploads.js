function uploads(){
	$(".dinhkem_filecongvanxinphep").change(function() {
	  var formData = new FormData($("#themdoanraform")[0]);
	   $.ajax({
        url: "post.upload.congvanxinphep.php", type: "POST",
        data: formData, async: false,
        success: function(datas) {
            if(datas=='Failed'){
                $.Notify({type: 'alert', caption: 'Thông báo', content: "Không thể Thêm học tập"});
            } else {
            	$(".info").remove();
                $("#files_congvanxinphep").prepend(datas); delete_file();
            }
      	},
      	cache: false, contentType: false, processData: false
        }).fail(function() {
            $.Notify({type: 'alert', caption: 'Thông báo', content: "Không thể Upload tập tin"});
        });
	});
}

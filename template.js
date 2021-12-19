$(function () {
  $("#vki_hesapla").on("click", function () {
    let kilo = Number($("#kilo").val());
    let boy = Number($("#boy").val()) / 100;

    let vki = Math.round(Number(kilo / Math.pow(boy, 2)));
    $("#sonuc").html("ortalama: <b>" + vki + "</b>");

    //debugger;
    console.log(Number(kilo / Math.pow(boy, 2)));
    console.log("kilo: " + kilo);
    console.log("boy: " + boy);
    console.log(vki);
    if (vki < 18) {
      $("#sonuc2").html("<i>çok zayıfsınız</i>");
    } else if (18 <= vki && vki < 23) {
      $("#sonuc2").html("<i>orta kilo</i>");
    } else if (23 <= vki && vki <= 35) {
      $("#sonuc2").html("<i>fazla kilo</i>");
    } else {
      $("#sonuc2").html("<i>obezite +++ </i>");
    }
  });
});

// dikkat:rules:virgül
$(function () {
  $("#basic-form").validate({
    errorClass: "error fail-alert",
    validClass: "valid success-alert",
    rules: {
      //rules start
      name: {
        required: true,
        minlength: 3,
      },
      password: {
        required: true,
        number: true,
        min: 8,
      },
      email: {
        required: true,
        email: true,
      },
    }, //rules ends
    messages: {
      name: {
        minlength: "Minumum 3 karakter girmelisiniz",
        required: "Boş geçemezsiniz",
      },
      password: {
        minlength: "Minumum 8 karakter girmelisiniz",
        required: "Boş geçemezsiniz",
        number: " sayı giriniz",
      },
      email: {
        required: "Boş geçemezsiniz",
        email: " uygun formatta email yazınız örneğin deneme@xyz.com",
      },
    },
  });
});

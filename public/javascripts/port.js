$(function() {
    $('#contactName').focus(function() {
        if ($('#contactNameLabel').hasClass("inputed")){
            ;
            //not reaction
        } else {
            $('#contactNameLabel').addClass("focused");
        }
    });
    $('#contactMail').focus(function() {
        if ($('#contactMailLabel').hasClass("inputed")) {
            ;
        } else {
            $('#contactMailLabel').addClass("focused");
        }
    });
    $('#contactMessage').focus(function() {
        if ($('#contactMessageLabel').hasClass('inputed')) {
            ;
        } else {
            $('#contactMessageLabel').addClass("focused");
        }
    });

    $('#contactName').blur(function() {
        $('#contactNameLabel').removeClass("focused");
    });
    $('#contactMail').blur(function() {
        $('#contactMailLabel').removeClass("focused");
    });
    $('#contactMessage').blur(function() {
            $('#contactMessageLabel').removeClass("focused");
    });

    $('#contactName').change(function() {
        $('#contactNameLabel').addClass("inputed");
    });
    $('#contactMail').change(function() {
        $('#contactMailLabel').addClass("inputed");
    });
    $('#contactMessage').change(function() {
            $('#contactMessageLabel').addClass("inputed");
    });
});

$(function() {
    $('#contactSubmit').click(function() {
        if (contactForm.contactName.value == "") {
            alert("お名前のご入力をお願いいたします。");
            return false;
        } else if (contactForm.contactMail.value == "") {
            alert("ご連絡先のご入力をお願いいたします。");
            return false;
        } else if (contactForm.contactMessage.value == "") {
            alert("お問い合わせ内容をメッセージ覧にご入力をお願いいたします。");
            return false;
        } else if (window.confirm("送信してよろしいですか？")) {
            window.alert("送信が完了いたしました。")
            return true;
        } else {
            window.alert("送信をキャンセルいたしました。")
            return false;
        }
    });
});
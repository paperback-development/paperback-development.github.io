$(document).ready(function () {
    window.onbeforeunload = () => {
        for (const form of document.getElementsByTagName('form')) {
            form.reset();
        }
    }
    $("#clientName2").val("")
    $("#clientEmail2").val("")
    $("#clientMessage2").val("")
    $('.main').attr({
        "data-aos": "zoom-in",
        "data-aos-duration": "2000"
    });
    setTimeout(() => {
        AOS.init();
    }, 120);

    $("#closeBtn").click(() => {
        $("#clientName").val("")
        $("#clientEmail").val("")
        $("#clientMessage").val("")
    })

    $("#submitBtnMain").click(() => {
        $("#mainForm").submit()

    })
});


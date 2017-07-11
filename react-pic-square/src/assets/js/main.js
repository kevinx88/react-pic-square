$(document).ready(() => {
    console.log('script is loaded!');

    $(function() {
        $("#btnSave").click(function() {
            html2canvas($("#picSquare"), {
                onrendered: function(canvas) {
                    document.body.appendChild(canvas);

                    canvas.toBlob(function(blob) {
                        console.log(blob);
                        saveAs(blob, "Dashboard.png");
                    });
                }
            });
        });
    });

});

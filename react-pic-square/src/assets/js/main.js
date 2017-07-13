$(document).ready(() => {
    console.log('script is loaded!');

    $(function() {
      Dropzone.options = {
        maxFilesize: 5,
        acceptedFiles: ".png,.jpg,.gif,.bmp,.jpeg",
        init: function() {
          // config
          this.options.dictRemoveFile = "Delete";
          //New file added
          this.on("addedfile", function(file) {
            console.log("new file added ", file);
          });
          // Send file starts
          this.on("sending", function(file) {
            console.log("upload started", file);
            $(".meter").show();
          });

          // File upload Progress
          this.on("totaluploadprogress", function(progress) {
            console.log("progress ", progress);
            $(".roller").width(progress + "%");
          });

          this.on("queuecomplete", function(progress) {
            $(".meter").delay(999).slideUp(999);
          });

          // On removing file
          this.on("removedfile", function(file) {
            console.log(file);
          });
        }
      };
    });

    $(function() {
        $("#btnSave").click(function() {
            html2canvas($(".square-container"), {
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

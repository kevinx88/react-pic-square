$(document).ready(() => {
    console.log('script is loaded!');

    $(function() {
      Dropzone.options.myDropzone = {
        maxFilesize: 5,
        acceptedFiles: ".png,.jpg,.gif,.bmp,.jpeg",
        init: function() {
          // config
          this.options.dictRemoveFile = "Delete";
          //New file added
          this.on("addedfile", function(file) {
            console.log("new file added", file);
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
          myDropzone.on("addedfile", function(file) {
              file.previewElement.addEventListener("click", function() {
                  myDropzone.removeFile(file);
              });
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
                        // console.log(blob);
                        saveAs(blob, "saved_square.png");

                        var canvasStore = document.querySelector("#canvas-store");
                        var canvasEl = document.querySelector("canvas");
                        canvasStore.appendChild(canvasEl);

                        var canvas = document.querySelector("canvas");
                        var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

                        window.location.href = image;

                        // window.location = canvas.toDataURL("image/png");
                        // document.write('<img src="'+img+'" />');

                    });
                }
            });
        });
    });

    $(function() {
      var input = document.querySelector("#canvas-store");
      var formdata = false;
      if (window.FormData) {
        formdata = new FormData();
      }
      input.addEventListener("change", function(evt) {

        var i = 0,
          len = this.files.length,
          img,
          reader,
          file;

        for (; i < len; i++) {
          file = this.files[i];

          if (!!file.type.match(/image.*/)) {
            if (window.FileReader) {
              reader = new FileReader();
              reader.onloadend = function(e) {
                //showUploadedItem(e.target.result, file.fileName);
              };
              reader.readAsDataURL(file);
            }

            if (formdata) {
              formdata.append("#canvas-store", file);
            }
            $.ajax({
              url: "upload.php",
              type: "POST",
              data: formdata,
              processData: false,
              contentType: false,
              success: function(res) {
                alert('success');
              }
            });
          }
        }
      });
  });

});

$('#zonaDrop').on({
    'dragover dragenter': function(e) {
        e.preventDefault();
        e.stopPropagation();
    },
    'drop': function(e) {
        var dataTransfer =  e.originalEvent.dataTransfer;
        if( dataTransfer && dataTransfer.files.length) {
            e.preventDefault();
            e.stopPropagation();
            $.each( dataTransfer.files, function(i, file) {
              var reader = new FileReader();
              reader.onload = function(event){
                var img = file.type.match('image.*') ? "<img  class='img' src='" + event.target.result + "' /> " : "";
                 $('#zonaDrop').append(img);
              };
              reader.readAsDataURL(file);
            });
        }
    }
});

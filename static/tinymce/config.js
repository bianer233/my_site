tinymce.init({
            selector: "textarea",
            // theme : "advanced",
            //width: 800,
            height: 300,
            forced_root_block: false,
            //language:'zh_CN',
            plugins: [
                // "syntaxhl", 
                "advlist autolink lists link image charmap print preview anchor sh4tinymce",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime table contextmenu paste"
                // "syntaxhl"
            ],
            toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter" +
            " alignright alignjustify | bullist numlist outdent indent | preview link sh4tinymce image "
        });

           
           
// tinyMCE.init({ 
//     theme : "advanced", 
//     plugins : "syntaxhl", 
//     theme_advanced_buttons1 : "bold,italic,underline,undo,redo,link,unlink,image,forecolor,styleselect,removeformat,cleanup,code, syntaxhl",
//     theme_advanced_buttons2 : "", 
//     theme_advanced_buttons3 : "", 
//     remove_linebreaks : false, 
//     extended_valid_elements : "textarea[cols|rows|disabled|name|readonly|class]" 
// });


$(document).ready(function(){
    
    $(document).on('click', 'input[id=send-btn]', function(){
        
        //create an object
        var jsonObject = {};
        
        
        //add data to object
        jsonObject["id"] = 1;
        jsonObject["type"] = $('#type').val();
        jsonObject["question"] = $('#qText').val();
        
        jsonObject['options'] = [];
        var options = document.getElementsByClassName('optText');
        for (var i = 0; i < options.length; i += 1){
            var option = options[i];
            jsonObject['options'].push("option" + i + ": " + option.value);
        }
        var radioBoxes = document.getElementsByName('right');
        for (var i = 0; i < radioBoxes.length; i += 1){
            if(radioBoxes[i].checked){
                jsonObject['key'] = $(radioBoxes[i]).prev().val();
            }
        }
        
        jsonObject['rate'] = parseInt($('#rate').val());
        
        //alert(jsonObject.key);
        
        
        //save object to file - temporary measure, will be replaced by AJAX
        localStorage.setItem("new_test.json", jsonObject)
    });
    
    
});
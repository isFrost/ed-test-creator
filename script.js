$(document).ready(function(){
    $('#type').on('change', function(){
        var x = $('#type').val();
        switch($('#type').val()){
            case 'single': loadSingle();
                break;
            case 'multiple': loadMultiple();
                break;
            case 'match': loadMatch();
                break;
            default:
                break;
        }
    
    });
});

//loads html for creating single choice test
function loadSingle(){
    $('#test').empty();
    document.getElementById('test').innerHTML += "<div id='question'><p><input id='qText' type='text' value='Enter question here.'>  <input id='rate' type='text' value='Enter rate here.'></p><hr><div><div id ='options'></div>";     
    addSingleOption();
    document.getElementById('test').innerHTML += "<input type='submit' value='Add Option' onclick='addSingleOption()'>";
    document.getElementById('test').innerHTML += "<hr><input type='submit' value='Ready' id='send-btn'>";
}
//function adds new option
function addSingleOption(){
    var newOption = "<div class='option'><p><input class='optText' type='text' value='Enter option here'> Right? <input name='right' type='radio'><button onclick='removeOption($(this))'>Delete</button></p></div>";
    //document.getElementById('options').appendChild(newOption);
    $('#options').append(newOption);
}

//function removes option
function removeOption(x){
    x.parent().empty();
}

//loadss html for creating multiple choice test
function loadMultiple(){
    $('#test').empty();
    //TODO
}

//loads html for creating match test
function loadMatch(){
    $('#test').empty();
    //TODO
}

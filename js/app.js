function update_lib(e){$("#library").empty();if(e!=-1)mt_lib.splice(e,1);content=$.map(mt_lib,function(e,t){return"<tr><td><h4>"+e.w+"</h4></td><td><span style='padding:8px' class='glyphicon glyphicon-arrow-right'/></td><td><h4>"+e.r+"</h4></td><td><h4 align='right'><button class='btn btn-warning' onclick=update_lib("+t+")><a>Remove</a></button></h4></td></tr>"});$("#library").append(content.join(""));$("#library").append("<tr><td><input type='text' class='form-control word-input' placeholder='Add a word'></input></td><td><span style='padding:8px' class='glyphicon glyphicon-arrow-right'/></td><td><input type='text' class='form-control replace-input' placeholder='Add its translation'></input></td><td><h4 align='right'><button class='btn btn-large btn-info add' onclick='add_word($(this))'><a>Add</a></button></h4></td></tr>")}function add_word(e){var t=e.parent().parent().parent().find("input.word-input").val();var n=e.parent().parent().parent().find("input.replace-input").val();if(!t.length<1&&!n.length<1&&t!=n){mt_lib.push({w:t,r:n});e.parent().find("input.word-input").val("");e.parent().find("input.replace-input").val("");update_lib(-1)}}$(document).ready(function(){update_lib(-1)})
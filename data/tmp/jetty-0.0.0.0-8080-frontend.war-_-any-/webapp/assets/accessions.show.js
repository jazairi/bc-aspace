$(function(){var a=function(){$(".transfer-form .btn-cancel").on("click",function(){$(".transfer-action").trigger("click")});$(".transfer-action").on("click",function(b){b.preventDefault();b.stopImmediatePropagation();if($(this).attr("disabled")){return}if($(".transfer-form")[0].style.display==="block"){$(".transfer-form").css("display","")}else{$(".transfer-form").css("display","block")}});$(".transfer-form").on("click",function(b){b.stopPropagation()});$(".transfer-form .linker-wrapper .dropdown-toggle").on("click",function(b){b.stopPropagation();$(this).parent().toggleClass("open")});$(".transfer-form .transfer-button").on("click",function(c){var b=$(".transfer-form").serializeObject();if(!b["transfer[ref]"]){$(".missing-ref-message",".transfer-form").show();c.preventDefault();c.stopImmediatePropagation();return false}else{$(".missing-ref-message",".transfer-form").hide();$(this).data("form-data",{ref:b["transfer[ref]"]})}})};if($(".transfer-form").length>0){a()}else{$(document).bind("loadedrecordform.aspace",a)}});$(function(){var a=function(){$(".add-event-form .btn-close").on("click",function(b){b.stopImmediatePropagation();b.preventDefault();$(".add-event-action").trigger("click")});$(".add-event-action").on("click",function(b){b.preventDefault();b.stopImmediatePropagation();if($(this).attr("disabled")){return}if($(".add-event-form")[0].style.display==="block"){$(".add-event-form").css("display","")}else{$(".add-event-form").css("display","block")}});$(".add-event-form").on("click",function(b){b.stopPropagation()});$(".add-event-form .add-event-button").on("click",function(c){c.stopPropagation();c.preventDefault();var b=AS.quickTemplate(decodeURIComponent($("#add-event-dropdown").data("add-event-url")),{event_type:$("#add_event_event_type").val()});location.href=b})};if($(".add-event-form").length>0){a()}else{$(document).bind("loadedrecordform.aspace",a)}});$(function(){$(document).triggerHandler("loadedrecordform.aspace",[$("#form_accession")])});
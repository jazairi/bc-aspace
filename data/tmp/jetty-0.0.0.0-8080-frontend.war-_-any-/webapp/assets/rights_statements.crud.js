$(function(){var a=function(b){$("[name$='[rights_type]']",b).change(function(h){var g=$(this).val();var e={};if($(".rights-type-subform",b).length){e=$(".rights-type-subform",b).serializeObject();$(".rights-type-subform",b).remove()}if(g===""){$(this).parents(".form-group:first").after(AS.renderTemplate("template_rights_type_nil"));return}var f=$(this).parents("[data-index]:first").data("index");var d={path:AS.quickTemplate($(this).parents("[data-name-path]:first").data("name-path"),{index:f}),id_path:AS.quickTemplate($(this).parents("[data-id-path]:first").data("id-path"),{index:f}),index:f};var c=$(AS.renderTemplate("template_rights_type_"+g,d));$(this).parents(".form-group:first").after(c);c.setValuesFromObject(e);$(document).triggerHandler("subrecordcreated.aspace",["rights_type",c])})};$(document).bind("subrecordcreated.aspace",function(d,b,c){if(b==="rights_statement"){a($(c))}})});
/* Copyright (c) 2014, Siemens Corporate Technology and Arizona Geological Survey */
/* Copyright (c) 2014, Siemens Corporate Technology and Arizona Geological Survey */
/* Copyright (c) 2014, Siemens Corporate Technology and Arizona Geological Survey */
var ngds=ngds||(ngds={});(function subscribe_notifications_received(){ngds.subscribe("Notifications.received",function(a,c){var b=ngds.notifications.handlers.resource_form_validation_error;b(c)})})();ngds.notifications={};$.ajax({url:"/scripts/notifications/error_dialog.tmf",success:function(a){ngds.error_message_template=a}});ngds.notifications.handlers={resource_form_validation_error:function(a){var b=Mustache.render(ngds.error_message_template,a);$(document).append(b);$(b).dialog({width:600,height:300})}};

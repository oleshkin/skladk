$(document).ready(function () {

    $('#start_form_filling_btn').click(function() {
        $('#form').fadeIn('slow');
        $.ajax({
            url: 'php/get_new_product_id.php',
            data: 'post',
            dataType: 'text',
            success: function(data) {
                $('#product_id').val(data);
            }
        });
    });
    
    $.ajax({
        url: 'php/get_labels_list.php',
        type: 'post',
        dataType: 'html',
        success: function(data) {
            $('#label').append(data);
        }
    });


// TYPEAHEADS
    $(function () {
        $("#client").typeahead({
            items: 8,
            source: function (typeahead, query) {
                $.ajax({
                    url: 'php/get_client_names.php',
                    type: 'post',
                    data: 'query=' + $("#client").val(),
                    dataType: 'json',
                    async: true,
                    success: function (data) {
                        typeahead.process(data);
                    }
                });
            },
            onselect: function (obj) {
                $.ajax({
                    url: 'php/update_client_name.php',
                    type: 'post',
                    data: {
                        tempVal: obj,
                        product_id: $('#product_id').val()
                    },
                    dataType: 'text',
                    success: function (data) {
                        if(data === 'ok') {
                            $(this).addClass("success");
                            setTimeout(function() {
                                $(this).removeClass();
                            }, 4000);
                        }
                    }
                });
            }
        });
    });

    $(function () {
        $("#warehouse").typeahead({
            items: 8,
            source: function (typeahead, query) {
                $.ajax({
                    url: 'php/get_warehouse_names.php',
                    type: 'post',
                    data: 'query=' + $("#warehouse").val(),
                    dataType: 'json',
                    async: true,
                    success: function (data) {
                        typeahead.process(data);
                    }
                });
            },
            onselect: function (obj) {
                $.ajax({
                    url: 'php/update_warehouse_name.php',
                    type: 'post',
                    data: {
                        tempVal: obj,
                        product_id: $('#product_id').val()
                    },
                    dataType: 'text',
                    success: function (data) {
                        if(data === 'ok') {
                            $(this).addClass("success");
                            setTimeout(function() {
                                $(this).removeClass();
                            }, 4000);
                        }
                    }
                });
            }
        });
    });

    $(function () {
        $("#supplier").typeahead({
            items: 8,
            source: function (typeahead, query) {
                $.ajax({
                    url: 'php/get_supplier_names.php',
                    type: 'post',
                    data: 'query=' + $("#supplier").val(),
                    dataType: 'json',
                    async: true,
                    success: function (data) {
                        typeahead.process(data);
                    }
                });
            },
            onselect: function (obj) {
                $.ajax({
                    url: 'php/update_supplier_name.php',
                    type: 'post',
                    data: {
                        tempVal: obj,
                        product_id: $('#product_id').val()
                    },
                    dataType: 'text',
                    success: function (data) {
                        if(data === 'ok') {
                            $(this).addClass("success");
                            setTimeout(function() {
                                $(this).removeClass();
                            }, 4000);
                        }
                    }
                });
            }
        });
    });

    $(function () {
        $("#courier").typeahead({
            items: 8,
            source: function (typeahead, query) {
                $.ajax({
                    url: 'php/get_courier_names.php',
                    type: 'post',
                    data: 'query=' + $("#courier").val(),
                    dataType: 'json',
                    async: true,
                    success: function (data) {
                        typeahead.process(data);
                    }
                });
            },
            onselect: function (obj) {
                $.ajax({
                    url: 'php/update_courier_name.php',
                    type: 'post',
                    data: {
                        tempVal: obj,
                        product_id: $('#product_id').val()
                    },
                    dataType: 'text',
                    success: function (data) {
                        if(data === 'ok') {
                            $(this).addClass("success");
                            setTimeout(function() {
                                $(this).removeClass();
                            }, 4000);
                        }
                    }
                });
            }
        });
    });
    
    
    //KEYUP 
    
    $("#supplier").keyup(function () {
        $.ajax({
            url: 'php/update_supplier_name.php',
            type: 'post',
            data: {
                tempVal: $(this).val(),
                product_id: $('#product_id').val()
            },
            dataType: 'text',
            success: function (data) {
                if(data === 'ok') {
                    $(this).addClass("success");
                    setTimeout(function() {
                        $(this).removeClass();
                    }, 4000);
                }
            }
        });
    });

    $("#courier").keyup(function () {
        $.ajax({
            url: 'php/update_courier_name.php',
            type: 'post',
            data: {
                tempVal: $(this).val(),
                product_id: $('#product_id').val()
            },
            dataType: 'text',
            success: function (data) {
                if(data === 'ok') {
                    $(this).addClass("success");
                    setTimeout(function() {
                        $(this).removeClass();
                    }, 4000);
                }
            }
        });
    }); 
    
    $("#invoiceIn").keyup(function () {
        $.ajax({
            url: 'php/update_invoiceIn.php',
            type: 'post',
            data: {
                tempVal: $(this).val(),
                product_id: $('#product_id').val()
            },
            dataType: 'text',
            success: function() {
                
            }
        });
    });

    $("#delivery_note").keyup(function () {
        $.ajax({
            url: 'php/update_delivery_note.php',
            type: 'post',
            data: {
                tempVal: $(this).val(),
                product_id: $('#product_id').val()
            },
            dataType: 'text',
            success: function() {
                
            }
        });
    });
 
    $("#invoiceOut").keyup(function () {
        $.ajax({
            url: 'php/update_invoiceOut.php',
            type: 'post',
            data: {
                tempVal: $(this).val(),
                product_id: $('#product_id').val()
            },
            dataType: 'text',
            success: function() {
                
            }
        });
    });
    
    $("#client").keyup(function () {
        $.ajax({
            url: 'php/update_client_name.php',
            type: 'post',
            data: {
                tempVal: $(this).val(),
                product_id: $('#product_id').val()
            },
            dataType: 'text',
            success: function (data) {
                if(data === 'ok') {
                    $(this).addClass("success");
                    setTimeout(function() {
                        $(this).removeClass();
                    }, 4000);
                }
            }
        });
    });
    
    $("#parameters").keyup(function () {
        $.ajax({
            url: 'php/update_parameters.php',
            type: 'post',
            data: {
                tempVal: $(this).val(),
                product_id: $('#product_id').val()
            },
            dataType: 'text',
            success: function() {
                
            }
        });
    });

    $("#amount").keyup(function () {
        $.ajax({
            url: 'php/update_amount.php',
            type: 'post',
            data: {
                tempVal: $(this).val(),
                product_id: $('#product_id').val()
            },
            dataType: 'text',
            success: function() {
                
            }
        });
    });

    $("#weight").keyup(function () {
        $.ajax({
            url: 'php/update_weight.php',
            type: 'post',
            data: {
                tempVal: $(this).val(),
                product_id: $('#product_id').val()
            },
            dataType: 'text',
            success: function() {
                
            }
        });
    });

//    $("#label").change(function () {
//        $.ajax({
//            url: 'php/update_label.php',
//            type: 'post',
//            data: {
//                tempVal: $(this).val(),
//                product_id: $('#product_id').val()
//            },
//            dataType: 'text',
//            success: function() {
//                
//            }
//        });
//    });

    
 
    $.datepicker.regional['ru'] = {
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
 
    //PAGE :  http://trentrichardson.com/examples/timepicker/
 
 
    $("#dataIn").datepicker({
        changeMonth: true,
        changeYear: true,
        onSelect: function () {
            $.ajax({
                url: 'php/update_dateIn.php',
                type: 'post',
                data: {
                    tempVal: $(this).val(),
                    product_id: $('#product_id').val()
                }
            });
        }
    });
    
    $("#dataOut").datepicker({
        changeMonth: true,
        changeYear: true,
        onSelect: function () {
            $.ajax({
                url: 'php/update_dateOut.php',
                type: 'post',
                data: {
                    tempVal: $(this).val(),
                    product_id: $('#product_id').val()
                }
            });
        }
    });

    $("#filter_begin_data, #filter_end_data").datepicker({
        changeMonth: true,
        changeYear: true
    });
    
    //не дает возможности удалять значение с клавиатуры (анти-делит-бакспспеис)
    $("#dataIn").keydown(function(e){
        if(e.which === 8) {
            e.preventDefault();
            jQuery(this).val("");
        }
        if(e.which === 46) {
            e.preventDefault();
            jQuery(this).val("");
        }
    });
    
    $("#dataOut").keydown(function(e){
        if(e.which === 8) {
            e.preventDefault();
            jQuery(this).val("");
        }
        if(e.which === 46) {
            e.preventDefault();
            jQuery(this).val("");
        }
    });
    
    $.ajax({
        url: 'php/get_data_to_warehouse_in.php',
        type: 'post',
        dataType: 'html',
        success: function(data) {
            $('#mainTableIn').append(data);
        }
    });
     
    $.ajax({
        url: 'php/get_data_to_warehouse_out.php',
        type: 'post',
        dataType: 'html',
        success: function(data) {
            $('#mainTableOut').append(data);
        }
    });
    jQuery(document).on("click","#save_order",function() {
        window.location = "index.php?page=warehouse_in";
    });
    $(document).on('click','#mainTableIn tr td[name != "inv_out"][name != "future_send_td"][name != "file"]', function() {
        window.location = "index.php?page=edit_product&id=" + $(this).parent().attr('id');
    });
    $(document).on('click','#mainTableOut tr', function() {
        window.location = "index.php?page=edit_product&id=" + $(this).attr('id');
    });

    $(document).on('click','#invoice_out_add_btn', function() {
        //var invoice_out_answer = prompt("Ваш пароль сударь?");
        if (jQuery('#invoice_out_number').val().length > 0) {
            var ids = new Array();
            jQuery('td[name="inv_out"] :checkbox:checked').each(function() {
                ids.push(jQuery(this).attr('id'));
            });
            jQuery.ajax({
                url: "php/add_inv_out_group.php",
                type: "post",
                dataType: "text",
                data: {
                    ids : ids,
                    invoice_out : jQuery('#invoice_out_number').val()
                },
                success: function(data) {
                    alert(data);
                    if(data !== "Выпивали? Код неверный!") {
                        document.location.reload(true);
                    }
                }
            });
        } else {
            alert("Номер исходящего инвойся не бывает пустым, Герой!");
        }
        
    });
    
    jQuery(document).on('click', ':radio[name="product_shipping_type"]', function() {
        
        jQuery.ajax({
            url: "php/update_product_shipping_type.php",
            type: "post",
            dataType: "text",
            data: {
                tempVal : jQuery(this).attr('value'),
                product_id : jQuery("#product_id").attr('value')
            },
            success: function(data) {
                //alert(data);
            }
        });
    });
    
    jQuery(document).on('click', 'td[name="future_send_td"] :checkbox', function() {
        var condition;
        if(jQuery(this).attr('value') === '0') {
            condition = 1;
            jQuery(this).parent().parent().addClass('success');
        } else {
            condition = 0;
            jQuery(this).parent().parent().removeClass('success');
        }
        //switch value
        jQuery(this).attr('value',condition);
        
        jQuery.ajax({
            url: "php/add_to_future_send.php",
            type: "post",
            dataType: "text",
            data: {
                tempVal : jQuery(this).attr('value'),
                product_id : jQuery(this).attr('id')
            },
            success: function(data) {
                //alert(data);
            }
        });
    });
    
    // FILTERS
    $("#filters_show_btn").click(function() {
        $.ajax({
            url: "php/filters_process.php",
            type: "post",
            dataType: "text",
            data: {
                data_start : jQuery("#filter_begin_data").val(),
                data_end : jQuery("#filter_end_data").val(),
                ladu_type : jQuery('input[name="optionsRadios"]:checked').val(),
                filter_type : jQuery('input[name="filter_type"]:checked').val()
            },
            success: function(data) {
                $(".filters_result").html(data);
            } 
        });
    });
    
    jQuery(document).on("click","#btn_delete_products",function() {
        var ids = new Array();
            jQuery('td[name="inv_out"] :checkbox:checked').each(function() {
                ids.push(jQuery(this).attr('id'));
            });
            jQuery.ajax({
                url: "php/remove_checked_orders.php",
                type: "post",
                dataType: "text",
                data: {
                    ids : ids
                },
                success: function(data) {
                    alert(data);
                    location.reload();
                }
            });
    });
    
    //загрузка фаила
    jQuery(document).on("click",".shim, .close-popup",function() {
        jQuery(".shim").fadeOut("slow");
        jQuery("body").css("overflow","");
        jQuery('.popup').animate({
            top: '-=300'
            },
            400, function(){
                
            });
    });
    jQuery(document).on("click","td[name='file']",function() {
        var product_id = jQuery(this).parent("tr").attr("id");
        jQuery("body").css("overflow","hidden");
        jQuery("#file-order-id").val(product_id);
        
        jQuery.ajax({
            url : "php/check_file_existance.php",
            type: "post",
            dataType: "text",
            data : {
                product_id : product_id
            },
            success: function(data) {
                //pokazyvaet ili skryvajet knopku na skachivanie faila
                if(data !== "empty") {
                    console.log(data);
                    jQuery("#download-file").show().attr("href","files/" + data);
                    jQuery("#remove-file").show().attr("href","files/" + data);
                } else {
                    jQuery("#download-file").hide();
                    jQuery("#remove-file").hide();
                }
            }
        });
        jQuery('.shim').fadeIn("slow");
        jQuery('.popup').animate({
            top: '+=300'
            },
            500, function(){
                
            });
    });
    jQuery(document).on("click","#download-file",function(e) {
        e.preventDefault();
        var win=window.open(jQuery(this).attr("href"), '_blank');
        win.focus();
    });
    
    //сделать функцию для удаления фаила через аякс unlink
    
}); //Ready

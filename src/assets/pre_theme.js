var elessiShopifyPre,Nt_money_format = '${{amount}}',sp_nt_storage = false,Enablestorage = true;
try {
   sp_nt_storage = (typeof(Storage) !== "undefined" && Enablestorage);
} catch (err) {
   sp_nt_storage = false;
}
if(sp_nt_storage) {
var nt_currency = localStorage.getItem('nt_currency');
} else {
 var nt_currency = null;
}
(function( $ ) {
   "use strict";
   elessiShopifyPre = (function() {
   return {
      init: function() {
         this.initCarousel();
         this.initMasonry(); 
         this.shopMasonry();
      },    

      // Init slick carousel
      initCarousel : function() {
         $( '.nt-carousel' ).not( '.slick-initialized' ).slick();
      },
      StorageCurrency: function () {
        var cookieCurrency = null;
        if(sp_nt_storage) {cookieCurrency = localStorage.getItem('T4Currency')}
        return cookieCurrency;
      },
       // Categories masonry
      shopMasonry: function() {
         if (typeof($.fn.isotope) == 'undefined' || typeof($.fn.imagesLoaded) == 'undefined') return;
          // Categories masonry
          $(window).resize(function() {
            $(".categories-masonry").each(function (index) {
              var $el = $(this);
              var colWidth = ( $el.hasClass( 'categories-style-masonry' ) )  ? '.nt-item-category' : '.col-lg-3.nt-item-category' ;
              $el.imagesLoaded().done( function(instance) {
                  setTimeout(function(){
                     $el.isotope({
                         resizable: false,
                         isOriginLeft: ! $('body').hasClass('rtl'),
                         layoutMode: 'packery',
                         packery: {
                             gutter: 0,
                             columnWidth: colWidth
                         },
                         itemSelector: '.nt-item-category',
                         // masonry: {
                             // gutter: 0
                         // }
                     });
                     
                  }, 500);
                  // setTimeout(function(){
                  //    $el.isotope('layout');
                  // }, 2500);
              });
            });
          });
      },

      // Init masonry layout
      initMasonry : function() {
         if (typeof($.fn.isotope) == 'undefined' || typeof($.fn.imagesLoaded) == 'undefined') return;
         var el = $( '.nt-masonry' );
       
         el.each( function( i, val ) {
            var _option = $( this ).data( 'masonry' );
              //console.log(_option)
            if ( _option !== undefined ) {
               var _selector = _option.selector,
                  _width    = _option.columnWidth,
                  _layout   = _option.layoutMode;

               $( this ).imagesLoaded( function() {
                  $( val ).isotope( {
                     layoutMode : _layout,
                     isOriginLeft: ! $('body').hasClass('rtl'),
                     itemSelector: _selector,
                     percentPosition: true,
                     masonry: {
                        columnWidth: _width
                     }
                  } );
               });

               $( '.nt_filter_iso a' ).click( function() {
                  var selector = $( this ).data( 'filter' ),
                     parent   = $( this ).parents( '.nt_filter_iso' );

                  $( val ).isotope({ filter: selector });

                  // don't proceed if already selected
                  if ( $( this ).hasClass( 'selected' ) ) {
                     return false;
                  }
                  parent.find( '.selected' ).removeClass( 'selected' );
                  $( this ).addClass( 'selected' );

                  return false;
               });
            }
         });
      },
      Ntproduct_switch: function(variations_form,Ntproduct,product,selector,IdSelect,NtId,callBackVariant,prefix) {
        
        // fix soldout one variant
        var i, l = Ntproduct.Ntsoldout.length;
        for (i = 0; i < l; i++) {
          var soldout = Ntproduct.Ntsoldout[i].NT || Ntproduct.Ntsoldout[i];
          if (soldout.length == 0) {
            $(NtId + '0 .nt-swatch[data-index="'+i+'"]').addClass('nt_soldout');
          }
        }
        
         var $variation_form = $(variations_form),
            size = $(selector).find('.swatches-select').data('size');
         $variation_form.on('click', '.swatches-select > .nt-swatch:not(.is-selected):not(.nt_unavailable)', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            var $this = $(this),
                value = $this.data('value'),
                id = $this.parent().data('id'),
                ck_color = $('#cart-form').find('.is-color .is-selected').data('value');
            $this.parent().find('.is-selected').removeClass('is-selected');
            $this.addClass('is-selected');
            if (NtId == '.nt_select_pr_') {
            $('.nt_select_pr_'+id).find('.is-selected').removeClass('is-selected');
            $(".nt_select_pr_"+id+" [data-value="+value+"]").addClass('is-selected');
            $('.nt_select_pr_'+id+' .input-dropdown-inner >a').text( $(".nt_select_pr_"+id+" [data-value="+value+"]").attr('aria-label'));
            }

            // if( size == 2 && ($(NtId+'0 .is-selected').length == 0 || $(NtId+'1 .is-selected').length == 0) ) {
            //   return;
            // } else if( size == 3 && ($(NtId+'0 .is-selected').length == 0 || $(NtId+'1 .is-selected').length == 0 || $(NtId+'2 .is-selected').length == 0) ) {
            //   return;
            // } 
            switch(size) {
                case 2:
                    var value0 = $(NtId+'0 .is-selected').data('value'),
                        value1 = $(NtId+'1 .is-selected').data('value'),
                        val = $(IdSelect+' option.'+value0+'.nt1_'+value1).val();
                       // console.log(val);
                     $(IdSelect).val(val);
                    var index = $(NtId+'0 .is-selected').data('index');
                    if (typeof index === 'undefined') return;
                     $(NtId+'1 .nt-swatch').addClass('nt_unavailable nt_soldout');
                     var availableOptions = Ntproduct.Ntavailable[index],
                          soldoutOptions = Ntproduct.Ntsoldout[index];
                     //console.log('availableOptions '+availableOptions);
                     // check Unavailable
                      if ($(IdSelect).val() === null || $(IdSelect).val() === ""){
                        //console.log('Unavailable')
                              $(NtId+'1 .nt-swatch').removeClass('is-selected');
                              $(NtId+'1 .nt-swatch[data-value="' + availableOptions[0] + '"]').addClass('is-selected');
                              value0 = $(NtId+'0 .is-selected').data('value'),
                              value1 = $(NtId+'1 .is-selected').data('value'),
                              val = $(IdSelect+' option.'+value0+'.nt1_'+value1).val();
                              $(IdSelect).val(val);
                              $(NtId+'0 .input-dropdown-inner >a').text($(NtId+'0 .is-selected:first').text());
                              $(NtId+'1 .input-dropdown-inner >a').text($(NtId+'1 .is-selected:first').text());
                      }// endcheck Unavailable
                         for (var i=0; i<availableOptions.length; i++) {
                           var option = availableOptions[i];
                            $(NtId+'1 .nt-swatch[data-value="' + option + '"]').removeClass('nt_unavailable');
                         }
                         for (var i=0; i<soldoutOptions.length; i++) {
                           var option = soldoutOptions[i];
                            $(NtId+'1 .nt-swatch[data-value="' + option + '"]').removeClass('nt_soldout');
                         }
                    break;
                case 3:
                    var value0 = $(NtId+'0 .is-selected').data('value'),
                        value1 = $(NtId+'1 .is-selected').data('value'),
                        value2 = $(NtId+'2 .is-selected').data('value'),
                        val = $(IdSelect+' option.'+value0+'.nt1_'+value1+'.nt2_'+value2).val();
                        $(IdSelect).val(val);
                     var index = $(NtId+'0 .is-selected').data('index');
                     if (typeof index === 'undefined') return;
                     //console.log(typeof index)
                        var availableOptions = Ntproduct.Ntavailable[index].NT,
                             soldoutOptions = Ntproduct.Ntsoldout[index].NT;
                       // check Unavailable
                       if ($(IdSelect).val() === null || $(IdSelect).val() === ""){
                         // id = 0,1,2
                         //console.log('Unavailable')
                         console.log(availableOptions)
                         if (id == 0){
                            var position = availableOptions.indexOf(value1);
                            if (position >=0) {
                              $(NtId+'2 .nt-swatch').removeClass('is-selected');
                              $(NtId+'2 .nt-swatch[data-value="' + availableOptions[position+1] + '"]').addClass('is-selected');
                            } else {
                              $(NtId+'1 .nt-swatch').removeClass('is-selected');
                              $(NtId+'1 .nt-swatch[data-value="' + availableOptions[0] + '"]').addClass('is-selected');
                              $(NtId+'2 .nt-swatch').removeClass('is-selected');
                              $(NtId+'2 .nt-swatch[data-value="' + availableOptions[1] + '"]').addClass('is-selected');
                            }
                         } else if (id == 1){
                           var position = availableOptions.indexOf(value);
                            $(NtId+'1 .nt-swatch').removeClass('is-selected');
                            $(NtId+'1 .nt-swatch[data-value="' + availableOptions[position] + '"]').addClass('is-selected');
                            $(NtId+'2 .nt-swatch').removeClass('is-selected');
                            $(NtId+'2 .nt-swatch[data-value="' + availableOptions[position+1] + '"]').addClass('is-selected');

                         } else {
                           //code id == 2
                         }
                            value0 = $(NtId+'0 .is-selected').data('value'),
                            value1 = $(NtId+'1 .is-selected').data('value'),
                            value2 = $(NtId+'2 .is-selected').data('value'),
                            val = $(IdSelect+' option.'+value0+'.nt1_'+value1+'.nt2_'+value2).val();
                            $(IdSelect).val(val);
                            $(NtId+'0 .input-dropdown-inner >a').text($(NtId+'0 .is-selected:first').text());
                            $(NtId+'1 .input-dropdown-inner >a').text($(NtId+'1 .is-selected:first').text());
                            $(NtId+'2 .input-dropdown-inner >a').text($(NtId+'2 .is-selected:first').text());
                    }// endcheck Unavailable
                             $(NtId+'1 .nt-swatch').addClass('nt_unavailable');
                             $(NtId+'2 .nt-swatch').addClass('nt_unavailable');
                             $(NtId+'1 .nt-swatch').addClass('nt_soldout');
                             $(NtId+'2 .nt-swatch').addClass('nt_soldout');
                           //console.log('Unavailable');
                            
                             //console.log(availableOptions)
                             value1 = $(NtId+'1 .is-selected').data('value');
                             //console.log('value1 '+value1)
                             for (var i=0; i<availableOptions.length; i++) {
                               var option = availableOptions[i];

                               if (i % 2 == 0) {
                                 // select option 2
                                 $(NtId+'1 .nt-swatch[data-value="' + option + '"]').removeClass('nt_unavailable');
                                  // select option 3
                                  if (option == value1){
                                      var value2 = availableOptions[i+1];
                                    //console.log('value2 '+value2 )
                                     $(NtId+'2 .nt-swatch[data-value="' + value2 + '"]').removeClass('nt_unavailable');
                                   }
                               }
                             }
      //                        value1 = $(NtId+'1 .is-selected').data('value');
      //                        console.log('value1 '+value1)
                             for (var i=0; i<soldoutOptions.length; i++) {
                               var option = soldoutOptions[i];
                               //console.log('soldoutOptions '+soldoutOptions)
                               if (i % 2 == 0) {
                                 // select option 2
                                 $(NtId+'1 .nt-swatch[data-value="' + option + '"]').removeClass('nt_soldout');
                                  // select option 3
                                 
                                  if (option == value1){
                                      var value2 = soldoutOptions[i+1];
                                    //console.log('value2 '+value2 )
                                     $(NtId+'2 .nt-swatch[data-value="' + value2 + '"]').removeClass('nt_soldout');
                                   }
                               }
                             }
                    break;
                default:
                    var value0 = $(NtId+'0 .is-selected').data('value'),
                        val = $(IdSelect+' option.'+value0).val();
                    $(IdSelect).val(val);
                    var soldoutOptions = Ntproduct.Ntsoldout;
                    //console.log(soldoutOptions)
                    $(NtId+'0 .nt-swatch').addClass('nt_soldout');
                    for (var i=0; i<soldoutOptions.length; i++) {
                      var option = soldoutOptions[i];
                      //console.log('option '+option)
                      $(NtId+'0 .nt-swatch[data-value="' + option + '"]').removeClass('nt_soldout');
                    }
            }
            //AddToCartForm
            var variant = product.variants[$(IdSelect).prop('selectedIndex')];
            selectCallback(variant,selector,IdSelect,size,callBackVariant,NtId,prefix,product);
               if (((selector == '.nt_cart_form' && typeof $('#cart-form').find('.is-color .is-selected').data('value') !== 'undefined') || (selector == '#cart-form-sticky' && typeof $('#cart-form-sticky').find('.is-color .is-selected').data('value') !== 'undefined')) && nathan_settings.nt_suffix == "group_images" ) {
                 var val_color = $('#cart-form').find('.is-color .is-selected').data('value');
                 var nt_group_slick = $(".nt-group-carousel"), $productGallery = $('.shopify-product-gallery');
                 if ($('.nt-group-carousel:not(.slick-initialized)').length > 0 ) {
                  nt_group_slick.slick().slick('slickFilter', '.bc_'+val_color);
                  nt_group_slick.slick("refresh").addClass('slick_loaded');
                  //ck_color = val_color;
                 } else if ($('.nt-group-carousel.slick-initialized').length > 0 ) {
                   //console.log('val_color: '+val_color)
                  if (ck_color == val_color) return;
                  nt_group_slick.removeClass('slick_loaded').slick("slickUnfilter").slick("unslick");
                  nt_group_slick.slick().slick('slickFilter', '.bc_'+val_color).slick("refresh").addClass('slick_loaded');
                  //ck_color = val_color;
                 } else if ($('.p-thumb.nt-masonry').length > 0 ) {
                     if ($(window).width() > 740 && $(window).width() !== 812) {
                        $('.nt-masonry').addClass('masonry_loaded').isotope({ filter: '.bc_'+val_color }) 
                     } else if ($('.p-thumb.nt-masonry:not(.slick-initialized)').length > 0 ) {
                         setTimeout(function(){
                        $('.p-thumb.nt-masonry').isotope('destroy');
                        $('.p-thumb.nt-masonry').slick().slick('slickFilter', '.bc_'+val_color).slick("refresh").addClass('slick_loaded');
                        $('.p-thumb.nt-masonry.slick-initialized').slick('refresh');
                        }, 1500);
                    } else if ($('.p-thumb.nt-masonry.slick-initialized').length > 0 ) {
                      //console.log('val_color: '+val_color)
                     if (ck_color == val_color) return;
                      $('.p-thumb.nt-masonry').removeClass('slick_loaded').slick("slickUnfilter").slick("unslick");
                      $('.p-thumb.nt-masonry').slick().slick('slickFilter', '.bc_'+val_color).slick("refresh").addClass('slick_loaded');
                        setTimeout(function(){$('.p-thumb.nt-masonry.slick-initialized').slick('refresh');
                        }, 1500);
                    }
               }
               if( $productGallery.hasClass( 'image-action-zoom') ) {
                 var zoom_target   = $( '.shopify-product-gallery__image img' );
                 var image_to_zoom = zoom_target.find( 'img' );
                 // But only zoom if the img is larger than its container.
                 zoom_target.each(function() {
                  var $this = $(this);
                    if ( $this.attr( 'data-large_image_width' ) > $( '.shopify-product-gallery__image' ).width() ) {
                        $this.trigger( 'zoom.destroy' );
                        var zoom_parent = $this.closest('.shopify-product-gallery__image')
                        zoom_parent.zoom({
                           url: $this.attr( 'data-large_image' ), 
                            touch: false
                        });
                    }
                 });
               }
            }
         });
         if (nathan_settings.use_clicking_variant_image){
         $(document).on('click', '.p-nav img', function(ev) {
            //ev.preventDefault();
            var $this = $(this),
                value = $this.data('variant_id');
                //console.log(typeof value)
            if (typeof value === 'number') {
               $(IdSelect).val(value);
               var variant = product.variants[$(IdSelect).prop('selectedIndex')];
               //console.log(variant)
             // $(NtId+'0 .nt-swatch').removeClass('is-selected');
             // $(NtId+'0 .nt-swatch[data-value="' + variant.option1 + '"]').addClass('is-selected');
             // $(NtId+'1 .nt-swatch').removeClass('is-selected');
             // $(NtId+'1 .nt-swatch[data-value="' + variant.option2 + '"]').addClass('is-selected');
             // $(NtId+'2 .nt-swatch').removeClass('is-selected');
             // $(NtId+'2 .nt-swatch[data-value="' + variant.option3 + '"]').addClass('is-selected');
            // $(NtId+'0 .input-dropdown-inner >a').text($(NtId+'0 .is-selected').attr('aria-label'));
            // $(NtId+'1 .input-dropdown-inner >a').text($(NtId+'1 .is-selected').attr('aria-label'));
            // $(NtId+'2 .input-dropdown-inner >a').text($(NtId+'2 .is-selected').attr('aria-label'));
            $(NtId+'0 .input-dropdown-inner >a').text($(NtId+'0 .is-selected:first').text());
            $(NtId+'1 .input-dropdown-inner >a').text($(NtId+'1 .is-selected:first').text());
            $(NtId+'2 .input-dropdown-inner >a').text($(NtId+'2 .is-selected:first').text());
            switch(size) {
              case 2:
                  $(NtId + '0 .nt-swatch').removeClass('is-selected');
                  $(NtId + '0 .nt-swatch[data-value="' + variant.option1 + '"]').addClass('is-selected');
                  $(NtId + '1 .nt-swatch').removeClass('is-selected');
                  $(NtId + '1 .nt-swatch[data-value="' + variant.option2 + '"]').addClass('is-selected');
                  $(NtId + '0 .input-dropdown-inner >a').text($(NtId + '0 .is-selected:first').text());
                  $(NtId + '1 .input-dropdown-inner >a').text($(NtId + '1 .is-selected:first').text());
                  var index = $(NtId + '0 .bg_css_'+variant.option1).data('index');
                  //console.log('value0 index '+index)
                  var availableOptions = Ntproduct.Ntavailable[index],
                      soldoutOptions = Ntproduct.Ntsoldout[index];
                  $(NtId + '1 .nt-swatch').addClass('nt_unavailable nt_soldout');
                  for (var i = 0; i < availableOptions.length; i++) {
                     var option = availableOptions[i];
                     $(NtId + '1 .nt-swatch[data-value="' + option + '"]').removeClass('nt_unavailable');
                  }
                  for (var i = 0; i < soldoutOptions.length; i++) {
                     var option = soldoutOptions[i];
                     $(NtId + '1 .nt-swatch[data-value="' + option + '"]').removeClass('nt_soldout');
                  }
                break;
              case 3:
                  $(NtId + '0 .nt-swatch').removeClass('is-selected');
                  $(NtId + '0 .nt-swatch[data-value="' + variant.option1 + '"]').addClass('is-selected');
                  $(NtId + '1 .nt-swatch').removeClass('is-selected');
                  $(NtId + '1 .nt-swatch[data-value="' + variant.option2 + '"]').addClass('is-selected');
                  $(NtId + '2 .nt-swatch').removeClass('is-selected');
                  $(NtId + '2 .nt-swatch[data-value="' + variant.option3 + '"]').addClass('is-selected');
                  $(NtId + '0 .input-dropdown-inner >a').text($(NtId + '0 .is-selected:first').text());
                  $(NtId + '1 .input-dropdown-inner >a').text($(NtId + '1 .is-selected:first').text());
                  $(NtId + '2 .input-dropdown-inner >a').text($(NtId + '2 .is-selected:first').text());
                  var index = $(NtId + '0 .bg_css_'+variant.option1).data('index');
                  //console.log('value0 index '+index)
                  var availableOptions = Ntproduct.Ntavailable[index].NT,
                  soldoutOptions = Ntproduct.Ntsoldout[index].NT;
                  $(NtId + '1 .nt-swatch').addClass('nt_unavailable nt_soldout');
                  $(NtId + '2 .nt-swatch').addClass('nt_unavailable nt_soldout');
                  var value1 = variant.option2;
                  //console.log('value1 '+value1)
                  for (var i = 0; i < availableOptions.length; i++) {
                     var option = availableOptions[i];
                     if (i % 2 == 0) {
                        // select option 2
                        $(NtId + '1 .nt-swatch[data-value="' + option + '"]').removeClass('nt_unavailable');
                        // select option 3
                        if (option == value1) {
                           $(NtId + '2 .nt-swatch[data-value="' + availableOptions[i + 1] + '"]').removeClass('nt_unavailable');
                        }
                     }
                  }
                  for (var i = 0; i < soldoutOptions.length; i++) {
                     var option = soldoutOptions[i];
                     if (i % 2 == 0) {
                        // select option 2
                        $(NtId + '1 .nt-swatch[data-value="' + option + '"]').removeClass('nt_soldout');
                        // select option 3
                        if (option == value1) {
                           $(NtId + '2 .nt-swatch[data-value="' + soldoutOptions[i + 1] + '"]').removeClass('nt_soldout');
                        }
                     }
                  }
                break;
              default:
                  $(NtId + '0 .gecko-swatch').removeClass('is-selected');
                  $(NtId + '0 .gecko-swatch[data-value="' + variant.option1 + '"]').addClass('is-selected');
                  $(NtId + '0 .input-dropdown-inner >a').text($(NtId + '0 .is-selected:first').text());
                  var soldoutOptions = Ntproduct.Ntsoldout;
                  $(NtId + '0 .gecko-swatch').addClass('nt_soldout');
                  for (var i = 0; i < soldoutOptions.length; i++) {
                     var option = soldoutOptions[i];
                     $(NtId + '0 .gecko-swatch[data-value="' + option + '"]').removeClass('nt_soldout');
                  }
            }
            selectCallback(variant,selector,IdSelect,size,callBackVariant,NtId,prefix,product);
            }
         });
         }
         var isIOS12 = function() {
            if (/iP(hone|od|ad)/.test(navigator.platform)) {
              var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
              return parseInt(v[1], 10) >= 12;
            } else {
              return false;
            }
          };
         var selectCallback = function(variant,selector,IdSelect,size,callBackVariant,NtId,prefix,product) {
            //console.log('selector: '+selector)
           var selectorCurent = $(selector),
               IdSelectCurent = $(IdSelect);
             var $variantQuantity = selectorCurent.find('.variantQuantity'),
             $productPrice = selectorCurent.find('.productPrice'),
             $quantityElements = selectorCurent.find('.shopify_quantity'),
             $outofstock = $('#nt_outstock'+prefix),
             $outofsticky = $('#nt_outstock_sticky'+prefix),
             $frm_notify_pr = $('#frm_notify_pr'+prefix),
             $productsku = $('#productSku'+prefix),
             $input = selectorCurent.find('.shopify_quantity input.qty'),
             $addToCart = selectorCurent.find('.shopify_add_to_cart'),
             $payment_btn = selectorCurent.find('.shopify-payment-button'),
             $addToCart_text = selectorCurent.find('.single_add_to_cart_button .bt__text');
            //console.log('cookieCurrency :'+$cookieCurrency)
             var val_0 = $(NtId+'0 .is-selected').data('value'),
                 val_1 = $(NtId+'1 .is-selected').data('value'),
                 val_2 = $(NtId+'2 .is-selected').data('value');
             if (size == 2) {
                $(callBackVariant).attr('class','nt_'+val_0);
                $(callBackVariant).addClass('nt1_' + val_1);
                $('#callBackVariantsticky'+prefix).attr('class','nt_'+val_0);
                $('#callBackVariantsticky'+prefix).addClass('nt1_' + val_1);
             } else if (size == 3) {
                $(callBackVariant).attr('class','nt_'+ val_0);
                $(callBackVariant).addClass('nt1_' + val_1);
                $(callBackVariant).addClass('nt2_' + val_2);
                $('#callBackVariantsticky'+prefix).attr('class','nt_'+val_0);
                $('#callBackVariantsticky'+prefix).addClass('nt1_' + val_1);
                $('#callBackVariantsticky'+prefix).addClass('nt2_' + val_2);
             }
            var name_0 = $(NtId+'0 .bg_css_'+val_0+':first').text();
               $(NtId+'0 .nt_name_current').html(name_0);
               // if (selector == '#cart-form') {
               //  //$('#nt_select_0 .nt_name_current').html(name_0);
               //   console.log('name_0: '+name_0)
               // // $('#nt_select_sticky_0 .nt_name_current').html(name_0);
               // } else if (selector == '#cart-form-sticky') {
               //  //$('#nt_select_0 .nt_name_current').html(name_0);
               //   console.log('name_sticky: '+name_0)
               //  //$('#nt_select_0 .nt_name_current').html(name_0);
               // }
              
            if (size > 1) {
            var name_1 =  $(NtId+'1 .bg_css_'+val_1+':first').text();
               $(NtId+'1 .nt_name_current').html(name_1);
               
            }
            if (size > 2) {
            var name_2 =  $(NtId+'2 .bg_css_'+val_2+':first').text();
               $(NtId+'2 .nt_name_current').html(name_2);
                  
            }
            if(variant){
               if (!!(window.history && history.pushState) && nathan_settings.enableHistoryState && selector == '.nt_cart_form'){
                  window.history.replaceState({}, document.title, "?variant=" + variant.id);
               }
                var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
                if(navigator && navigator.appVersion.match(/(iPhone\sOS\s)([\d]+)/gm)){ var os = navigator.appVersion.match(/(iPhone\sOS\s)([\d]+)/gm)[0].split(" ").pop() }
                if( isSafari && isIOS12 && variant.shopify3d !== 'none') {
                  $(".spar-quicklook-overlay a").attr("href", variant.shopify3d[0].url);
                  $('.spar-quicklook-overlay').show();
                }else{$('.spar-quicklook-overlay').hide();}
              if (variant.available) {
                     $addToCart.show();
                     $payment_btn.show();
                     $quantityElements.show();
                     //add.show();
                     //out.css("display", "none");
                     $outofstock.css("display", "none");
                     $outofsticky.css("display", "none");
                     $frm_notify_pr.css("display", "none");
                     $('#product-available'+prefix).removeClass('value_out').addClass('value_in').html(nathan_settings.in_stock);
                     if (nathan_settings.product_quantity_message) {
                        if (variant.inventory_management) {
                          if (variant.inventory_quantity < 10 && variant.inventory_quantity > 0) {
                            $variantQuantity.html(nathan_settings.only_left.replace('1', variant.inventory_quantity)).addClass('is-visible');
                          } else if (variant.inventory_quantity <= 0 && variant.incoming) {
                            $variantQuantity.html(nathan_settings.will_not_ship_until.replace('[date]', variant.next_incoming_date)).addClass('is-visible');
                          } else {
                            $variantQuantity.removeClass('is-visible');
                          }
                        }
                        else {
                          $variantQuantity.removeClass('is-visible');
                        }
                     }
                     // Update quantity.
                     if (variant.inventory_quantity <= 0 && variant.available && variant.inventory_management != null){
                        $addToCart_text.html(nathan_settings.pre_orders);
                        //add.html(nathan_settings.pre_orders);
                     }else{
                       $addToCart_text.html(nathan_settings.add_to_cart);
                       //add.html(nathan_settings.add_to_cart);
                     }
                     if (variant.inventory_quantity <= 0 && variant.available && variant.inventory_management != null){
                       $input.attr('max',999);
                     } else if(variant.inventory_management != null ){
                       //Check if inventory management by shopify
                       $input.attr('max',variant.inventory_quantity).val(1).attr('value',1);
                     }else{
                       $input.attr('max',999);
                     }
              } else {
                     $addToCart.hide();
                     $payment_btn.hide();
                     //add.hide();
                     $('#product-available').removeClass('value_in').addClass('value_out').html(nathan_settings.outofstock);
                     $variantQuantity.removeClass('is-visible');
                     if (nathan_settings.product_quantity_message) {
                        if (variant.incoming) {
                          $variantQuantity.html(nathan_settings.will_be_in_stock_after.replace('[date]', variant.next_incoming_date)).addClass('is-visible');
                        }
                        else {
                          $variantQuantity.removeClass('is-visible');
                        }
                     }
                     $quantityElements.hide();
                     $frm_notify_pr.css("display", "inline-block");
                     $outofstock.css("display", "inline-block");
                     $outofsticky.css("display", "inline-block");
                     //out.css("display", "inline-block");
                     if (nathan_settings.use_notify_me) {
                        var url_js = 'https://'+window.location.hostname+product.url+'?variant='+variant.id;
                        $frm_notify_pr.find('textarea').html(nathan_settings.please_notify_me.replace('{{title}}', product.title).replace('{{variant}}',variant.title).replace('{{url}}', url_js));
                     }
              }
            // Update price display.
            var customPrice = elessiShopifyPre.formatMoney(variant.price, nathan_settings.moneyFormat);
            //console.log($productPrice)
            if (variant.compare_at_price > variant.price) {
               var comparePrice = elessiShopifyPre.formatMoney(variant.compare_at_price, nathan_settings.moneyFormat);
               var customPriceFormat = '<del class="old-product-price">' + comparePrice + '</del> ';
                   customPriceFormat += '<ins class="product-price">' + customPrice + '</ins> ',
                   customPriceFormat += '<span class="onsale fs__14 tu dib cw pr_onsale"><span></span></span>';
               $productPrice.html(customPriceFormat);
               var save = ((variant.compare_at_price - variant.price)*100)/variant.compare_at_price;
               $('#product-'+product.id+' .pr_onsale>span').html(nathan_settings.save_js.replace('[sale]', Math.ceil(save)));
               $('#product-'+product.id+' .pr_onsale').show();
                $('#callBackVariantsticky'+prefix+' .pr_onsale>span').html(nathan_settings.save_js.replace('[sale]', Math.ceil(save)));
               $('#callBackVariantsticky'+prefix+' .pr_onsale').show();
             }else{
                $productPrice.html(customPrice);
                $('#product-'+product.id+' .pr_onsale').hide();
                $('#callBackVariantsticky'+prefix+' .pr_onsale').hide();
             }
             if (nathan_settings.show_multiple_currencies && elessiShopifyPre.StorageCurrency() !== null && typeof(Currency) !== "undefined") {
                if (typeof(Currency.convertAll) !== "undefined") {Currency.convertAll(nathan_settings.shop_currency, elessiShopifyPre.StorageCurrency(), '.entry-summary span.money');}
            }
             //Update sku
             if(variant.sku){
                $productsku.text(variant.sku);
             }else{
                 $productsku.text(nathan_settings.na);
              }
             if(variant.featured_image) {
               var featured_image_id = variant.featured_image.id;
                //console.log(featured_image_id);
               if (selector == '.nt_cart_form' && $('.p-thumb.slick-initialized').length > 0) {
                  var index = $('.p-thumb.slick-initialized .slick-slide:not(.slick-cloned) img[data-image-id='+featured_image_id+']').closest('div.slick-slide').attr( "data-slick-index" );
                  //console.log('index '+ index);
                  $('.p-thumb.slick-initialized').slick('slickGoTo', index);
               }
               if (selector == '#cart-form-quick') {
               var xx = $(".product-images-slider_on").find('img[data-image-id="'+featured_image_id+'"]').closest('div.slick-slide');
                  if(xx.index() >=0){
                    //console.log(xx.index());
                    $('.product-images-slider_on').slick('slickGoTo', [xx.index(), 2, false]);
                  }
               }
             }
            }
         };
      },
      formatMoney: function(cents, format) {
           if (typeof cents == 'string') { cents = cents.replace('.',''); }
           var value = '';
           var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
           var formatString = (format || Nt_money_format);

           var defaultOption = function(opt, def) {
              return (typeof opt == 'undefined' ? def : opt);
           }

           var formatWithDelimiters = function(number, precision, thousands, decimal) {
             precision = defaultOption(precision, 2);
             thousands = defaultOption(thousands, ',');
             decimal   = defaultOption(decimal, '.');

             if (isNaN(number) || number == null) { return 0; };

             number = (number/100.0).toFixed(precision);

             var parts   = number.split('.');
             var dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
             var cents   = parts[1] ? (decimal + parts[1]) : '';

             return dollars + cents;
           }

           switch(formatString.match(placeholderRegex)[1]) {
             case 'amount':
               value = formatWithDelimiters(cents, 2);
               break;
             case 'amount_no_decimals':
               value = formatWithDelimiters(cents, 0);
               break;
             case 'amount_with_comma_separator':
               value = formatWithDelimiters(cents, 2, '.', ',');
               break;
             case 'amount_no_decimals_with_comma_separator':
               value = formatWithDelimiters(cents, 0, '.', ',');
               break;
           }

           return formatString.replace(placeholderRegex, value);
      }
   }
   }());
})( jQuery );

jQuery(document).ready(function($) {
   //if ($(window).width() < 991 && !NT4.designMode) {$('#shopify-section-mega_menu').html('')}
   elessiShopifyPre.init();
   if ($('.p-thumb.nt-masonry:not(.slick-initialized)').length > 0 && nathan_settings.nt_suffix !== "group_images" ) {
      //console.log('resize')
      if ($(window).width() > 740 && $(window).width() !== 812) {
      }else {
          setTimeout(function(){
         $('.p-thumb.nt-masonry').isotope('destroy');
         $('.p-thumb.nt-masonry').slick().slick("refresh").addClass('slick_loaded');
         $('.p-thumb.nt-masonry.slick-initialized').slick('refresh');
         }, 1500);
      }
   }
   if ($('body').hasClass('template-product') && nathan_settings.has_variant) {
         var Ntproduct = JSON.parse(document.getElementById('ProductJson-NT').innerHTML),
             product = JSON.parse(document.getElementById('ProductJson-template').innerHTML),
             IdSelect = '.product-select_pr',
             NtId = '.nt_select_pr_',
             selector = '.nt_cart_form',
             callBackVariant = '#callBackVariant',
             prefix='';
             $('.nt_select_pr_1 .is-selected-none').addClass('is-selected').removeClass('is-selected-none');
             $('.nt_select_pr_2 .is-selected-none').addClass('is-selected').removeClass('is-selected-none');
         elessiShopifyPre.Ntproduct_switch('.variations_form',Ntproduct,product,selector,IdSelect,NtId,callBackVariant,prefix);
         $('.nt_select_pr_0 .is-selected-none').click();
         //$('.nt_select_pr_1 .is-selected-none').click();
         //$('.nt_select_pr_2 .is-selected-none').click();
   }
   if ($('body').hasClass('template-product') && nathan_settings.shopify3d_default) {
    var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
    if(navigator && navigator.appVersion.match(/(iPhone\sOS\s)([\d]+)/gm)){ var os = navigator.appVersion.match(/(iPhone\sOS\s)([\d]+)/gm)[0].split(" ").pop() }
    if( isSafari && os >= 12 ) {$(".spar-quicklook-overlay a").attr("href", nathan_settings.shopify3d[0].url);$('.spar-quicklook-overlay').show();}
  }
});
if (NT4.designMode) {
   //console.log('section load');
   jQuery(document)
     .on('shopify:section:load', elessiShopifyPre.shopMasonry)
     .on('shopify:section:unload', elessiShopifyPre.shopMasonry)
     .on('shopify:section:select', elessiShopifyPre.shopMasonry)
     .on('shopify:section:deselect', elessiShopifyPre.shopMasonry)
     .on('shopify:block:select',elessiShopifyPre.shopMasonry)
     .on('shopify:block:deselect', elessiShopifyPre.shopMasonry);
   jQuery(document)
     .on('shopify:section:load', elessiShopifyPre.initMasonry)
     .on('shopify:section:unload', elessiShopifyPre.initMasonry)
     .on('shopify:section:select', elessiShopifyPre.initMasonry)
     .on('shopify:section:deselect', elessiShopifyPre.initMasonry)
     .on('shopify:block:select',elessiShopifyPre.initMasonry)
     .on('shopify:block:deselect', elessiShopifyPre.initMasonry);
   jQuery(document)
     .on('shopify:section:load', elessiShopifyPre.initCarousel)
     .on('shopify:section:unload', elessiShopifyPre.initCarousel)
     .on('shopify:block:select',elessiShopifyPre.initCarousel)
     .on('shopify:block:deselect', elessiShopifyPre.initCarousel);
}

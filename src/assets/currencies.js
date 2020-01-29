// Pick your format here:
// money_format or money_with_currency_format
Currency.format = nathan_settings.Currency_format;
var shopCurrency = nathan_settings.shop_currency;

/* Sometimes merchants change their shop currency, let is tell our JavaScript file */
Currency.moneyFormats[shopCurrency].money_with_currency_format = nathan_settings.shop_money_with_currency_format;
Currency.moneyFormats[shopCurrency].money_format = nathan_settings.shop_money_format;

/* Default currency */
var defaultCurrency = nathan_settings.default_currency;

/* Cookie currency */
if(sp_nt_storage) {
var cookieCurrency = localStorage.getItem('T4Currency'),
    nt_currency = localStorage.getItem('nt_currency');
} else {
var cookieCurrency = null,nt_currency = null;
}
// Fix for customer account pages.
jQuery('span.money span.money').each(function() {
  jQuery(this).parents('span.money').removeClass('money');
});

// Saving the current price.
// jQuery('span.money').each(function() {
//   jQuery(this).attr('data-currency-'+defaultCurrency, jQuery(this).html());
// });

// Select all your currencies buttons.
var buttons = jQuery('.currency-item');

// If there is no cookie or it is the shop currency.
var check_codes = 'USD,EUR,GBP,CAD,ARS,AUD,BBD,BDT,BSD,BHD,BRL,BOB,BND,BGN,ILS,MMK,KYD,CLP,CNY,COP,CRC,HRK,CZK,DKK,DOP,XCD,EGP,XPF,FJD,GHS,GTQ,GYD,GEL,HKD,HUF,ISK,INR,IDR,NIS,JMD,JPY,JOD,KZT,KES,KWD,LVL,LTL,MXN,MYR,MUR,MDL,MAD,MNT,MZN,ANG,NZD,NGN,NOK,OMR,PKR,PYG,PEN,PHP,PLN,QAR,RON,RUB,SAR,RSD,SCR,SGD,SYP,ZAR,KRW,LKR,SEK,CHF,TWD,THB,TZS,TTD,TRY,UAH,AED,UYU,VEB,VND,ZMK';
var ipdata;
if (nathan_settings.show_multiple_visitor && sp_nt_storage){
  if (nt_currency == null) {
   $.ajax({
      type: 'get',
      url: 'https://api.teathemes.net/currency',
      dataType: "json",
      success: function(data) {
        ipdata = data.currency;
        localStorage.setItem('nt_currency', JSON.stringify(data));
        if (check_codes.indexOf(ipdata) >= 0 && jQuery('.currencies a[data-currency='+ ipdata +']').length == 0) {
          if (cookieCurrency != null && cookieCurrency != ipdata ){
             $('.currencies ul').prepend('<li><a href="javascript:void(0);" data-currency="'+ipdata+'" class="currency-item cw chp"><i class="jas_flag flag_'+ipdata+'"></i> '+ipdata+'</a></li>');
             $('ul.currencies').append('<li class="menu-item"><a href="javascript:void(0);" data-currency="'+ipdata+'" class="currency-item"><i class="jas_flag flag_'+ipdata+'"></i> '+ipdata+'</a></li>');
          } else {
            jQuery('.currency-item').removeClass('selected');
            $('.currencies ul').prepend('<li><a href="javascript:void(0);" data-currency="'+ipdata+'" class="currency-item cw chp selected"><i class="jas_flag flag_'+ipdata+'"></i> '+ipdata+'</a></li>');
            $('ul.currencies').append('<li class="menu-item"><a href="javascript:void(0);" data-currency="'+ipdata+'" class="currency-item selected"><i class="jas_flag flag_'+ipdata+'"></i> '+ipdata+'</a></li>');
           jQuery('.selected-currency').text(ipdata);
           jQuery('.selected_flag').html('<i class="jas_flag flag_'+ipdata+'"></i>');
           Currency.convertAll(shopCurrency, ipdata);
          }
          localStorage.setItem('T4Currency', ipdata);
        } else if (check_codes.indexOf(ipdata) >= 0 && cookieCurrency == null) {
          buttons.removeClass('selected');
          jQuery('.selected-currency').text(ipdata);
          jQuery('.currencies a[data-currency=' + ipdata + ']').addClass('selected')
          jQuery('.selected_flag').html('<i class="jas_flag flag_'+ipdata+'"></i>');
          Currency.convertAll(shopCurrency, ipdata);
        }
      }
   });
  } else {
     ipdata = JSON.parse(nt_currency).currency;
     if (check_codes.indexOf(ipdata) >= 0 && jQuery('.currencies a[data-currency='+ ipdata +']').length == 0) {
       if (cookieCurrency != null && cookieCurrency != ipdata ){
          $('.currencies ul').prepend('<li><a href="javascript:void(0);" data-currency="'+ipdata+'" class="currency-item cw chp"><i class="jas_flag flag_'+ipdata+'"></i> '+ipdata+'</a></li>');
          $('ul.currencies').append('<li class="menu-item"><a href="javascript:void(0);" data-currency="'+ipdata+'" class="currency-item"><i class="jas_flag flag_'+ipdata+'"></i> '+ipdata+'</a></li>');
       } else {
         jQuery('.currency-item').removeClass('selected');
         $('.currencies ul').prepend('<li><a href="javascript:void(0);" data-currency="'+ipdata+'" class="currency-item cw chp selected"><i class="jas_flag flag_'+ipdata+'"></i> '+ipdata+'</a></li>');
         $('ul.currencies').append('<li class="menu-item"><a href="javascript:void(0);" data-currency="'+ipdata+'" class="currency-item selected"><i class="jas_flag flag_'+ipdata+'"></i> '+ipdata+'</a></li>');
        jQuery('.selected-currency').text(ipdata);
        jQuery('.selected_flag').html('<i class="jas_flag flag_'+ipdata+'"></i>');
        // Currency.convertAll(shopCurrency, ipdata);
       }
     } else if (check_codes.indexOf(ipdata) >= 0 && cookieCurrency == null) {
        buttons.removeClass('selected');
        jQuery('.selected-currency').text(ipdata);
        jQuery('.currencies a[data-currency=' + ipdata + ']').addClass('selected')
        jQuery('.selected_flag').html('<i class="jas_flag flag_'+ipdata+'"></i>');
        Currency.convertAll(shopCurrency, ipdata);
     }
  }
 }
if (cookieCurrency == null ) {
   if (shopCurrency !== defaultCurrency) {
    buttons.removeClass('selected');
    var $this = jQuery('.currencies a[data-currency=' + defaultCurrency + ']');
    Currency.convertAll(shopCurrency, defaultCurrency);
    var Currency_text = $this.first().text();
    $this.addClass('selected');
    jQuery('.selected-currency').text(Currency_text);
    jQuery('.selected_flag').html('<i class="jas_flag flag_'+jQuery.trim(Currency_text)+'"></i>');
    //console.log('2')
  }
  else {
    //console.log('3')
    Currency.convertAll(shopCurrency, defaultCurrency);
  }
}
else {
   //console.log('4')
  Currency.convertAll(shopCurrency, cookieCurrency);
  jQuery('.currency-item').removeClass('selected');
  var $this = jQuery('.currencies a[data-currency=' + cookieCurrency + ']'),
      Currency_text = jQuery('.currencies .selected').first().text();
  $this.addClass('selected');
  jQuery('.selected-currency').text(cookieCurrency);
  jQuery('.selected_flag').html('<i class="jas_flag flag_'+cookieCurrency+'"></i>');
   //if(Currency_text !== ''){ jQuery('.selected-currency').text(Currency_text) }
}
// When customer clicks on a currency button.
$(document).on("click",".currencies li:not(.black_menu) a",function(ev) {
   ev.preventDefault();
  jQuery('.currency-item').removeClass('selected');
  var Currency_text = jQuery(this).text(),
      $this = jQuery('.currencies a[data-currency=' + Currency_text + ']');
  //jQuery(this).addClass('selected');
  $this.addClass('selected');
  var newCurrency = jQuery(this).attr('data-currency');
  Currency.convertAll(Currency.currentCurrency, newCurrency);
  jQuery('.selected-currency').text(Currency_text);
  jQuery('.selected_flag').html('<i class="jas_flag flag_'+jQuery.trim(Currency_text)+'"></i>');
});
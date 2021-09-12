
function currencytype(){
  $.get('https://ipapi.co/currency/', function(data){
  console.log(data)
  currency_conversion(data)
  })
}

function currency_conversion(data){
  if (data == 'INR'){
    $('#curr_type').text('₹')
    var source = $('.curr_val');
    var symbol = $('.curr_sym');
    symbol.text('₹');
    source.each(function(){
     var source_val = $(this).text();
     var cn_val = (source_val * 72.69).toFixed(1);
     $(this).text(cn_val);
   }); 
  }
}
function update_currency(){

}

$(window).load(function(){
  currencytype();
});
 

function changeperiod(type,pnum){
  currency_sym = $('#curr_type').text();
  if (type == 'month'){
   
      $('.m_button'+pnum).addClass('active');
      $('.h_button'+pnum).removeClass('active');
      $('.time'+pnum).text('/month'); 
      if (currency_sym == '₹'){ 
        $('.jnr_price'+pnum).text('21734.3');
        $('.mid_price'+pnum).text('29003.3');
        $('.snr_price'+pnum).text('43541.3');
      } else {
        $('.jnr_price'+pnum).text('299');
        $('.mid_price'+pnum).text('399');
        $('.snr_price'+pnum).text('599');
      }
             
  }else
  if (type == 'hour'){
      $('.m_button'+pnum).removeClass('active');
      $('.h_button'+pnum).addClass('active');
      $('.time'+pnum).text('/hour');
      if (currency_sym == '₹'){ 
        $('.jnr_price'+pnum).text('1017.7');
        $('.mid_price'+pnum).text('1453.8');
        $('.snr_price'+pnum).text('1817.3');
      } else {
        $('.jnr_price'+pnum).text('14');
        $('.mid_price'+pnum).text('20');
        $('.snr_price'+pnum).text('25');
      }
      currency_conversion();
  }
}
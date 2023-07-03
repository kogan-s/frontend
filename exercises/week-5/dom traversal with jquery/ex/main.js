$('#lab').on('click', '.generator', function() {

  var computerDiv = $(this).closest('.computer');
  var processorId = computerDiv.find('.processor').attr('id');
  var computerId = computerDiv.attr('data-id');
  var busNumber = computerDiv.find('.BUS').text();

  console.log('Processor ID:', processorId);
  console.log('Computer\'s data-id:', computerId);
  console.log('BUS:', busNumber);
});

$('#lab').on('click', '.validator', function() {
  // Retrieve the relevant information from the computer
  var computerDiv = $(this).closest('.computer');
  var generatorText = computerDiv.find('.generator').text();
  var mbNumber = computerDiv.find('.MB').text();
  var qrValues = computerDiv.find('.QR').map(function() {
    return $(this).text();
  }).get();

  console.log('Generator\'s text:', generatorText);
  console.log('MB:', mbNumber);
  console.log('QRs:', qrValues.join(', '));
});

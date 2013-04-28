var employees = [
                 "Ace Dimasuhid",
                 "John Duch",
                 "Mark Steve Samson",
                 "Kathleen Bascon",
                 "Benj Tupas"
                ];

var customers = [
                 "Jason Statham",
                 "Arnold Reyes",
                 "Kirk Baustita",
                 "Clynie Caluag"
                ];


$('#employees').click(function() {
  
  var employeeDivClassName = $('#employeeDiv').attr('class');
  
  if(employeeDivClassName === undefined
      || employeeDivClassName === '') {
    $("#employeeDiv").attr('class', 'active');
  } else {
    $("#employeeDiv").attr('class', '');
  }
});


$('#customers').click(function() {
  
  var customerDivClassName = $('#customerDiv').attr('class');
  
  if(customerDivClassName === undefined
      || customerDivClassName === '') {
    $("#customerDiv").attr('class', 'active');
  } else {
    $("#customerDiv").attr('class', '');
  }
});

$('#useLists').click(function() {
  var textBoxNames = document.getElementById("textBoxNames");
  textBoxNames.value = "";
  
  if($('#customerDiv').attr('class') === 'active') {
    for(var i=0; i<customers.length; i++) {
      textBoxNames.value += customers[i] + ", ";
    }
  } if($('#employeeDiv').attr('class') === 'active') {
    for(var i=0; i<employees.length; i++) {
      textBoxNames.value += employees[i] + ", ";
    }
  }
  
  
});
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

var contactList = [
                    "customers",
                    "employees"
                   ];

refreshContactLists();

function refreshContactLists(){
  
  var employeesContent = document.getElementById('employeesContent');
  var customersContent = document.getElementById('customersContent');
  
  employeesContent.innerHTML ="";
  customersContent.innerHTML ="";
  
  
  for(var i=0; i<employees.length;i++) {
    
    /*var iconTrashIcon = "<i class=\"icon-trash\"/>";
  
    var element = "<p id=\"employee"
                + i
                + "/>";
    
    console.log(iconTrashIcon + " " + element);
    
    employeesContent.innerHTML += element;*/
    employeesContent.innerHTML += employees[i];
    //employeesContent.innerHTML += iconTrashIcon;
    employeesContent.innerHTML += "<br>";
  }
  
  for(var i=0; i<customers.length;i++) {
    
    /*var element = "<p id=\"customer"
                + i
                + "\">";
    var iconTrashIcon = "<i class=\"icon-trash\" id=\"customer"
                      + i
                      + "\"/>";   
    customersContent.innerHTML += element;*/
    customersContent.innerHTML += customers[i];
    customersContent.innerHTML += "<br>";
    /*customersContent.innerHTML += iconTrashIcon;
    customersContent.innerHTML += "</p>";
    */
  }
}
function convert() {
    var temp = document.getElementById("input");
    var result1= document.getElementById("output1");
    var result2= document.getElementById("output2");
    var e = document.getElementById("degree");
    var optionSelIndex = e.options[e.selectedIndex].value;
    var optionSelectedText = e.options[e.selectedIndex].text;
  
    if (temp.value !== "") {
      if (optionSelIndex == 0) {
        alert("Please select a unit");
      } else {
        if (optionSelectedText === "Fahrenheit") {
          result1.value = (((temp.value - 32) * 5) / 9).toFixed(2) + "°C";
          result2.value = (((temp.value - 32) * 5 ) / 9 + 273.15).toFixed(2)+ "k";
        }
        if (optionSelectedText === "Celcius") {
          result1.value = ((temp.value * 9) / 5 + 32).toFixed(2)+ "°F";
          result2.value =((temp.value - 0 ) + 273.15).toFixed(2) +"k";
        }
        if (optionSelectedText === "Kelvin") {
            result1.value = ((temp.value) - 273.15).toFixed(2)  + "°c";
            result2.value =((temp.value - 273.15 ) * (9/5)+ 32).toFixed(2) + "°F";
        }

      }
    } else {
      alert("Please enter temperature to convert");
    }
  }


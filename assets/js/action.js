var averageLife = 71,
    deathYear, ageOfDeath, timeRemaining;

function calculateAverageLife() {
    var gender = $("input[name='gender']:checked").val();
    var yearOfBirth = $("#yearOfBirth").val();
    var smoke = $("input[name='smoke']:checked").val();
    var outlook = $("input[name='outlook']:checked").val();
    var alcohol = $("#alcohol").val();
    var weight = $("#weight").val();
    var height = $("#height").val();
    var continent = $("#continent").val();
    var live = $("input[name='live']:checked").val();
    var chronicDisease = $("input[name='chronicDisease']:checked").val();
    var eatingHabits = $("#eatingHabits").val();
    var work = $("input[name='work']:checked").val();
    var workout = $("input[name='workout']:checked").val();
    var sleep = $("#sleep").val();
    var heritableDisease = $("input[name='heritableDisease']:checked").val();

    var data = [gender, yearOfBirth, smoke, outlook, alcohol, weight, height, continent, live, chronicDisease, eatingHabits, work, workout, sleep, heritableDisease];
    //alert(gender+"\n"+yearOfBirth+"\n"+smoke+"\n"+outlook+"\n"+alcohol+"\n"+weight+"\n"+height+"\n"+continent+"\n"+live+"\n"+chronicDisease+"\n"+eatingHabits+"\n"+work+"\n"+workout+"\n"+sleep+"\n"+heritableDisease);
    
    var full = false;

    for (var i = 0; i < data.length; i++) {
        if (data[i].length > 0)
            full = true;
        else
            full = false;
    }
    //alert(full);
    switch (full) {
        case true:
            switch (gender) {
                case 'male':
                    averageLife += 2;
                    break;
                case 'female':
                    averageLife += 4;
                    break;
                default:
                    averageLife = averageLife;
                    break;
            }

            switch (smoke) {
                case 'yes':
                    averageLife -= 7;
                    break;
                case 'no':
                    averageLife += 2;
                    break;
                default:
                    averageLife = averageLife;
                    break;
            }

            switch (outlook) {
                case 'pessimistic':
                    averageLife -= 1;
                    break;
                case 'optimistic':
                    averageLife += 2;
                    break;
                case 'neutral':
                    averageLife += 1;
                    break;
                default:
                    averageLife = averageLife;
                    break;
            }

            switch (alcohol) {
                case 'never':
                    averageLife += 2;
                    break;
                case '1-month':
                    averageLife -= 4;
                    break;
                case '4-month':
                    averageLife -= 5;
                    break;
                case '2-week':
                    averageLife -= 6;
                    break;
                case 'daily':
                    averageLife -= 15;
                    break;
                default:
                    averageLife = averageLife;
                    break;
            }

            // Calculate Body Mass Index (BMI)

            var bmi = weight / ((height / 100) * (height / 100));

            if (bmi <= 18.5) {
                averageLife -= 1;
            } else if (bmi > 18.5 && bmi <= 24.9) {
                averageLife += 2;
            } else if (bmi >= 25 && bmi <= 29.9) {
                averageLife -= 1;
            } else if (bmi >= 30) {
                averageLife -= 3;
            }

            switch (continent) {
                case 'africa':
                    averageLife -= 5;
                    break;
                case 'antarctica':
                    averageLife -= 5;
                    break;
                case 'asia':
                    averageLife += 3;
                    break;
                case 'north-america':
                    averageLife += 3;
                    break;
                case 'south-america':
                    averageLife += 2;
                    break;
                case 'europe':
                    averageLife += 3;
                    break;
                case 'australia':
                    averageLife += 2;
                    break;
                default:
                    averageLife = averageLife;
                    break;
            }

            switch (live) {
                case 'city':
                    averageLife += 1;
                    break;
                case 'village':
                    averageLife += 2;
                    break;
                default:
                    averageLife = averageLife;
                    break;
            }

            switch (chronicDisease) {
                case 'yes':
                    averageLife -= 3;
                    break;
                case 'no':
                    averageLife += 3;
                    break;
                default:
                    averageLife = averageLife;
                    break;
            }

            switch (eatingHabits) {
                case 'unhealthy':
                    averageLife -= 3;
                    break;
                case 'healthy':
                    averageLife += 3;
                    break;
                case 'vegan':
                    averageLife += 4;
                    break;
                default:
                    averageLife = averageLife;
                    break;
            }

            switch (work) {
                case 'mentally':
                    averageLife += 3;
                    break;
                case 'physically':
                    averageLife -= 3;
                    break;
                default:
                    averageLife = averageLife;
                    break;
            }

            switch (workout) {
                case 'yes':
                    averageLife += 4;
                    break;
                case 'no':
                    averageLife -= 2;
                    break;
                default:
                    averageLife = averageLife;
                    break;
            }

            switch (sleep) {
                case '4-6':
                    averageLife -= 1;
                    break;
                case '7-9':
                    averageLife += 1;
                    break;
                case '10':
                    averageLife -= 1;
                    break;
                default:
                    averageLife = averageLife;
                    break;
            }

            switch (heritableDisease) {
                case 'yes':
                    averageLife -= 3;
                    break;
                case 'no':
                    averageLife = averageLife;
                    break;
                default:
                    averageLife = averageLife;
                    break;
            }

            break;
    }

    deathYear = parseInt(yearOfBirth) + averageLife;
    ageOfDeath = deathYear - parseInt(yearOfBirth);
    timeRemaining = deathYear - ((new Date).getFullYear());
}
//alert("death year: " + deathYear + "\nage of death: " + ageOfDeath + "\ntime remaining: " + timeRemaining);

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    // ... and run a function that displays the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
        //...the form gets submitted:
        calculateAverageLife();
        $("#regForm").html("");
		if(timeRemaining > 0){
			$("#regForm").append("<h3>You still have <b>" + timeRemaining + " years</b> to live!</h3>");
			$("#regForm").append("<p>You will die in <b>" + deathYear + "</b> aged <b>" + ageOfDeath + "</b> years old.</p>");
		}
		else{
			$("#regForm").append("<h3>Congratulations, you outlived yourself!</h3>");
			$("#regForm").append("<p>You would've died in <b>" + deathYear + "</b> aged <b>" + ageOfDeath + "</b> years old.</p>");
		}
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false:
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
}
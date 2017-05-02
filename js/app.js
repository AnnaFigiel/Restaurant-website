$(document).ready(function(){
   
    var ul = document.querySelector("nav.main-menu ul");
    var icon = document.getElementById("nav-icon"); 
    var nav = $("nav.main-menu");
    var menu = $("ul.menu");
    var offset = nav.offset().top; 
    var allMenuLinks = $("ul.menu a");
    
/* hamburger menu */   
    
        if (window.matchMedia("(max-width: 768px)")) {
            icon.addEventListener("click", function() {
                ul.classList.toggle("visible");
            });
        }

    $('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
        
    window.addEventListener("resize", function(){
        
        if(window.matchMedia("(min-width: 769px)").matches) {
            ul.classList.remove("visible");
        }    
    }); 
    
/* sticky menu */
    
    $(window).on("scroll", function(e){
        
        if (e.type=="resize"){ 
            offset = nav.offset().top; 
        }
        
        var currentScroll = $(window).scrollTop();
        
        if (currentScroll>offset) { 
            menu.addClass("sticky");
        } else { 
            menu.removeClass("sticky"); 
        }
        
    });

    
 /* scroll menu */   
    
    allMenuLinks.on("click", function(e) {
        
        e.preventDefault(); 
        
        var href = $(this).attr("href");
        var offset = $(href).offset().top;
        
        $("html, body").animate({
            scrollTop: offset
        }, 2000);
    });    

     /* slider */   

        var next = $("#nextPicture");
        var prev = $("#prevPicture");
        var ulSlider = $("ul.slider-list");
        var allLiSlider = ulSlider.find("li"); 
        var imgIndex = 1;
        var imgWidth = ulSlider.find("li").width();
        var firstImgClone = allLiSlider.first().clone();
        var lastImgClone = allLiSlider.last().clone();  
        
        firstImgClone.appendTo(ulSlider);
        lastImgClone.prependTo(ulSlider); 
        
        var newAllLi = $(".slider").find("li");

       // ulSlider.width(imgWidth*newAllLi.length);
    
        ulSlider.css("left", 6*imgWidth);
        
        next.on("click", function(){
               
           if (imgIndex < newAllLi.length-1){
               console.log('next');
               imgIndex++;
               ulSlider.animate({
                   left: '-='+imgWidth
               }, function(){
                   
                   if (imgIndex === newAllLi.length-1) {
                       
                       ulSlider.css("left", 6*imgWidth);
                       imgIndex = 1;
                   }
               });   
           } 
        });
    
        prev.on("click", function(){
            console.log('prev');
           if (imgIndex > 0){
               imgIndex--;
               ulSlider.animate({
                   left: '+='+imgWidth
               }, function(){
                   if (imgIndex === 0) {
                       
                       ulSlider.css("left", -(ulSlider.width() - 2*imgWidth));
                       imgIndex = 6;
                   }
               }); 
           }
        });
    
        function nextFoto(){
               
           if (imgIndex < newAllLi.length-1){
               imgIndex++;
               ulSlider.animate({
                   left: '-='+imgWidth
               }, function(){
                   
                   if (imgIndex === newAllLi.length-1) {
                       
                       ulSlider.css("left", 6*imgWidth);
                       imgIndex = 1;
                   }
               });   
           } 
        };

        setInterval(function(){ nextFoto(); }, 3000);
        
        
/* Restaurant menu */
        
    var allCategory = $(".dishes").find("h1");
    var allDishes = $(".dishes").find("p");
    
    allCategory.on("click", function(){
        $(this).next().slideToggle(200);
        $(this).siblings('p').not($(this).next()).slideUp();
        //$(this).toggleClass('this').not($(this)).removeClass('this');
    });        
        
/* See lead */
    
    var films = $(".films");
    var expand = films.find(".expand");
    var close = films.find(".close");
    
    console.log(close);
    expand.on("click", function() {
        
        $(this).parent().next().slideDown(1000);     
        
        // dodajemy aby strona się nie przewijała bo jest href="#":
        return false;
    });
    
    var allFilmsBoxs = $('.film-box');
   
    close.on("click", function() {
        
        //$(this).parent().slideUp(1000);
        allFilmsBoxs.slideUp(1000);
        
        return false;
        
    });    
    
    
/* Progress bar */
     
    var allButton = $("#lorem8").find("button");
    //var allProgressBar = $("span");
    
    allButton.on("click", function(){
       
        var numberBtn = $(this).data("nr");
        var colorBtn = $(this).data("color");
        var percentBtn = $(this).data("percent");
        $('#bar'+numberBtn).find('span').removeClass().addClass(colorBtn).animate({ 
            width: percentBtn+'%' 
        },2000);
        
    });
    
    $(function() {
    
    var allTabs = $(".tabs").find("li");
    var allSelected = $(".tabs").find(".selected");
    
    allTabs.on("click", function(){
        allSelected.hide(100);
        allSelected.eq($(this).index()).show(300);
    });
    
});
    
    
    
  /* Instrukcje warunkowe */
    
//    var weatherSection = $('#lorem12');
//    var allWeather = weatherSection.find('.weather');
//    var sun = weatherSection.find('#sun');
//    var rain = weatherSection.find('#rain');
//    var wind = weatherSection.find('#wind');
//    var umbrella = weatherSection.find('#umbrella');
//    var hat = weatherSection.find('#hat');
//    var sunglasses = weatherSection.find('#sunglasses');
//       
//  
//    allWeather.on("click", function(){
//        
//        if ($(this) === sun) {
//            console.log("weź parasol");
//        } else if ($(this) === rain) {
//                console.log("weź czapkę");
//            } else {
//                console.log("weź okulary przeciwsłoneczne")
//        }  
//    });     
//    
//    
    
 /* ToDoList */
    
    var taskList = document.getElementById("taskList");
    var taskButton = document.getElementById("addTaskButton");
    var taskInput = document.getElementById("taskInput"); 
    var removeFinishedTasksButton = document.getElementById("removeFinishedTasksButton");
    var counter = document.getElementById("counter"); 
    
    addTaskButton.addEventListener("click", addTask);
    removeFinishedTasksButton.addEventListener("click", removeFinished);
    
    function addTask () {
        
        if (taskInput.value.length <= 3 || taskInput.value.length >= 150) {
            console.log("za malo lub za duzo znakow");
            return; 
        }
        
        var newTask = document.createElement("li");
        var newTaskText = document.createElement("p");
        var buttonDelete = document.createElement("button");
        var buttonComplete = document.createElement("button");
        
        newTask.classList.add("newTask");
        newTaskText.innerHTML = taskInput.value;
        buttonDelete.innerHTML = "Usuń";
        buttonComplete.innerHTML = "Wykonane";
        
        newTask.appendChild(newTaskText);
        newTask.appendChild(buttonDelete);
        newTask.appendChild(buttonComplete);
        taskList.appendChild(newTask);  
        
        taskInput.value = "";
        
		buttonComplete.addEventListener("click", onButtonComplete);
        buttonDelete.addEventListener("click", onButtonDelete);
        
        findDone();
	}

	function onButtonComplete() {
		this.parentElement.classList.toggle("done");
        findDone();
	}  

    function onButtonDelete () {
		this.parentElement.parentElement.removeChild(this.parentElement);
        findDone();
	} 
    
    
    function removeFinished() {
        var elementsToRemove = document.querySelectorAll(".done");
        
        for (var i=0; elementsToRemove.length; i++) {
            elementsToRemove[i].parentElement.removeChild(elementsToRemove[i]);
        }
    } 
    
    function findDone() {
//  var notDone = document.querySelectorAll("li.newTask");  
    var notDone = taskList.querySelectorAll("li:not(.done)");
        counter.innerHTML = notDone.length;
    }    
    
    

/* Form */
    
//        var panelBody = $("div.panel-body");
//        var formGroup = panelBody.find("div.form-group");
//        var name = formGroup.find("input").eq(0);
//        var surname = formGroup.find("input").eq(1);
//        var email = formGroup.find("input").eq(2);
//        var submit = panelBody.find(".btn");
//        var error1 = panelBody.find("div.error-one"); 
//        var error2 = panelBody.find("div.error-two"); 
//        var successDiv = formGroup.find(".alert-success");
//        var dangerDiv = formGroup.find(".alert-danger");
//        var baseUrl = 'http://api.coderslab.pl/register';        
//    
//    submit.on("click", function(event) {
//            
//            event.preventDefault(); 
//            
//            var canSend = true;
//                 
//            if (name.val().length < 3){
//                
//                error1.fadeIn();
//                error1.text("Zarówno imię, jak i nazwisko muszą mieć co najmniej 3 znaki");
//                canSend = false;
//                } 
//            
//            if (surname.val().length < 3){
//                
//                error1.fadeIn();
//                error1.text("Zarówno imię, jak i nazwisko muszą mieć co najmniej 3 znaki");
//                canSend = false;
//                }  
//            
//            if (email.val().length < 5 || email.val().indexOf('@') < 0) { 
//               
//               error2.fadeIn();
//               error2.text("Email musi mieć co najmniej 5 znaków i zawierać znak @");
//                canSend = false;
//                }
//            
//            if (canSend === true) {
//                console.log("mozna wyslac"); 
//                
//                // obiekt do wysłania. w nim pobieram wartosci z inputów
//                var newPerson = {
//                    "name": name.val(),
//                    "surname": surname.val(),
//                    "address": email.val()
//                }
//    
////                function addPerson() { // dzięki tej funkcji dane z formularza będą dodać się do bazy
////          
////                // wysyłam obiekt        
////                    $.ajax({
////                            url: baseUrl,
////                            dataType: 'json',
////                            type: 'POST',
////                            data: JSON.stringify(newPerson)
////
////                    }).done(function(result){
////                       console.log(result);
////                       panelBody.fadeOut();
////                       successDiv.fadeIn();    
////                       successDiv.html("Udało się!"); 
////                       successDiv.css('display', 'block').css("background-color", "green").css("width", "200").css("hight", "200");    
////                    }).fail(function(error) {
////                       console.log(error);
////                       dangerDiv.fadeIn();
////                       dangerDiv.text("Nie udało się!");   
////                   });
////                }
////          
////          addPerson();  
////                 
////                
////            } else {
////                console.log("nie mozna wyslac");
////            }
// 
//                }
//        
    
    
    
    
    

/* background color - change: http://jsfiddle.net/nTGBZ/ */
    
    
});



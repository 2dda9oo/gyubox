document.addEventListener("DOMContentLoaded", function() {
    // travel-spot-circle 요소
    let travelSpotCircle = document.querySelector(".travel-spot-circle");

    // check-in-square 요소
    let checkInSquare = document.querySelector(".check-in-square");

    // check-out-square 요소
    let checkOutSquare = document.querySelector(".check-out-square");

    // guest-select-circle 요소
    let guestSelectCircle = document.querySelector(".guest-select-circle");

    // full-searchbar-space 요소
    let fullSearchbarSpace = document.querySelector(".full-searchbar-space");

    //invisible-screen 요소
    let invisibleScreen = document.querySelector(".invisible-screen");
    let calendarViewSpace = document.querySelector(".calendar-view-space");

    // 초기 상태를 저장
    let originalBackgroundColor = fullSearchbarSpace.style.backgroundColor;

    let originalCircleBackgroundColor = travelSpotCircle.style.backgroundColor;
    let originalCircleBoxShadow = travelSpotCircle.style.boxShadow;
    let originalCircleBorder = travelSpotCircle.style.border;

    let originalCheckInBackgroundColor = checkInSquare.style.backgroundColor;
    let originalCheckInBoxShadow = checkInSquare.style.boxShadow;
    let originalCheckInBorder = checkInSquare.style.border;

    let originalCheckOutBackgroundColor = checkOutSquare.style.backgroundColor;
    let originalCheckOutBoxShadow = checkOutSquare.style.boxShadow;
    let originalCheckOutBorder = checkOutSquare.style.border;

    let originalGuestSelectBackgroundColor = guestSelectCircle.style.backgroundColor;
    let originalGuestSelectBoxShadow = guestSelectCircle.style.boxShadow;
    let originalGuestSelectBorder = guestSelectCircle.style.border;

    // travel-spot-circle을 클릭했을 때 이벤트 처리
    travelSpotCircle.addEventListener("click", function() {
        // full-searchbar-space의 배경색을 변경합니다.
        fullSearchbarSpace.style.backgroundColor = "#E6E6E6";

        // travel-spot-circle의 배경색을 흰색으로 지정
        travelSpotCircle.style.backgroundColor = "#ffffff";
        // travel-spot-circle에 box-shadow와 border를 추가
        travelSpotCircle.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        travelSpotCircle.style.border = "1px solid #e0e0e0";

        // 나머지 요소들의 초기 상태 복원
        checkInSquare.style.backgroundColor = originalCheckInBackgroundColor;
        checkInSquare.style.boxShadow = originalCheckInBoxShadow;
        travelSpotCircle.style.border = originalCircleBorder;
        checkOutSquare.style.backgroundColor = originalCheckOutBackgroundColor;
        checkOutSquare.style.boxShadow = originalCheckOutBoxShadow;
        checkOutSquare.style.border = originalCheckOutBorder;
        guestSelectCircle.style.backgroundColor = originalGuestSelectBackgroundColor;
        guestSelectCircle.style.boxShadow = originalGuestSelectBoxShadow;
        guestSelectCircle.style.border = originalGuestSelectBorder;

        if (window.getComputedStyle(invisibleScreen).display === 'block'){
            invisibleScreen.style.backgroundColor = "#E6E6E6";
            invisibleScreen.style.border = "none";
            invisibleScreen.style.boxShadow = "none";
        }
    });

    // check-in-square을 클릭했을 때 이벤트 처리
    checkInSquare.addEventListener("click", function() {
        // full-searchbar-space의 배경색을 변경합니다.
        fullSearchbarSpace.style.backgroundColor = "#E6E6E6";

        checkInSquare.style.backgroundColor = "#ffffff";
        checkInSquare.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        checkInSquare.style.border = "1px solid #e0e0e0";

        // travel-spot-circle의 초기 상태로 복원합니다.
        travelSpotCircle.style.backgroundColor = originalCircleBackgroundColor;
        travelSpotCircle.style.boxShadow = originalCircleBoxShadow;
        travelSpotCircle.style.border = originalCircleBorder;
        checkOutSquare.style.backgroundColor = originalCheckOutBackgroundColor;
        checkOutSquare.style.boxShadow = originalCheckOutBoxShadow;
        checkOutSquare.style.border = originalCheckOutBorder;
        guestSelectCircle.style.backgroundColor = originalGuestSelectBackgroundColor;
        guestSelectCircle.style.boxShadow = originalGuestSelectBoxShadow;
        guestSelectCircle.style.border = originalGuestSelectBorder;
    });

    // check-out-square을 클릭했을 때 이벤트 처리
    checkOutSquare.addEventListener("click", function() {
    // full-searchbar-space의 배경색을 변경합니다.
        fullSearchbarSpace.style.backgroundColor = "#E6E6E6";

        checkOutSquare.style.backgroundColor = "#ffffff";
        checkOutSquare.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        checkOutSquare.style.border = "1px solid #e0e0e0";

        // check-out-square의 초기 상태로 복원합니다.
        travelSpotCircle.style.backgroundColor = originalCircleBackgroundColor;
        travelSpotCircle.style.boxShadow = originalCircleBoxShadow;
        travelSpotCircle.style.border = originalCircleBorder;
        checkInSquare.style.backgroundColor = originalCheckInBackgroundColor;
        checkInSquare.style.boxShadow = originalCheckInBoxShadow;
        checkInSquare.style.border = originalCheckInBorder;
        guestSelectCircle.style.backgroundColor = originalGuestSelectBackgroundColor;
        guestSelectCircle.style.boxShadow = originalGuestSelectBoxShadow;
        guestSelectCircle.style.border = originalGuestSelectBorder;
    });

    // guestSelectCircle을 클릭했을 때 이벤트 처리
    guestSelectCircle.addEventListener("click", function() {
    // full-searchbar-space의 배경색을 변경합니다.
        fullSearchbarSpace.style.backgroundColor = "#E6E6E6";

        guestSelectCircle.style.backgroundColor = "#ffffff";
        guestSelectCircle.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        guestSelectCircle.style.border = "1px solid #e0e0e0";

        // check-out-square의 초기 상태로 복원합니다.
        travelSpotCircle.style.backgroundColor = originalCircleBackgroundColor;
        travelSpotCircle.style.boxShadow = originalCircleBoxShadow;
        travelSpotCircle.style.border = originalCircleBorder;
        checkInSquare.style.backgroundColor = originalCheckInBackgroundColor;
        checkInSquare.style.boxShadow = originalCheckInBoxShadow;
        checkInSquare.style.border = originalCheckInBorder;
        checkOutSquare.style.backgroundColor = originalCheckOutBackgroundColor;
        checkOutSquare.style.boxShadow = originalCheckOutBoxShadow;
        checkOutSquare.style.border = originalCheckOutBorder;

        if (window.getComputedStyle(invisibleScreen).display === 'block'){
            invisibleScreen.style.backgroundColor = "#E6E6E6";
            invisibleScreen.style.border = "none";
            invisibleScreen.style.boxShadow = "none";
        }
    });

    invisibleScreen.addEventListener("click", function(){
        fullSearchbarSpace.style.backgroundColor = "#E6E6E6";
        invisibleScreen.style.backgroundColor = "#ffffff";
        invisibleScreen.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        invisibleScreen.style.border = "1px solid #e0e0e0";

        //나머지 검색창 영역을 초기상태로 복구
        travelSpotCircle.style.backgroundColor = originalCircleBackgroundColor;
        travelSpotCircle.style.boxShadow = originalCircleBoxShadow;
        travelSpotCircle.style.border = originalCircleBorder;
        checkInSquare.style.backgroundColor = originalCheckInBackgroundColor;
        checkInSquare.style.boxShadow = originalCheckInBoxShadow;
        checkInSquare.style.border = originalCheckInBorder;
        checkOutSquare.style.backgroundColor = originalCheckOutBackgroundColor;
        checkOutSquare.style.boxShadow = originalCheckOutBoxShadow;
        checkOutSquare.style.border = originalCheckOutBorder;
        guestSelectCircle.style.backgroundColor = originalGuestSelectBackgroundColor;
        guestSelectCircle.style.boxShadow = originalGuestSelectBoxShadow;
        guestSelectCircle.style.border = originalGuestSelectBorder;

    });

    // document에 클릭 이벤트 리스너를 추가합니다.
    document.addEventListener("click", function(event) {
        // 클릭된 요소가 검색창 요소가 아니라면 원래의 상태로 복원
        if (!event.target.closest(".travel-spot-circle") && !event.target.closest(".check-in-square")
        && !event.target.closest(".check-out-square") && !event.target.closest(".guest-select-circle")
        && !event.target.closest(".local-search-area") && !event.target.closest(".calendar-view-space")
        && !event.target.closest(".guest-control-space") && !event.target.closest(".invisible-screen")){
            fullSearchbarSpace.style.backgroundColor = originalBackgroundColor;
            travelSpotCircle.style.backgroundColor = originalCircleBackgroundColor;
            travelSpotCircle.style.boxShadow = originalCircleBoxShadow;
            travelSpotCircle.style.border = originalCircleBorder;
            checkInSquare.style.backgroundColor = originalCheckInBackgroundColor;
            checkInSquare.style.boxShadow = originalCheckInBoxShadow;
            checkInSquare.style.border = originalCheckInBorder;
            checkOutSquare.style.backgroundColor = originalCheckOutBackgroundColor;
            checkOutSquare.style.boxShadow = originalCheckOutBoxShadow;
            checkOutSquare.style.border = originalCheckOutBorder;
            guestSelectCircle.style.backgroundColor = originalGuestSelectBackgroundColor;
            guestSelectCircle.style.boxShadow = originalGuestSelectBoxShadow;
            guestSelectCircle.style.border = originalGuestSelectBorder;
            invisibleScreen.style.backgroundColor = "#FFFFFF";
            invisibleScreen.style.border = "none";
            invisibleScreen.style.boxShadow = "none";
        }
    });
});

function showLocalSearchArea() {
  var fullSearchbarSpace = document.querySelector(".full-searchbar-space");
  fullSearchbarSpace.classList.add('active');
}

//여행지 검색 클릭시 이벤트
document.addEventListener("click", function (event) {
    var localSearchArea = document.querySelector(".local-search-area");

    if (event.target.closest(".travel-spot-circle")) {
        localSearchArea.style.display = "block";
    } else if(!event.target.closest(".local-search-area") && !event.target.closest(".travel-spot-circle")) {
        localSearchArea.style.display = "none";
    }
});

//체크인, 체크아웃 클릭시 이벤트
document.addEventListener("click", function(event){
    var calendarViewSpace = document.querySelector(".calendar-view-space");
    var invisibleScreen = document.querySelector(".invisible-screen");

    //invisible-screen 활성화시
    if(window.getComputedStyle(invisibleScreen).display === 'block'){
        if(event.target.closest(".invisible-screen")){
                calendarViewSpace.style.display = "block";
            } else if(!event.target.closest(".invisible-screen") && !event.target.closest(".calendar-view-space")) {
                calendarViewSpace.style.display = "none";
            }
    } else {
        if(event.target.closest(".check-in-square") || event.target.closest(".check-out-square")){
                calendarViewSpace.style.display = "block";
            } else if(!event.target.closest(".check-in-square") && !event.target.closest(".calendar-view-space")
            && !event.target.closest(".check-out-square")) {
                calendarViewSpace.style.display = "none";
            }
    }

});



//게스트 선택란 클릭시 이벤트
document.addEventListener("click", function(event) {
    var guestControlSpace = document.querySelector(".guest-control-space");

    if(event.target.closest(".guest-select-circle")) {
        guestControlSpace.style.display = "block";
    } else if(!event.target.closest(".guest-control-space") && !event.target.closest(".guest-select-circle")){
        guestControlSpace.style.display = "none";
    }
});


//체크인, 아웃 날짜선택 탭 클릭
document.addEventListener('DOMContentLoaded', function() {
            // DOM이 로드된 후에 실행될 코드

            // 각 탭 버튼에 대한 이벤트 리스너 추가
            var dateSelectButton = document.querySelector('.date-select');
            var monthPartButton = document.querySelector('.month-part');
            var flexibleScheduleButton = document.querySelector('.flexible-schedule');

            var tabTitle = document.querySelector(".tab-title");
            var originalBackgroundColor = tabTitle.style.backgroundColor;

            var invisibleScreen = document.querySelector('.invisible-screen');
            var oneWeekBtn = document.querySelector('.one-week');
            var weekendBtn = document.querySelector('.weekend');
            var oneMonthBtn = document.querySelector('.one-month');
            var invisibleDuration = document.querySelector('.invisible-duration');

            dateSelectButton.addEventListener('click', function() {
                dateSelectButton.style.backgroundColor = "#FFFFFF";
                dateSelectButton.style.border = "1px solid #dddddd";
                monthPartButton.style.backgroundColor = "#E6E6E6";
                monthPartButton.style.border = "none";
                flexibleScheduleButton.style.backgroundColor = "#E6E6E6";
                flexibleScheduleButton.style.border = "none";

                invisibleScreen.style.display = "none";
            });

            monthPartButton.addEventListener('click', function() {
                monthPartButton.style.backgroundColor = "#FFFFFF";
                monthPartButton.style.border = "1px solid #dddddd";
                dateSelectButton.style.backgroundColor = "#E6E6E6";
                dateSelectButton.style.border = "none";
                flexibleScheduleButton.style.backgroundColor = "#E6E6E6";
                flexibleScheduleButton.style.border = "none";

                invisibleScreen.style.display = "block";

            });

            flexibleScheduleButton.addEventListener('click', function() {
                flexibleScheduleButton.style.backgroundColor = "#FFFFFF";
                flexibleScheduleButton.style.border = "1px solid #dddddd";
                monthPartButton.style.backgroundColor = "#E6E6E6";
                monthPartButton.style.border = "none";
                dateSelectButton.style.backgroundColor = "#E6E6E6";
                dateSelectButton.style.border = "none";

                invisibleScreen.style.display = "block";
                oneWeekBtn.style.border = '2px solid #000000';
                oneMonthBtn.style.border = "1px solid #dddddd";
                weekendBtn.style.border = "1px solid #dddddd";
                invisibleDuration.textContent = "언제든 일주일";
            });
});

document.addEventListener('DOMContentLoaded', function () {
  var buttonTabOne = document.querySelector('.date-select');
  var buttonTabTwo = document.querySelector('.month-part');
  var buttonTabThree = document.querySelector('.flexible-schedule');

  var tabOneContent = document.querySelector('.tab1');
  var tabTwoContent = document.querySelector('.tab2');
  var tabThreeContent = document.querySelector('.tab3');

  var checkInSquare = document.querySelector(".check-in-square");
  var checkOutSquare = document.querySelector(".check-out-square");
  var calendarViewSpace = document.querySelector(".calendar-view-space");

  buttonTabOne.addEventListener("click", function () {
    tabOneContent.style.display = "block"
    tabTwoContent.style.display = "none"
    tabThreeContent.style.display = "none"

    calendarViewSpace.style.height = '';
  });

  buttonTabTwo.addEventListener("click", function () {
    tabTwoContent.style.display = "block"
    tabOneContent.style.display = "none"
    tabThreeContent.style.display = "none"
    checkInSquare.style.backgroundColor = "#E6E6E6";
    checkInSquare.style.border = "none";
    checkInSquare.style.boxShadow = "none";
    checkOutSquare.style.backgroundColor = "#E6E6E6";
    checkOutSquare.style.border = "none";
    checkOutSquare.style.boxShadow = "none";
    calendarViewSpace.style.height = '';
  });

  buttonTabThree.addEventListener("click", function () {
      tabThreeContent.style.display = "block"
      tabOneContent.style.display = "none"
      tabTwoContent.style.display = "none"
      checkInSquare.style.backgroundColor = "#E6E6E6";
      checkInSquare.style.border = "none";
      checkInSquare.style.boxShadow = "none";
      checkOutSquare.style.backgroundColor = "#E6E6E6";
      checkOutSquare.style.border = "none";
      checkOutSquare.style.boxShadow = "none";
      calendarViewSpace.style.height = "480px";
    });
});

//지역 검색 영역 가로 스크롤
document.addEventListener('DOMContentLoaded', function() {
    var landTapList = document.querySelector('.land-tap-list');
    var isMouseDown = false;
    var startX, scrollLeft;

    landTapList.addEventListener('mousedown', function(e) {
        isMouseDown = true;
        startX = e.pageX - landTapList.offsetLeft;
        scrollLeft = landTapList.scrollLeft;
    });

    landTapList.addEventListener('mouseleave', function() {
        isMouseDown = false;
    });

    landTapList.addEventListener('mouseup', function() {
        isMouseDown = false;
    });

    landTapList.addEventListener('mousemove', function(e) {
        if (!isMouseDown) return;
        e.preventDefault();
        var x = e.pageX - landTapList.offsetLeft;
        var walk = (x - startX) * 2;
        landTapList.scrollLeft = scrollLeft - walk;
    });
});


//유연한 일정 영역 가로 스크롤
document.addEventListener('DOMContentLoaded', function() {
    var monthCollection = document.querySelector('.month-collection');
    var isMouseDown = false;
    var startX, scrollLeft;

    monthCollection.addEventListener('mousedown', function(e) {
        isMouseDown = true;
        startX = e.pageX - monthCollection.offsetLeft;
        scrollLeft = monthCollection.scrollLeft;
    });

    monthCollection.addEventListener('mouseleave', function() {
        isMouseDown = false;
    });

    monthCollection.addEventListener('mouseup', function() {
        isMouseDown = false;
    });

    monthCollection.addEventListener('mousemove', function(e) {
        if (!isMouseDown) return;
        e.preventDefault();
        var x = e.pageX - monthCollection.offsetLeft;
        var walk = (x - startX) * 2;
        monthCollection.scrollLeft = scrollLeft - walk;
    });
});

document.addEventListener("DOMContentLoaded", function() {
  var buttons = document.querySelectorAll('.land-tap-list button');
  var allWorldBtn = document.querySelector('.all-world-btn');

  allWorldBtn.style.color = "#222222";
  allWorldBtn.fontWeight = "bold";
  allWorldBtn.style.borderBottom = '2px solid #000000';

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      // 모든 버튼 초기화
      buttons.forEach(function(btn) {
        btn.style.color = ''; // 기본 텍스트 색상으로 초기화
        btn.style.borderBottom = ''; // 기본 border 초기화
        btn.style.fontWeight = ''; // 기본 굵기 초기화
      });

      // 클릭한 버튼 스타일 변경
      button.style.color = '#222222'; // 텍스트 색상 변경
      button.style.fontWeight = "bold";
      button.style.borderBottom = '2px solid #000000'; // border-bottom 스타일 변경
    });
  });
});


// 유연한 일정, 기간 버튼 클릭 이벤트
document.addEventListener("DOMContentLoaded", function() {
    var weekendBtn = document.querySelector('.weekend');
    var oneWeekBtn = document.querySelector('.one-week');
    var oneMonthBtn = document.querySelector('.one-month');

    var invisibleDuration = document.querySelector('.invisible-duration');

    weekendBtn.addEventListener('click', function(e) {
        weekendBtn.style.border = '2px solid #000000';
        invisibleDuration.textContent = "언제든 주말"
        oneWeekBtn.style.border = '1px solid #dddddd';
        oneMonthBtn.style.border = '1px solid #dddddd';
    });

    oneWeekBtn.addEventListener('click', function(e) {
        oneWeekBtn.style.border = '2px solid #000000';
        invisibleDuration.textContent = "언제든 일주일"
        weekendBtn.style.border = '1px solid #dddddd';
        oneMonthBtn.style.border = '1px solid #dddddd';
    });

    oneMonthBtn.addEventListener('click', function(e) {
        oneMonthBtn.style.border = '2px solid #000000';
        invisibleDuration.textContent = "언제든 한 달"
        weekendBtn.style.border = '1px solid #dddddd';
        oneWeekBtn.style.border = '1px solid #dddddd';
    });
});

//플러스 마이너스 버튼
document.addEventListener("DOMContentLoaded", function() {
    // Adult 영역
    var adultPlusButtons = document.querySelectorAll(".adult-area .plus-btn");
    var adultMinusButtons = document.querySelectorAll(".adult-area .minus-btn");
    var adultCountElement = document.querySelector(".adult-area .adult-count");
    var adultCount = 0;

    function updateAdultCount() {
        adultCountElement.innerText = adultCount;
    }

    function incrementAdult() {
        adultCount++;
        updateAdultCount();
    }

    function decrementAdult() {
        if (adultCount > 0) {
            adultCount--;
            updateAdultCount();
        }
    }

    adultPlusButtons.forEach(function(button) {
        button.addEventListener("click", incrementAdult);
    });

    adultMinusButtons.forEach(function(button) {
        button.addEventListener("click", decrementAdult);
    });


    // Child 영역
    var childPlusButtons = document.querySelectorAll(".child-area .plus-btn");
    var childMinusButtons = document.querySelectorAll(".child-area .minus-btn");
    var childCountElement = document.querySelector(".child-area .child-count");
    var childCount = 0;

    function updateChildCount() {
        childCountElement.innerText = childCount;
    }

    function incrementChild() {
        childCount++;
        updateChildCount();
    }

    function decrementChild() {
        if (childCount > 0) {
            childCount--;
            updateChildCount();
        }
    }

    childPlusButtons.forEach(function(button) {
        button.addEventListener("click", incrementChild);
    });

    childMinusButtons.forEach(function(button) {
        button.addEventListener("click", decrementChild);
    });


    // Baby 영역
    var babyPlusButtons = document.querySelectorAll(".baby-area .plus-btn");
    var babyMinusButtons = document.querySelectorAll(".baby-area .minus-btn");
    var babyCountElement = document.querySelector(".baby-area .baby-count");
    var babyCount = 0;

    function updateBabyCount() {
        babyCountElement.innerText = babyCount;
    }

    function incrementBaby() {
        babyCount++;
        updateBabyCount();
    }

    function decrementBaby() {
        if (babyCount > 0) {
            babyCount--;
            updateBabyCount();
        }
    }

    babyPlusButtons.forEach(function(button) {
        button.addEventListener("click", incrementBaby);
    });

    babyMinusButtons.forEach(function(button) {
        button.addEventListener("click", decrementBaby);
    });


    // Pet 영역
    var petPlusButtons = document.querySelectorAll(".pet-area .plus-btn");
    var petMinusButtons = document.querySelectorAll(".pet-area .minus-btn");
    var petCountElement = document.querySelector(".pet-area .pet-count");
    var petCount = 0;

    function updatePetCount() {
        petCountElement.innerText = petCount;
    }

    function incrementPet() {
        petCount++;
        updatePetCount();
    }

    function decrementPet() {
        if (petCount > 0) {
            petCount--;
            updatePetCount();
        }
    }

    petPlusButtons.forEach(function(button) {
        button.addEventListener("click", incrementPet);
    });

    petMinusButtons.forEach(function(button) {
        button.addEventListener("click", decrementPet);
    });
});

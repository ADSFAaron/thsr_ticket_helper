// 基本資料
// 起訖站：南港 1、台北 2、板橋 3、桃園 4、新竹 5、苗栗 6、台中 7、彰化 8、雲林 9、嘉義 10、台南 11、左營 12
startStation = 1;           // 起站
destinationStation = 12;    // 訖站
date = "2023/09/26";        // 乘車日期
trainNo = "849";            // 車次
ticketAmount = 2;           // 張數

// ======================== 班次資料 ========================

// 切換到車次選票
document.getElementsByName("bookingMethod")[0].value = "radio33";

// 設定起訖站
document.getElementsByName("selectStartStation")[0].value = startStation;
document.getElementsByName("selectDestinationStation")[0].value = destinationStation;

// 設定乘車日期
document.getElementsByName("toTrainIDInputField")[0].value = trainNo;
document.getElementById("toTimeInputField").value = date
document.getElementsByName("ticketPanel:rows:0:ticketAmount")[0].value = ticketAmount + "F";

// ======================== 個人資料 ========================
id = "";                  // 身分證字號
mobilePhone = "";         // 手機號碼
email = ""                // 電子信箱

// 設定取票資料
document.getElementById("idNumber").value = id;
document.getElementById("mobilePhone").value = mobilePhone;
document.getElementById("email").value = email;

// 同意條款
document.getElementsByName("agree")[0].checked = true;

// 送出
document.getElementById("isSubmit").click();
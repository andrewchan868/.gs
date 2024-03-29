/**
 * Sends emails with data from the current spreadsheet.
 */
function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 1 // First row of data to process
  var numRows = 114; // Number of rows to process //113
  // Fetch the range of cells b2:k2
  var dataRange = sheet.getRange(startRow, 1, numRows, 14);
  // Fetch values for each row in the Range.
  //var data = dataRange.getDisplayValues();
  var data = dataRange.getValue();
  //Logger.log(dataRange)
  //Logger.log(data)
  //var row = 2;
  //var test = SpreadsheetApp.getActiveSheet().getRange(2,2).getValue();
  //var test2 = SpreadsheetApp.getActiveSheet().getRange(2,4).getValue();
  //var test3 = SpreadsheetApp.getActiveSheet().getRange(2,13).getValue();
  //Logger.log(test)
  //Logger.log(test2)
  //Logger.log(test3)
  //MailApp.sendEmail(test, test2, test3);
  

//for 113
  for (var row = 2; row <= 114; row = row + 1){ 

    var body = SpreadsheetApp.getActiveSheet().getRange(row,13).getValue();
    var sub = SpreadsheetApp.getActiveSheet().getRange(row,4).getValue();
    var to = SpreadsheetApp.getActiveSheet().getRange(row,2).getValue();
    var emailAddress = to; // Second column
    var htmlbody = body;
    var subject = sub;

    var file = DriveApp.getFileById('<hide>');
    var file2 = DriveApp.getFileById('<hide>');

    Logger.log(emailAddress)
    Logger.log(htmlbody)
    GmailApp.sendEmail(emailAddress, subject, htmlbody,{attachments: [file.getAs(MimeType.PDF)],name: 'Andrew Chan - Doc},);
  
  }
}

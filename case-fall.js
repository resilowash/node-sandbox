const pollPublishResult = (status, date) => {
    let publishStatus = {
        statusMessage: "",
        publishDate: date
    };
    switch (status) {
        case 1:
        case 2:
        case 4:
            publishStatus.statusMessage = "Publishing";
            break;
        case 3:
        case 5:
            publishStatus.statusMessage = "Failed to Publish";
            break;
        case 6:
            publishStatus.statusMessage = "Successful Publish";
            break;
        default:
            publishStatus.statusMessage = "";


    }
    return publishStatus
}

let publishStatus;

publishStatus = pollPublishResult(1);
if(publishStatus.statusMessage === "Publishing") {
  console.log("PASS");
}
else {
  console.log("FAIL ", publishStatus.statusMessage );
}

publishStatus = pollPublishResult(3);
if(publishStatus.statusMessage === "Failed to Publish") {
  console.log("PASS");
}
else {
  console.log("FAIL ", publishStatus.statusMessage );
}


publishStatus = pollPublishResult(6);
if(publishStatus.statusMessage === "Successful Publish") {
  console.log("PASS");
}
else {
  console.log("FAIL ", publishStatus.statusMessage );
}

publishStatus = pollPublishResult(9);
if(publishStatus.statusMessage === "") {
  console.log("PASS");
}
else {
  console.log("FAIL ", publishStatus.statusMessage );
}

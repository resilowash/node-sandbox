class Intervals {

  pollPublishStatusInterval() {
      const cloj = () => {
          console.log("poll publish status interval");
          setInterval(() => {
              let status = this.props.publishStatus.statusCode;
              //Interval continues until the status is set in the state to complete
              if (status == 2) {
                  console.log('clearing interval');
                  clearInterval(cloj);
                  console.log('interval cleared');
              }
              getStatus();
          }, 1000)
      }
  }

  getStatus() {
    let status = Math.random(3);
    console.log("Result of getStatus ", status);
    return status;
  }

}

console.log("Creating Intervals");
let intervals = new Intervals();
intervals.pollPublishStatusInterval();

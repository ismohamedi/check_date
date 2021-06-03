function checkDate(startDate, endDate) {
    const today = new Date();
    var fullStartDate = ''
    var fullEndDate = ''

    startDate = new Date(startDate)
    endDate = new Date(endDate)

    if (startDate && endDate) {
            // check of the start date is passed
        if (((today.getMonth() + 1) < (startDate.getMonth() + 1)) && (today.getFullYear() > startDate.getFullYear())) {
            console.log("It was in last year")
            fullStartDate = today.getFullYear() - 1 + '-0' + (startDate.getMonth() + 1) + '-' + startDate.getDate()
            fullEndDate = today.getFullYear() + '-0' + (endDate.getMonth()+1) + '-' + endDate.getDate()

        // check if the start date is on current TimeRanges, this year
        } else if (((today.getMonth() + 1) >= (startDate.getMonth() + 1)) && (today.getDate() >= startDate.getDate()) && (today.getFullYear() === startDate.getFullYear())) {
            console.log("It is in this year")
            fullStartDate = today.getFullYear() + '-0' + (startDate.getMonth() + 1) + '-' + startDate.getDate()
            fullEndDate = (today.getFullYear() + 1) + '-0' + (endDate.getMonth() + 1) + '-' + endDate.getDate()

        // if not all of above then it is on next year
        } else {
            fullStartDate = today.getFullYear() + '-0' + (startDate.getMonth() + 1) + '-' + startDate.getDate()
            fullEndDate = today.getFullYear() + 1 + '-0' + (endDate.getMonth() + 1) + '-' + endDate.getDate()
        }
        return  {
            "startDate" : fullStartDate,
            "endDate" : fullEndDate
        }
    }
}

console.log(checkDate("2021-06-01", "2017-06-30").endDate)

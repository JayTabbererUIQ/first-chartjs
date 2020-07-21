const pollData=[
        {
        option: "spider-man",
        votes: 11,
        color: "rgb(255, 99, 132)"
    },
    {
        option: "The hulk",
        votes: 8,
        color: "rgb(0, 255, 0)"
    },
    {
        option: "Batman",
        votes: 2,
        color: "rgb(128, 128, 128)"
    },
    {
        option: "Iron-boy",
        votes: 10,
        color: "rgb(128, 0, 0)"
    },
    {
        option: "Phil",
        votes: 4,
        color: "rgb(255, 0, 255)"
    },

];


const ctx = document.getElementById('chart').getContext('2d');
const pollChart = new Chart(ctx, {
    type: 'bar', // sets the chart type. Bar, line, doughnut (mmm)... etc. see documentation.
    data: {
        labels: pollData.map(pollOption => pollOption.option), //displays the x-axis values (the horizontal ones)
        datasets: [{ //each object represents one data set
            label: '# of votes', //chart label
            data: pollData.map(pollOption => pollOption.votes), //in a bar chart, these are the data sets for the Y axis
            backgroundColor: pollData.map(pollOption => pollOption.color), //controls the background color for each bar. *if all the same colour, remove the array and set as one colour
            borderWidth: 3
            // The .map() method called above allows us to use the individual field in each instance of the pollData.
            // eg, each one contains an option, the amount of votes and a colour, above just puts them in the correct place.
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false //removing the label at the top of the chart
        }
    }
});
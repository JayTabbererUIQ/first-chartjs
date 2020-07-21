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

const pollForm = document.querySelector("#pollForm");


const pollFormSubmit = (event) => {
    event.preventDefault();
    const pollOptionInput = pollForm.querySelector("input[name='pollOptions']:checked");
    if (pollOptionInput) {
        const pollOptionValue = pollOptionInput.value;
        pollData.find(pollOption => pollOption.option === pollOptionValue).votes++;
        pollChart.data.datasets[0].data = pollData.map(pollOption => pollOption.votes)
        pollChart.update();
        pollForm.reset();
    }
}
pollForm.addEventListener("submit", pollFormSubmit);
// *bug note* this line was previously above the function, pollFormSubmit doesn't exist before the function, moving below corrected error.

Chart.defaults.global.defaultFontFamily = '"Comic Sans MS", cursive, sans-serif';
// Above sets a global font, if no other font has been specified, this is the font that should run.

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
        title: {
            display: true,
            text: 'A chart of some names',
            fontColor: "#333",
            fontSize: 20,
            padding: 20,
        },
        legend: {
            display: false, // Set the legend to on or off (boolean value)

            /*
            position: "right", // Set the position of the legend
            labels: {
                padding: 20, // adding padding to the legends, 10px is standard.
            }
            */
            // Above commented out code is an example from for the 'pie' and 'doughnut' charts.
        }
    }
});
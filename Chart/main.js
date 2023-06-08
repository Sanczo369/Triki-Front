var xValues = [];
var yValues = [];
generateData("Math.sin(x)", 2, 20, 0.5);

new Chart ("chart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: true,
            pointRadius: 2,
            borderColor: "rgba(6, 18, 44,1)",
            data: yValues
        }]
    },
    options: {
        legend: { display: true },
        title: {
            display: true,
            text: "chart",
            fontSize: 16
        }
    }
});
function generateData(value, i, j, step = 1) {
    for (let x = i; x <= j; x += step) {
        yValues.push(eval(value));
        xValues.push(x);
    }
}
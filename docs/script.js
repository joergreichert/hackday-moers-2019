var w = 500,
    h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = [
    'Asberg',
    'Eick',
    'Hülsdonk',
    'Moers-Mitte',
    'Moers-Ost',
    'Kapellen',
    'Meerbeck',
    'Meerfeld / Eicker Wiesen',
    'Repelen',
    'Schwafheim',
    'Utfort',
    'Vinn'
];

var minEinwohner = 4500;
var maxEinwohner = 15000;

function scaleEinwohner(absValue) {
    var absSpan = maxEinwohner - minEinwohner
    return ((absValue - minEinwohner) * 100) / absSpan
}

var minBeleuchtung = 350;
var maxBeleuchtung = 1000;

function scaleBeleuchtung(absValue) {
    var absSpan = maxBeleuchtung - minBeleuchtung
    return ((absValue - minBeleuchtung) * 100) / absSpan
}

//Data
var d = [
    [ // Asberg
        { axis: "Einwohneranzahl", value: scaleEinwohner(13971), realValue: 13971 },
        { axis: "Straßenbeleuchtung", value: scaleBeleuchtung(947), realValue: 947 },
        { axis: "Schulen", value: 0.42, realValue: 0.42 }
    ], [ // Eick
        { axis: "Einwohneranzahl", value: scaleEinwohner(5214), realValue: 5214 },
        { axis: "Straßenbeleuchtung", value: scaleBeleuchtung(384), realValue: 384 },
        { axis: "Schulen", value: 0.42, realValue: 0.42 }
    ], [ // Hülsdonk
        { axis: "Einwohneranzahl", value: scaleEinwohner(5577), realValue: 5577 },
        { axis: "Straßenbeleuchtung", value: scaleBeleuchtung(615), realValue: 615 },
        { axis: "Schulen", value: 0.42, realValue: 0.42 }
    ], [ // Moers-Mitte
        { axis: "Einwohneranzahl", value: scaleEinwohner(10222), realValue: 10222 },
        { axis: "Straßenbeleuchtung", value: scaleBeleuchtung(846), realValue: 846 },
        { axis: "Schulen", value: 0.42, realValue: 0.42 }
    ], [ // Moers-Ost
        { axis: "Einwohneranzahl", value: scaleEinwohner(10879), realValue: 10879 },
        { axis: "Straßenbeleuchtung", value: scaleBeleuchtung(687), realValue: 687 },
        { axis: "Schulen", value: 0.42, realValue: 0.42 }
    ], [ // Kapellen
        { axis: "Einwohneranzahl", value: scaleEinwohner(11336), realValue: 11336 },
        { axis: "Straßenbeleuchtung", value: scaleBeleuchtung(903), realValue: 903 },
        { axis: "Schulen", value: 0.42, realValue: 0.42 }
    ], [ // Meerbeck
        { axis: "Einwohneranzahl", value: scaleEinwohner(11403), realValue: 11403 },
        { axis: "Straßenbeleuchtung", value: scaleBeleuchtung(707), realValue: 707 },
        { axis: "Schulen", value: 0.42, realValue: 0.42 }
    ], [ // Meerfeld / Eicker Wiesen
        { axis: "Einwohneranzahl", value: scaleEinwohner(4795), realValue: 4795 },
        { axis: "Straßenbeleuchtung", value: scaleBeleuchtung(496), realValue: 496 },
        { axis: "Schulen", value: 0.42, realValue: 0.42 }
    ], [ // Repelen
        { axis: "Einwohneranzahl", value: scaleEinwohner(11975), realValue: 11975 },
        { axis: "Straßenbeleuchtung", value: scaleBeleuchtung(921), realValue: 921 },
        { axis: "Schulen", value: 0.42, realValue: 0.42 }
    ], [ // Schwafheim
        { axis: "Einwohneranzahl", value: scaleEinwohner(7340), realValue: 7340 },
        { axis: "Straßenbeleuchtung", value: scaleBeleuchtung(656), realValue: 656 },
        { axis: "Schulen", value: 0.42, realValue: 0.42 }
    ], [ // Utfort
        { axis: "Einwohneranzahl", value: scaleEinwohner(4982), realValue: 4982 },
        { axis: "Straßenbeleuchtung", value: scaleBeleuchtung(492), realValue: 492 },
        { axis: "Schulen", value: 0.42, realValue: 0.42 }
    ], [ // Vinn
        { axis: "Einwohneranzahl", value: scaleEinwohner(9206), realValue: 9206 },
        { axis: "Straßenbeleuchtung", value: scaleBeleuchtung(575), realValue: 575 },
        { axis: "Schulen", value: 0.42, realValue: 0.42 }
    ]
];

//Options for the Radar chart, other than default
var mycfg = {
    w: w,
    h: h,
    maxValue: 0.6,
    levels: 6,
    ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
    .selectAll('svg')
    .append('svg')
    .attr("width", w + 300)
    .attr("height", h)

//Create the title for the legend
var text = svg.append("text")
    .attr("class", "title")
    .attr('transform', 'translate(90,0)')
    .attr("x", w - 70)
    .attr("y", 10)
    .attr("font-size", "12px")
    .attr("fill", "#404040")
    .text("Sozialatlas-Bezirke");

//Initiate Legend	
var legend = svg.append("g")
    .attr("class", "legend")
    .attr("height", 100)
    .attr("width", 200)
    .attr('transform', 'translate(90,20)');

//Create colour squares
legend.selectAll('rect')
    .data(LegendOptions)
    .enter()
    .append("rect")
    .attr("x", w - 65)
    .attr("y", function (d, i) { return i * 20; })
    .attr("width", 10)
    .attr("height", 10)
    .style("fill", function (d, i) { return colorscale(i); });

//Create text next to squares
legend.selectAll('text')
    .data(LegendOptions)
    .enter()
    .append("text")
    .attr("x", w - 52)
    .attr("y", function (d, i) { return i * 20 + 9; })
    .attr("font-size", "11px")
    .attr("fill", "#737373")
    .text(function (d) { return d; }); 
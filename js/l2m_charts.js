$(function() {
	$('.chart1').highcharts({
		chart: {
			type: 'column',
		},
		data: {
			googleSpreadsheetKey: '1k0s6_zN6Dx3mwusV4k_4JXzfme7PM23Tn8HK6baDfGM',
			googleSpreadsheetWorksheet: 2,
			startColumn: 1,
			endColumn: 2,
			startRow: 0,
			endRow: 420
		},
		title: {
			text: 'charty mcchartface'
		},
	});
});
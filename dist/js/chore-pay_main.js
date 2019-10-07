let subhead=document.getElementsByClassName("chart-subhead"),headline=document.getElementById("chart-head");if(!headline)for(var i=0;i<subhead.length;i++)subhead[i].style.fontWeight="600";Highcharts.setOptions({lang:{thousandsSep:","}}),document.addEventListener("DOMContentLoaded",function(){setTimeout(function(){Highcharts.chart("chart-container",{chart:{type:"bar",styledMode:!0,spacingBottom:25,spacingRight:100},title:{text:null},data:{googleSpreadsheetKey:"1k0nOmtSdWLOChtJBgG2Uia6RBv79d-P40bGaQ45I7wE"},plotOptions:{series:{groupPadding:.1}},legend:{enabled:!1},xAxis:{labels:{style:{whiteSpace:"nowrap"}},tickLength:5},yAxis:{title:!1,labels:{useHTML:!0,overflow:"allow"},max:6},credits:{enabled:!1},tooltip:{shadow:!1,padding:10,valuePrefix:"$"},responsive:{rules:[{condition:{maxWidth:500},chartOptions:{chart:{spacingRight:10},legend:{align:"left",x:-18},tooltip:{enabled:!1}}}]}})},1e3)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic3ViaGVhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImhlYWRsaW5lIiwiZ2V0RWxlbWVudEJ5SWQiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJmb250V2VpZ2h0IiwiSGlnaGNoYXJ0cyIsInNldE9wdGlvbnMiLCJsYW5nIiwidGhvdXNhbmRzU2VwIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJjaGFydCIsInR5cGUiLCJzdHlsZWRNb2RlIiwic3BhY2luZ0JvdHRvbSIsInNwYWNpbmdSaWdodCIsInRpdGxlIiwidGV4dCIsImRhdGEiLCJnb29nbGVTcHJlYWRzaGVldEtleSIsInBsb3RPcHRpb25zIiwic2VyaWVzIiwiZ3JvdXBQYWRkaW5nIiwibGVnZW5kIiwiZW5hYmxlZCIsInhBeGlzIiwibGFiZWxzIiwid2hpdGVTcGFjZSIsInRpY2tMZW5ndGgiLCJ5QXhpcyIsInVzZUhUTUwiLCJvdmVyZmxvdyIsIm1heCIsImNyZWRpdHMiLCJ0b29sdGlwIiwic2hhZG93IiwicGFkZGluZyIsInZhbHVlUHJlZml4IiwicmVzcG9uc2l2ZSIsInJ1bGVzIiwiY29uZGl0aW9uIiwibWF4V2lkdGgiLCJjaGFydE9wdGlvbnMiLCJhbGlnbiIsIngiXSwibWFwcGluZ3MiOiJBQVFBLElBQUFBLFFBQUFDLFNBQUFDLHVCQUFBLGlCQUNBQyxTQUFBRixTQUFBRyxlQUFBLGNBQ0EsSUFBQUQsU0FDQSxJQUFBLElBQUFFLEVBQUEsRUFBQUEsRUFBQUwsUUFBQU0sT0FBQUQsSUFDQUwsUUFBQUssR0FBQUUsTUFBQUMsV0FBQSxNQUlBQyxXQUFBQyxXQUFBLENBQ0FDLEtBQUEsQ0FDQUMsYUFBQSxPQUlBWCxTQUFBWSxpQkFBQSxtQkFBQSxXQUNBQyxXQUFBLFdBQ0FMLFdBQUFNLE1BQUEsa0JBQUEsQ0FDQUEsTUFBQSxDQUNBQyxLQUFBLE1BQ0FDLFlBQUEsRUFDQUMsY0FBQSxHQUNBQyxhQUFBLEtBRUFDLE1BQUEsQ0FDQUMsS0FBQSxNQUVBQyxLQUFBLENBQ0FDLHFCQUFBLGdEQUdBQyxZQUFBLENBQ0FDLE9BQUEsQ0FDQUMsYUFBQSxLQW9CQUMsT0FBQSxDQUNBQyxTQUFBLEdBRUFDLE1BQUEsQ0FDQUMsT0FBQSxDQUNBdkIsTUFBQSxDQUNBd0IsV0FBQSxXQUdBQyxXQUFBLEdBRUFDLE1BQUEsQ0FDQWIsT0FBQSxFQUNBVSxPQUFBLENBQ0FJLFNBQUEsRUFDQUMsU0FBQSxTQUVBQyxJQUFBLEdBRUFDLFFBQUEsQ0FDQVQsU0FBQSxHQUVBVSxRQUFBLENBQ0FDLFFBQUEsRUFDQUMsUUFBQSxHQUNBQyxZQUFBLEtBRUFDLFdBQUEsQ0FDQUMsTUFBQSxDQUFBLENBQ0FDLFVBQUEsQ0FDQUMsU0FBQSxLQUVBQyxhQUFBLENBQ0EvQixNQUFBLENBQ0FJLGFBQUEsSUFFQVEsT0FBQSxDQUNBb0IsTUFBQSxPQUNBQyxHQUFBLElBRUFWLFFBQUEsQ0FDQVYsU0FBQSxVQU1BIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhZGRzIHNvY2lhbCBjbGFzcyB0byBnZXQgc29jaWFsIGNoYXJ0XG4vLyBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGFydC1hcmVhXCIpO1xuLy8gZm9yKHZhciBpID0gMDsgaSA8IGVsZW1lbnQubGVuZ3RoOyBpKyspXG4vLyB7XG4vLyAgICAgZWxlbWVudFtpXS5jbGFzc05hbWUgKz0gXCIgc29jaWFsXCI7XG4vLyB9XG5cbi8vIGJvbGRzIHRoZSBzdWJoZWFkIGlmIHRoZXJlIGlzIG5vIGhlYWRsaW5lXG5sZXQgc3ViaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGFydC1zdWJoZWFkXCIpLFxuICAgIGhlYWRsaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFydC1oZWFkXCIpO1xuICAgIGlmICghaGVhZGxpbmUpIHtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHN1YmhlYWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN1YmhlYWRbaV0uc3R5bGUuZm9udFdlaWdodCA9IFwiNjAwXCI7XG4gICAgICAgIH0gICAgICAgXG4gICAgIH1cblxuSGlnaGNoYXJ0cy5zZXRPcHRpb25zKHtcbiAgICBsYW5nOiB7XG4gICAgICB0aG91c2FuZHNTZXA6ICcsJ1xuICAgIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG15Q2hhcnQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIEhpZ2hjaGFydHMuY2hhcnQoJ2NoYXJ0LWNvbnRhaW5lcicsIHtcbiAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgICAgICAgICAgc3R5bGVkTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzcGFjaW5nQm90dG9tOiAyNSxcbiAgICAgICAgICAgICAgICBzcGFjaW5nUmlnaHQ6IDEwMFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHRleHQ6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgZ29vZ2xlU3ByZWFkc2hlZXRLZXk6ICcxazBuT210U2RXTE9DaHRKQmdHMlVpYTZSQnY3OWQtUDQwYkdhUTQ1STd3RSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBmb3IgYmFyIGNoYXJ0cyBvbmx5XG4gICAgICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHNlcmllczoge1xuICAgICAgICAgICAgICAgICAgICBncm91cFBhZGRpbmc6IDAuMVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gZm9yIGxpbmUgY2hhcnRzIG9ubHlcbiAgICAgICAgICAgIC8vIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICAvLyAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGxpbmVXaWR0aDogMSxcbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gY2xpcDogZmFsc2UsXG4gICAgICAgICAgICAvLyAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBzeW1ib2w6ICdjaXJjbGUnLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZmlsbENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6ICcjZmZmZmZmJ1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aWNrTGVuZ3RoOiA1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHVzZUhUTUw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnYWxsb3cnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYXg6IDZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVkaXRzOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgc2hhZG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgICAgICAgICB2YWx1ZVByZWZpeDogJyQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgICAgIHJ1bGVzOiBbe1xuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogNTAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGFydE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgc3BhY2luZ1JpZ2h0OiAxMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAtMThcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxMDAwKTtcbn0pOyJdfQ==

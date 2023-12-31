var o1=document.getElementById('tr');
var o2=document.getElementById('tja');
var o3=document.getElementById('tc');
var o4=document.getElementById('ts');
var o5=document.getElementById('oa');
var o6=document.getElementById('ms');
var o7=document.getElementById('jc');
var o8=document.getElementById('tcc');

o1.textContent='$'+40641129;
o2.textContent='$'+620;
o3.textContent=655;
o4.textContent=735;
o5.textContent='$'+110448.8;
o6.textContent=105;
o7.textContent=436;
o8.textContent=65;

const yValues = [100000,90000 , 49000, 47000, 46000, 34000];
const xValues = ["Everett", "Seattle", "Lynnwood", "Bothell", "Mukilteo","Edmonds"];

new Chart("myChart", {
  type: "horizontalBar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: 'rgba(18, 230, 163,1)',
      data: yValues
    }]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Revenue for November 2019"
    }
  }
});

const xValues1 = ["Service Plumbing", "Bid Work HVAC", "Service HVAC", "Bid Work Plumbing", "HWT Replacement", "Maintenance", "Material Sale"];
const yValues1 = [180000,130000 ,79000 , 76000, 44000, 42000, 10000];

new Chart("myChart1", {
  type: "horizontalBar",
  data: {
    labels: xValues1,
    datasets: [{
      backgroundColor: 'rgba(18, 230, 163,1)',
      data: yValues1
    }]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Revenue for November 2019"
    }
  }
});

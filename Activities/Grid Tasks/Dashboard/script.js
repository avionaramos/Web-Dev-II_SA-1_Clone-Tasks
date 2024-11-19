// Line Chart using Chart.js
const ctx = document.getElementById('lineChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'], // Example months
    datasets: [{
      label: 'User Growth',
      data: [10, 25, 35, 50, 65, 80], // Example data
      backgroundColor: 'rgba(54, 162, 235, 0.2)', // Transparent fill
      borderColor: 'white', // Line color
      borderWidth: 2,
      tension: 0.3 // Smoothing
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white' // Legend text color
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
          color: 'white' // X-axis title color
        },
        ticks: {
          color: 'white' // X-axis labels color
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)' // X-axis grid color
        }
      },
      y: {
        title: {
          display: true,
          text: 'Users',
          color: 'white' // Y-axis title color
        },
        ticks: {
          color: 'white' // Y-axis labels color
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)' // Y-axis grid color
        },
        beginAtZero: true
      }
    }
  }
});

// Dark Theme Toggle
const toggleCheckbox = document.getElementById('toggle');
const body = document.body;

toggleCheckbox.addEventListener('change', () => {
  body.classList.toggle('dark-theme');
});

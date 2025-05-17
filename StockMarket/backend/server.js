const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const stockData = {
  NASDAQ: [
    { time: '08:00', value: 12980, change: 1 },
    { time: '09:00', value: 12980, change: -1 },
    { time: '10:00', value: 13000, change: -1 },
    { time: '11:00', value: 13120, change: 1 },
    { time: '12:00', value: 13050, change: -1 },
    { time: '13:00', value: 13180, change: 1 },
    { time: '14:00', value: 13210, change: 1 },
    { time: '15:00', value: 13150, change: 1 },
    { time: '16:00', value: 13250, change: -1 },
    { time: '17:00', value: 13280, change: -1 },
    { time: '18:00', value: 13280, change: 1 },
    { time: '19:00', value: 14000, change: 1 },
    { time: '20:00', value: 14565, change: -1 },
    { time: '21:00', value: 12342, change: 1 },
    { time: '22:00', value: 15432, change: -1 },
    { time: '23:00', value: 15643, change: -1 },
    { time: '24:00', value: 14533, change: 1 },
    { time: '25:00', value: 13280, change: 1 }
  ],
  DOWJONES: [
    { time: '10:00', value: 34000 },
    { time: '11:00', value: 34100 },
    { time: '12:00', value: 34050 }
  ],
  SP500: [
    { time: '10:00', value: 4300 },
    { time: '11:00', value: 4320 },
    { time: '12:00', value: 4310 }
  ]
};

const historyData = {
  NASDAQ: [
    { time: '09:00', value: 12980 },
    { time: '10:00', value: 13000 },
    { time: '11:00', value: 13120 },
    { time: '12:00', value: 13050 },
    { time: '13:00', value: 13180 },
    { time: '14:00', value: 13210 },
    { time: '15:00', value: 13150 },
    { time: '16:00', value: 13250 },
    { time: '17:00', value: 13280 },
    { time: '18:00', value: 13280 },
    { time: '19:00', value: 14000 },
    { time: '20:00', value: 14565 },
    { time: '21:00', value: 12342 },
    { time: '22:00', value: 15432 },
    { time: '23:00', value: 15643 },
    { time: '24:00', value: 14533 },
    { time: '25:00', value: 13280 }
  ],
  DOWJONES: [
    { time: '09:00', value: 33900 },
    { time: '10:00', value: 34000 },
    { time: '11:00', value: 34100 },
    { time: '12:00', value: 34050 },
    { time: '13:00', value: 34180 },
    { time: '14:00', value: 34230 },
    { time: '15:00', value: 34170 },
    { time: '16:00', value: 34260 },
    { time: '17:00', value: 34300 }
  ],
  SP500: [
    { time: '09:00', value: 4280 },
    { time: '10:00', value: 4300 },
    { time: '11:00', value: 4320 },
    { time: '12:00', value: 4310 },
    { time: '13:00', value: 4330 },
    { time: '14:00', value: 4345 },
    { time: '15:00', value: 4330 },
    { time: '16:00', value: 4350 },
    { time: '17:00', value: 4360 }
  ]
};


// GET /stocks/NASDAQ
app.get('/stocks/:index', (req, res) => {
  const index = req.params.index.toUpperCase();
  const data = stockData[index];

  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ error: 'Stock index not found' });
  }
});

// GET /stocks/NASDAQ
app.get('/data/:index', (req, res) => {
  const index = req.params.index.toUpperCase();
  const data = historyData[index];

  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ error: 'Stock index not found' });
  }
});

app.listen(port, () => {
  console.log(`✅ Stock server running at http://localhost:${port}`);
});

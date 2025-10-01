const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
  try {
    const dataPath = path.join(__dirname, '../data/dashboardData.json');
    
    const rawData = fs.readFileSync(dataPath, 'utf8');
    const dashboardData = JSON.parse(rawData);
    
    res.json(dashboardData);
  } catch (error) {
    console.error('Erro ao carregar dados do dashboard:', error);
    res.status(500).json({ 
      error: 'Erro ao carregar dados do dashboard',
      details: error.message 
    });
  }
});

module.exports = router;
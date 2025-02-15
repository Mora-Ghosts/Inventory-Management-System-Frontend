import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';
import { Chart, ChartType, registerables } from 'chart.js';
import { StockValueDTO } from '../../interfaces/stock-value-dto';

@Component({
  selector: 'app-stock-value',
  templateUrl: './stock-value.component.html',
  styleUrls: ['./stock-value.component.css']
})
export class StockValueComponent implements OnInit {
  stockValues: StockValueDTO[]  = [];
  pieChart: any;
  barChart: any;

  constructor(private analyticsService: AnalyticsService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.loadStockValues();
  }

  loadStockValues(): void {
    this.analyticsService.getStockValue().subscribe(data => {
      this.stockValues = data;
      this.createPieChart();
      this.createBarChart();
    });
  }

  createPieChart(): void {
    
    const categories = [...new Set(this.stockValues.map(item => item.category))];
    const categoryValues = categories.map(cat => 
      this.stockValues
        .filter(item => item.category === cat)
        .reduce((sum, item) => sum + item.totalValue, 0)
    );

    this.pieChart = new Chart('pieChart', {
      type: 'pie' as ChartType,
      data: {
        labels: categories,
        datasets: [{
          label: 'Stock Value by Category',
          data: categoryValues,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        }]
      }
    });
  
  }

  createBarChart(): void {
    const productTypes = this.stockValues.map(item => item.productType);
    const values = this.stockValues.map(item => item.totalValue);

    this.barChart = new Chart('barChart', {
      type: 'bar' as ChartType,
      data: {
        labels: productTypes,
        datasets: [{
          label: 'Stock Value by Product Type',
          data: values,
          backgroundColor: '#4BC0C0'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

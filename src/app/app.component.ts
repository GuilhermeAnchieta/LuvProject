import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ProjetoMaria';

  images: string[] = [
    'assets/foto1.jpg',
    'assets/foto2.jpg',
    'assets/foto3.jpg',
    'assets/foto4.jpg',
    'assets/foto5.jpg',
    'assets/foto6.jpg'
    
  ];
  
  currentImage: number = 0;
  timeElapsed: string = '';

  ngOnInit() {
    this.updateTimer();
    setInterval(() => this.updateTimer(), 1000);
    setInterval(() => this.nextImage(), 3000);
  }

  updateTimer() {
    const startDate = new Date('2025-01-01T00:15:00');
    const now = new Date();
    const diff = now.getTime() - startDate.getTime();

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    this.timeElapsed = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  nextImage() {
    this.currentImage = (this.currentImage + 1) % this.images.length;
  }
}


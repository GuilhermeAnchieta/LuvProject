import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper'; // Importação do Swiper
import { EffectCards, Navigation, Pagination } from 'swiper/modules'; // Módulos específicos para o efeito de cartas, navegação e paginação
import 'swiper/css'; // Estilo base do Swiper
import 'swiper/css/effect-cards'; // Estilo específico para o efeito de cartas
import 'swiper/css/navigation';
import 'swiper/css/pagination';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ProjetoMaria';



  currentImage: number = 0;
  timeElapsed: string = '';

  ngOnInit() {
    this.updateTimer();
    setInterval(() => this.updateTimer(), 1000);
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.mySwiper', {
      effect: 'cards', // Ativa o efeito de cartas
      grabCursor: true, // Mostra o cursor de "agarrar" ao passar o mouse
      modules: [EffectCards], // Carrega o módulo de efeito de cartas
    });
  }

  updateTimer() {
    const startDate = new Date('2025-01-01T00:15:00');
    const now = new Date();
    const diff = now.getTime() - startDate.getTime();

    // Cálculo dos componentes de tempo
    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7); // Calcula as semanas
    const years = Math.floor(days / 365); // Calcula os anos

    // Ajusta os dias e semanas para não contar os dias já contabilizados nos anos e semanas
    const remainingDays = days % 365; // Dias restantes após calcular os anos
    const remainingWeeks = Math.floor(remainingDays / 7); // Semanas restantes após calcular os anos
    const finalDays = remainingDays % 7; // Dias restantes após calcular as semanas

    // Formata o tempo decorrido, ocultando os anos se for zero
    let timeString = years > 0 ? `${years} anos, ` : "";
    timeString += `${remainingWeeks} semanas, ${finalDays}d ${hours}h ${minutes}m ${seconds}s`;

    this.timeElapsed = timeString;
  }
}


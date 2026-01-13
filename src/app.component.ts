import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

interface Project {
  category: string;
  title: string;
  description: string;
  images: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AppComponent {
  // === PAGE CONTENT CONFIGURATION ===

  // --- Hero Section ---
  heroName = signal('Ariam Guerra');
  heroTitle = signal('Architect & Urban Planner');
  heroImageUrl = signal('https://i.postimg.cc/9FPCPxDF/mob-cinema.jpg');

  // --- Portfolio Section ---
  portfolioTitle = signal('Portfolio');
  portfolioSubtitle = signal("Across multiples discipline, my projects are driven by creating sustainable, cost-effective spaces that deeply reflect the client's needs. I prioritise a human-centric approach, utilising resistant materials and a minimalist aesthetic to deliver durable, low-maintenance designs that stand the test of time.");

  // --- Vision Section ---
  visionTitle = signal('The Vision');
  visionQuote = signal('Designing spaces that harmonize with nature, elevate human experience, and build resilient communities.');
  visionParagraph = signal(`My work is rooted in the belief that great architecture transcends mere structure. It's about creating environments that foster connection, inspire creativity, and promote well-being. From sustainable urban revitalization projects that breathe new life into cities, to tranquil residential spaces that connect inhabitants with the natural world, my focus is on thoughtful, human-centric design allied with Nature.`);
  visionImageUrl = signal('https://i.postimg.cc/Jns3GVcF/Generated-Image-January-12-2026-3-34PM.jpg');
  
  // --- Footer Section ---
  footerTitle = signal('Get in Touch');
  footerEmail = signal('ariamchaves1@gmail.com');
  socialLink = signal('https://github.com/example');

  // --- Projects Data ---
  projects = signal<Project[]>([
    {
      category: 'Urban Planning',
      title: 'Urban Requalification',
      description: 'A comprehensive plan to rejuvenate the downtown core, focusing on pedestrian-friendly spaces, mixed-use development, and green infrastructure. The project aims to create a vibrant and sustainable urban heart for the city.',
      images: [
        'https://i.postimg.cc/GtN3Z6xt/00-implantacao2.jpg',
        'https://i.postimg.cc/TYkDV8tw/CAD_press_implantacao.jpg',
        'https://i.postimg.cc/k57PqZdW/CAD_press_Mob_zoon.jpg',
        'https://i.postimg.cc/66P7qVqM/CAD-Press-Foz.jpg',
        'https://i.postimg.cc/9FPCPxDF/mob_cinema.jpg',
        'https://i.postimg.cc/qRbTmGSh/mob_night.jpg',
        'https://i.postimg.cc/h4YnTp97/mob_rain.jpg',
        'https://i.postimg.cc/ZRRkydnV/mob_floded.jpg',
        'https://i.postimg.cc/0jzqhwq1/mob_flooded_cinema.jpg',
        'https://i.postimg.cc/xTb2RMRh/011.jpg',
        'https://i.postimg.cc/jS0rk23t/amb2night.jpg',
        'https://i.postimg.cc/zBBmRgvT/setsetnight.jpg',
        'https://i.postimg.cc/bY5Pk317/set2.jpg',
        'https://i.postimg.cc/tCVj5W5P/set2night1.jpg',
        'https://i.postimg.cc/zBBmRgvT/setsetnight.jpg',
        'https://i.postimg.cc/PxxG8wJN/mob.jpg',
        'https://i.postimg.cc/4x6TCGjT/riodocecompleto.jpg',
        'https://i.postimg.cc/HL3Dx2pK/Generated_Image_December_29_2025_10_45PM.jpg',
        'https://i.postimg.cc/4x6TCGjT/riodocecompleto.jpg',
        'https://i.postimg.cc/85n2dzr8/doce_night.jpg'
      ]
    },
    {
      category: 'Vertical',
      title: 'Downtown Residential Hub',
      description: 'A state-of-the-art apartment building designed for collaboration and innovation. Featuring a dynamic brutalist facade, smart building technology, and flexible floor plans to accommodate the future uses of residential apartments with various possibilities due to the open floor structure.',
      images: [
        'https://i.postimg.cc/wjPNzb0z/01.jpg',
        'https://i.postimg.cc/j2J9818k/02.jpg',
        'https://i.postimg.cc/CMDF1r7q/03.png',
        'https://i.postimg.cc/RCfMFpdT/04.png',
        'https://i.postimg.cc/VL8zb9HL/05.png',
        'https://i.postimg.cc/wTp9s5bx/06.png',
        'https://i.postimg.cc/G3Yc2gKp/07.png',
        'https://i.postimg.cc/8PSTrdX4/08.png',
        'https://i.postimg.cc/CMDF1r7J/09.png',
        'https://i.postimg.cc/SNhmzLtq/010.png',
        'https://i.postimg.cc/J4LRB3dr/012.png'
      ]
    },
    {
      category: 'Modular',
      title: 'Serenity House',
      description: 'A private residence that blends seamlessly with its natural surroundings. The design emphasizes natural light, sustainable materials, and a strong connection between indoor and outdoor living spaces.',
      images: [
        'https://i.postimg.cc/263XBcgh/01.jpg',
        'https://i.postimg.cc/BQNDdSj3/02.jpg',
        'https://i.postimg.cc/C1d6fP9b/03.png',
        'https://i.postimg.cc/PxNF830R/04.png',
        'https://i.postimg.cc/RhHsg3S3/05.png',
        'https://i.postimg.cc/hvdy2JDG/05b.png',
        'https://i.postimg.cc/nrDR3sFC/06.png',
        'https://i.postimg.cc/FzLWTfrY/06b.png',
        'https://i.postimg.cc/7h2sKCH1/07.png',
        'https://i.postimg.cc/mkHXmcLz/08.png',
        'https://i.postimg.cc/HWchYNQf/09.png',
        'https://i.postimg.cc/8kJ0pYh9/10.png'
      ]
    },
    {
      category: 'Industrial',
      title: 'AeroHub Logistics Center',
      description: 'A next-generation logistics and manufacturing hub designed for efficiency and sustainability. The facility incorporates robotic automation, renewable energy sources, and a worker-centric design.',
      images: [
        'https://i.postimg.cc/FzxzqtjF/Generated_Image_January_08_2026_9_34PM.jpg',
        'https://i.postimg.cc/XqgqhMw7/Generated_Image_January_08_2026_9_57PM.jpg',
        'https://i.postimg.cc/bwVDpj44/planta_fabrica.jpg',
        'https://i.postimg.cc/hGJJG5qC/planta_fabrica_2pav.jpg',
        'https://i.postimg.cc/5tHHtRMg/fachada_fabrica.jpg',
        'https://i.postimg.cc/4x27sTjr/Corte_AA_fabrica.jpg',
        'https://i.postimg.cc/pd99d6tk/Corte_BB_fabrica.jpg'
      ]
    },
    {
      category: 'Institutional',
      title: 'Ana Nery Institute',
      description: 'The Ana Nery Institute is conceived as a sanctuary for spiritual learning and contemplation. The architecture is designed to foster a journey inward, with serene spaces, natural light, and materials that evoke tranquility. The design creates a harmonious environment that supports both individual reflection and communal gathering.',
      images: [
        'https://i.postimg.cc/LX5SPhGN/3D_first.jpg',
        'https://i.postimg.cc/W3Y2Y0Mj/ananrycad.jpg',
        'https://i.postimg.cc/0QX8X7p8/B_implantacao2.jpg',
        'https://i.postimg.cc/T2yLMPht/Generated_Image_January_11_2026_7_27PM.jpg',
        'https://i.postimg.cc/FzfhM1Zm/Generated_Image_January_11_2026_7_25PM.jpg',
        'https://i.postimg.cc/2jqbR53q/Generated_Image_January_11_2026_7_35PM.jpg',
        'https://i.postimg.cc/pdXr0WgK/Generated_Image_January_11_2026_8_53PM.jpg',
        'https://i.postimg.cc/HxFLsQjX/Generated_Image_January_11_2026_8_59PM.jpg',
        'https://i.postimg.cc/Njt5H7D7/zana_neri.png'
      ]
    },
    {
      category: 'Architecture Awards',
      title: 'MILAN AFFORDABLE HOUSING CHALLENGE',
      description: `This competition is part of Buildner’s Affordable Housing series, in partnership with ARCHHIVE BOOKS, showcasing projects that invent new means for driving down housing prices. Designers were tasked with proposing a flexible, innovative, pilot- phase concept for affordable housing within and around Milan, Italy. Buildner’s Affordable Housing design series posits that there is no one right answer to making housing affordable. Today, a host of new ideas and platforms are enabling people to own or purchase homes. These creative methods include everything from community co-living facilities, to 3D-printed homes, stackable modular homes, new zoning policies and new forms of transit-oriented development.`,
      images: [
        'https://i.postimg.cc/xdpmMx6q/00.jpg',
        'https://i.postimg.cc/TPNbg7tb/000.jpg',
        'https://i.postimg.cc/1RqFVKwg/0000.jpg',
        'https://i.postimg.cc/PqVDY3Sq/01-planta-CAD.jpg',
        'https://i.postimg.cc/wvtmVXrW/01a.jpg',
        'https://i.postimg.cc/Y0YmcpMf/03.jpg',
        'https://i.postimg.cc/JnykqNgC/03-facade.jpg',
        'https://i.postimg.cc/kGKtrnqf/04b.jpg',
        'https://i.postimg.cc/yYCZmSTC/111.jpg',
        'https://i.postimg.cc/tCdV2Crx/1111.jpg',
        'https://i.postimg.cc/LXrZ0qK9/2.jpg',
        'https://i.postimg.cc/JzPHCYCh/Generated-Image-December-19-2025-10-01AM.jpg',
        'https://i.postimg.cc/9f0RmPcV/Generated-Image-December-19-2025-10-03AM.jpg',
        'https://i.postimg.cc/FKzdrbhg/Generated-Image-December-19-2025-10-52AM.jpg',
        'https://i.postimg.cc/50FXvxH7/Generated-Image-December-19-2025-11-06AM.jpg',
        'https://i.postimg.cc/j20L4GPZ/Generated-Image-December-19-2025-11-09AM.jpg',
        'https://i.postimg.cc/JnBsJ1D8/Generated-Image-December-19-2025-12-17PM.jpg',
        'https://i.postimg.cc/G2s4Yc89/Generated-Image-December-19-2025-12-31PM.jpg',
        'https://i.postimg.cc/dtRT4tWY/Generated-Image-December-19-2025-8-40AM.jpg',
        'https://i.postimg.cc/28dB28Hv/Generated-Image-December-19-2025-9-42AM.jpg',
        'https://i.postimg.cc/nhH95b5k/Generated-Image-December-19-2025-9-44AM.jpg',
        'https://i.postimg.cc/FKzdrbhk/Generated-Image-December-19-2025-9-52AM.jpg',
        'https://i.postimg.cc/8ztfgXQY/Generated-Image-December-19-2025-9-57AM.jpg',
        'https://i.postimg.cc/FHDkXCXs/Generated-Image-December-19-2025-9-59AM.jpg',
        'https://i.postimg.cc/XqSpkTdv/Nano-Banana-Image-20251219-080548.jpg'
      ]
    },
    {
      category: 'Beach House',
      title: 'Buzios Residency',
      description: 'Nestled in the vibrant coastal city of Buzios, Rio de Janeiro, the Buzios Residency is a cozy beach house designed as a tranquil escape for guests and tourists. The project emphasizes the use of natural and sustainable materials to blend seamlessly with its lush landscape. It offers a perfect retreat, combining modern comfort with a deep connection to the stunning natural surroundings of the Brazilian coast.',
      images: [
        'https://i.postimg.cc/XqsQhJ8F/facade1render.jpg',
        'https://i.postimg.cc/y6pmwwKd/PLANTA_PAISAGISMO_cortada_VEGETA_O_01.jpg',
        'https://i.postimg.cc/13sD6PcY/00.jpg',
        'https://i.postimg.cc/g2m3RdqT/3D_front.jpg',
        'https://i.postimg.cc/vZb59ML2/3Dbck.jpg',
        'https://i.postimg.cc/L82jfR34/facade2render.jpg',
        'https://i.postimg.cc/3xY2p7F7/Generated_Image_January_11_2026_2_46PM.jpg',
        'https://i.postimg.cc/52b8v1Sb/Generated_Image_January_11_2026_2_49PM.jpg',
        'https://i.postimg.cc/Pxgwqk5z/06_FACHADA01_R01.jpg',
        'https://i.postimg.cc/bNjnc8MY/06_FACHADA02_R01.jpg'
      ]
    },
    {
      category: 'Retirement Home',
      title: 'Friends Forever Residence',
      description: 'A modern retirement community designed to provide comfort, safety, and a vibrant social environment. The facility features accessible design, ample natural light, beautiful gardens, and a variety of recreational amenities to foster a sense of well-being and community among residents.',
      images: [
        'https://i.postimg.cc/tgHQn9g9/00_copy.jpg',
        'https://i.postimg.cc/vmdFxGms/00_plan_View_jpeg.jpg',
        'https://i.postimg.cc/hGqWQKGD/04.jpg',
        'https://i.postimg.cc/KYrXnCKm/06.png',
        'https://i.postimg.cc/PqksvdqL/07.jpg',
        'https://i.postimg.cc/GpJ0k6BL/08_aguarela.jpg',
        'https://i.postimg.cc/YSfc1T4L/10.png',
        'https://i.postimg.cc/YSfc1T4q/09aguarela.jpg',
        'https://i.postimg.cc/wBcKhnty/11.jpg'
      ]
    }
  ]);
  
  // === MODAL AND FULLSCREEN STATE LOGIC ===
  selectedProject = signal<Project | null>(null);
  fullscreenImageIndex = signal<number | null>(null);

  currentFullscreenImageUrl = computed(() => {
    const project = this.selectedProject();
    const index = this.fullscreenImageIndex();
    if (project && index !== null) {
      return project.images[index];
    }
    return null;
  });

  openProjectModal(project: Project): void {
    document.body.style.overflow = 'hidden';
    this.selectedProject.set(project);
  }

  closeProjectModal(): void {
    document.body.style.overflow = 'auto';
    this.selectedProject.set(null);
    this.fullscreenImageIndex.set(null); // Also close fullscreen view
  }

  openFullscreen(index: number): void {
    this.fullscreenImageIndex.set(index);
  }

  closeFullscreen(): void {
    this.fullscreenImageIndex.set(null);
  }

  nextImage(): void {
    const project = this.selectedProject();
    const index = this.fullscreenImageIndex();
    if (project && index !== null) {
      const nextIndex = (index + 1) % project.images.length;
      this.fullscreenImageIndex.set(nextIndex);
    }
  }

  prevImage(): void {
    const project = this.selectedProject();
    const index = this.fullscreenImageIndex();
    if (project && index !== null) {
      const prevIndex = (index - 1 + project.images.length) % project.images.length;
      this.fullscreenImageIndex.set(prevIndex);
    }
  }
}
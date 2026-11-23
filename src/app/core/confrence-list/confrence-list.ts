
import { Component, signal } from '@angular/core';
import { Conference } from '../../Models/conference';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confrence-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './confrence-list.html',
  styleUrl: './confrence-list.css',
})
export class ConfrenceList {

  x = signal(2);

  searchitem = signal('');

  confList = signal<Conference[]>([
    {
      id: 1,
      titre: 'Angular Workshop',
      description: 'Découvrez les nouveautés d Angular et développez vos compétences.',
      date: new Date('2026-10-15'),
      lieu: 'Tunis',
      prix: 50,
      imageUrl: 'images/conf.jpg',
      nbPlaces: 30,
      category: 'Technologie',
      nbLikes: 3,
    },
    {
      id: 2,
      titre: 'Music Festival 2026',
      description: 'Un festival musical avec plusieurs artistes et groupes.',
      date: new Date('2026-10-22'),
      lieu: 'Sousse',
      prix: 80,
      imageUrl: 'images/conf.jpg',
      nbPlaces: 500,
      category: 'Musique',
      nbLikes: 12,
    },
    {
      id: 3,
      titre: 'AI & Innovation Conference',
      description: 'Une conférence consacrée à l’intelligence artificielle et à l’innovation.',
      date: new Date('2026-11-18'),
      lieu: 'Hammamet',
      prix: 100,
      imageUrl: 'images/conf.jpg',
      nbPlaces: 0,
      category: 'Technologie',
      nbLikes: 0,
    },
    {
      id: 4,
      titre: 'Startup Meetup',
      description: 'Une rencontre entre entrepreneurs, étudiants et professionnels.',
      date: new Date('2026-11-05'),
      lieu: 'Tunis',
      prix: 30,
      imageUrl: 'images/conf.jpg',
      nbPlaces: 0,
      category: 'Business',
      nbLikes: 0,
    },
  ]);

  favoritelist = signal<Conference[]>([]);

  // Fonction Favoris
  addFavorite(conf: Conference) {

    if (this.favoritelist().find(c => c.id === conf.id)) {
      alert("Cette conférence existe déjà dans les favoris !");
    } else {
      this.favoritelist.update(list => [...list, conf]);
      alert("Conférence ajoutée aux favoris !");
    }

  }

  // Fonction Like
  liker(conf: Conference) {

    this.confList.update(list =>
      list.map(c =>
        c.id === conf.id
          ? { ...c, nbLikes: c.nbLikes + 1 }
          : c
      )
    );

  }

  // Fonction Search
  filter() {

    return this.confList().filter(conf =>
      conf.titre.toLowerCase().includes(this.searchitem().toLowerCase())
    );

  }

}

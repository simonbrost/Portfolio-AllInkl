import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectlistService {

  constructor() { }

  projectlist = [
    {
      name: "Join",
      tools: "JavaScript|HTML|CSS",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      img: "join.png"
    },
    {
      name: "El Pollo Loco",
      tools: "JavaScript|HTML|CSS",
      description: "A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the killer chicken.",
      img: "polloloco.png"
    },
    {
      name: "Pokedex",
      tools: "Angular|TypeScript|SCSS",
      description: "My Approach to the famous Pokedex. Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
      img: "pokedex.png"
    }
  ]
}

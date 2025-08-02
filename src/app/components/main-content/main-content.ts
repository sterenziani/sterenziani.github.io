import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListSection } from "../list-section/list-section";
import { ProjectCard } from "../project-card/project-card";
import { Project } from '../../types/types';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule, ListSection, ProjectCard],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {

  webapps: Project[] = [
    {
      tags: ["React", "JavaScript", "TypeScript", "Neo4J"],
      title: "AutoScheduler",
      description: `
        Web application that lets universities entry their school's education programs and lecture information to automatically build schedules suited for each individual student's needs.

        Students can then search for schedules that optimize their academic roadmap and fit their available time slots and commute preferences.
      `,
      summary: "Summa cum laude Engineering thesis project",
      image: "autoScheduler.png",
      links: {
        source: "https://github.com/sterenziani/autoscheduler",
        video: "https://www.youtube.com/watch?v=fnlZASF83Mw"
      }
    },
    {
      tags: ["React", "JavaScript", "Java", "Spring", "PostgreSQL"],
      title: "Quest Log",
      description: `
        SPA webapp that allows users to create an account, explore a videogame catalog, rate and leave reviews, add titles to their wishlist, and more.

        Aimed at providing users with an easy way to track their time spent playing videogames, keep track of their backlog and how long it might take them to beat those games.
      `,
      summary: "University project | Web Applications Project",
      image: "questLog.png",
      links: {
        source: "https://github.com/sterenziani/QuestLog"
      }
    },
  ]

  games: Project[] = [
    {
      tags: ["C#", "Unity"],
      title: "Rayman Revenge",
      description: `
        3D videogame where the player must jump their way through a series of obstacles and floating platforms while battling enemies along their way.
          
        Features an interactive pause menu, scripted in-game cutscenes and a final boss to test the player's skills.
      `,
      summary: "University project | Introduction to Videogame Design",
      image: "rayman.png",
      links: {
        source: "https://github.com/sterenziani/rayman-revenge",
        demo: "https://sterenziani.itch.io/rayman-revenge"
      }
    },
    {
      tags: ["C#", "Unity"],
      title: "Firefight",
      description: `
        VR demo designed for training aspiring firefighters with only a mobile phone and cardboard VR.

        Features a semi-realistic scene where the player must put out a fire while it spreads and external stimuli put the player under stress they may experience in a real scenario.
      `,
      summary: "University project | Virtual Reality",
      image: "firefight.png",
      links: {
        source: "https://github.com/GonzaloHirsch/vr-firefighter-simulator",
        video: "https://www.youtube.com/watch?v=rz9AKIA7_iA"
      }
    },
    {
      tags: ["C#", "Unity"],
      title: "Bad Blood Feud",
      description: `
        Rhythm game where players must press the correct key as notes fly by, but these notes can be misleading.
        
        Their color and direction could correspond to different keys, so the player must pay attention to which they should be focusing on.
      `,
      summary: "Game Jam entry",
      image: "badBloodFeud.png",
      links: {
        source: "https://github.com/prausela/project-paprika",
        demo: "https://sterenziani.itch.io/bad-blood-feud"
      }
    },
    {
      tags: ["C#", "Unity"],
      title: "Pac-Man",
      description: `
        Unity re-implementation of the arcade classic, with infinite levels of increasing difficulty, animations and sound effects.
      `,
      summary: "University project | Introduction to Videogame Design",
      image: "pacman.png",
      links: {
        source: "https://github.com/sterenziani/rayman-revenge/tree/tp1",
        demo: "https://sterenziani.itch.io/pacman"
      }
    }
  ]

  tools: Project[] = [
    {
      tags: ["Python"],
      title: "Image Editor",
      description: `
        Image editor with a simplistic UI that lets the user apply filters to a picture file to modify colors, remove or apply noise, detect borders, etc.
      `,
      summary: "University project | Image Processing and Analysis",
      image: "ati.png",
      links: {
        source: "https://github.com/fpetrikovich/ati-tps",
      }
    },
    {
      tags: ["C"],
      title: "Picture Steganographer",
      description: `
        Tool that modifies a group of picture files to hide data belonging to a source image, but makes the modified pixels appear untouched to the naked eye.
        
        As long as any K (minimum defined amount) of those secret-carrying pictures can be accessed, the original image can be recovered through polynomial interpolation.
      `,
      summary: "University project | Cryptography and Security",
      image: "pictureSteganographer.png",
      links: {
        source: "https://github.com/sterenziani/Picture-Encrypter"
      }
    },
    {
      tags: ["C#", "Unity"],
      title: "Neural Network VR",
      description: `
        VR demo used to build and visualize neural networks defined as input, and help the user distinguish between different neural network architectures.
        
        The 3D visualization allows the user to see the amount of hidden layers, neurons on each layer, what the exit layer looks like, and how the neurons that make up the network interconnect.
      `,
      summary: "University project | Virtual Reality",
      image: "neuralNetwork.png",
      links: {
        source: "https://github.com/gprinc/VR-TP3",
        video: "https://www.youtube.com/watch?v=CShKH8M6tdw",
      }
    },
    {
      tags: ["C"],
      title: "Socks5 Proxy Server",
      description: `
        Proxy server based on RFCs 1928 and 1929 and a client app to configure the server in runtime.
        It can also scan for any plain text usernames and passwords sent in unencrypted HTTP and POP3 packages that get relayed.
      `,
      summary: "University project | Communication Protocols",
      image: "proxy.png",
      links: {
        source: "https://github.com/sterenziani/socks5"
      }
    },
    {
      tags: ["C", "Yacc", "Lex"],
      title: "C♭",
      description: `
        Imperative programming language with simple instructions and its respective compiler.
        
        Supports numeric, strings and music note types, as well as operations between some of these types.
      `,
      summary: "University project | Automata Theory, Formal Languages, and Compilers",
      image: "cFlat.png",
      links: {
        source: "https://github.com/sterenziani/chunchunmaru"
      }
    },
    {
      tags: ["C", "Assembly"],
      title: "HoraciOS",
      description: `
        Simple operating system based on x64BareBones by Rodrigo Rearden.
        
        Implements memory management, process scheduling, locks, semaphores, and inter-process communication.
      `,
      summary: "University project | Operating Systems",
      image: "horaciOS.png",
      links: {
        source: "https://github.com/sterenziani/HoraciOS"
      }
    },
  ]
}

"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

function Button({}: Props) {
  const [currentSentence, setCurrentSentence] = useState("");
  const [randomKey, setRandomKey] = useState("");

  const collection = {
    Motivation: [
      "La motivation vous permet de commencer. L'habitude vous permet de continuer.",
      "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez.",
      "Ne rêvez pas de votre vie, vivez vos rêves.",
      "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
      "Le succès n'est pas accidentel. C'est du travail acharné, de la persévérance, de l'apprentissage, de l'étude, du sacrifice et, surtout, de l'amour de ce que vous faites.",
      "Votre temps est limité, ne le gaspillez pas en menant une existence qui n'est pas la vôtre.",
      "La vie est ce qui arrive pendant que vous êtes occupé à faire d'autres projets.",
      "La seule limite à notre réalisation de demain sera nos doutes d'aujourd'hui.",
      "Ne comparez pas votre début avec le milieu de quelqu'un d'autre.",
      "Le meilleur moment pour planter un arbre était il y a 20 ans. Le deuxième meilleur moment est maintenant.",
    ],
    Perseverance: [
      "La persévérance n'est pas une course longue et solitaire. C'est une série de courses courtes, une après l'autre.",
      "Lorsque vous avez une vision claire de votre objectif, il est plus facile de ne pas abandonner.",
      "La persévérance est le secret de toutes les victoires.",
      "S'accrocher à quelque chose avec ténacité, voilà la vraie force.",
      "Le succès n'est pas donné. Il est gagné, à l'aide de sueur, de détermination et de travail acharné.",
      "Si vous tombez sept fois, levez-vous huit.",
      "La persévérance, c'est la persistance dans l'effort malgré les difficultés.",
      "Le succès est souvent le résultat d'une persévérance discrète.",
      "La persévérance est le chemin du succès.",
      "Continuez à avancer, même si chaque pas est petit. La persévérance conduit au succès.",
    ],
    Ambition: [
      "Ayez de grandes attentes et attendez-vous à atteindre quelque chose de grand.",
      "L'ambition est le chemin du succès. La persévérance est le véhicule dans lequel vous y arrivez.",
      "N'ayez pas peur d'être ambitieux à propos de vos objectifs. Chaque rêveur a commencé petit.",
      "L'ambition est le premier pas vers le succès. Le deuxième pas est l'action.",
      "Si vous ne rêvez pas assez grand, vous risquez de ne pas faire de grandes choses.",
      "Ne mesurez pas votre carrière à l'échelle des autres. Mesurez-la à l'échelle de vos propres ambitions.",
      "L'ambition est le levier qui soulève la charge.",
      "L'ambition est la passion pour le succès.",
      "Si vous ne travaillez pas dur pour vos rêves, quelqu'un d'autre vous embauchera pour travailler dur pour les siens.",
      "L'ambition est le moteur qui vous permet de démarrer et de persévérer.",
    ],
  };

  function generateRandomNumber(num: number): number {
    return Math.floor(Math.random() * num);
  }

  function randomGenerator(collection: Record<string, string[]>): string[] {
    let result = [];

    // Choisi une clé aléatoirement dasns l'objet
    const randomKeyIndex = generateRandomNumber(Object.keys(collection).length);
    const randomKey = Object.keys(collection)[randomKeyIndex];

    // Choisi un index aléatoire pour la clé sélectionnée
    const randomIndex = generateRandomNumber(collection[randomKey].length);

    // Ajoute le message correspondant à la clé sélectionnée dans le résultat
    result.push(collection[randomKey][randomIndex]);
    setRandomKey(randomKey);

    return result;
  }

  //const sentence = randomGenerator(collection).join("\n");

  function handleClick() {
    const newSentence = randomGenerator(collection).join("\n");
    setCurrentSentence(newSentence);
  }

  return (
    <div>
      <div>
        <Link onClick={handleClick} className="play-btn py-5" href="#" />
      </div>

      <div className="relative">
        <div className="border border-solid border-[#FFFBED3C] mx-5 h-auto p-4 rounded-lg shadow-md relative z-1">
          <span className="italic text-base">
            &quot; {currentSentence} &quot;
          </span>
        </div>
        <h2 className="absolute top-1 left-12 bg-[#000000] px-2 -mt-4 font-semibold text-white-700 z-10">
          {randomKey}
        </h2>
      </div>
    </div>
  );
}

export default Button;

// TODO:  - affichage en opacity 0 et passer a 1 au onClik du button
//        - faire en sorte que la clé s'affiche sur la bordure du cadre
//        - Trouver une police
//        - faire le footer

// ------------------------
// ? fonction qui retourne un message de chaque clés.
// // crée une boucle pour itérer sur Collection et qui récupérer au hasard un élement de chaque clés
// function randomGenerator(collection: Record<string, string[]>): string[] {
//   let result = [];
//   for (let key in collection) {
//     const randomIndex = generateRandomNumber(collection[key].length);
//     switch (key) {
//       case "motivation":
//         result.push(collection[key][randomIndex]);
//         break;
//       case "perseverance":
//         result.push(collection[key][randomIndex]);
//         break;
//       case "ambition":
//         result.push(collection[key][randomIndex]);
//         break;

//       default:
//         console.log("not found");
//         break;
//     }
//   }
//   console.log(result);
//   return result;
// }

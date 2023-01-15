<script setup>
import WelcomeItem from "./PresentationItem.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <img src="@/images/home/book.png" />
    </template>
    <template #heading>Presentation</template>
    L'objectif du projet est de mettre en place un réseau social spécialisé dans
    le partage d'évènements. Pour commencer, le site sera centré sur le partage
    de concerts avant de s'étendre dans le futur à d'autres types d'évènements
    (séance de cinéma, matchs de basketball,...). Les utilisateurs auront la
    possibilité d'ajouter manuellement des évènements. Il sera possible aux
    utilisateurs de s'authentifier et de partager leurs évènements avec leur
    cercle d'amis, en plus d'avoir la possibilité d'explorer librement les
    évènements ajoutés par l'ensemble de la communauté.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <img src="@/images/home/membres.png" />
    </template>
    <template #heading>Membres</template>
    Martin Pratoussy : développeur Backend et product owner <br />
    Harutiun Hovsepyan : développeur Frontend et scrum master<br />
    Louis Descours : DevOps<br />
    Thomas Risi : DevOps<br />
    Lorenzo De Iuliis : DevOps<br />
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <img src="@/images/home/links.png" />
    </template>
    <template #heading>Liens</template>
    Les icônes proviennent de <a href="https://www.flaticon.com" title="icons" class="underline">Flaticon</a> <br>
    Les images proviennent de <a href="https://www.freepik.com" title="images" class="underline">Freepik</a>
  </WelcomeItem>
</template>

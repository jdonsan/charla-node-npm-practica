<template>
    <div>
        <div v-if="error">
            <p>Algo funcionó mal, inténtalo de nuevo</p>
            <button @click="fetchCharacter">Recargar</button>
        </div>

        <div v-if="character" class="character-detail">
            <h1>#{{ character.id }}</h1>
            <h2>{{ character.name }}</h2>
            <img :src="character.image" alt="character.name">
            <p>{{ character.details }}</p>
        </div>
    </div>
</template>
<script src="./character-view.js"></script>
<style lang="scss" src="./character-view.scss"></style>
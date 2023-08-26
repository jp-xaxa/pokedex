fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  .then((response) => response.json())
  .then((allpokemon) => {
    var pokemons = []
    allpokemon.results.map((val) => {
      fetch(val.url)
        .then((response) => response.json())
        .then((pokemonsSingle) => {
          pokemons.push({
            nome: val.name,
            imagem: pokemonsSingle.sprites.front_default,
            tipo: pokemonsSingle.types,
          })
          if (pokemons.length === 151) {
            var pokemonBoxes = document.querySelector(".pokemon-boxes")
            pokemonBoxes.innerHTML = ""
            pokemons.map((pokemon) => {
              let typesHTML = ""
              if (pokemon.tipo.length === 1) {
                if (pokemon.tipo[0].type.name === "bug") {
                  typesHTML = `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />`
                }
                if (pokemon.tipo[0].type.name === "dark") {
                  typesHTML = `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />`
                }
                if (pokemon.tipo[0].type.name === "dragon") {
                  typesHTML = `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />`
                }
                if (pokemon.tipo[0].type.name === "electric") {
                  typesHTML = `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />`
                }
                if (pokemon.tipo[0].type.name === "fairy") {
                  typesHTML = `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />`
                }
                if (pokemon.tipo[0].type.name === "fighting") {
                  typesHTML = `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />`
                }
                if (pokemon.tipo[0].type.name === "fire") {
                  typesHTML = `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />`
                }
                if (pokemon.tipo[0].type.name === "flying") {
                  typesHTML = `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />`
                }
                if (pokemon.tipo[0].type.name === "ghost") {
                  typesHTML = `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />`
                }
                if (pokemon.tipo[0].type.name === "grass") {
                  typesHTML = `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />`
                }
                if (pokemon.tipo[0].type.name === "ground") {
                  typesHTML = `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />`
                }
                if (pokemon.tipo[0].type.name === "ice") {
                  typesHTML = `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />`
                }
                if (pokemon.tipo[0].type.name === "normal") {
                  typesHTML = `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />`
                }
                if (pokemon.tipo[0].type.name === "poison") {
                  typesHTML = `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />`
                }
                if (pokemon.tipo[0].type.name === "psychic") {
                  typesHTML = `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />`
                }
                if (pokemon.tipo[0].type.name === "rock") {
                  typesHTML = `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />`
                }
                if (pokemon.tipo[0].type.name === "steel") {
                  typesHTML = `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />`
                }
                if (pokemon.tipo[0].type.name === "water") {
                  typesHTML = `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />`
                }
              } else if (pokemon.tipo.length === 2) {
                if (pokemon.tipo[0].type.name === "bug") {
                  if (pokemon.tipo[1].type.name === "dark") {
                    typesHTML =
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />` +
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dragon") {
                    typesHTML =
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />` +
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "electric") {
                    typesHTML =
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />` +
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fairy") {
                    typesHTML =
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />` +
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fighting") {
                    typesHTML =
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />` +
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fire") {
                    typesHTML =
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />` +
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "flying") {
                    typesHTML =
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />` +
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ghost") {
                    typesHTML =
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />` +
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "grass") {
                    typesHTML =
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />` +
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ground") {
                    typesHTML =
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />` +
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ice") {
                    typesHTML =
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />` +
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "normal") {
                    typesHTML =
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />` +
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "poison") {
                    typesHTML =
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />` +
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "psychic") {
                    typesHTML =
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />` +
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "rock") {
                    typesHTML =
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />` +
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "steel") {
                    typesHTML =
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />` +
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "water") {
                    typesHTML =
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />` +
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />`
                  }
                }
                if (pokemon.tipo[0].type.name === "dark") {
                  if (pokemon.tipo[1].type.name === "bug") {
                    typesHTML =
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />` +
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dragon") {
                    typesHTML =
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />` +
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "electric") {
                    typesHTML =
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />` +
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fairy") {
                    typesHTML =
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />` +
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fighting") {
                    typesHTML =
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />` +
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fire") {
                    typesHTML =
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />` +
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "flying") {
                    typesHTML =
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />` +
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ghost") {
                    typesHTML =
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />` +
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "grass") {
                    typesHTML =
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />` +
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ground") {
                    typesHTML =
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />` +
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ice") {
                    typesHTML =
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />` +
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "normal") {
                    typesHTML =
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />` +
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "poison") {
                    typesHTML =
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />` +
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "psychic") {
                    typesHTML =
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />` +
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "rock") {
                    typesHTML =
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />` +
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "steel") {
                    typesHTML =
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />` +
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "water") {
                    typesHTML =
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />` +
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />`
                  }
                }
                if (pokemon.tipo[0].type.name === "dragon") {
                  if (pokemon.tipo[1].type.name === "bug") {
                    typesHTML =
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />` +
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dark") {
                    typesHTML =
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />` +
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "electric") {
                    typesHTML =
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />` +
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fairy") {
                    typesHTML =
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />` +
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fighting") {
                    typesHTML =
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />` +
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fire") {
                    typesHTML =
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />` +
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "flying") {
                    typesHTML =
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />` +
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ghost") {
                    typesHTML =
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />` +
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "grass") {
                    typesHTML =
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />` +
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ground") {
                    typesHTML =
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />` +
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ice") {
                    typesHTML =
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />` +
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "normal") {
                    typesHTML =
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />` +
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "poison") {
                    typesHTML =
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />` +
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "psychic") {
                    typesHTML =
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />` +
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "rock") {
                    typesHTML =
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />` +
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "steel") {
                    typesHTML =
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />` +
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "water") {
                    typesHTML =
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />` +
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />`
                  }
                }
                if (pokemon.tipo[0].type.name === "electric") {
                  if (pokemon.tipo[1].type.name === "bug") {
                    typesHTML =
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />` +
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dark") {
                    typesHTML =
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />` +
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dragon") {
                    typesHTML =
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />` +
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fairy") {
                    typesHTML =
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />` +
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fighting") {
                    typesHTML =
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />` +
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fire") {
                    typesHTML =
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />` +
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "flying") {
                    typesHTML =
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />` +
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ghost") {
                    typesHTML =
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />` +
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "grass") {
                    typesHTML =
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />` +
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ground") {
                    typesHTML =
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />` +
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ice") {
                    typesHTML =
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />` +
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "normal") {
                    typesHTML =
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />` +
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "poison") {
                    typesHTML =
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />` +
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "psychic") {
                    typesHTML =
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />` +
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "rock") {
                    typesHTML =
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />` +
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "steel") {
                    typesHTML =
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />` +
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "water") {
                    typesHTML =
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />` +
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />`
                  }
                }
                if (pokemon.tipo[0].type.name === "fairy") {
                  if (pokemon.tipo[1].type.name === "bug") {
                    typesHTML =
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />` +
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dark") {
                    typesHTML =
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />` +
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dragon") {
                    typesHTML =
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />` +
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "electric") {
                    typesHTML =
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />` +
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fighting") {
                    typesHTML =
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />` +
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fire") {
                    typesHTML =
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />` +
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "flying") {
                    typesHTML =
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />` +
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ghost") {
                    typesHTML =
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />` +
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "grass") {
                    typesHTML =
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />` +
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ground") {
                    typesHTML =
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />` +
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ice") {
                    typesHTML =
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />` +
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "normal") {
                    typesHTML =
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />` +
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "poison") {
                    typesHTML =
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />` +
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "psychic") {
                    typesHTML =
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />` +
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "rock") {
                    typesHTML =
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />` +
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "steel") {
                    typesHTML =
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />` +
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "water") {
                    typesHTML =
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />` +
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />`
                  }
                }
                if (pokemon.tipo[0].type.name === "fighting") {
                  if (pokemon.tipo[1].type.name === "bug") {
                    typesHTML =
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />` +
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dark") {
                    typesHTML =
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />` +
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dragon") {
                    typesHTML =
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />` +
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "electric") {
                    typesHTML =
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />` +
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fairy") {
                    typesHTML =
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />` +
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fire") {
                    typesHTML =
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />` +
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "flying") {
                    typesHTML =
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />` +
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ghost") {
                    typesHTML =
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />` +
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "grass") {
                    typesHTML =
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />` +
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ground") {
                    typesHTML =
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />` +
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ice") {
                    typesHTML =
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />` +
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "normal") {
                    typesHTML =
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />` +
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "poison") {
                    typesHTML =
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />` +
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "psychic") {
                    typesHTML =
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />` +
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "rock") {
                    typesHTML =
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />` +
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "steel") {
                    typesHTML =
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />` +
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "water") {
                    typesHTML =
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />` +
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />`
                  }
                }
                if (pokemon.tipo[0].type.name === "fire") {
                  if (pokemon.tipo[1].type.name === "bug") {
                    typesHTML =
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />` +
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dark") {
                    typesHTML =
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />` +
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dragon") {
                    typesHTML =
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />` +
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "electric") {
                    typesHTML =
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />` +
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fairy") {
                    typesHTML =
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />` +
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fighting") {
                    typesHTML =
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />` +
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "flying") {
                    typesHTML =
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />` +
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ghost") {
                    typesHTML =
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />` +
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "grass") {
                    typesHTML =
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />` +
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ground") {
                    typesHTML =
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />` +
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ice") {
                    typesHTML =
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />` +
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "normal") {
                    typesHTML =
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />` +
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "poison") {
                    typesHTML =
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />` +
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "psychic") {
                    typesHTML =
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />` +
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "rock") {
                    typesHTML =
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />` +
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "steel") {
                    typesHTML =
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />` +
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "water") {
                    typesHTML =
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />` +
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />`
                  }
                }
                if (pokemon.tipo[0].type.name === "flying") {
                  if (pokemon.tipo[1].type.name === "bug") {
                    typesHTML =
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />` +
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dark") {
                    typesHTML =
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />` +
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dragon") {
                    typesHTML =
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />` +
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "electric") {
                    typesHTML =
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />` +
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fairy") {
                    typesHTML =
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />` +
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fighting") {
                    typesHTML =
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />` +
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fire") {
                    typesHTML =
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />` +
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ghost") {
                    typesHTML =
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />` +
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "grass") {
                    typesHTML =
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />` +
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ground") {
                    typesHTML =
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />` +
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ice") {
                    typesHTML =
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />` +
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "normal") {
                    typesHTML =
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />` +
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "poison") {
                    typesHTML =
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />` +
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "psychic") {
                    typesHTML =
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />` +
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "rock") {
                    typesHTML =
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />` +
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "steel") {
                    typesHTML =
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />` +
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "water") {
                    typesHTML =
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />` +
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />`
                  }
                }
                if (pokemon.tipo[0].type.name === "ghost") {
                  if (pokemon.tipo[1].type.name === "bug") {
                    typesHTML =
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />` +
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dark") {
                    typesHTML =
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />` +
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dragon") {
                    typesHTML =
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />` +
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "electric") {
                    typesHTML =
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />` +
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fairy") {
                    typesHTML =
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />` +
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fighting") {
                    typesHTML =
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />` +
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fire") {
                    typesHTML =
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />` +
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "flying") {
                    typesHTML =
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />` +
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "grass") {
                    typesHTML =
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />` +
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ground") {
                    typesHTML =
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />` +
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ice") {
                    typesHTML =
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />` +
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "normal") {
                    typesHTML =
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />` +
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "poison") {
                    typesHTML =
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />` +
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "psychic") {
                    typesHTML =
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />` +
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "rock") {
                    typesHTML =
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />` +
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "steel") {
                    typesHTML =
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />` +
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "water") {
                    typesHTML =
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />` +
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />`
                  }
                }
                if (pokemon.tipo[0].type.name === "grass") {
                  if (pokemon.tipo[1].type.name === "bug") {
                    typesHTML =
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />` +
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dark") {
                    typesHTML =
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />` +
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dragon") {
                    typesHTML =
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />` +
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "electric") {
                    typesHTML =
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />` +
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fairy") {
                    typesHTML =
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />` +
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fighting") {
                    typesHTML =
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />` +
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fire") {
                    typesHTML =
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />` +
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "flying") {
                    typesHTML =
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />` +
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ghost") {
                    typesHTML =
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />` +
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ground") {
                    typesHTML =
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />` +
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ice") {
                    typesHTML =
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />` +
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "normal") {
                    typesHTML =
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />` +
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "poison") {
                    typesHTML =
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />` +
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "psychic") {
                    typesHTML =
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />` +
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "rock") {
                    typesHTML =
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />` +
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "steel") {
                    typesHTML =
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />` +
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "water") {
                    typesHTML =
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />` +
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />`
                  }
                }
                if (pokemon.tipo[0].type.name === "ground") {
                  if (pokemon.tipo[1].type.name === "bug") {
                    typesHTML =
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />` +
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dark") {
                    typesHTML =
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />` +
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dragon") {
                    typesHTML =
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />` +
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "electric") {
                    typesHTML =
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />` +
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fairy") {
                    typesHTML =
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />` +
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fighting") {
                    typesHTML =
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />` +
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fire") {
                    typesHTML =
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />` +
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "flying") {
                    typesHTML =
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />` +
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ghost") {
                    typesHTML =
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />` +
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "grass") {
                    typesHTML =
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />` +
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ice") {
                    typesHTML =
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />` +
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "normal") {
                    typesHTML =
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />` +
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "poison") {
                    typesHTML =
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />` +
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "psychic") {
                    typesHTML =
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />` +
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "rock") {
                    typesHTML =
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />` +
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "steel") {
                    typesHTML =
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />` +
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "water") {
                    typesHTML =
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />` +
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />`
                  }
                }
                if (pokemon.tipo[0].type.name === "ice") {
                  if (pokemon.tipo[1].type.name === "bug") {
                    typesHTML =
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />` +
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dark") {
                    typesHTML =
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />` +
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dragon") {
                    typesHTML =
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />` +
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "electric") {
                    typesHTML =
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />` +
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fairy") {
                    typesHTML =
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />` +
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fighting") {
                    typesHTML =
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />` +
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fire") {
                    typesHTML =
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />` +
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "flying") {
                    typesHTML =
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />` +
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ghost") {
                    typesHTML =
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />` +
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "grass") {
                    typesHTML =
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />` +
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ground") {
                    typesHTML =
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />` +
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "normal") {
                    typesHTML =
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />` +
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "poison") {
                    typesHTML =
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />` +
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "psychic") {
                    typesHTML =
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />` +
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "rock") {
                    typesHTML =
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />` +
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "steel") {
                    typesHTML =
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />` +
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "water") {
                    typesHTML =
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />` +
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />`
                  }
                }
                if (pokemon.tipo[0].type.name === "normal") {
                  if (pokemon.tipo[1].type.name === "bug") {
                    typesHTML =
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />` +
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dark") {
                    typesHTML =
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />` +
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dragon") {
                    typesHTML =
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />` +
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "electric") {
                    typesHTML =
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />` +
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fairy") {
                    typesHTML =
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />` +
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fighting") {
                    typesHTML =
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />` +
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fire") {
                    typesHTML =
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />` +
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "flying") {
                    typesHTML =
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />` +
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ghost") {
                    typesHTML =
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />` +
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "grass") {
                    typesHTML =
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />` +
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ground") {
                    typesHTML =
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />` +
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ice") {
                    typesHTML =
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />` +
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "poison") {
                    typesHTML =
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />` +
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "psychic") {
                    typesHTML =
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />` +
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "rock") {
                    typesHTML =
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />` +
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "steel") {
                    typesHTML =
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />` +
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "water") {
                    typesHTML =
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />` +
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />`
                  }
                }
                if (pokemon.tipo[0].type.name === "poison") {
                  typesHTML = `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />`
                  if (pokemon.tipo[1].type.name === "bug") {
                    typesHTML =
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />` +
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dark") {
                    typesHTML =
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />` +
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dragon") {
                    typesHTML =
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />` +
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "electric") {
                    typesHTML =
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />` +
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fairy") {
                    typesHTML =
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />` +
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fighting") {
                    typesHTML =
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />` +
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fire") {
                    typesHTML =
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />` +
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "flying") {
                    typesHTML =
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />` +
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ghost") {
                    typesHTML =
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />` +
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "grass") {
                    typesHTML =
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />` +
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ground") {
                    typesHTML =
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />` +
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ice") {
                    typesHTML =
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />` +
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "normal") {
                    typesHTML =
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />` +
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "psychic") {
                    typesHTML =
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />` +
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "rock") {
                    typesHTML =
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />` +
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "steel") {
                    typesHTML =
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />` +
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "water") {
                    typesHTML =
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />` +
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />`
                  }
                }
                if (pokemon.tipo[0].type.name === "psychic") {
                  if (pokemon.tipo[1].type.name === "bug") {
                    typesHTML =
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />` +
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dark") {
                    typesHTML =
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />` +
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dragon") {
                    typesHTML =
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />` +
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "electric") {
                    typesHTML =
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />` +
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fairy") {
                    typesHTML =
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />` +
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fighting") {
                    typesHTML =
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />` +
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fire") {
                    typesHTML =
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />` +
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "flying") {
                    typesHTML =
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />` +
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ghost") {
                    typesHTML =
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />` +
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "grass") {
                    typesHTML =
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />` +
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ground") {
                    typesHTML =
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />` +
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ice") {
                    typesHTML =
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />` +
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "normal") {
                    typesHTML =
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />` +
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "poison") {
                    typesHTML =
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />` +
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "rock") {
                    typesHTML =
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />` +
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "steel") {
                    typesHTML =
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />` +
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "water") {
                    typesHTML =
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />` +
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />`
                  }
                }
                if (pokemon.tipo[0].type.name === "rock") {
                  if (pokemon.tipo[1].type.name === "bug") {
                    typesHTML =
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />` +
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dark") {
                    typesHTML =
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />` +
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dragon") {
                    typesHTML =
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />` +
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "electric") {
                    typesHTML =
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />` +
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fairy") {
                    typesHTML =
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />` +
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fighting") {
                    typesHTML =
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />` +
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fire") {
                    typesHTML =
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />` +
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "flying") {
                    typesHTML =
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />` +
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ghost") {
                    typesHTML =
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />` +
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "grass") {
                    typesHTML =
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />` +
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ground") {
                    typesHTML =
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />` +
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ice") {
                    typesHTML =
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />` +
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "normal") {
                    typesHTML =
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />` +
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "poison") {
                    typesHTML =
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />` +
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "psychic") {
                    typesHTML =
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />` +
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "steel") {
                    typesHTML =
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />` +
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "water") {
                    typesHTML =
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />` +
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />`
                  }
                }
                if (pokemon.tipo[0].type.name === "steel") {
                  if (pokemon.tipo[1].type.name === "bug") {
                    typesHTML =
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />` +
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dark") {
                    typesHTML =
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />` +
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dragon") {
                    typesHTML =
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />` +
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "electric") {
                    typesHTML =
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />` +
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fairy") {
                    typesHTML =
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />` +
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fighting") {
                    typesHTML =
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />` +
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fire") {
                    typesHTML =
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />` +
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "flying") {
                    typesHTML =
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />` +
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ghost") {
                    typesHTML =
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />` +
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "grass") {
                    typesHTML =
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />` +
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ground") {
                    typesHTML =
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />` +
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ice") {
                    typesHTML =
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />` +
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "normal") {
                    typesHTML =
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />` +
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "poison") {
                    typesHTML =
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />` +
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "psychic") {
                    typesHTML =
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />` +
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "rock") {
                    typesHTML =
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />` +
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "water") {
                    typesHTML =
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />` +
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />`
                  }
                }
                if (pokemon.tipo[0].type.name === "water") {
                  if (pokemon.tipo[1].type.name === "bug") {
                    typesHTML =
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />` +
                      `<img id="type" class="bug-box"  src="./assets/bug.svg" alt="Type Bug icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dark") {
                    typesHTML =
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />` +
                      `<img id="type" class="dark-box"  src="./assets/dark.svg" alt="Type Dark icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "dragon") {
                    typesHTML =
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />` +
                      `<img id="type" class="dragon-box"  src="./assets/dragon.svg" alt="Type Dragon icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "electric") {
                    typesHTML =
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />` +
                      `<img id="type" class="electric-box"  src="./assets/electric.svg" alt="Type Electric icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fairy") {
                    typesHTML =
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />` +
                      `<img id="type" class="fairy-box"  src="./assets/fairy.svg" alt="Type Fairy icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fighting") {
                    typesHTML =
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />` +
                      `<img id="type" class="fighting-box"  src="./assets/fighting.svg" alt="Type Fighting icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "fire") {
                    typesHTML =
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />` +
                      `<img id="type" class="fire-box"  src="./assets/fire.svg" alt="Type Fire icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "flying") {
                    typesHTML =
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />` +
                      `<img id="type" class="flying-box"  src="./assets/flying.svg" alt="Type Flying icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ghost") {
                    typesHTML =
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />` +
                      `<img id="type" class="ghost-box"  src="./assets/ghost.svg" alt="Type Ghost icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "grass") {
                    typesHTML =
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />` +
                      `<img id="type" class="grass-box"  src="./assets/grass.svg" alt="Type Grass icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ground") {
                    typesHTML =
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />` +
                      `<img id="type" class="ground-box"  src="./assets/ground.svg" alt="Type Ground icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "ice") {
                    typesHTML =
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />` +
                      `<img id="type" class="ice-box"  src="./assets/ice.svg" alt="Type Ice icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "normal") {
                    typesHTML =
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />` +
                      `<img id="type" class="normal-box"  src="./assets/normal.svg" alt="Type Normal icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "poison") {
                    typesHTML =
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />` +
                      `<img id="type" class="poison-box"  src="./assets/poison.svg" alt="Type Poison icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "psychic") {
                    typesHTML =
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />` +
                      `<img id="type" class="psychic-box"  src="./assets/psychic.svg" alt="Type Psychic icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "rock") {
                    typesHTML =
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />` +
                      `<img id="type" class="rock-box"  src="./assets/rock.svg" alt="Type Rock icone" />`
                  }
                  if (pokemon.tipo[1].type.name === "steel") {
                    typesHTML =
                      `<img id="type" class="water-box"  src="./assets/water.svg" alt="Type Water icone" />` +
                      `<img id="type" class="steel-box"  src="./assets/steel.svg" alt="Type Steel icone" />`
                  }
                }
              }
              pokemonBoxes.innerHTML += `
                <div class="pokemon-box">
                <img id="pokemon" src="${pokemon.imagem}" alt="Pokemon">
                ${typesHTML}
                <p>${pokemon.nome}</p>
                </div>
                `
            })
          }
        })
    })
  })

/*Função para filtrar as informações na barra de pesquisa */
function pes() {
  let input = document.getElementsByClassName("input-wrapper").value
  input = input.toLowerCase()
  let names = document.getElementsByClassName("pokemon-box")

  for (i = 0; i < names.length; i++) {
    if (!names[i].innerHTML.toLocaleLowerCase().includes(input)) {
      names[i].style.display = "none"
    } else {
      names[i].style.display = "list-item"
    }
  }
}

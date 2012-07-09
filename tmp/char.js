/* En simpel data-model for character sheets */
function Character(name, clan, generation) {
    this.name = name;
    this.clan = clan;
    this.generation = generation;
    this.attributes = { str: 1, dex: 1, sta: 1,
                        cha: 1, man: 1, app: 1,
                        wit: 1, int: 1, per: 1 };
}

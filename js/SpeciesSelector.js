
var sel_species;

function getSpeciesResults() {
    selectElement = 
          document.querySelector('#Species_Select');
    sel_species = selectElement.value;
    sel_species_toGet = sel_species
    console.log(sel_species)
    document.querySelector('.Selected_Species').textContent = sel_species;
}
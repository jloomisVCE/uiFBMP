import { fetchFBMP } from './apiFetchFBMC.js';
import { chartSiteAbundance } from './apiD3SiteAbundance.js';
let gSite = {value:false, text:''};
let gSpecies = {value:'', text:'All Species'};

window.addEventListener("load", (ev) => {
    initSpeciesSelect();
    initSiteSelect();
})

function initSpeciesSelect() {

    //populate species drop-down selector
    let eCh = document.getElementById('speciesSelect');
    eCh.innerHTML = `<option value='' selected>All Species</option>`;
    fetchFBMP('table/FBMP_species').then(res => {
        res.rows.forEach((row, idx) => {
            eCh.innerHTML += `<option value=${row.sppSpecies}>${row.sppSpecies} - ${row.sppCommonName} (</em>${row.sppScientificName}</em>)</option>`;
        })
    }).catch(err => {
        console.log('document.onload ERROR', err);
    })

    let eTl = document.getElementById('titleDiv');
    //add event listener to species drop-down to load something
    eCh.onchange = (ev) => {
        let val = eCh.options[eCh.selectedIndex].value;
        let txt = eCh.options[eCh.selectedIndex].text;
        console.log('value', val, 'text', txt, 'index', eCh.selectedIndex);
        gSpecies.value = val; gSpecies.text = txt;
        //window.open(`${apiFBMP}/species?sppSpecies=${val}`)
        chartSiteAbundance(gSite.value, gSpecies.value, 'chartDiv');
        eTl.innerHTML = `Species: ${gSpecies.text}<br>Site: ${gSite.text}`
    }
}

function initSiteSelect() {

    //populate species drop-down selector
    let eCh = document.getElementById('siteSelect');
    //eCh.innerHTML = `<option value=''>All Sites</option>`;
    fetchFBMP('table/survey_sites').then(res => {
        res.rows.forEach((row, idx) => {
            let text = `${row.sitesName} - ${row.sitesNotes} (${row.sitesTransect})`;
            eCh.innerHTML += `<option value=${row.sitesName} ${0==idx ? 'selected' : ''}>${text}</em>)</option>`;
            if (0==idx) {
                gSite.value = row.sitesName; 
                gSite.text = text;
                eCh.onchange({target:row.sitesName}); //fire the element's onchange event with a fake value
            }
        })
    }).catch(err => {
        console.log('popSiteSelect ERROR', err);
    })

    let eTl = document.getElementById('titleDiv');
    //add event listener to site drop-down to load siteAbundance chart
    eCh.onchange = (ev) => {
        let val = eCh.options[eCh.selectedIndex].value;
        let txt = eCh.options[eCh.selectedIndex].text;
        console.log('value', val, 'text', txt, 'index', eCh.selectedIndex);
        //window.open(`${apiFBMP}/table/survey_sites?sitesName=${val}`)
        gSite.value = val; gSite.text = txt;
        chartSiteAbundance(gSite.value, gSpecies.value, 'chartDiv');
        eTl.innerHTML = `Species: ${gSpecies.text}<br>Site: ${gSite.text}`
    }
}
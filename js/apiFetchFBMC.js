let apiFBMP = 'http://vtatlasoflife.org:4321';

export async function fetchFBMP(fbmpRoute='vtabun', searchTerm=false) {
    
    let url = `${apiFBMP}/${fbmpRoute}`;
    if (searchTerm) {url += `?${searchTerm}`}
    let enc = encodeURI(url);
    try {
        let res = await fetch(url);
        //console.log(`fetchFBMP(${enc}) RAW RESULT:`, res);
        let json = await res.json();
        console.log(`fetchFBMP(${enc}) JSON RESULT:`, json);
        return Promise.resolve(json);
    } catch (err) {
        console.log(`fetchFBMP(${enc}) ERROR:`, err);
        return Promise.reject(err);
    }
}
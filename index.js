function showInfo(content) {
    const data = content.split('\n').slice(1).map(str => str.trim());
    console.log(`Count: ${data.length}`);

    const names = getValuesByIndex(data, 0);
    console.log(`Barbershops: ${[...new Set(names)].sort().join(', ')}`);

    const ratings = getValuesByIndex(data, 4).map(n => +n);
    console.log(`Ratings: Min: ${Math.min(...ratings)} Max: ${Math.max(...ratings)}`)

    let yearsOld = 0;
    let name = '';

    for (let row of data) {
        let splitRow = row.split(',');
        let currentYearOld = +splitRow[3];
        if (currentYearOld > yearsOld) {
            yearsOld = currentYearOld;
            name = splitRow[0];
        }
    }
    console.log(`Oldest barbershop: ${name}`)
}

function getValuesByIndex(data, index) {
    return data.map(str => str.split(',')[index]);
}

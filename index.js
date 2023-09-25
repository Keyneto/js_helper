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

    let bestSalon = '';
    let cheapestPrice = Number.MAX_VALUE;

    for (let row of data) {
        let splitRow = row.split(',');
        let yearsOld = +splitRow[3];
        let priceRange = splitRow[1].split('-');
        let avgPrice = (+priceRange[0] + +priceRange[1]) / 2;
        if (yearsOld > 5 && avgPrice < cheapestPrice) {
            cheapestPrice = avgPrice;
            bestSalon = splitRow[0];
        }
    }
    console.log(`Best barbershop: ${bestSalon}`);
}

function getValuesByIndex(data, index) {
    return data.map(str => str.split(',')[index]);
}
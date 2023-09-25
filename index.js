function showInfo(content) {
    const data = content.split('\n').slice(1).map(str => str.trim().split(','));
    console.log(`Count: ${data.length}`);

    console.log(`Barbershops: ${[...new Set(data.map(row => row[0]))].sort().join(', ')}`);

    const ratings = data.map(row => Number(row[4]));
    console.log(`Ratings: Min: ${Math.min(...ratings)} Max: ${Math.max(...ratings)}`)

    let yearsOld = 0, oldestSalon = '', bestSalon = '', cheapestPrice = Number.MAX_VALUE;

    data.forEach(row => {
        let [salonName, price, , age] = row;
        let [minPrice, maxPrice] = price.split('-').map(Number);
        let avgPrice = (minPrice + maxPrice) / 2;
        let currentYearOld = Number(age);

        if (currentYearOld > yearsOld) [yearsOld, oldestSalon] = [currentYearOld, salonName];
        if (currentYearOld > 5 && avgPrice < cheapestPrice) [cheapestPrice, bestSalon] = [avgPrice, salonName];
    })
    console.log(`Oldest barbershop: ${oldestSalon}`)
    console.log(`Best barbershop: ${bestSalon}`)
}
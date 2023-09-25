function showInfo(content) {
    const data = content.split('\n').slice(1).map(str => str.trim());
    console.log(`Count: ${data.length}`);

    console.log(`Barbershops: ${[...new Set(getValuesByIndex(data, 0))].sort().join(', ')}`);

    const ratings = getValuesByIndex(data, 4).map(n => +n);
    console.log(`Ratings: Min: ${Math.min(...ratings)} Max: ${Math.max(...ratings)}`)

    let yearsOld = 0, name = '', bestSalon = '', cheapestPrice = Number.MAX_VALUE;

    data.forEach(row => {
        let [salonName, price, , age] = row.split(',');
        let [minPrice, maxPrice] = price.split('-').map(Number);
        let avgPrice = (minPrice + maxPrice) / 2;
        let currentYearOld = Number(age);

        if (currentYearOld > yearsOld) [yearsOld, name] = [currentYearOld, salonName];
        if (currentYearOld > 5 && avgPrice < cheapestPrice) [cheapestPrice, bestSalon] = [avgPrice, salonName];
    })
    console.log(`Oldest barbershop: ${name}`)
    console.log(`Best barbershop: ${bestSalon}`)
}

function getValuesByIndex(data, index) {
    return data.map(str => str.split(',')[index]);
}

showInfo(`арикмахерской,Диапазон цен стрижки,Тип парикмахерской,Лет существования,Рейтинг по отзывам
Стрижка-Мастерская,300-800,Мужская,5,4.7
Салон Красоты,500-1500,Женская,10,4.9
Барбершоп Брутал,400-1000,Мужская,3,4.5
Парикмахерская Престиж,600-2000,Женская,8,4.8
Мужской Стиль,350-900,Мужская,6,4.6
Гламур Студия,700-2500,Женская,4,4.7
Барбершоп Элегант,450-1200,Мужская,2,4.3
Эксклюзив Салон,1000-3000,Женская,12,4.9
Хипстерский Барбер,500-1500,Мужская,7,4.5
Красота и Стиль,400-1000,Женская,9,4.7
Стрижка Эксперт,300-800,Мужская,4,4.2`)
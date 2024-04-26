const userAge = prompt('Your year of birth');
const userCity = prompt('where do you live');
const userSport = prompt('Your favorite sport');

if (userAge || userCity || userSport === null || '') {
    if (!userAge) {
        alert("Шкода, що Ви не захотіли ввести свій(ю) вік")
        alert(`Місто: ${userCity}, спорт: ${userSport}`)
    } else if (!userCity) {
        alert("Шкода, що Ви не захотіли ввести свій(ю) Місто")
        alert(`Вік: ${userAge} спорт: ${userSport}`)
    } else if (!userSport) {
        alert("Шкода, що Ви не захотіли ввести свій(ю) спорт")
        alert(`Вік: ${userAge} Місто: ${userCity}`)
    } else {
        switch(userCity) {
            case "Кіїв": {
                alert(`Ти живеш у столиці ${userCity}`)
                break;
            }
            case "Вашингтон": {
                alert(`Ти живеш у столиці ${userCity}`)
                break;
            }
            case "Лондон": {
                alert(`Ти живеш у столиці ${userCity}`)
                break;
            }
        }
        switch(userSport) {
            case "Хокей": {
                alert(`Круто! Хочеш стати Уэйн Гретцки`)
                break;
            }
            case "Футбол": {
                alert(`Круто! Хочеш стати Криштиану Роналдо`)
                break;
            }
            case "Біг": {
                alert(`Круто! Хочеш стати Усейн Болт`)
                break;
            }
        }
        alert(`Вік: ${userAge} Місто: ${userCity}, спорт: ${userSport}`)
    }
}



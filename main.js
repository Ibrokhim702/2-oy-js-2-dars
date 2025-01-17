function burger1() {
    alert(" 1 ta qiyqiriq set narxi 45000")
    const zakaz = prompt("Nechta burger zakaz qilasiz?");

    if(zakaz == null || zakaz.trim() === "" || isNaN(zakaz) || zakaz <= 0){
        alert("Iltimos,to'g'ri miqdorni kiriting");
    }
    const result = zakaz * 45000;
    const isConfirmed = confirm(`${zakaz} ta burger ${result} so'm bo'ladi.Zakaz qilasizmi?`);

    if(isConfirmed){
        alert("Zakaz qabul qilindi!");
    }else{
        alert("Zakaz bekor qilindi");
    }
}


function burger2() {
    alert("1 ta snek set narxi 79000 so'm");

    const zakaz = prompt("Nechta snek set zakaz qilasiz?");
    const zakazNumber = Number(zakaz);

    if (zakaz == null || zakaz.trim() === "" || isNaN(zakazNumber) || zakazNumber <= 0) {
        alert("Iltimos, to'g'ri miqdorni kiriting");
        return;
    }

    const result = zakazNumber * 79000;
    const isConfirmed = confirm(`${zakazNumber} ta snek set ${result.toLocaleString()} so'm bo'ladi. Zakaz qilasizmi?`);

    if (isConfirmed) {
        alert("Zakaz qabul qilindi!");
    } else {
        alert("Zakaz bekor qilindi");
    }
}


function burger3() {
    alert("1 ta snek set narxi 79000 so'm");

    const zakaz = prompt("Nechta snek set zakaz qilasiz?");
    const zakazNumber = Number(zakaz);

    if (zakaz == null || zakaz.trim() === "" || isNaN(zakazNumber) || zakazNumber <= 0) {
        alert("Iltimos, to'g'ri miqdorni kiriting");
        return;
    }

    const result = zakazNumber * 79000;
    const isConfirmed = confirm(`${zakazNumber} ta snek set ${result.toLocaleString()} so'm bo'ladi. Zakaz qilasizmi?`);

    if (isConfirmed) {
        alert("Zakaz qabul qilindi!");
    } else {
        alert("Zakaz bekor qilindi");
    }
}

function burger4() {
    alert("1 ta klassik set narxi 34000 so'm");

    const zakaz = prompt("Nechta klassik  set zakaz qilasiz?");
    const zakazNumber = Number(zakaz);

    if (zakaz == null || zakaz.trim() === "" || isNaN(zakazNumber) || zakazNumber <= 0) {
        alert("Iltimos, to'g'ri miqdorni kiriting");
        return;
    }

    const result = zakazNumber * 34000;
    const isConfirmed = confirm(`${zakazNumber} ta klassik set ${result.toLocaleString()} so'm bo'ladi. Zakaz qilasizmi?`);

    if (isConfirmed) {
        alert("Zakaz qabul qilindi!");
    } else {
        alert("Zakaz bekor qilindi");
    }
}

function burger5() {
    alert("1 ta longer set narxi 45000 so'm");

    const zakaz = prompt("Nechta klassik  set zakaz qilasiz?");
    const zakazNumber = Number(zakaz);

    if (zakaz == null || zakaz.trim() === "" || isNaN(zakazNumber) || zakazNumber <= 0) {
        alert("Iltimos, to'g'ri miqdorni kiriting");
        return;
    }

    const result = zakazNumber * 45000;
    const isConfirmed = confirm(`${zakazNumber} ta klassik set ${result.toLocaleString()} so'm bo'ladi. Zakaz qilasizmi?`);

    if (isConfirmed) {
        alert("Zakaz qabul qilindi!");
    } else {
        alert("Zakaz bekor qilindi");
    }
}


function burger6() {
    alert("1 ta big set narxi 62000 so'm");

    const zakaz = prompt("Nechta big set zakaz qilasiz?");
    const zakazNumber = Number(zakaz);

    if (zakaz == null || zakaz.trim() === "" || isNaN(zakazNumber) || zakazNumber <= 0) {
        alert("Iltimos, to'g'ri miqdorni kiriting");
        return;
    }

    const result = zakazNumber * 62000;
    const isConfirmed = confirm(`${zakazNumber} ta big set ${result.toLocaleString()} so'm bo'ladi. Zakaz qilasizmi?`);

    if (isConfirmed) {
        alert("Zakaz qabul qilindi!");
    } else {
        alert("Zakaz bekor qilindi");
    }
}

function burger7() {
    alert("1 ta lester set narxi 33000 so'm");

    const zakaz = prompt("Nechta lester set zakaz qilasiz?");
    const zakazNumber = Number(zakaz);

    if (zakaz == null || zakaz.trim() === "" || isNaN(zakazNumber) || zakazNumber <= 0) {
        alert("Iltimos, to'g'ri miqdorni kiriting");
        return;
    }

    const result = zakazNumber * 33000;
    const isConfirmed = confirm(`${zakazNumber} ta lester set ${result.toLocaleString()} so'm bo'ladi. Zakaz qilasizmi?`);

    if (isConfirmed) {
        alert("Zakaz qabul qilindi!");
    } else {
        alert("Zakaz bekor qilindi");
    }
}

function burger8() {
    alert("1 ta combo set narxi 35000 so'm");

    const zakaz = prompt("Nechta combo set zakaz qilasiz?");
    const zakazNumber = Number(zakaz);

    if (zakaz == null || zakaz.trim() === "" || isNaN(zakazNumber) || zakazNumber <= 0) {
        alert("Iltimos, to'g'ri miqdorni kiriting");
        return;
    }

    const result = zakazNumber * 35000;
    const isConfirmed = confirm(`${zakazNumber} ta combo set ${result.toLocaleString()} so'm bo'ladi. Zakaz qilasizmi?`);

    if (isConfirmed) {
        alert("Zakaz qabul qilindi!");
    } else {
        alert("Zakaz bekor qilindi");
    }
}

function burger9() {
    alert("1 ta do'stlar 1x narxi 49000 so'm");

    const zakaz = prompt("Nechta do'stlar 1x zakaz qilasiz?");
    const zakazNumber = Number(zakaz);

    if (zakaz == null || zakaz.trim() === "" || isNaN(zakazNumber) || zakazNumber <= 0) {
        alert("Iltimos, to'g'ri miqdorni kiriting");
        return;
    }

    const result = zakazNumber * 49000;
    const isConfirmed = confirm(`${zakazNumber} ta do'stlar 1x ${result.toLocaleString()} so'm bo'ladi. Zakaz qilasizmi?`);

    if (isConfirmed) {
        alert("Zakaz qabul qilindi!");
    } else {
        alert("Zakaz bekor qilindi");
    }
}

function burger10() {
    alert("1 ta do'stlar 2x narxi 49000 so'm");

    const zakaz = prompt("Nechta do'stlar 2x zakaz qilasiz?");
    const zakazNumber = Number(zakaz);

    if (zakaz == null || zakaz.trim() === "" || isNaN(zakazNumber) || zakazNumber <= 0) {
        alert("Iltimos, to'g'ri miqdorni kiriting");
        return;
    }

    const result = zakazNumber * 49000;
    const isConfirmed = confirm(`${zakazNumber} ta do'stlar 2x ${result.toLocaleString()} so'm bo'ladi. Zakaz qilasizmi?`);

    if (isConfirmed) {
        alert("Zakaz qabul qilindi!");
    } else {
        alert("Zakaz bekor qilindi");
    }
}


function burger11() {
    alert("1 ta do'stlar 4x narxi 459000 so'm");

    const zakaz = prompt("Nechta do'stlar 4x zakaz qilasiz?");
    const zakazNumber = Number(zakaz);

    if (zakaz == null || zakaz.trim() === "" || isNaN(zakazNumber) || zakazNumber <= 0) {
        alert("Iltimos, to'g'ri miqdorni kiriting");
        return;
    }

    const result = zakazNumber * 459000;
    const isConfirmed = confirm(`${zakazNumber} ta do'stlar 4x ${result.toLocaleString()} so'm bo'ladi. Zakaz qilasizmi?`);

    if (isConfirmed) {
        alert("Zakaz qabul qilindi!");
    } else {
        alert("Zakaz bekor qilindi");
    }
}

function burger12() {
    alert("1 ta do'stlar 1x(achiq) narxi 46000 so'm");

    const zakaz = prompt("Nechta do'stlar 1x(achiq) zakaz qilasiz?");
    const zakazNumber = Number(zakaz);

    if (zakaz == null || zakaz.trim() === "" || isNaN(zakazNumber) || zakazNumber <= 0) {
        alert("Iltimos, to'g'ri miqdorni kiriting");
        return;
    }

    const result = zakazNumber * 46000;
    const isConfirmed = confirm(`${zakazNumber} ta do'stlar 1x(achiq) ${result.toLocaleString()} so'm bo'ladi. Zakaz qilasizmi?`);

    if (isConfirmed) {
        alert("Zakaz qabul qilindi!");
    } else {
        alert("Zakaz bekor qilindi");
    }
}




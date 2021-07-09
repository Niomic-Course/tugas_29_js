function panggilRegex() {
    let data = 'Belajar menimba ilmu programming bersama Niomic'
    ex = new RegExp(/bersama/);

    console.log(ex.exec(data));
}

panggilRegex();
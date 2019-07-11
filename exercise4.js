var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(input){
    input.splice(1,4,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", 
    "Pria", "SMA Internasional Metro")
    console.log(input);
    var tanggal =input[3];
    var bulanAngka=tanggal.split('/')
    //console.log(bulanAngka);
    var bulan= ""
    switch (bulanAngka[1]) {
        case '01':
            bulan = 'januari';
            break;
        case '02':
            bulan = 'pebruari';
            break;
        case '03':
            bulan = 'maret';
            break;
        case '04':
            bulan = 'april';
            break;
        case '05':
            bulan= 'mei';
            break;
        case '06':
            bulan = 'juni';
            break;
        case '07':
            bulan = 'juli';
            break;
        case '08':
            bulan = 'agustus';
            break;
        case '09':
            bulan = 'september';
            break;
        case '10':
            bulan = 'oktober';
            break;
        case '11':
            bulan = 'november';
            break;
        case '12':
            bulan = 'desember';
            
    }
    console.log(bulan);
    //sorting descending
    console.log(bulanAngka.sort(function(value1, value2) { return value2 - value1 }));
    var ttl=input[3].split('/')//split n join
    console.log(ttl.join('-'));
    var nama=input[1].slice(0,15)
    console.log(nama);
}
dataHandling2(input)

    /**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
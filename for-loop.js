let bulan = ['maret', 'april', 'mai', 'juni', 'juli'];

for (let i = 0; i < bulan.length; i++) {
    console.log(bulan[i]);
}
for (let key in bulan) {
    console.log('Nama bulan' + key + ' adalah ' + bulan[key]);
}
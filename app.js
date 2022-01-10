const yargs = require("yargs");
const contacts = require('./contacts');

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOptions: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demandOptions: false,
            type: 'string',
        },
        noHP: {
            describe: 'Nomor Handphone',
            demandOptions: true,
            type: 'string',
        },
    },
    handler(argv){
      contacts.simpanContact(argv.nama, argv.email, argv.noHP);

    },
});




yargs.parse(); 


/* First command  */
/* yargs.command(
    'add',
    'Menambahkan contact baru',
     () => {},
    (argv) => {
        console.log(argv.nama);
    }
);
*/







/* Mengambil argument dari command line */
// console.log(process.argv[2]);

/* Cara Pertama menulis command line d*/
    /* const command = process.argv[2];
    if( command === 'add' ) {

    } else if( command === 'remove' ) {

    } else if(command === 'list') {

    }
 */





/* const contacts = require('./contacts');

const main = async () => {
    const nama = await contacts.tulisPertanyaan('Masukan nama anda : ');
    const email = await contacts.tulisPertanyaan('Masukan email anda : ');
    const handphone = await contacts.tulisPertanyaan('Masukan no handphone anda : ')
    
    contacts.simpanContact(nama, email, handphone);
};

main();     */ 









    /* rl.question('Masukan nama anda : ', (nama) => {
        rl.question('Masukan nomer handphone : ', (noHp) => {
            const contact  = { nama, noHp };
            const fileBuffer = fs.readFileSync('data/contact.json', 'utf8');
            const contacts = JSON.parse(fileBuffer);
            
            contacts.push(contact);
            fs.writeFileSync('data/contact.json', JSON.stringify(contacts));

            console.log('Terima kasih sudah memasukan data.')

            rl.close(); 
        });
    }); */
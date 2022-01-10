/* Module yang di perlukan utk membuat kontak */
const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');


/* Membuat folder Data Jika Belum Ada */
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

/*  Membuat File Contact.json Jika Belum Ada */
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const simpanContact = (nama, email, noHP) => {
    const contact  = { nama, email, noHP };
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf8');
    const contacts = JSON.parse(fileBuffer);

        /* Cek Duplikat Nama */
        const duplikat = contacts.find((contact) => contact.nama === nama);
        if (duplikat) {
            console.log(
                chalk.red.inverse.bold('Nama sudah terdaftar, gunakan nama yang lain!')
                );
            return false
        }

        /* Cek email yang valid */
        if(email) {
            if(!validator.isEmail(email)) {
                console.log(
                    chalk.red.inverse.bold('Email tidak valid')
                );
                return false;
            }
        }

        /* Cek No Hp benar tidak */
        if (!validator.isMobilePhone(noHP, 'id-ID')) {
            console.log(chalk.red.inverse.bold('No handphone tidak valid'));
            return false;
        }

        /* Memasaukan data ke kontak */
            contacts.push(contact);
            fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

            console.log(chalk.green.inverse.bold('Terima kasih sudah memasukan data.'));
            // rl.close(); 
};

module.exports = { simpanContact };






/* const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); */


/* Make A question First Refactoring */
/*  
const pertanyaan1 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Masukan Nama Anda : ', (nama) => {
            resolve(nama);
        });
    });
};
const pertanyaan2 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Masukan Email Anda : ', (email) => {
            resolve(email);
        });
    });
};
*/

/* Second Code Refactoring  */
/* const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (nama) => {
            resolve(nama);
        });
    });
}; */
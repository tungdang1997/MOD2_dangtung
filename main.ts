import {ProductMana} from "./service/product";
import {Product} from "./model";
import {IManagement} from "./service/IManagement";
import {Engineer} from "./model";
import {Worker} from "./model";
import {Staff} from "./model";


let readlineSync = require('readline-sync')
let productMana = new ProductMana();


function addMenu(){
    let menu = `---------Bạn muốn thêm cán bộ nào-----------
    1.Worker
    2.Engineer
    3.Staff
    0.Ra menu chính`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                addWorker();
                break;
            case 2:
                addEngineer();
                break;
            case 3:
                addStaff();
                break;

        }
    } while (choice !== 0);
}

function addWorker(): void {
    console.log('------ Hien thi form them moi------')
    let name = readlineSync.question('Enter name: ');
    let age = +readlineSync.question('Enter age: ');
    let sex = readlineSync.question('Enter sex: ');
    let address = readlineSync.question('Enter address: ');
    let step = readlineSync.question('Enter step: ');
    let worker1 = new Worker(name, age, sex, address, step);
    productMana.add(worker1)
}

function addEngineer(): void {
    console.log('------ Hien thi form them moi------')
    let name = readlineSync.question('Enter name: ');
    let age = +readlineSync.question('Enter age: ');
    let sex = readlineSync.question('Enter sex: ');
    let address = readlineSync.question('Enter address: ');
    let trainingIndustry = readlineSync.question('Enter trainingIndustry: ')
    let engineer1 = new Engineer(name, age, sex, address, trainingIndustry);
    productMana.add(engineer1)
}

function addStaff(): void {
    console.log('------ Hien thi form them moi------')
    let name = readlineSync.question('Enter name: ');
    let age = +readlineSync.question('Enter age: ');
    let sex = readlineSync.question('Enter sex: ');
    let address = readlineSync.question('Enter address: ');
    let work = readlineSync.question('Enter work: ');
    let staff1 = new Staff(name, age, sex, address, work);
    productMana.add(staff1)
}
function display(): void {
    console.log('------Hien thi san pham-----')
    console.table(productMana.findAll());
}
function findByName(){
    let name = readlineSync.question('Enter name need to find : ')
    console.log(productMana.findByName(name));
}
function main(){
    let menu = `---------Menu chính-----------
    1.Thêm mới cán bộ
    2.Tìm kiếm theo tên
    3.Hiển thị danh sách cán bộ
    0.Thoát chương trình`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                addMenu();
                break;
            case 2:
                findByName();
                break;
            case 3:
                display();
                break;

        }
    } while (choice !== 0);
}
main();



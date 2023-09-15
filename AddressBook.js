class Contact {
    constructor(FirstName, LastName, Address, City, State, Zip, PhoneNumber, Email) {

        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Address = Address;
        this.City = City;
        this.State = State;
        this.Zip = Zip;
        this.PhoneNumber = PhoneNumber;
        this.Email = Email;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }
    addNewContact(contact) {
        validate(contact);
        this.contacts.push(contact);
        console.log(contact.FirstName + " contact Added ");
    }
    duplicateContact(contact) {
        if (this.contacts.some((element) => element.FirstName == contact.FirstName)) {
            console.log("Contact already Exists");
        }
        else {
            this.addNewContact(contact)
        }
    }
    displayContactDetails() {
        this.contacts.forEach(element => {
            console.log("Full Name: " + element.FirstName + " " + element.LastName);
        });
    }
    EditContact(contact) {
        validate(contact);
        this.contacts.forEach(element => {
            if (contact.FirstName == element.FirstName) {
                element.LastName = contact.LastName;
                element.Address = contact.Address;
                element.City = contact.City;
                element.State = contact.State;
                element.Zip = contact.Zip;
                element.PhoneNumber = contact.PhoneNumber;
                element.Email = contact.Email;
                console.log("Edited Address Book Successfully");
            }
        });
    }
    DeleteContact(name) {
        var a = 0;
        this.contacts.forEach(element => {
            if (name == element.FirstName) {
                this.contacts.splice(a, 1);
                console.log(name + " deleted Successfully");
            }
            a++;
        });
    }
    CountContact() {
        const count = this.contacts.reduce((count, sum) => {
            return count + 1
        }, 0);
        console.log("Total number of contacts in the Addressbook: " + count);
    }
    City(city, name) {
        const citySearch = this.contacts.filter((element) => element.City == city);
        const personCity = citySearch.filter((element) => element.FirstName == name);
        console.log("The particular person in the city " + city + " is: ");
        personCity.forEach(element => {
            console.log("Full Name: " + element.FirstName + " " + element.LastName);
        })
    }
    State(state, name) {
        const stateSearch = this.contacts.filter((element) => element.State == state);
        const personState = stateSearch.filter((element) => element.FirstName == name);
        console.log("The particular person in the state " + state + " is: ");
        personState.forEach(element => {
            console.log("Full Name: " + element.FirstName + " " + element.LastName);
        })
    }
}

function validate(Details) {
    console.log(Details.FirstName + " " + Details.LastName + " " + Details.Address + " " + Details.City
        + " " + Details.State + " " + Details.Zip + " " + Details.PhoneNumber + " " + Details.Email);
    if (!/^[A-Z][a-zA-Z]{2,}$/.test(Details.FirstName)) {
        throw new Error("Invalid First Name");
    }
    else if (!/^[A-Z][a-zA-Z]{2,}$/.test(Details.LastName)) {
        throw new Error("Invalid Last Name");
    }
    else if (!/^[0-9a-zA-Z]{4,}$/.test(Details.Address)) {
        throw new Error("Invalid Address");
    }
    else if (!/^[a-zA-Z]{4,}$/.test(Details.City)) {
        throw new Error("Invalid City");
    }
    else if (!/^[0-9a-zA-Z]{4,}$/.test(Details.State)) {
        throw new Error("Invalid State");
    }
    else if (!/^[0-9]{6}$/.test(Details.Zip)) {
        throw new Error("Invalid Zip");
    }
    else if (!/^[0-9]{10}$/.test(Details.PhoneNumber)) {
        throw new Error("Invalid Phone Number");
    }
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Details.Email)) {
        throw new error("Invalid Email")
    }
    else {
        console.log("Validation Successful");;
    }
}

const addressbook = new AddressBook();
const Contact1 = new Contact(
    FirstName = "Riya",
    LastName = "Reji",
    Address = "Annikkanadu",
    City = "Pathanamthitta",
    State = "Kerala",
    Zip = "689642",
    PhoneNumber = "1234567890",
    Email = "riya@gmail.com");
const Contact2 = new Contact(
    FirstName = "Smokey",
    LastName = "Toffee",
    Address = "Bhavan",
    City = "Pathanamthitta",
    State = "Kerala",
    Zip = "123456",
    PhoneNumber = "1023445678",
    Email = "smoto@gmail.com");
addressbook.addNewContact(Contact1);
addressbook.addNewContact(Contact2);
const Contact3 = new Contact(
    FirstName = "Jessy",
    LastName = "Reji",
    Address = "Annikkanadu",
    City = "Pathanamthitta",
    State = "Kerala",
    Zip = "123456",
    PhoneNumber = "1023445678",
    Email = "jere@gmail.com");
addressbook.addNewContact(Contact3);

const UpdateContact = new Contact(
    FirstName = "Riya",
    LastName = "Susan",
    Address = "Annikkanadu",
    City = "Pathanamthitta",
    State = "Kerala",
    Zip = "987654",
    PhoneNumber = "1123445678",
    Email = "rsr@gmail.com");
//addressbook.EditContact(UpdateContact);
//addressbook.DeleteContact("Jessy");
//addressbook.displayContactDetails();
//addressbook.CountContact();
//addressbook.duplicateContact(Contact3);
addressbook.City("Pathanamthitta", "Smokey");
addressbook.State("Kerala", "Jessy");
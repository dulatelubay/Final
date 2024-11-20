const fs = require('fs');
const path = require('path');

const storagePath = path.join(__dirname, 'localStorage.json');

function getLocalStorage() {
    if (!fs.existsSync(storagePath)) {
        fs.writeFileSync(storagePath, JSON.stringify({}));
    }
    const data = fs.readFileSync(storagePath, 'utf-8');
    return JSON.parse(data);
}

function setLocalStorage(key, value) {
    const storage = getLocalStorage();
    storage[key] = value;
    fs.writeFileSync(storagePath, JSON.stringify(storage, null, 2));
}

function removeLocalStorage(key) {
    const storage = getLocalStorage();
    delete storage[key];
    fs.writeFileSync(storagePath, JSON.stringify(storage, null, 2));
}

module.exports = { getLocalStorage, setLocalStorage, removeLocalStorage };

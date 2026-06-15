const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    dbQuery: (sql, params) => ipcRenderer.invoke('db-query', sql, params),
    dbRun: (sql, params) => ipcRenderer.invoke('db-run', sql, params),
    dbGet: (sql, params) => ipcRenderer.invoke('db-get', sql, params),
    checkActivation: () => ipcRenderer.invoke('check-activation'),
    activate: (code) => ipcRenderer.invoke('activate', code),
    saveProduct: (data) => ipcRenderer.invoke('save-product', data),
    deleteProduct: (id, company_id) => ipcRenderer.invoke('delete-product', { id, company_id }),
    saveMaterial: (data) => ipcRenderer.invoke('save-material', data),
    deleteMaterial: (id, company_id) => ipcRenderer.invoke('delete-material', { id, company_id }),
    login: (username, password, company_id) => ipcRenderer.invoke('login', { username, password, company_id }),
    createUser: (data) => ipcRenderer.invoke('create-user', data),
    updateUser: (data) => ipcRenderer.invoke('update-user', data),
    createCompany: (name) => ipcRenderer.invoke('create-company', { name }),
    getSettings: (company_id) => ipcRenderer.invoke('get-settings', company_id),
    printThermal: (html) => ipcRenderer.send('print-thermal', html),
    backupDatabase: () => ipcRenderer.invoke('backup-database'),
    restoreDatabase: () => ipcRenderer.invoke('restore-database'),
    saveImage: (fileName, buffer) => ipcRenderer.invoke('save-image', { fileName, buffer }),
    getImagePath: (imagePath) => ipcRenderer.invoke('get-image-path', imagePath),
    checkoutOrder: (orderData) => ipcRenderer.invoke('checkout-order', orderData)
});
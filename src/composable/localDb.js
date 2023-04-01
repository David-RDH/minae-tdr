export default class localDB {

    all = (table_name) => {
        return JSON.parse(localStorage.getItem(table_name))
    }

    find = (table_name, id) => {
        const allData = this.all(table_name)
        return allData.filter(a => a.id == id)
    }

    insert = (table_name, data) => {
        // il faut que data contient les colonnes identiques pour la table `table_name`
        const allData = this.all(table_name)
        allData.push(data)
        localStorage.setItem(table_name, JSON.stringify(allData) )
        return true
    }

    initTable = (table_name) => {
        if (localStorage.getItem(table_name) == null) {
            localStorage.setItem(table_name, JSON.stringify([]) )
        }
        return true
    }

}
import fs from "fs/promises"

const databasePath = new URL('./db.json', import.meta.url)


export class PersonService {

    static list = [];

    constructor() {
        fs.readFile(databasePath, "utf8")
          .then((data) => {
            this.list = JSON.parse(data);
          })
          .catch(() => {
            this.#persist();
          });
      }

      #persist() {
        fs.writeFile(databasePath, JSON.stringify(this.list, null, 2));
      }

    static salvar(table, person) {
        if(Array.isArray(this.list[table])) {
            // add o dado 
            person.id = Math.random().toString(36);
            this.list[table].push(person);
            this.#persist();
            console.log(person)
          } else {
            // altera um dado ja existente
            this.list[table] = [person]
          }
    }

    static load(table, id){
        const rowIndex = this.list[table].findIndex(
            (row) => row.id === id
          );
      
          if (rowIndex > -1) {
            this.list[table][rowIndex] = { id, ...data };
            this.#persist();
    }}

    static deletar(table, id) {
        const rowIndex = this.list[table].findIndex(
            (row) => row.id === id
          );
      
          if (rowIndex > -1) {
            this.list[table].splice(rowIndex, 1);
            this.#persist();
          }}

    static buscarPorId(id){
        return this.list.find(person => person.id === id)
    }
        
}
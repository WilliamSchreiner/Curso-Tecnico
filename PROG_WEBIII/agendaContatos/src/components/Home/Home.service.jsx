

export class PersonService {

    static list = [];

    static salvar(person) {
        if(person.id) {

            let  index = PersonService.list.findIndex(a => a.id === person.id); 
            PersonService.list[index].name = person.name;
            PersonService.list[index].avatar = person.avatar;
            PersonService.list[index].cell = person.cell;

        }else{
            person.id = Math.random().toString(36);
            PersonService.list.push(person);
        }
    }

    static deletar(id) {
        const rowIndex  = PersonService.list.findIndex(row => row.id === id)

        if(rowIndex > -1){
            PersonService.list.slice(rowIndex, 1);
      
          }
    }

    static buscarPorId(id){
        return this.list.find(person => person.id === id)
    }
        
}
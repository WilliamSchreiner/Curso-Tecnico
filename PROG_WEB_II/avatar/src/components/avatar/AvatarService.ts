
export interface Avatar {
    id?: string; //xx?: '?' Elvis significa um campo opcional mas funciona apenas em string
    nome: string;
    imagem: string;
}

export class AvatarService {

    static list: Avatar[ ] = [];

    static salvar(avatar: Avatar) {
        if(avatar.id) {

            let  index = AvatarService.list.findIndex(a => a.id === avatar.id); // Retornara o vetor do Avatar da lista se ele existir
            AvatarService.list[index].nome = avatar.nome;
            AvatarService.list[index].imagem = avatar.imagem;
        }else{
            avatar.id = Math.random().toString(36);
            AvatarService.list.push(avatar);
        }
    }

    static buscarPorId(id: string): Avatar | undefined{
        return this.list.find(avatar => avatar.id === id)
    }
        
}
// Buscar Links Salvos


//o usuário que utilizar vai enviar a chave "key"
export async function getLinkSave(key) {
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];


    return linksSaves  //retornando os links salvos
}

// Salvar um link no Storage

//Key é a chave de onde está quardado no localStorage e o newLink é o novo link pra ser salvo
export async function saveLink(key, newLink) {
    let linkStored = await getLinkSave(key);

    //Se já tiver um link salvo com  algum ID eu não vou deixar duplicar
    const haslink = linkStored.some(link => link.id === newLink.id)

    if (haslink) {
        console.log("Esse link já existe na sua lista")
        return
    }
    //Se não tiver salvo, eu quero adicionar esse novo item na lista
    linkStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linkStored))

    console.link("Link salvo com sucesso")
}





// DEletar algum link salvo

export function DelteLink(links, id){
    let myLinks = links.filter(item => {
        return (item.id !== id) //Comparando os ID e retornado só os que são difentes do que ele quer deletar
    })

    localStorage.setItem('encurtaLink', JSON.stringify(myLinks))
    console.log('Deletado com sucesso')
    return myLinks  //retornado a nova lista com os Id deletados
}
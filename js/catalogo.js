function populateList() {
    const data = Array.from({length: 60})
    .map((_, i) => '<div class="foto"></div>')

    const lista = document.querySelector('#itens .lista')
    lista.innerHTML = data.join("")

    return data
}
const data = populateList()

const html = {
    get(element) {
        return document.querySelector(element)
    }
}

let perPage = 10
const state = {
    page: 1,
    perPage,
    totalPage: Math.ceil(data.length / perPage)
}

console.log(state.totalPage)

const controls = {
    next(){
        state.page++
        const lastPage = state.page > state.totalPage
        if(lastPage) {
            state.page--
        }
    },
    prev(){
        state.page--
        if(state.page < 1) {
            state.page++
        }
    },
    goTo(){
        if (page < 1) {
            page = 1
        }
        state.page = page
        if(page > state.totalPage){
            state.page = state.totalPage
        }
    },
    createListeners() {
        html.get('.first')
    }
}
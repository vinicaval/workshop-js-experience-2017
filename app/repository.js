
export default class Repository{
    cleanRepositoryList(){
        document.querySelector('#repoList').innerHTML = ""
    }
    appendTemplateToRepositoryContainer(template, item){
        document.querySelector('#repoList').innerHTML += template(item)
    }
    bindList(list){
        list.map((item) => {
            appendTemplateToRepositoryContainer(template, item)
        })
    }
}

const base = {
    get() {
        return {
            url : "http://localhost:8080/chengjiguanlianhui/",
            name: "chengjiguanlianhui",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/chengjiguanlianhui/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "成绩管理系统"
        } 
    }
}
export default base

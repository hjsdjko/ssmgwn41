const base = {
    get() {
                return {
            url : "http://localhost:8080/ssmgwn41/",
            name: "ssmgwn41",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmgwn41/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "优购电商小程序"
        } 
    }
}
export default base

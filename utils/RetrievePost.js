const baseUrl = "public/posts"
const del = '+-+-+-+-'
const getPostContent = (pname)=>{
    const fs = require('fs');
    const str = fs.readFileSync(baseUrl + '/' + pname, 'utf8');
    return str.substring(str.indexOf(del) + del.length)
}
const getPostMeta = (pname)=>{
    const fs = require('fs');
    const str = fs.readFileSync(baseUrl + '/' + pname, 'utf8');
    const meta_raw = str.substring(0, str.indexOf(del))
    const meta = meta_raw.split("\n").filter((item)=>(item !== '')).map((item)=> {
        const obj = {}
        //console.log("+"+ item.substr(0,item.indexOf(':')).trim()+ "+", "-" + item.substr(item.indexOf(':')+1).trim() + "-")
        const key = item.substr(0,item.indexOf(':')).trim()
        if(key === 'tags'){
        const val = item.substr(item.indexOf(':')+1)
        //console.log('val', val)
        obj[key] = (val.split(',')).map((a)=>(a.trim()))
        //console.log(obj[key])
        }
        else{
        obj[key] = item.substr(item.indexOf(':')+1).trim()
        }
        return obj
    })
    meta.push({'url': 'post/' + pname.replace('.md', '')})
    return meta.reduce((a, b)=> ({...a, ...b}))
}

const getPostsName = () =>{
    const fs = require('fs');
    //console.log(fs)
    return fs.readdirSync(baseUrl)
}

export {getPostContent, getPostsName, getPostMeta}
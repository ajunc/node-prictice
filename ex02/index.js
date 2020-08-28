function compose(middlewares){
    return function () {
        return dispatch(0)
        function dispatch(i) {
            // ##BEGIN##
ﾥﾥﾥﾥﾥﾥﾥﾥﾥﾥﾥ
ﾥﾥﾥﾥﾥﾥﾥ
ﾥﾥﾥﾥﾥﾥﾥﾪﾥﾥﾥﾥﾥ
ﾥﾥﾥﾥ
ﾥﾥﾥﾥﾥﾥￒﾥﾥﾥﾥ
ﾥﾥﾥﾥﾥﾥﾥﾥﾥﾥﾥﾥ
ﾥﾥﾥﾥﾥﾥﾥﾥﾥﾥﾥﾥﾥ
ﾥﾥﾥﾥﾥﾥ
ﾥﾥﾥﾥ
            // ##END##
        }
    }
}

async function fn1(next){
    console.log('1 start')
    await next()
    console.log('1 end')
}

async function fn2(next){
    console.log('2 start')
    await delay()
    await next()
    console.log('2 end')
}

function delay(){
    return Promise.resolve(res => {
        setTimeout(() => reslove(),2000)
    })
}

const middlewares = [fn1,fn2]
const finalFn = compose(middlewares)
finalFn()

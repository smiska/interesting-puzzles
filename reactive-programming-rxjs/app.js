import { Observable, observable } from 'rxjs'

let observable$ = new Observable(observable => {
    let i = 0
    let cancellationToken = setInterval(() => {
        observable.next(i)
        i++
    }, 1000)
    setTimeout(() => {
        clearInterval(cancellationToken)
        observable.complete()
    }, 10000)
})

observable$.subscribe(val => {
    console.log(val)
})
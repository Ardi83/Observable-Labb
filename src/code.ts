import { Subject, Observable } from 'rxjs';
import { skipUntil } from 'rxjs/operators';


var observable1 = Observable.create((data:any) => {
    var i = 1
    setInterval(() => {
        data.next(i++)
    }, 1000)
})

var observable2 = new Subject;

setTimeout(() => {
    observable2.next('Hej!')
}, 5000)
observable2.subscribe((x:any) => addItem(x))

var newObs = observable1.pipe(skipUntil(observable2));
newObs.subscribe((x:any) => addItem(x));








function addItem(val:any) {
    var node = document.createElement('li');
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}
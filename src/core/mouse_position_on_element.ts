import { IVector, makeVector, vectorSub } from "./vector";

// Which HTML element is the target of the event
function mouseTarget(e: any) {
	let targ;
	if (!e) {
        e = window.event;
    }
	if (e.target) {
        targ = e.target;
    }
	else if (e.srcElement) {
        targ = e.srcElement;
    }
	if (targ.nodeType === 3) {
        // defeat Safari bug
        targ = targ.parentNode;
    }
	return targ;
}
 
// Mouse position relative to the document
// From http://www.quirksmode.org/js/events_properties.html
function mousePositionDocument(e: any): IVector {
	let posx = 0;
	let posy = 0;
	if (!e) {
		e = window.event;
	}
	if (e.pageX || e.pageY) {
		posx = e.pageX;
		posy = e.pageY;
	}
	else if (e.clientX || e.clientY) {
		posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	return makeVector(posx, posy);
}

// Find out where an element is on the page
// From http://www.quirksmode.org/js/findpos.html
function findPos(obj: any): IVector {
    let curleft = 0;
    let curtop = 0;
	if (obj.offsetParent) {
		do {
			curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
            obj = obj.offsetParent
		} while (obj);
	}
	return makeVector(curleft, curtop);
}
 
// Mouse position relative to the element
// not working on IE7 and below
export function mousePositionOnElement(e: MouseEvent): IVector {
	const mousePosDoc = mousePositionDocument(e);
	const target = mouseTarget(e);
	const targetPos = findPos(target);
	return vectorSub(targetPos, mousePosDoc);
}
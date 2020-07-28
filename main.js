import { ToyReact, Component } from "./ToyReact.js";

class MyComponent extends Component {
    render() {
        return <div>
            <span>hello</span>
            <span>world!</span>
            <div>
                {true}
                {this.children}
            </div>
        </div>
    }
}

let a = <MyComponent name="a" id="ida">
    <div>123</div>
</MyComponent>

ToyReact.render(
    a,
    document.body
);

// let a = <div name="a" id="ida">
//         <span>hello</span>
//         <span>world</span>
//         <span>!</span>
//     </div>
// console.log(a)
// document.body.appendChild(a)
/*
var a = ToyReact.createElement("div", {
    name: "a",
    id: "ida"
  }, 
  ToyReact.createElement("span", null, "hello"), 
  ToyReact.createElement("span", null, "world"), 
  ToyReact.createElement("span", null, "!"));
 */ 

// var a = createElement(MyComponent, {
//     name: "a"
//   });
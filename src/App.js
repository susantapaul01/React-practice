import './App.css';
// import FunctionalComponent from './Components/MyComponents/FunctionalComponent';
// import ClassComponent from './Components/MyComponents/ClassComponent';
// import Message from './Components/StateAndsetState/Message';
// import Counter from './Components/StateAndsetState/Counter';
// import { FunctionalProps, ClassProps } from './Components/UseOfProps/FunctionalProps';
// import EventBind from './Components/EventBind/EventBind';
// import EventBind2 from './Components/EventBind/EventBind2';
// import ParentComponent from './Components/MethodAsProps/ParentComponent';
// import IfElseRendering from './Components/ConditionalRendering/IfElseRendering';
// import IfElseRendering2 from './Components/ConditionalRendering/IfElseRendering2';
// import ObjectDestructuring from './Components/ObjectDestructuring/ObjectDestructuring';
// import Form from './Components/FormHandeling/Form';
// import ClockList from './Components/StateAndLifecycle/ClockList';
// import Form from './Components/FormHandeling/Form';
import Calulator from "./Components/BoilingVerdict/Calulator";


function App() {
    // const quantities = [1, 2, 3];
    return (
        <div className="App">
            
            <Calulator />
            {/* <Form /> */}
            {/* <ClockList quantities={quantities} /> */}
            {/* <ObjectDestructuring /> */}
            {/* <IfElseRendering2 /> */}
            {/* <IfElseRendering /> */}
            {/* <ParentComponent /> */}
            {/* <EventBind2 /> */}
            {/* <FunctionalProps name='susanta' salary='400' age='15' /> */}
            {/* <FunctionalProps name='roni' salary='500' age='18' /> */}
            {/* <ClassProps person='Jhon smith' address='gazipur' /> */}
            {/* <ClassProps person='Robart due' address='Dhaka' /> */}
            {/* <Counter /> */}
            {/* <Message /> */}
            {/* <ClassComponent friend='Sagor Arif' salary='40000' age='28' /> */}
            {/* <FunctionalComponent name='susanta' salary='20000' >
                <p>This is a child paragraph text</p>
                <button>click</button>
            </FunctionalComponent>
            <FunctionalComponent name='Ariful islam' salary='40000' />
            <button>click me</button> */}
        </div>
    );
}

export default App;

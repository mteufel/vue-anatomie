import { createApp } from 'vue'
import Counter from "./components/Counter.jsx";

function App() {
    return <>
        <Counter no="1" countForward={true} initialValue={getRandomCounter()}></Counter>
        <Counter no={2} countForward={false} initialValue={getRandomCounter()}></Counter>
        <Counter no={3} countForward={true} initialValue={getRandomCounter()}></Counter>
    </>
}

function getRandomCounter() {
    return Math.floor( Math.random() * 1000 + 1 );
}

const app = createApp(App)
app.component(Counter)
app.mount('#app')
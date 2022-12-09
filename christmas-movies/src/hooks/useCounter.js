// take in count and increase/decrease ?
// set usestate for the count
// increase or decrease the count
// return the count
import { useState } from "react";

function useCounter(count) {
    const [newCount, setNewCount] = useState(count);
    
    function increment() {
        setNewCount((newCount) => newCount + 1);
    }

    function decrement() {
        setNewCount((newCount) => Math.max(0, newCount - 1));
    }

    return [newCount, increment, decrement]
}

export default useCounter
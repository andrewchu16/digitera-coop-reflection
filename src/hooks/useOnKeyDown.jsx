import { useEffect } from "react";

export default function useOnKeyDown(ref, onKeyDown) {
    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [ref]);
}

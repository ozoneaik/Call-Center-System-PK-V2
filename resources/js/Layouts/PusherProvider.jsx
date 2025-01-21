import { useMessage } from "@/Contexts/notification";
import Pusher from "pusher-js";
import { useEffect } from "react";

export default function PusherProvider({ children }) {
    const {setNotification} = useMessage();
    useEffect(() => {
        const pusher = new Pusher(import.meta.env.VITE_PUSHER_APP_KEY, {
            cluster: 'ap1'
        })
        const channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function (data) {
            console.log(data)
            setNotification(data)
        })
        return () => {
            pusher.unbind_all();
            pusher.unsubscribe();
        }
    }, [])

    return (<>{children}</>)
}